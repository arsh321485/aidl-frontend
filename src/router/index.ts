import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// The landing page loads with the app; every other page is its own file,
// downloaded only when someone opens it.
const ClassicHomeView = () => import('../views/ClassicHomeView.vue')
const SeniorPortalView = () => import('../views/SeniorPortalView.vue')
const JuniorDriverPortalView = () => import('../views/JuniorDriverPortalView.vue')
const SeniorLessonPlayerView = () => import('../views/SeniorLessonPlayerView.vue')
const JuniorLessonPlayerView = () => import('../views/JuniorLessonPlayerView.vue')
const RoadTestView = () => import('../views/RoadTestView.vue')
const SignInView = () => import('../views/SignInView.vue')
const SignUpView = () => import('../views/SignUpView.vue')
const FleetOfficeView = () => import('../views/FleetOfficeView.vue')
const TeamsCallbackView = () => import('../views/TeamsCallbackView.vue')
const AvatarView = () => import('../views/AvatarView.vue')
const PlansView = () => import('../views/PlansView.vue')
const PricingView = () => import('../views/PricingView.vue')
const PrivacyView = () => import('../views/PrivacyView.vue')
const SupportView = () => import('../views/SupportView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // Section links like /home#how (from the Privacy / Support nav) jump to that
  // section; Privacy, Support and Pricing always open at the top. Other routes keep
  // the old behaviour (no scrolling).
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, top: 80 }
    if (to.name === 'privacy' || to.name === 'support' || to.name === 'pricing') return { top: 0 }
    return false
  },
  routes: [
    {
      // The site opens straight on the website (no sign-in page first).
      path: '/',
      redirect: '/home',
    },
    {
      // Old local "Fleet Office" admin sign-in — kept reachable for the
      // /fleet-office guard, no longer the landing page.
      path: '/admin/signin',
      name: 'signin',
      component: SignInView,
      meta: { public: true, authRole: 'admin' },
    },
    {
      path: '/signin',
      name: 'user-signin',
      component: SignInView,
      meta: { public: true, authRole: 'user' },
    },
    {
      path: '/signup',
      name: 'user-signup',
      component: SignUpView,
      meta: { public: true, authRole: 'user' },
    },
    {
      path: '/admin/signup',
      name: 'admin-signup',
      component: SignUpView,
      meta: { public: true, authRole: 'admin' },
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: { public: true },
    },
    {
      // Previous landing page (individual / junior enroll, licence sign-in,
      // verify) — kept running for individuals, but deliberately not linked
      // from the new B2B landing page; reachable by direct link only.
      path: '/classic',
      name: 'classic',
      component: ClassicHomeView,
      meta: { public: true },
    },
    {
      path: '/senior-portal',
      name: 'senior-portal',
      component: SeniorPortalView,
      meta: { requiresPermit: true, track: 'senior' },
    },
    {
      path: '/portal',
      redirect: '/senior-portal',
    },
    {
      path: '/junior-portal',
      name: 'junior-driver-portal',
      component: JuniorDriverPortalView,
      meta: { requiresPermit: true, track: 'junior' },
    },
    {
      path: '/senior-player',
      name: 'senior-lesson-player',
      component: SeniorLessonPlayerView,
      meta: { requiresPermit: true, track: 'senior' },
    },
    {
      path: '/lesson',
      redirect: '/senior-player',
    },
    {
      path: '/junior-player',
      name: 'junior-lesson-player',
      component: JuniorLessonPlayerView,
      meta: { requiresPermit: true, track: 'junior' },
    },
    {
      path: '/road-test',
      name: 'road-test',
      component: RoadTestView,
      meta: { requiresPermit: true },
    },
    {
      path: '/jobs',
      name: 'jobs',
      // Renders ClassicHomeView itself (not a redirect) — Vue Router reuses the
      // same component instance across /classic <-> /jobs since it's the
      // identical import, so the nav/enroll-modal/sign-in state and DOM never
      // remount. It swaps only the section below the nav based on route.path.
      component: ClassicHomeView,
      meta: { public: true },
    },
    {
      path: '/fleet-office',
      name: 'fleet-office',
      component: FleetOfficeView,
      meta: { requiresAdmin: true },
    },
    {
      // Licence avatar — opened from Slack ("Create my avatar") with ?token=
      path: '/avatar',
      name: 'avatar',
      component: AvatarView,
      meta: { public: true },
    },
    {
      // Plan upgrades — opened from Slack (Admin Center → Upgrade plan) with ?token=
      path: '/plans',
      name: 'plans',
      component: PlansView,
      meta: { public: true },
    },
    {
      // Public pricing page — linked as "Pricing" in the website nav.
      path: '/pricing',
      name: 'pricing',
      component: PricingView,
      meta: { public: true },
    },
    {
      // Privacy policy + Support pages — also the URLs given to the Slack Marketplace.
      path: '/privacy',
      name: 'privacy',
      component: PrivacyView,
      meta: { public: true },
    },
    {
      path: '/support',
      name: 'support',
      component: SupportView,
      meta: { public: true },
    },
    {
      path: '/auth/callback',
      name: 'teams-auth-callback',
      component: TeamsCallbackView,
      // Backend's AUTH_SUCCESS_REDIRECT target after Microsoft/Teams OAuth —
      // must stay public since aidl_user_auth isn't set until this page runs.
      meta: { public: true },
    },
  ],
})

const SENIOR_CLASSES = ['L', 'O', 'S']
const JUNIOR_CLASSES = ['J', 'T']

router.beforeEach((to) => {
  console.log('[Router] navigating to', to.path, 'matched routes:', to.matched.length, 'meta:', to.meta)
  // aidl_auth is the org-admin login (see SignInView). It is a separate
  // identity from aidl-session below, which is the driver/user identity —
  // an admin is also a user, and signs into their own driver dashboard the
  // same way any driver does (license ID or the enroll flow on /home).
  const isAdmin = localStorage.getItem('aidl_auth') === 'true'
  const isUserAuth = localStorage.getItem('aidl_user_auth') === 'true'

  if ((to.name === 'signin' || to.name === 'admin-signup') && isAdmin) {
    return { name: 'fleet-office' }
  }

  if ((to.name === 'user-signin' || to.name === 'user-signup') && isUserAuth) {
    return { path: '/home' }
  }

  if (to.meta.public) {
    return
  }

  if (to.meta.requiresAdmin) {
    if (!isAdmin) {
      return { name: 'signin', query: { redirect: to.fullPath } }
    }
    return
  }

  // Dashboards and lessons are only reachable after finishing the
  // enroll-form -> avatar-picker flow, or signing in with a valid license ID —
  // and only for the track (senior/junior) that license was actually issued for.
  if (to.meta.requiresPermit) {
    let session: { classCode?: string } | null = null
    try { session = JSON.parse(localStorage.getItem('aidl-session') || 'null') } catch (e) {}

    if (!session?.classCode) {
      return { path: '/classic' }
    }
    const track = to.meta.track as 'senior' | 'junior' | undefined
    if (track === 'senior' && !SENIOR_CLASSES.includes(session.classCode)) {
      return { path: '/classic' }
    }
    if (track === 'junior' && !JUNIOR_CLASSES.includes(session.classCode)) {
      return { path: '/classic' }
    }
    return
  }
})

export default router
