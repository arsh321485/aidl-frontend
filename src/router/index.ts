import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DriverPortalView from '../views/DriverPortalView.vue'
import LessonPlayerView from '../views/LessonPlayerView.vue'
import RoadTestView from '../views/RoadTestView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/portal',
      name: 'driver-portal',
      component: DriverPortalView,
    },
    {
      path: '/lesson',
      name: 'lesson-player',
      component: LessonPlayerView,
    },
    {
      path: '/road-test',
      name: 'road-test',
      component: RoadTestView,
    },
  ],
})

export default router
