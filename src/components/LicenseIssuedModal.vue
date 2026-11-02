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
          <div class="lic-full" v-html="cardSvg"></div>
        </div>

        <div class="iss-side">
          <div class="iss-welcome">
            <span class="wmark"><img :src="aidlLogo" alt="AIDL" class="wmark-img" /></span>
            <div>
              <h4>Welcome, {{ firstName }}</h4>
              <p>{{ classShort }} · {{ classFull }} · {{ licenseId }} — your license is ready below.</p>
            </div>
          </div>

          <div>
            <h4>1 · Message</h4>
            <div class="cap-row">
              <textarea v-model="caption"></textarea>
            </div>
          </div>

          <div>
            <h4>2 · Share it</h4>
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
              <button type="button" class="sh" @click="shareToApp('Instagram', 'https://www.instagram.com/')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E4405F" stroke-width="2.2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.4" cy="6.6" r="1" fill="#E4405F" stroke="none" /></svg>
                INSTAGRAM
              </button>
              <button type="button" class="sh" @click="shareToApp('TikTok', 'https://www.tiktok.com/upload')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#14140f"><path d="M16.6 5.8a4.3 4.3 0 0 1-1-2.8h-3.1v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.7a5.8 5.8 0 1 0 4.9 5.7V9.1a7.3 7.3 0 0 0 4.3 1.4V7.4a4.3 4.3 0 0 1-3.3-1.6z" /></svg>
                TIKTOK
              </button>
              <a class="sh" :href="waHref" target="_blank" rel="noopener">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1a12 12 0 0 1-5.2-4.5c-.4-.6-.9-1.5-.9-2.4 0-.9.5-1.4.7-1.6.2-.2.4-.3.6-.3h.5c.2 0 .4 0 .6.5l.7 1.7c.1.2 0 .4-.1.5l-.3.4c-.1.1-.3.3-.1.6.2.3.7 1.1 1.4 1.8.9.8 1.6 1 1.9 1.2.2.1.4 0 .5-.1l.6-.7c.2-.2.3-.2.6-.1l1.6.8c.2.1.4.2.5.3 0 .1 0 .5-.1.8z" /></svg>
                WHATSAPP
              </a>
              <a class="sh" :href="telegramHref" target="_blank" rel="noopener">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#26A5E4"><path d="M21.9 4.3 18.6 20c-.2 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1 9.3-8.4c.4-.4-.1-.6-.6-.2L6 13.5l-4.9-1.5c-1.1-.3-1.1-1.1.2-1.6L20.6 3c.9-.3 1.7.2 1.3 1.3z" /></svg>
                TELEGRAM
              </a>
              <a class="sh" :href="threadsHref" target="_blank" rel="noopener">
                <svg width="16" height="16" viewBox="0 0 24 24"><text x="12" y="18" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold" font-size="19" fill="#14140f">@</text></svg>
                THREADS
              </a>
              <a class="sh" :href="redditHref" target="_blank" rel="noopener">
                <svg width="16" height="16" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#FF4500" /><ellipse cx="12" cy="14" rx="6.5" ry="4.3" fill="#fff" /><circle cx="9.6" cy="13.6" r="1.1" fill="#FF4500" /><circle cx="14.4" cy="13.6" r="1.1" fill="#FF4500" /><circle cx="17.2" cy="7" r="1.4" fill="#fff" /></svg>
                REDDIT
              </a>
              <button type="button" class="sh" @click="copySlack">
                <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#36C5F0" d="M9.5 15.2a2.4 2.4 0 1 1-2.4-2.4h2.4v2.4z" /><path fill="#2EB67D" d="M13.1 10.5a2.4 2.4 0 0 1 2.4 2.4 2.4 2.4 0 0 1-2.4 2.4h-6a2.4 2.4 0 0 1 0-4.8h6z" /><path fill="#ECB22E" d="M19 13.1a2.4 2.4 0 1 1 2.4 2.4H19v-2.4z" /><path fill="#E01E5A" d="M14.9 17.8a2.4 2.4 0 0 1-2.4-2.4 2.4 2.4 0 0 1 2.4-2.4h6a2.4 2.4 0 0 1 0 4.8h-6z" /></svg>
                SLACK
              </button>
              <a class="sh" :href="teamsHref" target="_blank" rel="noopener">
                <svg width="16" height="16" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#5059C9" /><text x="12" y="17" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold" font-size="14" fill="#fff">T</text></svg>
                TEAMS
              </a>
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
import { computed, onMounted, onUnmounted, ref } from 'vue'
import aidlLogo from '../assets/images/aidl-logo.png'
import { avatarDataUrl, licencePng, saveBlob as saveFile } from '../lib/licenceImage'
import { licenceSvg } from '../lib/licenceSvg'
import type { AvatarConfig } from '../lib/avatar-parts'

const props = defineProps<{
  licenseId: string
  holder: string
  classShort: string
  classFull: string
  issued: string
  expires: string
  // The avatar picked just before issuing — shown in the photo slot.
  avatar?: AvatarConfig | null
}>()

const emit = defineEmits<{ close: [] }>()

const licence = computed(() => ({
  name: props.holder,
  number: props.licenseId,
  issued: props.issued,
  expires: props.expires,
  avatar: avatarDataUrl(props.avatar),
}))
const cardSvg = computed(() => licenceSvg(licence.value))

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') emit('close')
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)

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
const telegramHref = computed(() => `https://t.me/share/url?url=${encodeURIComponent(verifyUrl())}&text=${encodeURIComponent(caption.value)}`)
const threadsHref = computed(() => `https://www.threads.net/intent/post?text=${encodeURIComponent(caption.value + ' ' + verifyUrl())}`)
const redditHref = computed(() => `https://www.reddit.com/submit?url=${encodeURIComponent(verifyUrl())}&title=${encodeURIComponent(caption.value)}`)
const teamsHref = computed(() => `https://teams.microsoft.com/share?href=${encodeURIComponent(verifyUrl())}&msgText=${encodeURIComponent(caption.value)}`)
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

const firstName = computed(() => {
  const first = props.holder.trim().split(/\s+/)[0] || 'DRIVER'
  return first.charAt(0).toUpperCase() + first.slice(1).toLowerCase()
})

async function licenseBlob(): Promise<Blob | null> {
  try {
    return await licencePng(licence.value)
  } catch (e) {
    showToast('COULD NOT DRAW THE LICENSE — TRY AGAIN')
    return null
  }
}

function saveBlob(b: Blob) {
  saveFile(b, `${props.licenseId}.png`)
}

async function downloadImage() {
  const b = await licenseBlob()
  if (!b) return
  saveBlob(b)
  showToast('LICENSE IMAGE DOWNLOADED')
}

// Instagram and TikTok have no web "share a link" page: they post images
// from their apps. On phones the system share sheet sends the license image
// + caption straight to the app; on computers we save the image, copy the
// caption and open the site so the user can upload it.
async function shareToApp(app: string, url: string) {
  const b = await licenseBlob()
  if (!b) return
  const text = `${caption.value}\n${verifyUrl()}`
  const file = new File([b], `${props.licenseId}.png`, { type: 'image/png' })
  if (navigator.canShare?.({ files: [file] })) {
    try {
      await navigator.share({ files: [file], text })
      return
    } catch (e) {
      if (e instanceof DOMException && e.name === 'AbortError') return
    }
  }
  saveBlob(b)
  try { await navigator.clipboard.writeText(text) } catch (e) {}
  window.open(url, '_blank', 'noopener')
  showToast(`IMAGE SAVED + CAPTION COPIED — POST IT ON ${app.toUpperCase()}`)
}
</script>

<style scoped>
.lic-full { width: 100%; }
.lic-full :deep(svg) { display: block; width: 100%; height: auto; }
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
}
</style>
