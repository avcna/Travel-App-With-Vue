import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    {
      path: '/destination/:id/:slug',
      name: 'destination.show',
      component: () => import('@/views/DestinationShow.vue'),
    },
    {
      path: '/experience/:id/:slug',
      name: 'experience.show',
      component: () => import('@/views/ExperienceShow.vue'),
    },
  ],
  // linkActiveClass: 'vue-school-active-link',    <-- for customizing active class
})

export default router
