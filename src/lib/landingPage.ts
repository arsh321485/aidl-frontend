// Shared behaviour for the /schools and /hospitals landing pages.
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

// Sticky nav (74px) + section bar (48px), plus a little air.
const NAV_OFFSET = '130px'

// Page title, and smooth in-page "#section" links that stop below the sticky nav.
export function useLandingPage(title: string) {
  let oldTitle = ''
  let oldPadding = ''
  onMounted(() => {
    oldTitle = document.title
    document.title = title
    oldPadding = document.documentElement.style.scrollPaddingTop
    document.documentElement.style.scrollPaddingTop = NAV_OFFSET
  })
  onBeforeUnmount(() => {
    document.title = oldTitle
    document.documentElement.style.scrollPaddingTop = oldPadding
  })

  // Handled here (not by the router) so the jump honours the sticky-nav offset.
  function onAnchorClick(e: MouseEvent) {
    const link = (e.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]')
    const target = link && document.getElementById(link.hash.slice(1))
    if (!target) return
    e.preventDefault()
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
  }

  return { onAnchorClick }
}

// A row of tab buttons: click to pick one, arrow keys move between them.
export function useTabs(count: number) {
  const current = ref(0)
  const listEl = ref<HTMLElement | null>(null)

  function onKey(e: KeyboardEvent) {
    const step = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1
      : e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? -1 : 0
    if (!step) return
    e.preventDefault()
    current.value = (current.value + step + count) % count
    nextTick(() => (listEl.value?.children[current.value] as HTMLElement | undefined)?.focus())
  }

  return { current, listEl, onKey }
}

// "Apply for a pilot" form: required fields must be filled (and the email look
// like one). Marks every bad field, then shows the thank-you note.
export function usePilotForm(required: string[]) {
  const sent = ref(false)

  function submit(e: Event) {
    const form = e.currentTarget as HTMLFormElement
    const valid = required.map((id) => {
      const el = form.querySelector<HTMLInputElement>(`#${id}`)
      if (!el) return true
      const ok = el.value.trim() !== '' && (el.type !== 'email' || /.+@.+\..+/.test(el.value))
      el.setAttribute('aria-invalid', ok ? 'false' : 'true')
      return ok
    })
    if (valid.every(Boolean)) sent.value = true
  }

  return { sent, submit }
}
