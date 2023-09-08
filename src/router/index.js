import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestimonialsView from '../views/TestimonialsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/testimonials',
      name: 'testimonials',
      component: TestimonialsView
    },
    {
      path: '/rates',
      name: 'rates',
      component: ()=>import('../views/RatesView.vue')
    },
    {
      path: '/teams',
      name: 'teams',
      component: ()=>import('../views/TeamsView.vue')
    },
    { 
      path: '/:pathMatch(.*)*', 
      name: 'NotFound', 
      component: ()=>import('../views/ErrorView.vue') 
    }
  ]
})

export default router
