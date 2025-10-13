import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import HeadphonesView from '@/views/HeadphonesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/categories/headphones',
      name: 'headphones',
      component: HeadphonesView,
    },
  ],
})

export default router
