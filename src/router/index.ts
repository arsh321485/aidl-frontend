import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SeniorPortalView from '../views/SeniorPortalView.vue'
import JuniorDriverPortalView from '../views/JuniorDriverPortalView.vue'
import SeniorLessonPlayerView from '../views/SeniorLessonPlayerView.vue'
import JuniorLessonPlayerView from '../views/JuniorLessonPlayerView.vue'
import RoadTestView from '../views/RoadTestView.vue'
import SignInView from '../views/SignInView.vue'
import SignUpView from '../views/SignUpView.vue'
import FleetOfficeView from '../views/FleetOfficeView.vue'
import TeamsCallbackView from '../views/TeamsCallbackView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
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
      // Renders HomeView itself (not a redirect) — Vue Router reuses the same
      // component instance across /home <-> /jobs since it's the identical
      // import, so the nav/enroll-modal/sign-in state and DOM never remount.
      // HomeView swaps only the section below the nav based on route.path.
      component: HomeView,
      meta: { public: true },
    },
    {
      path: '/fleet-office',
      name: 'fleet-office',
      component: FleetOfficeView,
      meta: { requiresAdmin: true },
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
      return { path: '/home' }
    }
    const track = to.meta.track as 'senior' | 'junior' | undefined
    if (track === 'senior' && !SENIOR_CLASSES.includes(session.classCode)) {
      return { path: '/home' }
    }
    if (track === 'junior' && !JUNIOR_CLASSES.includes(session.classCode)) {
      return { path: '/home' }
    }
    return
  }
})

export default router
