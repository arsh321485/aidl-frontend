<template>
<!-- "Sign up ▾" (design: AIDL-new-content/aidl-signup.html): one menu, every
     platform. Platforms come from lib/platforms.ts; picking one emits `pick`
     and the page starts that platform's sign-up. `align` places the panel
     under the button (left / right / center); `up` opens it above. -->
<div ref="rootEl" class="su" :class="[`su-${align}`, { 'su-up': up }]" @keydown.esc="close(true)">
  <button
    ref="btnEl"
    type="button"
    class="lp-btn lp-y su-btn"
    aria-haspopup="true"
    :aria-expanded="open"
    :aria-controls="panelId"
    @click.stop="toggle"
  >Sign up <span class="su-car" aria-hidden="true">▾</span></button>

  <div v-if="open" :id="panelId" ref="panelEl" class="su-panel" role="dialog" aria-label="Sign up with" @click.stop>
    <p class="su-hd">Sign up with</p>
    <p class="su-sub">Pick where your team works. Admins are always free.</p>
    <template v-for="g in groups" :key="g.id">
      <p class="su-g">{{ g.label.toUpperCase() }}</p>
      <ul class="su-list" :class="{ 'su-cols': g.items.length > 3 }">
        <li v-for="p in g.items" :key="p.id">
          <button type="button" class="su-item" :disabled="p.soon" @click="choose(p.id)">
            <span class="su-ic" v-html="p.icon"></span>
            <span><b>{{ p.name }}</b><small>{{ p.soon ? 'Coming soon' : NOTES[p.id] || `Sign up with ${p.short}` }}</small></span>
          </button>
        </li>
      </ul>
    </template>
    <div class="su-ft"><span>Not sure which?</span><RouterLink to="/pricing">Compare plans &rarr;</RouterLink></div>
  </div>
</div>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { PLATFORMS, PLATFORM_GROUPS, type PlatformId } from '../lib/platforms'

withDefaults(defineProps<{ align?: 'left' | 'right' | 'center'; up?: boolean }>(), { align: 'left', up: false })
const emit = defineEmits<{ pick: [id: PlatformId] }>()

const NOTES: Partial<Record<PlatformId, string>> = {
  slack: 'Add AIDL to your workspace',
  teams: 'Add AIDL to your organisation',
  gchat: 'Add AIDL to your Google Workspace',
  gclassroom: 'Add AIDL to your classes',
}
const groups = PLATFORM_GROUPS
  .map((g) => ({ ...g, items: PLATFORMS.filter((p) => p.group === g.id) }))
  .filter((g) => g.items.length)

let seq = 0
const panelId = `su-panel-${++seq}-${Math.random().toString(36).slice(2, 7)}`
const open = ref(false)
const rootEl = ref<HTMLElement | null>(null)
const btnEl = ref<HTMLButtonElement | null>(null)
const panelEl = ref<HTMLElement | null>(null)

async function toggle() {
  const opening = !open.value
  if (opening) document.dispatchEvent(new CustomEvent('su-open', { detail: panelId })) // one menu open at a time
  open.value = opening
  if (opening) {
    await nextTick()
    panelEl.value?.querySelector<HTMLButtonElement>('.su-item:not(:disabled)')?.focus()
  }
}
function close(refocus = false) {
  if (!open.value) return
  open.value = false
  if (refocus) btnEl.value?.focus()
}
function choose(id: PlatformId) {
  close()
  emit('pick', id)
}

function onDocClick(e: Event) {
  if (open.value && rootEl.value && !rootEl.value.contains(e.target as Node)) close()
}
function onOtherOpen(e: Event) {
  if ((e as CustomEvent).detail !== panelId) close()
}
onMounted(() => {
  document.addEventListener('click', onDocClick)
  document.addEventListener('su-open', onOtherOpen)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', onDocClick)
  document.removeEventListener('su-open', onOtherOpen)
})
</script>

<style scoped>
.su{position:relative;display:inline-block}
.su-btn{cursor:pointer}
.su-car{display:inline-block;margin-left:2px;transition:transform .15s}
.su-btn[aria-expanded="true"] .su-car{transform:rotate(180deg)}
.su-panel{position:absolute;top:calc(100% + 12px);left:0;z-index:80;width:380px;max-width:calc(100vw - 32px);background:var(--asphalt,#14140f);color:var(--cream,#f5ecd2);border:3px solid var(--ink,#14140f);box-shadow:8px 8px 0 var(--yellow,#ffcc00);padding:18px 18px 14px;text-align:left}
.su-right .su-panel{left:auto;right:0}
.su-center .su-panel{left:50%;transform:translateX(-50%)}
.su-up .su-panel{top:auto;bottom:calc(100% + 12px)}
.su-hd{font-family:"Bungee",sans-serif;font-size:18px;color:var(--yellow,#ffcc00);margin:0 0 4px}
.su-sub{font-size:13px;color:#cfc49c;margin:0 0 12px;line-height:1.4}
.su-g{font-family:"JetBrains Mono",monospace;font-size:10.5px;letter-spacing:.14em;color:#cfc49c;margin:12px 0 6px;border-top:2px dashed #3a382c;padding-top:10px}
.su-sub + .su-g{border-top:0;padding-top:0}
.su-list{list-style:none;margin:0;padding:0;display:grid;gap:6px}
.su-list.su-cols{grid-template-columns:1fr 1fr}
.su-item{display:flex;width:100%;align-items:center;gap:11px;padding:9px 10px;border:2px solid #3a382c;color:var(--cream,#f5ecd2);font:inherit;font-size:14px;line-height:1.25;background:#1d1c16;text-align:left;cursor:pointer}
.su-item:hover:not(:disabled),.su-item:focus-visible{border-color:var(--yellow,#ffcc00);background:#2a281e;outline:none}
.su-item:disabled{opacity:.55;cursor:not-allowed}
.su-item b{display:block;font-size:14.5px}
.su-item small{display:block;font-size:12px;color:#cfc49c}
.su-ic{flex:0 0 32px;height:32px;display:grid;place-items:center}
.su-ic :deep(svg){width:28px;height:28px}
.su-cols .su-ic{flex-basis:26px;height:26px}
.su-cols .su-ic :deep(svg){width:22px;height:22px}
.su-ft{display:flex;justify-content:space-between;align-items:center;margin-top:12px;font-size:12.5px;color:#cfc49c}
.su-ft a{color:var(--yellow,#ffcc00)}
@media(max-width:640px){
  .su-panel{position:fixed;left:16px!important;right:16px;top:84px;bottom:auto;transform:none!important;width:auto;max-height:calc(100vh - 100px);overflow:auto}
  .su-list.su-cols{grid-template-columns:1fr}
}
</style>
