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
    },
    {
      path: '/senior-portal',
      name: 'senior-portal',
      component: SeniorPortalView,
    },
    {
      path: '/portal',
      redirect: '/senior-portal',
    },
    {
      path: '/junior-portal',
      name: 'junior-driver-portal',
      component: JuniorDriverPortalView,
    },
    {
      path: '/senior-player',
      name: 'senior-lesson-player',
      component: SeniorLessonPlayerView,
    },
    {
      path: '/lesson',
      redirect: '/senior-player',
    },
    {
      path: '/junior-player',
      name: 'junior-lesson-player',
      component: JuniorLessonPlayerView,
    },
    {
      path: '/road-test',
      name: 'road-test',
      component: RoadTestView,
    },
  ],
})

router.beforeEach((to) => {
  const isAuthenticated = localStorage.getItem('aidl_auth') === 'true'

  if (to.name === 'signin' && isAuthenticated) {
    return { name: 'home' }
  }

  if (!to.meta.public && !isAuthenticated) {
    return { name: 'signin', query: { redirect: to.fullPath } }
  }
})

export default router
