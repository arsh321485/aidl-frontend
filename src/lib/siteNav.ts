// Shared by SiteNav (header) and SiteFooter: the three audiences, their pages
// and sections, and how a link to one of them is followed.
// Design: AIDL-new-content/"aidl – AI Driving License v4 (3-in-1).html".
import { useRoute, useRouter } from 'vue-router'

export type AudienceId = 'companies' | 'schools' | 'hospitals'
// A place a link can send you: a section `id` on `path` ('top' = page top).
export type Spot = { id: string; label: string; path: string }

export type Audience = {
  id: AudienceId
  label: string
  tag: string
  path: string
  color: string
  icon: string // inner markup of a 24×24 stroked SVG
  sections: Spot[] // the coloured sub-menu under the nav
  footer: Spot[] // this audience's column in the footer (only shown on its own pages)
  pricing: Spot
  demo: Spot
}

const spots = (path: string, list: [string, string][]): Spot[] => list.map(([id, label]) => ({ id, label, path }))

export const AUDIENCES: Audience[] = [
  {
    id: 'companies', label: 'Companies', tag: 'FOR COMPANIES', path: '/home', color: '#ffcc00',
    icon: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 12h18"/>',
    sections: [
      ...spots('/home', [['top', 'Overview'], ['how', 'How it works'], ['admins', 'For admins'], ['drivers', 'For your team'], ['cards', 'The cards'], ['control', 'Oversight'], ['compliance', 'Compliance'], ['pricing', 'Pricing'], ['policy', 'AI policy'], ['start', 'Get started']]),
    ],
    footer: [
      ...spots('/home', [['top', 'Overview'], ['how', 'How it works'], ['admins', 'For admins'], ['drivers', 'For your team'], ['cards', 'The cards'], ['control', 'Oversight'], ['compliance', 'Compliance'], ['licences', 'Sample licences']]),
      { id: 'pricing', label: 'Pricing', path: '/home' }, // the pricing section on the companies page
    ],
    // Companies pricing is a section of the companies page (design v5), not /pricing.
    pricing: { id: 'pricing', label: 'Pricing', path: '/home' },
    demo: { id: 'start', label: 'Book a demo', path: '/home' },
  },
  {
    id: 'schools', label: 'Schools', tag: 'FOR SCHOOLS', path: '/schools', color: '#2ec866',
    icon: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5M22 9v6"/>',
    sections: spots('/schools', [['top', 'Overview'], ['why', 'Why now'], ['teachers', 'Teachers & staff'], ['students', 'Students'], ['platforms', 'Where it runs'], ['privacy', 'Child privacy'], ['pricing', 'Pricing'], ['pilot', 'Book a pilot']]),
    footer: spots('/schools', [['top', 'Overview'], ['why', 'Why now'], ['teachers', 'Teachers & staff'], ['students', 'Students'], ['platforms', 'Where it runs'], ['privacy', 'Child privacy'], ['pricing', 'Pricing'], ['pilot', 'Book a pilot']]),
    pricing: { id: 'pricing', label: 'Pricing', path: '/schools' },
    demo: { id: 'pilot', label: 'Book a demo', path: '/schools' },
  },
  {
    id: 'hospitals', label: 'Hospitals', tag: 'FOR HOSPITALS', path: '/hospitals', color: '#5aa9ff',
    icon: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M12 7v10M7 12h10"/>',
    sections: spots('/hospitals', [['top', 'Overview'], ['why', 'Why now'], ['clinical', 'Clinical staff'], ['nonclinical', 'Non-clinical staff'], ['guidance', 'Guidance map'], ['platforms', 'Where it runs'], ['privacy', 'Patient data'], ['pricing', 'Pricing'], ['pilot', 'Book a pilot']]),
    footer: spots('/hospitals', [['top', 'Overview'], ['why', 'Why now'], ['clinical', 'Clinical staff'], ['nonclinical', 'Non-clinical staff'], ['guidance', 'Guidance map'], ['privacy', 'Patient data'], ['pricing', 'Pricing'], ['pilot', 'Book a pilot']]),
    pricing: { id: 'pricing', label: 'Pricing', path: '/hospitals' },
    demo: { id: 'pilot', label: 'Book a demo', path: '/hospitals' },
  },
]

export function getAudience(id: AudienceId): Audience {
  return AUDIENCES.find((a) => a.id === id) ?? AUDIENCES[0]!
}

// Height of the sticky SiteNav, so a section lands just below it.
export function siteNavHeight(): number {
  return document.querySelector<HTMLElement>('.sn-top')?.offsetHeight ?? 0
}

export function scrollToSpot(id: string) {
  const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const el = id === 'top' ? null : document.getElementById(id)
  const y = el ? el.getBoundingClientRect().top + window.scrollY - siteNavHeight() - 6 : 0
  window.scrollTo({ top: Math.max(0, y), behavior: smooth ? 'smooth' : 'auto' })
}

// href + click handler for a Spot: on the same page it scrolls there,
// otherwise it opens that page (the router then scrolls to the hash).
export function useSpotLinks() {
  const route = useRoute()
  const router = useRouter()
  const hashOf = (s: Spot) => (s.id === 'top' ? '' : '#' + s.id)

  // "Same page" means the same path with no ?query: /pricing?for=schools is a
  // different page from /pricing (the companies pricing).
  const onPage = (s: Spot) => route.path === s.path && !Object.keys(route.query).length

  function href(s: Spot) {
    return router.resolve({ path: s.path, hash: hashOf(s) }).href
  }
  function go(e: MouseEvent, s: Spot) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
    e.preventDefault()
    if (onPage(s)) {
      scrollToSpot(s.id)
      if (route.hash !== hashOf(s)) history.replaceState(history.state, '', route.path + hashOf(s))
    } else {
      router.push({ path: s.path, hash: hashOf(s) })
    }
  }
  return { href, go, onPage }
}
