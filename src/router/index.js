import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import HeadphonesView from '@/views/HeadphonesView.vue'
import SpeakersView from '@/views/SpeakersView.vue'
import EarphonesView from '@/views/EarphonesView.vue'

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
    {
      path: '/categories/speakers',
      name: 'speakers',
      component: SpeakersView,
    },
    {
      path: '/categories/earphones',
      name: 'earphones',
      component: EarphonesView,
    },
    {
      path: '/product/:slug',
      name: 'productDetails',
      component: () => import('../views/ProductDetailsView.vue'),
    },
  ],
})

export default router
