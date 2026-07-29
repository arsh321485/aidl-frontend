import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SeniorPortalView from '../views/SeniorPortalView.vue'
import JuniorDriverPortalView from '../views/JuniorDriverPortalView.vue'
import SeniorLessonPlayerView from '../views/SeniorLessonPlayerView.vue'
import JuniorLessonPlayerView from '../views/JuniorLessonPlayerView.vue'
import RoadTestView from '../views/RoadTestView.vue'
import SignInView from '../views/SignInView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signin',
      component: SignInView,
      meta: { public: true },
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
  ],
})

const SENIOR_CLASSES = ['L', 'O', 'S']
const JUNIOR_CLASSES = ['J', 'T']

router.beforeEach((to) => {
  const isAuthenticated = localStorage.getItem('aidl_auth') === 'true'

  if (to.name === 'signin' && isAuthenticated) {
    return { name: 'home' }
  }

  if (to.meta.public) {
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

  if (!isAuthenticated) {
    return { name: 'signin', query: { redirect: to.fullPath } }
  }
})

export default router
