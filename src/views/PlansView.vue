<template>
  <div class="pl">
    <header class="pl-top">
      <img :src="aidlLogo" alt="AIDL" class="pl-logo" />
      <div>
        <h1>Upgrade your AIDL plan</h1>
        <p v-if="data">{{ data.organization }} · current plan: <b>{{ currentLabel }}</b> · {{ data.usage.used }} of {{ data.usage.limit }} users</p>
      </div>
    </header>

    <div v-if="loading" class="pl-msg">Loading your plan…</div>
    <div v-else-if="error && !data" class="pl-msg pl-err">{{ error }}</div>

    <template v-else-if="data">
      <div v-if="returned === 'success'" class="pl-result activated">
        <h2>✅ Payment received</h2>
        <p>Thank you — your new plan is being activated. It shows here and in the Slack Admin Center within a minute.</p>
      </div>
      <div v-else-if="returned === 'cancelled'" class="pl-result">
        <h2>Payment cancelled</h2>
        <p>Nothing was charged. You can pick your plan again below.</p>
      </div>
      <div v-if="result" class="pl-result" :class="result.status">
        <h2>{{ result.status === 'activated' ? '✅ Plan upgraded' : '📨 Request received' }}</h2>
        <p>{{ result.message }}</p>
        <p class="pl-hint">You can close this page and go back to Slack — the Admin Center shows your new plan.</p>
      </div>

      <section class="pl-plans">
        <button
          v-for="p in data.plans"
          :key="p.key"
          type="button"
          class="pl-plan"
          :class="{ current: p.current, selected: target === p.key, locked: !selectable(p) }"
          :disabled="!selectable(p)"
          @click="choose(p.key)"
        >
          <span v-if="p.current" class="pl-badge">Current</span>
          <span class="pl-name">{{ p.label }}</span>
          <span class="pl-price">{{ p.price }}</span>
          <ul>
            <li><b>{{ p.cards }}</b> awareness cards</li>
            <li>{{ p.cadence }}</li>
            <li>Users: {{ p.users }}</li>
            <li v-if="p.picks_topics">Choose the topics of your cards</li>
            <li v-if="p.all_topics">Cards from all {{ data.categories.length }} topics</li>
            <li v-if="p.custom_schedule">Pick your delivery days and time</li>
          </ul>
        </button>
      </section>

      <template v-if="targetPlan">
        <section v-if="targetPlan.picks_topics" class="pl-box">
          <h2>{{ step('topics') }} · Pick your topics</h2>
          <p class="pl-hint">Your {{ targetPlan.label }} cards come from the topics you pick
            ({{ targetPlan.cards }} cards a year, including the Default 12).</p>
          <div class="pl-topics">
            <button
              v-for="t in data.categories"
              :key="t.code"
              type="button"
              class="pl-topic"
              :class="{ on: topics.includes(t.code) }"
              :title="t.covers"
              @click="toggleTopic(t.code)"
            >
              <span class="pl-topic-title">{{ t.title }}</span>
              <span class="pl-rating" :class="t.rating.toLowerCase()">{{ t.rating }}</span>
            </button>
          </div>
          <p v-if="fieldErrors.topics" class="pl-field-err">{{ fieldErrors.topics }}</p>
        </section>

        <section v-else-if="targetPlan.all_topics" class="pl-box">
          <h2>{{ step('topics') }} · Topics</h2>
          <p class="pl-hint">{{ targetPlan.label }} covers all {{ data.categories.length }} topics —
            {{ targetPlan.cards }} cards a year, including the Default 12.</p>
          <div class="pl-topics">
            <span v-for="t in data.categories" :key="t.code" class="pl-topic on" :title="t.covers">
              <span class="pl-topic-title">{{ t.title }}</span>
              <span class="pl-rating" :class="t.rating.toLowerCase()">{{ t.rating }}</span>
            </span>
          </div>
        </section>

        <section v-if="targetPlan.custom_schedule" class="pl-box">
          <h2>{{ step('schedule') }} · Delivery schedule</h2>
          <p class="pl-hint">Choose 4 days a week and a time (each employee's own time zone).</p>
          <div class="pl-days">
            <button
              v-for="(d, i) in data.weekdays"
              :key="d"
              type="button"
              class="pl-day"
              :class="{ on: days.includes(i) }"
              @click="toggleDay(i)"
            >{{ d }}</button>
            <select v-model.number="hour" class="pl-hour" aria-label="Delivery time">
              <option v-for="h in hours" :key="h" :value="h">{{ String(h).padStart(2, '0') }}:00</option>
            </select>
          </div>
          <p v-if="fieldErrors.schedule" class="pl-field-err">{{ fieldErrors.schedule }}</p>
        </section>

        <section class="pl-box">
          <h2>{{ step('cards') }} · Your new cards</h2>
          <p class="pl-hint">The first {{ preview.length }} of the {{ previewTotal }} cards you unlock — the full text
            appears in Slack after upgrading.</p>
          <p v-if="needsTopics" class="pl-hint">Pick at least one topic to see your cards.</p>
          <div v-else class="pl-cards">
            <article v-for="c in preview" :key="c.no" class="pl-card">
              <span class="pl-card-meta">{{ c.category }} · {{ c.type }}</span>
              <h3>{{ c.title }}</h3>
              <div class="pl-blur" aria-hidden="true">
                <span></span><span></span><span></span><span class="short"></span>
              </div>
              <span class="pl-lock">🔒 Unlocked after upgrade</span>
            </article>
          </div>
        </section>

        <section class="pl-box pl-pay">
          <label class="pl-seats">
            Number of users
            <input v-model.number="seats" type="number" :min="data.usage.used" />
          </label>
          <div class="pl-total">
            <span>{{ targetPlan.label }} plan</span>
            <b>{{ targetPlan.price }}</b>
          </div>
          <p v-if="error" class="pl-field-err">{{ error }}</p>
          <p v-if="!data.can_upgrade" class="pl-hint">Only the master admin, or admins allowed to manage the plan, can upgrade.</p>
          <button
            type="button"
            class="pl-go"
            :disabled="busy || !data.can_upgrade || needsTopics"
            @click="submit"
          >{{ busy ? 'Please wait…' : buttonLabel }}</button>
          <p v-if="paymentReady" class="pl-hint">You'll pay securely on Stripe's checkout page. Billed monthly per user.</p>
          <p v-else-if="data.test_mode" class="pl-hint">Test mode is on: the upgrade is activated without payment.</p>
          <p v-if="data.sales_email" class="pl-hint">Questions about plans? Email
            <a :href="`mailto:${data.sales_email}`">{{ data.sales_email }}</a>.</p>
        </section>
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import aidlLogo from '../assets/images/aidl-logo.png'
import {
  BillingError, checkout, getPlans, hasToken, previewCards, saveToken,
  type CheckoutResult, type PlanInfo, type PlansData, type PreviewCard,
} from '../lib/billingApi'

const route = useRoute()
const router = useRouter()
const data = ref<PlansData | null>(null)
const loading = ref(true)
const busy = ref(false)
const error = ref('')
const fieldErrors = ref<Record<string, string>>({})
const result = ref<CheckoutResult | null>(null)
const target = ref<PlanInfo['key'] | ''>('')
const topics = ref<string[]>([])
const days = ref<number[]>([0, 1, 3, 4])
const hour = ref(10)
const seats = ref(0)
const preview = ref<PreviewCard[]>([])
const previewTotal = ref(0)
const hours = Array.from({ length: 15 }, (_, i) => i + 6)

const currentLabel = computed(() => data.value?.plans.find((p) => p.current)?.label || '')
const targetPlan = computed(() => data.value?.plans.find((p) => p.key === target.value) || null)
const returned = ref<'success' | 'cancelled' | ''>('')
const needsTopics = computed(() => !!targetPlan.value?.picks_topics && !topics.value.length)

// Section numbers: topics, then the schedule (Enterprise), then the cards.
function step(name: 'topics' | 'schedule' | 'cards') {
  const order = ['topics', ...(targetPlan.value?.custom_schedule ? ['schedule'] : []), 'cards']
  return order.indexOf(name) + 1
}
const paymentReady = computed(() => !!(target.value && data.value?.payment_ready?.[target.value]))
const buttonLabel = computed(() => paymentReady.value ? 'Continue to payment →'
  : data.value?.test_mode ? 'Activate (test mode — no payment) →' : 'Request upgrade →')

// A higher plan, or Enterprise again to change its topics / schedule.
function selectable(p: PlanInfo) {
  return p.available && (!p.current || p.key === 'enterprise')
}

function choose(key: PlanInfo['key']) {
  target.value = key
  topics.value = [...(data.value?.topics[key] || [])]
  fieldErrors.value = {}
  error.value = ''
}

function toggleTopic(code: string) {
  topics.value = topics.value.includes(code) ? topics.value.filter((c) => c !== code) : [...topics.value, code]
}

function toggleDay(i: number) {
  if (days.value.includes(i)) days.value = days.value.filter((d) => d !== i)
  else if (days.value.length < 4) days.value = [...days.value, i].sort()
}

let previewTimer: ReturnType<typeof setTimeout> | undefined
watch([target, topics], () => {
  clearTimeout(previewTimer)
  if (!target.value || needsTopics.value) {
    preview.value = []
    return
  }
  previewTimer = setTimeout(async () => {
    try {
      const r = await previewCards(target.value, topics.value)
      preview.value = r.cards
      previewTotal.value = r.total
    } catch (e) {
      preview.value = []
    }
  }, 250)
})

async function submit() {
  if (!targetPlan.value) return
  busy.value = true
  error.value = ''
  fieldErrors.value = {}
  try {
    const r = await checkout({
      plan: targetPlan.value.key,
      topics: topics.value,
      schedule: targetPlan.value.custom_schedule ? { days: days.value, hour: hour.value } : undefined,
      seats: seats.value || undefined,
    })
    if (r.status === 'redirect' && r.url) {
      window.location.href = r.url
      return
    }
    result.value = r
    data.value = await getPlans()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } catch (e) {
    if (e instanceof BillingError) {
      for (const [k, v] of Object.entries(e.fieldErrors)) fieldErrors.value[k] = v[0] || ''
      if (!Object.keys(e.fieldErrors).length) error.value = e.message
    } else {
      error.value = 'Something went wrong. Please try again.'
    }
  } finally {
    busy.value = false
  }
}

onMounted(async () => {
  const token = typeof route.query.token === 'string' ? route.query.token : ''
  const back = route.query.checkout
  if (back === 'success' || back === 'cancelled') {
    returned.value = back
    router.replace({ path: '/plans', query: {} })
  }
  if (token) {
    saveToken(token)
    router.replace({ path: '/plans', query: {} }) // keep the token out of the address bar
  }
  if (!hasToken()) {
    error.value = 'Open this page from the AIDL Admin Center in Slack (“⬆️ Upgrade plan”).'
    loading.value = false
    return
  }
  try {
    const d = await getPlans()
    data.value = d
    seats.value = Math.max(d.usage.limit, d.usage.used)
    days.value = d.schedule.days
    hour.value = d.schedule.hour
    const next = d.plans.find((p) => selectable(p))
    if (next) choose(next.key)
  } catch (e) {
    error.value = e instanceof BillingError ? e.message : 'Could not load your plan.'
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.pl { min-height: 100vh; background: var(--cream, #f5ecd2); color: var(--ink, #14140f); padding: 28px 16px 60px; }
.pl-top { max-width: 1080px; margin: 0 auto 22px; display: flex; gap: 14px; align-items: center; }
.pl-logo { height: 48px; width: auto; }
.pl-top h1 { font-family: "Bungee", sans-serif; font-size: clamp(20px, 4vw, 30px); margin: 0; }
.pl-top p { margin: 4px 0 0; font-family: "JetBrains Mono", monospace; font-size: 12px; }
.pl-msg { max-width: 1080px; margin: 40px auto; text-align: center; font-family: "JetBrains Mono", monospace; }
.pl-err, .pl-field-err { color: #c0392b; }
.pl-field-err { font-size: 13px; margin: 8px 0 0; }
.pl-hint { font-size: 13px; color: #5a5440; margin: 4px 0 12px; }
.pl-result { max-width: 1080px; margin: 0 auto 20px; border: 3px solid var(--ink, #14140f); padding: 16px 20px; background: #fff8de; }
.pl-result.activated { background: #e6f7ec; }
.pl-result h2 { margin: 0 0 6px; font-family: "Bungee", sans-serif; font-size: 18px; }
.pl-plans { max-width: 1080px; margin: 0 auto 24px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
.pl-plan { position: relative; text-align: left; border: 3px solid var(--ink, #14140f); background: #fff; padding: 18px; cursor: pointer;
  box-shadow: 4px 4px 0 var(--ink, #14140f); font: inherit; color: inherit; }
.pl-plan.selected { background: var(--sign-yellow, #ffcc00); }
.pl-plan.locked { opacity: .55; cursor: default; box-shadow: none; }
.pl-plan.current.locked { opacity: .8; }
.pl-badge { position: absolute; top: -12px; right: 12px; background: var(--ink, #14140f); color: #fff; font-size: 11px; padding: 2px 8px;
  font-family: "JetBrains Mono", monospace; }
.pl-name { display: block; font-family: "Bungee", sans-serif; font-size: 20px; }
.pl-price { display: block; font-family: "JetBrains Mono", monospace; font-size: 13px; margin: 2px 0 10px; }
.pl-plan ul { margin: 0; padding-left: 18px; font-size: 13px; line-height: 1.6; }
.pl-box { max-width: 1080px; margin: 0 auto 18px; border: 3px solid var(--ink, #14140f); background: #fff; padding: 18px 20px; }
.pl-box h2 { font-family: "Bungee", sans-serif; font-size: 16px; margin: 0 0 4px; }
.pl-topics { display: flex; flex-wrap: wrap; gap: 8px; }
.pl-topic { display: inline-flex; align-items: center; gap: 8px; border: 2px solid var(--ink, #14140f); background: #fff; padding: 7px 10px;
  cursor: pointer; font: inherit; font-size: 13px; color: inherit; }
.pl-topic.on { background: var(--sign-yellow, #ffcc00); }
.pl-rating { font-size: 10px; font-family: "JetBrains Mono", monospace; padding: 1px 6px; border: 1px solid currentColor; }
.pl-rating.core { color: #1e7d45; } .pl-rating.supporting { color: #8a6d00; } .pl-rating.specialist { color: #4b2e83; }
.pl-days { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
.pl-day { width: 54px; border: 2px solid var(--ink, #14140f); background: #fff; padding: 8px 0; cursor: pointer; font: inherit; color: inherit; }
.pl-day.on { background: var(--sign-yellow, #ffcc00); font-weight: 700; }
.pl-hour { border: 2px solid var(--ink, #14140f); padding: 8px; font: inherit; background: #fff; }
.pl-cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px; }
.pl-card { border: 2px solid var(--ink, #14140f); padding: 12px; background: #fffdf5; position: relative; }
.pl-card-meta { font-family: "JetBrains Mono", monospace; font-size: 10px; color: #6b6450; }
.pl-card h3 { font-size: 15px; margin: 6px 0 10px; }
.pl-blur { filter: blur(3px); display: grid; gap: 6px; margin-bottom: 10px; }
.pl-blur span { display: block; height: 9px; background: #c9c2a8; border-radius: 4px; }
.pl-blur span.short { width: 60%; }
.pl-lock { font-size: 11px; font-family: "JetBrains Mono", monospace; }
.pl-pay { display: grid; gap: 12px; }
.pl-seats { display: grid; gap: 6px; font-size: 13px; max-width: 220px; }
.pl-seats input { border: 2px solid var(--ink, #14140f); padding: 8px; font: inherit; }
.pl-total { display: flex; justify-content: space-between; font-size: 16px; border-top: 2px dashed var(--ink, #14140f); padding-top: 10px; }
.pl-go { justify-self: start; border: 3px solid var(--ink, #14140f); background: #e3342f; color: #fff; padding: 12px 22px; cursor: pointer;
  font-family: "Bungee", sans-serif; font-size: 14px; box-shadow: 4px 4px 0 var(--ink, #14140f); }
.pl-go:disabled { opacity: .5; cursor: default; }
@media (max-width: 760px) {
  .pl-plans { grid-template-columns: 1fr; }
  .pl-go { justify-self: stretch; }
}
</style>
