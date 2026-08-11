<template>
  <div class="iss-ov" @click.self="$emit('close')">
    <div class="iss" role="dialog" aria-modal="true" aria-label="License issued">
      <div class="iss-top">
        <span class="ok">✓</span>
        <div>
          <h3>Your license has been issued.</h3>
          <p>{{ licenseId }} · {{ classShort }} · {{ classFull }}</p>
        </div>
        <button type="button" class="iss-close" @click="$emit('close')" aria-label="Close">✕</button>
      </div>

      <div class="iss-body">
        <div class="iss-stage">
          <div class="lic-card" :style="{ background: activeDesign.bg, color: activeDesign.ink }">
            <div class="lc-pattern" :style="{ backgroundImage: activeDesign.pat }"></div>
            <div class="lc-gloss"></div>
            <div class="lc-watermark">AIDL</div>
            <div class="lc-head">
              <span class="lc-seal-wrap">
                <span class="lc-seal" :style="{ background: activeDesign.seal, borderColor: activeDesign.ink }">
                  <img :src="aidlLogo" alt="AIDL" class="lc-seal-img" />
                </span>
              </span>
              <div>
                <h5>AI DRIVING LICENSE</h5>
                <small>ISSUED UNDER THE AIDL PUBLIC REGISTRY</small>
              </div>
              <span class="lc-cls" :style="{ borderColor: activeDesign.ink }">{{ classShort }}</span>
            </div>
            <div class="lc-main">
              <div>
                <h6 class="lc-name">{{ holder.toUpperCase() }}</h6>
                <div class="lc-rows">
                  <div><span>CLASS</span><b>{{ classFull }}</b></div>
                  <div><span>ISSUED</span><b>{{ issued }}</b></div>
                  <div><span>EXPIRES</span><b>{{ expires }}</b></div>
                  <div><span>STATUS</span><b>ACTIVE</b></div>
                </div>
              </div>
              <div class="lc-photo" :style="{ borderColor: activeDesign.ink }">
                <svg viewBox="0 0 24 24" class="lc-photo-icon" fill="currentColor"><path d="M12 12.4a5.2 5.2 0 1 0 0-10.4 5.2 5.2 0 0 0 0 10.4Zm0 2.4c-4.4 0-9 2.2-9 5v2.6h18v-2.6c0-2.8-4.6-5-9-5Z" /></svg>
                <span class="lc-photo-cap">DRIVER PHOTO</span>
              </div>
            </div>
            <div class="lc-foot">
              <div class="lc-no">{{ licenseId }}</div>
              <div class="lc-sig">VERIFY AT AIDL.ORG/VERIFY<br />AUTHORISED SIGNATORY</div>
            </div>
            <div class="lc-strip" :style="{ background: activeDesign.strip }"></div>
          </div>
          <p class="iss-hint" style="text-align:center;max-width:46ch">
            Pick a design — it's how your license appears in your portal, on the public registry, and anywhere you share it. You can change it any time from your Driver Portal.
          </p>

          <div class="perks">
            <div class="perks-head">
              <h4>Driver perks · claim your discounts</h4>
              <span>{{ claimedCount }} CLAIMED</span>
            </div>
            <p class="perks-sub">
              Licensed drivers get member pricing on the tools they'll actually use. Pick a category, claim a code, and it's copied to your clipboard — codes are tied to your license number and stay in your Driver Portal.
            </p>
            <div class="pk-cats">
              <button
                v-for="c in perkCategories"
                :key="c"
                type="button"
                :class="{ on: c === perkCategory }"
                @click="perkCategory = c"
              >{{ c.toUpperCase() }} ({{ perkCategoryCount(c) }})</button>
            </div>
            <div class="pk-grid">
              <div class="pk" v-for="p in filteredPerks" :key="p.name" :style="{ '--pk-accent': categoryColor(p.category) }">
                <span class="pk-ribbon">{{ p.offer }}</span>
                <div class="pk-t">
                  <span class="pk-logo">{{ p.name.slice(0, 2).toUpperCase() }}</span>
                  <div>
                    <div class="pk-n">{{ p.name }}</div>
                    <div class="pk-c">{{ p.category }}</div>
                  </div>
                </div>
                <p class="pk-d">{{ p.desc }}</p>
                <div class="pk-act">
                  <button
                    type="button"
                    class="claim"
                    :class="{ done: !!perkClaimed[p.name] }"
                    @click="claimPerk(p)"
                  >{{ perkClaimed[p.name] ? 'CODE COPIED' : 'CLAIM CODE' }}</button>
                  <a class="visit" :href="p.url" target="_blank" rel="noopener">VISIT</a>
                </div>
              </div>
              <p v-if="!filteredPerks.length" class="pk-none">No perks in this category yet.</p>
            </div>
          </div>
        </div>

        <div class="iss-side">
          <div class="iss-welcome">
            <span class="wmark"><img :src="aidlLogo" alt="AIDL" class="wmark-img" /></span>
            <div>
              <h4>Welcome, {{ firstName }}</h4>
              <p>{{ classShort }} · {{ classFull }} · {{ licenseId }} — your perks are unlocked below.</p>
            </div>
          </div>

          <div>
            <h4>1 · Choose a design</h4>
            <div class="dz">
              <b
                v-for="d in DESIGNS"
                :key="d.id"
                :class="{ on: d.id === design }"
                :style="{ background: d.bg }"
                :title="d.name"
                @click="selectDesign(d.id)"
              ><i>{{ d.name }}</i></b>
            </div>
            <p class="iss-hint">Six official plate designs. All carry the same seal, number and verification link.</p>
          </div>

          <div>
            <h4>2 · Say something</h4>
            <div class="cap-row">
              <textarea v-model="caption"></textarea>
            </div>
          </div>

          <div>
            <h4>3 · Share it</h4>
            <div class="share-grid">
              <a class="sh" :href="linkedinHref" target="_blank" rel="noopener">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#0A66C2"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.76-1.95 4.02 0 4.76 2.5 4.76 5.76V21h-4v-5.6c0-1.34-.03-3.07-1.9-3.07-1.9 0-2.2 1.46-2.2 2.97V21H9z" /></svg>
                LINKEDIN
              </a>
              <a class="sh" :href="xHref" target="_blank" rel="noopener">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#14140f"><path d="M18.2 2h3.3l-7.2 8.3L23 22h-6.7l-5.2-6.8L5.1 22H1.8l7.7-8.9L1.3 2H8l4.7 6.2zm-1.2 18h1.8L7.1 3.8H5.2z" /></svg>
                X
              </a>
              <a class="sh" :href="fbHref" target="_blank" rel="noopener">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z" /></svg>
                FACEBOOK
              </a>
              <a class="sh" :href="waHref" target="_blank" rel="noopener">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1a12 12 0 0 1-5.2-4.5c-.4-.6-.9-1.5-.9-2.4 0-.9.5-1.4.7-1.6.2-.2.4-.3.6-.3h.5c.2 0 .4 0 .6.5l.7 1.7c.1.2 0 .4-.1.5l-.3.4c-.1.1-.3.3-.1.6.2.3.7 1.1 1.4 1.8.9.8 1.6 1 1.9 1.2.2.1.4 0 .5-.1l.6-.7c.2-.2.3-.2.6-.1l1.6.8c.2.1.4.2.5.3 0 .1 0 .5-.1.8z" /></svg>
                WHATSAPP
              </a>
              <button type="button" class="sh" @click="copySlack">
                <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#36C5F0" d="M9.5 15.2a2.4 2.4 0 1 1-2.4-2.4h2.4v2.4z" /><path fill="#2EB67D" d="M13.1 10.5a2.4 2.4 0 0 1 2.4 2.4 2.4 2.4 0 0 1-2.4 2.4h-6a2.4 2.4 0 0 1 0-4.8h6z" /><path fill="#ECB22E" d="M19 13.1a2.4 2.4 0 1 1 2.4 2.4H19v-2.4z" /><path fill="#E01E5A" d="M14.9 17.8a2.4 2.4 0 0 1-2.4-2.4 2.4 2.4 0 0 1 2.4-2.4h6a2.4 2.4 0 0 1 0 4.8h-6z" /></svg>
                SLACK
              </button>
              <a class="sh" :href="mailHref">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#14140f" stroke-width="2.2"><rect x="2.5" y="4.5" width="19" height="15" /><path d="M3 6l9 7 9-7" /></svg>
                EMAIL
              </a>
              <button class="sh wide" type="button" @click="copyLink">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#14140f" stroke-width="2.2"><rect x="8" y="8" width="13" height="13" /><path d="M16 8V3H3v13h5" /></svg>
                COPY VERIFICATION LINK
              </button>
              <button class="sh wide" type="button" @click="downloadImage">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#14140f" stroke-width="2.2"><path d="M12 3v12M7 11l5 5 5-5M4 21h16" /></svg>
                DOWNLOAD LICENSE IMAGE
              </button>
            </div>
            <p class="iss-hint">Anyone you share with can verify the number on the public registry — no account needed.</p>
          </div>

          <button type="button" class="iss-close-btn" @click="$emit('close')">CLOSE</button>
        </div>
      </div>
    </div>
  </div>

  <div class="iss-toast" :class="{ show: toastVisible }">{{ toastMessage }}</div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, reactive, ref } from 'vue'
import aidlLogo from '../assets/images/aidl-logo.png'

const props = defineProps<{
  licenseId: string
  holder: string
  classShort: string
  classFull: string
  issued: string
  expires: string
}>()

const emit = defineEmits<{ close: [] }>()

interface Design {
  id: string
  name: string
  bg: string
  ink: string
  seal: string
  sealInk: string
  strip: string
  pat: string
  /** Flat colour stops used when redrawing the card on a <canvas> for
   * download — a single hex draws solid, more than one draws a diagonal
   * gradient. Kept separate from `bg` (a CSS background value) because
   * canvas gradients can't be built from an arbitrary CSS string. */
  stops: string[]
}

const DESIGNS: Design[] = [
  { id: 'sign', name: 'ROAD SIGN', bg: '#ffcc00', ink: '#14140f', seal: '#14140f', sealInk: '#ffcc00', strip: '#14140f',
    pat: 'repeating-linear-gradient(135deg,rgba(20,20,15,.07) 0 10px,transparent 10px 20px)', stops: ['#ffcc00'] },
  { id: 'night', name: 'NIGHT DRIVE', bg: '#16233a', ink: '#e8eef7', seal: '#ffcc00', sealInk: '#14140f', strip: '#ffcc00',
    pat: 'radial-gradient(circle at 78% 22%,rgba(255,204,0,.22),transparent 46%)', stops: ['#16233a'] },
  { id: 'green', name: 'HIGHWAY', bg: '#12613c', ink: '#f2f7f2', seal: '#f2f7f2', sealInk: '#12613c', strip: '#f5ecd2',
    pat: 'repeating-linear-gradient(90deg,rgba(255,255,255,.07) 0 3px,transparent 3px 26px)', stops: ['#12613c'] },
  { id: 'sunset', name: 'SUNSET RUN', bg: 'linear-gradient(160deg,#ff9d00 0%,#e23a2e 62%,#7a1f2b 100%)', ink: '#fff4dd', seal: '#14140f', sealInk: '#ff9d00', strip: '#14140f',
    pat: 'repeating-linear-gradient(180deg,rgba(255,255,255,.08) 0 2px,transparent 2px 16px)', stops: ['#ff9d00', '#e23a2e', '#7a1f2b'] },
  { id: 'blue', name: 'BLUEPRINT', bg: '#0f4c81', ink: '#dbe9f7', seal: '#dbe9f7', sealInk: '#0f4c81', strip: '#6fb3e0',
    pat: 'repeating-linear-gradient(0deg,rgba(255,255,255,.11) 0 1px,transparent 1px 22px),repeating-linear-gradient(90deg,rgba(255,255,255,.11) 0 1px,transparent 1px 22px)', stops: ['#0f4c81'] },
  { id: 'plate', name: 'CHROME', bg: 'linear-gradient(180deg,#f7f6f2 0%,#d9d7cd 52%,#f2f0e9 100%)', ink: '#14140f', seal: '#e23a2e', sealInk: '#fff', strip: '#e23a2e',
    pat: 'repeating-linear-gradient(135deg,rgba(20,20,15,.05) 0 2px,transparent 2px 9px)', stops: ['#f7f6f2', '#d9d7cd', '#f2f0e9'] },
]

const design = ref('sign')
const activeDesign = computed(() => DESIGNS.find((d) => d.id === design.value) ?? DESIGNS[0]!)

function selectDesign(id: string) {
  design.value = id
  try { localStorage.setItem('aidl.license.design', id) } catch (e) {}
  const d = DESIGNS.find((x) => x.id === id)
  if (d) showToast(`DESIGN: ${d.name}`)
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') emit('close')
}

onMounted(() => {
  try {
    const saved = localStorage.getItem('aidl.license.design')
    if (saved && DESIGNS.some((d) => d.id === saved)) design.value = saved
  } catch (e) {}
  try {
    const savedClaims = localStorage.getItem('aidl.perks.claimed')
    if (savedClaims) Object.assign(perkClaimed, JSON.parse(savedClaims))
  } catch (e) {}
  document.addEventListener('keydown', onKeydown)

  // Preloaded so the download canvas can draw the real logo into the seal
  // instead of falling back to a plain circle.
  const img = new Image()
  img.onload = () => { logoImg.value = img }
  img.src = aidlLogo
})
onUnmounted(() => document.removeEventListener('keydown', onKeydown))

const caption = ref(`I just got licensed to drive AI. ${props.classFull} — license ${props.licenseId}, verifiable on the AIDL public registry. #AIDrivingLicense #AIDL`)

function verifyUrl() {
  return `${location.origin}/home#verify?lic=${props.licenseId}`
}

const linkedinHref = computed(() => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(verifyUrl())}`)
const xHref = computed(() => `https://twitter.com/intent/tweet?text=${encodeURIComponent(caption.value)}&url=${encodeURIComponent(verifyUrl())}`)
const fbHref = computed(() => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(verifyUrl())}`)
const waHref = computed(() => `https://wa.me/?text=${encodeURIComponent(caption.value + ' ' + verifyUrl())}`)
const mailHref = computed(() => `mailto:?subject=${encodeURIComponent('My AI Driving License — ' + props.licenseId)}&body=${encodeURIComponent(caption.value + '\n\n' + verifyUrl())}`)

// A single bottom-of-screen toast, rendered as a template ROOT SIBLING of
// .iss-ov rather than nested inside it — .iss-ov has backdrop-filter, which
// establishes a containing block for fixed-position descendants, so a toast
// nested inside it would be pinned to the modal instead of the viewport.
const toastMessage = ref('')
const toastVisible = ref(false)
let toastTimer: ReturnType<typeof setTimeout> | undefined
function showToast(msg: string) {
  toastMessage.value = msg
  toastVisible.value = true
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => { toastVisible.value = false }, 2200)
}

async function copyLink() {
  try { await navigator.clipboard.writeText(verifyUrl()) } catch (e) {}
  showToast('LINK COPIED')
}

// Slack (like the old Instagram button) has no web share intent for a
// link + caption, so copy it and let the user paste it in.
async function copySlack() {
  const v = `${caption.value}\n${verifyUrl()}`
  try { await navigator.clipboard.writeText(v) } catch (e) {}
  showToast('COPIED — PASTE INTO SLACK')
}

interface Perk {
  name: string
  category: string
  url: string
  offer: string
  desc: string
}

const PERKS: Perk[] = [
  { name: 'ChatGPT', category: 'Chat & reasoning', url: 'https://chatgpt.com', offer: '20% OFF PLUS · 2 MO', desc: 'General-purpose assistant. The default first stop for drafting, analysis and everyday questions.' },
  { name: 'Claude', category: 'Chat & reasoning', url: 'https://claude.ai', offer: '25% OFF FIRST YEAR', desc: 'Long-document reading, careful writing and code review with a large context window.' },
  { name: 'Gemini', category: 'Chat & reasoning', url: 'https://gemini.google.com', offer: '3 MO FREE AI PRO', desc: "Google's assistant, wired into Search, Docs and Gmail for work that lives in Workspace." },
  { name: 'Perplexity', category: 'Chat & reasoning', url: 'https://perplexity.ai', offer: '1 MO PRO FREE', desc: 'Answer engine that cites live sources — research you can check before you use it.' },
  { name: 'Midjourney', category: 'Image', url: 'https://midjourney.com', offer: '20% OFF STANDARD', desc: 'Stylised, art-directed image generation for concept and campaign work.' },
  { name: 'Canva', category: 'Image', url: 'https://canva.com', offer: '45 DAYS PRO FREE', desc: 'Templates plus generative fill — the fastest path to a usable, on-brand asset.' },
  { name: 'Adobe Firefly', category: 'Image', url: 'https://firefly.adobe.com', offer: '30% OFF ANNUAL', desc: 'Commercially-safe generation, trained on licensed stock and native to Creative Cloud.' },
  { name: 'Runway', category: 'Video', url: 'https://runwayml.com', offer: '20% OFF STANDARD', desc: 'Text- and image-to-video with editing tools built for real production timelines.' },
  { name: 'CapCut', category: 'Video', url: 'https://capcut.com', offer: '25% OFF PRO', desc: 'Auto-captions, cutting and effects for short-form social edits.' },
  { name: 'ElevenLabs', category: 'Audio & voice', url: 'https://elevenlabs.io', offer: '2 MO 50% OFF', desc: 'Natural speech synthesis, dubbing and voice cloning for narration.' },
  { name: 'Suno', category: 'Audio & voice', url: 'https://suno.com', offer: '20% OFF PRO', desc: 'Full-track music generation for stings, beds and internal video scoring.' },
  { name: 'Otter.ai', category: 'Audio & voice', url: 'https://otter.ai', offer: '20% OFF PRO', desc: 'Live meeting transcription with searchable notes and action items.' },
  { name: 'GitHub Copilot', category: 'Code', url: 'https://github.com/features/copilot', offer: '2 MO FREE', desc: 'In-editor completion and chat across the repo you are actually working in.' },
  { name: 'Cursor', category: 'Code', url: 'https://cursor.com', offer: '20% OFF PRO', desc: 'AI-native editor for multi-file changes with codebase-wide context.' },
  { name: 'Replit', category: 'Code', url: 'https://replit.com', offer: '1 MO CORE FREE', desc: 'Browser IDE with an agent that builds and deploys working apps.' },
  { name: 'Grammarly', category: 'Writing & docs', url: 'https://grammarly.com', offer: '25% OFF PREMIUM', desc: 'Tone, clarity and correctness checks across every app you write in.' },
  { name: 'Notion AI', category: 'Writing & docs', url: 'https://notion.so', offer: '3 MO FREE', desc: 'Summaries, drafting and Q&A over your own team wiki and notes.' },
  { name: 'Gamma', category: 'Productivity', url: 'https://gamma.app', offer: '20% OFF PLUS', desc: 'Decks, docs and pages generated from an outline in one pass.' },
  { name: 'Zapier', category: 'Productivity', url: 'https://zapier.com', offer: '20% OFF PRO', desc: 'Connect apps and put AI steps inside automated workflows.' },
  { name: 'Figma', category: 'Design', url: 'https://figma.com', offer: '15% OFF SEAT', desc: 'Design and prototyping with AI assists for layout, copy and search.' },
  { name: 'Framer', category: 'Design', url: 'https://framer.com', offer: '1 MO MINI FREE', desc: 'Generate and publish production websites without a build step.' },
]

// Cycled across categories (in first-seen order) to give each perk card's
// top accent, logo chip and offer ribbon a bit of colour variety.
const CATEGORY_COLORS = [
  'var(--sign-yellow, #ffcc00)',
  'var(--signal-red, #e23a2e)',
  'var(--sky, #6fb3e0)',
  'var(--signal-green, #2ec866)',
  'var(--sign-amber, #ff9d00)',
]
function categoryColor(cat: string): string {
  const cats = perkCategories.value.filter((c) => c !== 'All')
  const idx = Math.max(0, cats.indexOf(cat))
  return CATEGORY_COLORS[idx % CATEGORY_COLORS.length]!
}

const perkCategory = ref('All')
const perkCategories = computed(() => {
  const cats = ['All']
  for (const p of PERKS) if (!cats.includes(p.category)) cats.push(p.category)
  return cats
})
function perkCategoryCount(cat: string) {
  return cat === 'All' ? PERKS.length : PERKS.filter((p) => p.category === cat).length
}
const filteredPerks = computed(() => PERKS.filter((p) => perkCategory.value === 'All' || p.category === perkCategory.value))

// Claimed perk codes, keyed by perk name — persisted so a driver's claimed
// codes survive closing and reopening the license modal.
const perkClaimed = reactive<Record<string, string>>({})
const claimedCount = computed(() => Object.keys(perkClaimed).length)

function perkCode(name: string): string {
  const slug = name.replace(/[^A-Za-z0-9]/g, '').toUpperCase().slice(0, 6)
  const tail = props.licenseId.split('-').slice(2).join('')
  return `AIDL-${slug}-${tail}`
}

async function claimPerk(perk: Perk) {
  const code = perkCode(perk.name)
  perkClaimed[perk.name] = code
  try { localStorage.setItem('aidl.perks.claimed', JSON.stringify(perkClaimed)) } catch (e) {}
  try { await navigator.clipboard.writeText(code) } catch (e) {}
  showToast(`${perk.name.toUpperCase()} CODE: ${code}`)
}

const logoImg = ref<HTMLImageElement | null>(null)

const firstName = computed(() => {
  const first = props.holder.trim().split(/\s+/)[0] || 'DRIVER'
  return first.charAt(0).toUpperCase() + first.slice(1).toLowerCase()
})

function hexToRgba(hex: string, alpha: number): string {
  const h = hex.replace('#', '')
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h
  const n = parseInt(full, 16)
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${alpha})`
}

// Draws the card straight onto a canvas instead of rasterising the live DOM
// (e.g. via an SVG <foreignObject>) — that route loads the result through
// `new Image()`, which browsers treat as tainting the canvas whenever the
// foreignObject contains HTML, so `canvas.toBlob` silently fails. Drawing
// with the 2D API directly has no such restriction.
function drawLicenseCard(ctx: CanvasRenderingContext2D, w: number, h: number) {
  const d = activeDesign.value

  if (d.stops.length === 1) {
    ctx.fillStyle = d.stops[0]!
  } else {
    const grad = ctx.createLinearGradient(0, 0, w, h)
    d.stops.forEach((c, i) => grad.addColorStop(i / (d.stops.length - 1), c))
    ctx.fillStyle = grad
  }
  ctx.fillRect(0, 0, w, h)

  // Diagonal watermark, behind everything else drawn below.
  ctx.save()
  ctx.globalAlpha = 0.05
  ctx.fillStyle = d.ink
  ctx.font = '700 240px Arial, sans-serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.translate(w / 2, h / 2)
  ctx.rotate((-18 * Math.PI) / 180)
  ctx.fillText('AIDL', 0, 0)
  ctx.restore()
  ctx.textBaseline = 'alphabetic'

  // Laminate sheen, matching the CSS `.lc-gloss` soft-light diagonal.
  ctx.save()
  ctx.globalCompositeOperation = 'soft-light'
  const gloss = ctx.createLinearGradient(0, 0, w * 0.85, h)
  gloss.addColorStop(0, 'rgba(255,255,255,.55)')
  gloss.addColorStop(0.24, 'rgba(255,255,255,0)')
  gloss.addColorStop(0.66, 'rgba(255,255,255,0)')
  gloss.addColorStop(0.76, 'rgba(255,255,255,.3)')
  gloss.addColorStop(0.9, 'rgba(255,255,255,0)')
  ctx.fillStyle = gloss
  ctx.fillRect(0, 0, w, h)
  ctx.restore()

  const border = 8
  ctx.strokeStyle = d.ink
  ctx.lineWidth = border
  ctx.strokeRect(border / 2, border / 2, w - border, h - border)

  const stripH = 14
  ctx.fillStyle = d.strip
  ctx.fillRect(0, h - stripH, w, stripH)
  // Faint barcode texture over the base strip colour.
  ctx.save()
  ctx.globalCompositeOperation = 'multiply'
  ctx.globalAlpha = 0.45
  ctx.fillStyle = '#000'
  for (let x = 0; x < w; x += 14) {
    ctx.fillRect(x, h - stripH, 1, stripH)
    ctx.fillRect(x + 3, h - stripH, 1, stripH)
    ctx.fillRect(x + 8, h - stripH, 1, stripH)
  }
  ctx.restore()

  const pad = 46
  const sealR = 34
  const sealCx = pad + sealR
  const sealCy = pad + sealR
  ctx.beginPath()
  ctx.arc(sealCx, sealCy, sealR, 0, Math.PI * 2)
  ctx.fillStyle = d.seal
  ctx.fill()
  ctx.lineWidth = 3
  ctx.strokeStyle = d.ink
  ctx.stroke()
  if (logoImg.value) {
    ctx.save()
    ctx.beginPath()
    ctx.arc(sealCx, sealCy, sealR - 2, 0, Math.PI * 2)
    ctx.clip()
    ctx.drawImage(logoImg.value, sealCx - sealR, sealCy - sealR, sealR * 2, sealR * 2)
    ctx.restore()
  }
  // Dashed halo ring, matching the CSS `.lc-seal-wrap::after`.
  ctx.save()
  ctx.setLineDash([4, 3])
  ctx.globalAlpha = 0.55
  ctx.lineWidth = 1.5
  ctx.strokeStyle = d.ink
  ctx.beginPath()
  ctx.arc(sealCx, sealCy, sealR + 6, 0, Math.PI * 2)
  ctx.stroke()
  ctx.restore()

  const titleX = sealCx + sealR + 20
  ctx.textAlign = 'left'
  ctx.fillStyle = d.ink
  ctx.font = '700 26px Arial, sans-serif'
  ctx.fillText('AI DRIVING LICENSE', titleX, pad + 22)
  ctx.font = '600 12px "Courier New", monospace'
  ctx.fillStyle = hexToRgba(d.ink, 0.75)
  ctx.fillText('ISSUED UNDER THE AIDL PUBLIC REGISTRY', titleX, pad + 42)

  ctx.font = '700 16px Arial, sans-serif'
  ctx.fillStyle = d.ink
  const badgeW = ctx.measureText(props.classShort).width + 28
  const badgeH = 34
  const badgeX = w - pad - badgeW
  const badgeY = pad
  ctx.lineWidth = 3
  ctx.strokeStyle = d.ink
  ctx.strokeRect(badgeX, badgeY, badgeW, badgeH)
  ctx.textAlign = 'center'
  ctx.fillText(props.classShort, badgeX + badgeW / 2, badgeY + badgeH / 2 + 6)

  const headerBottom = pad + sealR * 2 + 22
  ctx.strokeStyle = d.ink
  ctx.lineWidth = 3
  ctx.beginPath()
  ctx.moveTo(pad, headerBottom)
  ctx.lineTo(w - pad, headerBottom)
  ctx.stroke()

  ctx.textAlign = 'left'
  ctx.fillStyle = d.ink
  ctx.font = '700 44px Arial, sans-serif'
  const nameY = headerBottom + 58
  ctx.fillText(props.holder.toUpperCase(), pad, nameY)

  const photoW = 150
  const photoH = 200
  const photoX = w - pad - photoW
  const photoY = headerBottom + 20

  const rows: [string, string][] = [
    ['CLASS', props.classFull],
    ['ISSUED', props.issued],
    ['EXPIRES', props.expires],
    ['STATUS', 'ACTIVE'],
  ]
  const rowColW = (photoX - 24 - pad) / 2
  const rowStartY = nameY + 34
  rows.forEach(([label, val], i) => {
    const col = i % 2
    const line = Math.floor(i / 2)
    const x = pad + col * (rowColW + 24)
    const y = rowStartY + line * 56
    ctx.font = '600 12px "Courier New", monospace'
    ctx.fillStyle = hexToRgba(d.ink, 0.68)
    ctx.fillText(label, x, y)
    ctx.font = '700 18px "Courier New", monospace'
    ctx.fillStyle = d.ink
    ctx.fillText(val, x, y + 22)
  })

  ctx.fillStyle = hexToRgba('#7f7f7f', 0.14)
  ctx.fillRect(photoX, photoY, photoW, photoH)
  ctx.strokeStyle = d.ink
  ctx.lineWidth = 3
  ctx.strokeRect(photoX, photoY, photoW, photoH)
  // Simple person-silhouette placeholder (head circle + shoulders arc),
  // matching the CSS `.lc-photo-icon`. Clipped to the photo box so the
  // shoulders arc can't spill past the border.
  ctx.save()
  ctx.beginPath()
  ctx.rect(photoX, photoY, photoW, photoH)
  ctx.clip()
  const iconCx = photoX + photoW / 2
  const iconCy = photoY + photoH / 2 - 14
  ctx.fillStyle = hexToRgba(d.ink, 0.55)
  ctx.beginPath()
  ctx.arc(iconCx, iconCy - 14, 22, 0, Math.PI * 2)
  ctx.fill()
  ctx.beginPath()
  ctx.arc(iconCx, iconCy + 46, 42, Math.PI, 0)
  ctx.fill()
  ctx.restore()
  ctx.fillStyle = hexToRgba(d.ink, 0.8)
  ctx.font = '600 11px "Courier New", monospace'
  ctx.textAlign = 'center'
  ctx.fillText('DRIVER PHOTO', photoX + photoW / 2, photoY + photoH - 14)

  const footerY = h - stripH - 46
  ctx.strokeStyle = d.ink
  ctx.lineWidth = 3
  ctx.beginPath()
  ctx.moveTo(pad, footerY)
  ctx.lineTo(w - pad, footerY)
  ctx.stroke()

  ctx.textAlign = 'left'
  ctx.fillStyle = d.ink
  ctx.font = '700 22px "Courier New", monospace'
  ctx.fillText(props.licenseId, pad, footerY + 32)

  ctx.textAlign = 'right'
  ctx.font = '600 11px "Courier New", monospace'
  ctx.fillStyle = hexToRgba(d.ink, 0.7)
  ctx.fillText('VERIFY AT AIDL.ORG/VERIFY', w - pad, footerY + 16)
  ctx.fillText('AUTHORISED SIGNATORY', w - pad, footerY + 32)
}

function downloadImage() {
  const w = 1120
  const h = Math.round(w / 1.586)
  const cv = document.createElement('canvas')
  cv.width = w
  cv.height = h
  const ctx = cv.getContext('2d')
  if (!ctx) return
  drawLicenseCard(ctx, w, h)
  cv.toBlob((b) => {
    if (!b) return
    const a = document.createElement('a')
    a.href = URL.createObjectURL(b)
    a.download = `${props.licenseId}.png`
    a.click()
    setTimeout(() => URL.revokeObjectURL(a.href), 4000)
    showToast('LICENSE IMAGE DOWNLOADED')
  })
}
</script>

<style scoped>
.iss-ov { position: fixed; inset: 0; z-index: 400; background: rgba(12, 12, 9, .86); backdrop-filter: blur(3px); overflow: auto; padding: 34px 20px; }
.iss { max-width: 1120px; margin: 0 auto; background: var(--cream, #f5ecd2); border: 4px solid var(--ink, #14140f); box-shadow: 14px 14px 0 var(--sign-yellow, #ffcc00); }
.iss-top { display: flex; align-items: center; gap: 16px; padding: 20px 26px; background: var(--asphalt, #14140f); color: var(--cream, #f5ecd2); border-bottom: 4px solid var(--ink, #14140f); flex-wrap: wrap; }
.iss-top .ok { width: 34px; height: 34px; flex: none; border-radius: 50%; background: var(--signal-green, #2ec866); border: 3px solid var(--ink, #14140f); display: grid; place-items: center; color: var(--ink, #14140f); font-weight: 700; }
.iss-top h3 { font-family: "Bungee", sans-serif; font-size: 19px; margin: 0; line-height: 1.15; }
.iss-top p { margin: 4px 0 0; font-family: "JetBrains Mono", monospace; font-size: 11px; letter-spacing: .1em; color: var(--sign-yellow, #ffcc00); }
.iss-close { margin-left: auto; background: transparent; border: 3px solid var(--cream, #f5ecd2); color: var(--cream, #f5ecd2); width: 40px; height: 40px; font-size: 19px; line-height: 1; cursor: pointer; font-family: "Bungee", sans-serif; }
.iss-close:hover { background: var(--signal-red, #e23a2e); border-color: var(--signal-red, #e23a2e); }
.iss-body { display: grid; grid-template-columns: minmax(0, 1fr) 330px; gap: 0; }
.iss-stage { padding: clamp(18px, 4vw, 34px) clamp(14px, 3.5vw, 30px); border-right: 4px solid var(--ink, #14140f); display: flex; flex-direction: column; align-items: center; gap: 22px; background: repeating-linear-gradient(45deg, rgba(20, 20, 15, .035) 0 12px, transparent 12px 24px); }
.iss-side { padding: 26px 24px; display: flex; flex-direction: column; gap: 22px; }
.iss-side h4 { font-family: "Bungee", sans-serif; font-size: 13px; margin: 0 0 12px; letter-spacing: .03em; }
.iss-hint { font-family: "JetBrains Mono", monospace; font-size: 10px; letter-spacing: .08em; color: #6b6552; line-height: 1.6; margin: 10px 0 0; }

.iss-welcome { border: 3px solid var(--ink, #14140f); background: var(--sign-yellow, #ffcc00); box-shadow: 6px 6px 0 var(--ink, #14140f); padding: 16px 20px; margin: 0 0 4px; display: flex; align-items: center; gap: 16px; flex-wrap: wrap; }
.iss-welcome .wmark { width: 44px; height: 44px; border-radius: 50%; background: var(--ink, #14140f); display: grid; place-items: center; flex: none; overflow: hidden; border: 2px solid var(--ink, #14140f); }
.iss-welcome .wmark-img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; display: block; }
.iss-welcome h4 { font-family: "Bungee", sans-serif; font-size: 19px; margin: 0 0 3px; letter-spacing: .01em; }
.iss-welcome p { margin: 0; font-family: "JetBrains Mono", monospace; font-size: 11.5px; line-height: 1.45; color: #3a3528; }

.perks { border-top: 3px dashed rgba(20, 20, 15, .35); margin-top: 6px; padding-top: 22px; width: 100%; }
.perks-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 14px; flex-wrap: wrap; margin-bottom: 4px; }
.perks-head h4 { font-family: "Bungee", sans-serif; font-size: 16px; margin: 0; }
.perks-head span { font-family: "JetBrains Mono", monospace; font-size: 11px; background: var(--ink, #14140f); color: var(--sign-yellow, #ffcc00); padding: 4px 9px; }
.perks-sub { font-family: "JetBrains Mono", monospace; font-size: 11.5px; color: #3a3528; line-height: 1.5; margin: 8px 0 16px; max-width: 64ch; }
.pk-cats { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 18px; }
.pk-cats button { font-family: "JetBrains Mono", monospace; font-size: 11px; letter-spacing: .03em; padding: 7px 12px; background: var(--cream, #f5ecd2); color: var(--ink, #14140f); border: 2.5px solid var(--ink, #14140f); cursor: pointer; box-shadow: 3px 3px 0 var(--ink, #14140f); transition: transform .1s, box-shadow .1s, background .1s; }
.pk-cats button:hover { transform: translate(-1px, -1px); box-shadow: 4px 4px 0 var(--ink, #14140f); }
.pk-cats button.on { background: var(--ink, #14140f); color: var(--sign-yellow, #ffcc00); }
/* Perk cards scroll inside their own box instead of stretching the whole
   popup — there can be a couple dozen of them, and letting the modal grow
   to fit them all made it feel like an endless page rather than a card. */
.pk-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 18px 14px;
  max-height: 460px; overflow-y: auto; padding: 4px 10px 4px 4px; margin: 0 -10px 0 -4px;
  scrollbar-width: thin; scrollbar-color: var(--ink, #14140f) var(--cream-2, #f0e3bd);
}
.pk-grid::-webkit-scrollbar { width: 10px; }
.pk-grid::-webkit-scrollbar-track { background: var(--cream-2, #f0e3bd); border: 2px solid var(--ink, #14140f); }
.pk-grid::-webkit-scrollbar-thumb { background: var(--ink, #14140f); border: 2px solid var(--cream-2, #f0e3bd); }
.pk-grid::-webkit-scrollbar-thumb:hover { background: var(--signal-red, #e23a2e); }
.pk {
  --pk-accent: var(--sign-yellow, #ffcc00);
  border: 3px solid var(--ink, #14140f); border-top: 6px solid var(--pk-accent);
  background: var(--cream, #f5ecd2); box-shadow: 5px 5px 0 var(--ink, #14140f);
  padding: 16px 14px 14px; display: flex; flex-direction: column; gap: 10px;
  container-type: inline-size; position: relative;
  transition: transform .12s, box-shadow .12s;
}
.pk:hover { transform: translate(-2px, -2px); box-shadow: 8px 8px 0 var(--ink, #14140f); }
.pk-ribbon {
  position: absolute; top: -12px; right: 12px;
  background: var(--pk-accent); color: var(--ink, #14140f);
  font-family: "Bungee", sans-serif; font-size: 10px; line-height: 1.15;
  padding: 5px 9px; border: 2.5px solid var(--ink, #14140f);
  box-shadow: 2px 2px 0 var(--ink, #14140f); transform: rotate(-3deg);
  max-width: calc(100% - 24px); text-align: right;
}
.pk-t { display: flex; align-items: center; gap: 10px; margin-top: 6px; }
.pk-logo { width: 38px; height: 38px; flex: none; display: grid; place-items: center; border: 2.5px solid var(--ink, #14140f); font-family: "Bungee", sans-serif; font-size: 12px; background: var(--pk-accent); color: var(--ink, #14140f); box-shadow: 2px 2px 0 var(--ink, #14140f); }
.pk-n { font-family: "Bungee", sans-serif; font-size: 14px; line-height: 1.2; }
.pk-c { font-family: "JetBrains Mono", monospace; font-size: 9.5px; color: #5c5646; letter-spacing: .05em; text-transform: uppercase; margin-top: 3px; }
.pk-d { font-family: "JetBrains Mono", monospace; font-size: 11px; color: #3a3528; line-height: 1.5; flex: 1; margin: 0; }
.pk-act { display: flex; gap: 8px; flex-wrap: wrap; border-top: 2px dashed rgba(20, 20, 15, .3); padding-top: 10px; }
.pk-act button, .pk-act a { font-family: "Bungee", sans-serif; font-size: 10.5px; padding: 8px 10px; border: 2.5px solid var(--ink, #14140f); cursor: pointer; text-decoration: none; text-align: center; box-shadow: 3px 3px 0 var(--ink, #14140f); transition: transform .1s, box-shadow .1s; flex: 1; color: var(--ink, #14140f); }
.pk-act button:hover, .pk-act a:hover { transform: translate(-1px, -1px); box-shadow: 4px 4px 0 var(--ink, #14140f); }
.pk-act .claim { background: var(--sign-yellow, #ffcc00); color: var(--ink, #14140f); }
.pk-act .claim.done { background: var(--signal-green, #2ec866); }
.pk-act .visit { background: var(--cream-2, #f0e3bd); color: var(--ink, #14140f); }
.pk-none { font-family: "JetBrains Mono", monospace; font-size: 11.5px; color: #5c5646; padding: 18px 0; }
@container (max-width: 250px) { .pk-act { flex-direction: column; } }

.dz { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
.dz b { display: block; border: 3px solid var(--ink, #14140f); height: 52px; cursor: pointer; position: relative; transition: transform .12s; }
.dz b:hover { transform: translateY(-2px); }
.dz b.on { outline: 4px solid var(--signal-red, #e23a2e); outline-offset: 2px; }
.dz b i { position: absolute; left: 0; right: 0; bottom: 0; font-family: "JetBrains Mono", monospace; font-style: normal; font-size: 8px; letter-spacing: .06em; text-align: center; padding: 2px 0; background: rgba(20, 20, 15, .82); color: #f5ecd2; }

.lic-card {
  container-type: inline-size; width: 100%; max-width: 560px; min-width: 0; aspect-ratio: 1.586;
  border: 4px solid var(--ink, #14140f);
  box-shadow: 10px 10px 0 rgba(20, 20, 15, .35), inset 0 0 0 3px rgba(0, 0, 0, .07);
  position: relative; overflow: hidden; display: flex; flex-direction: column;
  padding: clamp(11px, 3.4cqw, 20px) clamp(12px, 3.8cqw, 22px);
  transition: opacity .18s;
}
.lc-pattern { content: ""; position: absolute; inset: 0; pointer-events: none; opacity: .5; }
/* Laminate-style diagonal sheen — a soft-light blend keeps it looking like
   light on glossy card stock rather than washing the design colour out. */
.lc-gloss {
  position: absolute; inset: 0; pointer-events: none; z-index: 1;
  background: linear-gradient(115deg, rgba(255, 255, 255, .4) 0%, rgba(255, 255, 255, 0) 24%, rgba(255, 255, 255, 0) 66%, rgba(255, 255, 255, .22) 76%, rgba(255, 255, 255, 0) 90%);
  mix-blend-mode: soft-light;
}
.lc-watermark {
  position: absolute; inset: 0; z-index: 1; pointer-events: none;
  display: flex; align-items: center; justify-content: center;
  font-family: "Bungee", sans-serif; font-size: 30cqw; color: currentColor; opacity: .05;
  transform: rotate(-18deg); white-space: nowrap;
}
.lc-head { display: flex; align-items: center; gap: clamp(6px, 1.9cqw, 11px); min-width: 0; border-bottom: clamp(2px, .7cqw, 3px) solid currentColor; padding-bottom: clamp(4px, 2cqw, 10px); position: relative; z-index: 2; }
.lc-seal-wrap { position: relative; flex: none; }
.lc-seal-wrap::after { content: ""; position: absolute; inset: clamp(-6px, -1.6cqw, -4px); border-radius: 50%; border: 1.5px dashed currentColor; opacity: .55; pointer-events: none; }
.lc-seal { width: clamp(24px, 7cqw, 40px); height: clamp(24px, 7cqw, 40px); border-radius: 50%; border: 3px solid var(--ink, #14140f); display: grid; place-items: center; overflow: hidden; box-shadow: 0 2px 4px rgba(0, 0, 0, .3); }
.lc-seal-img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; display: block; }
.lc-head h5 { font-family: "Bungee", sans-serif; font-size: clamp(11px, 2.9cqw, 15px); white-space: nowrap; margin: 0; line-height: 1.1; }
.lc-head small { display: block; font-family: "JetBrains Mono", monospace; font-size: clamp(6px, 1.5cqw, 8px); white-space: nowrap; letter-spacing: .16em; margin-top: 3px; opacity: .75; }
.lc-cls { margin-left: auto; white-space: nowrap; font-family: "Bungee", sans-serif; font-size: clamp(8px, 2.1cqw, 11px); border: clamp(2px, .6cqw, 3px) solid var(--ink, #14140f); padding: clamp(2px, 1cqw, 5px) clamp(4px, 1.7cqw, 9px); box-shadow: 2px 2px 0 rgba(0, 0, 0, .18); }
.lc-main { display: grid; grid-template-columns: minmax(0, 1fr) clamp(52px, 17cqw, 96px); gap: clamp(7px, 2.9cqw, 16px); flex: 1; min-height: 0; padding-top: clamp(5px, 2.6cqw, 14px); position: relative; z-index: 2; }
.lc-name { font-family: "Bungee", sans-serif; font-size: clamp(13px, 4.8cqw, 26px); line-height: 1.05; margin: 0 0 clamp(5px, 2.2cqw, 12px); word-break: break-word; }
.lc-rows { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(3px, 1.4cqw, 9px) clamp(7px, 2.6cqw, 14px); font-family: "JetBrains Mono", monospace; font-size: 9px; letter-spacing: .08em; }
.lc-rows span { display: block; opacity: .68; font-size: clamp(6px, 1.4cqw, 8px); margin-bottom: 2px; }
.lc-rows b { font-size: clamp(8px, 2cqw, 11px); letter-spacing: .04em; white-space: nowrap; }
.lc-photo { align-self: start; aspect-ratio: 3 / 4; max-height: 100%; border: clamp(2px, .6cqw, 3px) solid var(--ink, #14140f); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: clamp(3px, 1.4cqw, 7px); background: rgba(127, 127, 127, .14); }
.lc-photo-icon { width: 42%; height: auto; opacity: .55; }
.lc-photo-cap { font-family: "JetBrains Mono", monospace; font-size: clamp(5px, 1.3cqw, 7px); letter-spacing: .1em; text-align: center; opacity: .8; }
.lc-foot { display: flex; align-items: flex-end; justify-content: space-between; gap: clamp(6px, 2cqw, 12px); flex: none; border-top: clamp(2px, .7cqw, 3px) solid currentColor; padding-top: clamp(4px, 1.8cqw, 9px); margin-top: clamp(4px, 2cqw, 10px); position: relative; z-index: 2; }
.lc-no { font-family: "JetBrains Mono", monospace; font-size: clamp(8px, 2.4cqw, 13px); font-weight: 700; letter-spacing: .08em; white-space: nowrap; }
.lc-sig { font-family: "JetBrains Mono", monospace; font-size: clamp(5px, 1.4cqw, 8px); letter-spacing: .08em; white-space: nowrap; opacity: .7; text-align: right; }
/* A faint barcode texture over the base colour strip — a small realism cue
   that reads as a document/ID feature rather than a plain colour bar. */
.lc-strip { position: absolute; left: 0; right: 0; bottom: 0; height: clamp(4px, 1.7cqw, 9px); overflow: hidden; }
.lc-strip::before {
  content: ""; position: absolute; inset: 0;
  background-image: repeating-linear-gradient(90deg, rgba(0, 0, 0, .55) 0 1px, transparent 1px 3px, rgba(0, 0, 0, .55) 3px 4px, transparent 4px 8px, rgba(0, 0, 0, .55) 8px 9px, transparent 9px 14px);
  mix-blend-mode: multiply; opacity: .45;
}

.share-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 9px; }
.sh { display: flex; align-items: center; gap: 9px; padding: 11px 12px; border: 3px solid var(--ink, #14140f); background: var(--cream-2, #f0e3bd); font-family: "Bungee", sans-serif; font-size: 10px; letter-spacing: .03em; cursor: pointer; text-decoration: none; color: var(--ink, #14140f); transition: transform .1s, box-shadow .1s; text-align: left; }
.sh:hover { transform: translate(-2px, -2px); box-shadow: 4px 4px 0 var(--ink, #14140f); color: var(--ink, #14140f); }
.sh svg { flex: none; }
.sh.wide { grid-column: 1 / -1; justify-content: center; }
.cap-row { display: flex; flex-direction: column; gap: 8px; }
.cap-row textarea { width: 100%; border: 3px solid var(--ink, #14140f); background: #fff; padding: 10px; font-family: "Space Grotesk", sans-serif; font-size: 12px; line-height: 1.5; resize: vertical; min-height: 82px; }

.iss-close-btn { font-family: "Bungee", sans-serif; font-size: 13px; letter-spacing: .03em; background: var(--cream-2, #f0e3bd); color: var(--ink, #14140f); border: 3px solid var(--ink, #14140f); padding: 14px 18px; cursor: pointer; box-shadow: 4px 4px 0 var(--ink, #14140f); transition: transform .1s, box-shadow .1s; }
.iss-close-btn:hover { transform: translate(-2px, -2px); box-shadow: 6px 6px 0 var(--ink, #14140f); }

.iss-toast { position: fixed; left: 50%; bottom: 26px; transform: translateX(-50%) translateY(120%); background: var(--ink, #14140f); color: var(--cream, #f5ecd2); border: 3px solid var(--sign-yellow, #ffcc00); padding: 12px 20px; font-family: "Bungee", sans-serif; font-size: 11px; letter-spacing: .06em; z-index: 500; transition: transform .22s; max-width: calc(100vw - 40px); text-align: center; }
.iss-toast.show { transform: translateX(-50%) translateY(0); }

@media (max-width: 900px) {
  .iss-body { grid-template-columns: 1fr; }
  .iss-stage { border-right: 0; border-bottom: 4px solid var(--ink, #14140f); padding: 24px 18px; }
  .iss-side { padding: 22px 18px; }
  .iss-ov { padding: 16px 12px; }
  .pk-grid { max-height: 340px; }
}
</style>
