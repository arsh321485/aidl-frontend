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
      meta: { requiresPermit: true },
    },
    {
      path: '/portal',
      redirect: '/senior-portal',
    },
    {
      path: '/junior-portal',
      name: 'junior-driver-portal',
      component: JuniorDriverPortalView,
      meta: { requiresPermit: true },
    },
    {
      path: '/senior-player',
      name: 'senior-lesson-player',
      component: SeniorLessonPlayerView,
      meta: { requiresPermit: true },
    },
    {
      path: '/lesson',
      redirect: '/senior-player',
    },
    {
      path: '/junior-player',
      name: 'junior-lesson-player',
      component: JuniorLessonPlayerView,
      meta: { requiresPermit: true },
    },
    {
      path: '/road-test',
      name: 'road-test',
      component: RoadTestView,
      meta: { requiresPermit: true },
    },
  ],
})

router.beforeEach((to) => {
  const isAuthenticated = localStorage.getItem('aidl_auth') === 'true'
  const hasPermit = localStorage.getItem('aidl_permit') === 'true'

  if (to.name === 'signin' && isAuthenticated) {
    return { name: 'home' }
  }

  if (to.meta.public) {
    return
  }

  // Dashboards and lessons are only reachable after finishing the
  // enroll-form -> avatar-picker -> "Confirm & Get Permit" flow.
  if (to.meta.requiresPermit) {
    if (!hasPermit) {
      return { path: '/home', hash: '#enroll' }
    }
    return
  }

  if (!isAuthenticated) {
    return { name: 'signin', query: { redirect: to.fullPath } }
  }
})

export default router
