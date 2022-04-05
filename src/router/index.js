import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../components/HomeView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: () => import(/* webpackChunkName: "about" */ '../components/TestimonialsView.vue')
  },
  {
    path: '/rates',
    name: 'rates',
    component: () => import('../components/RatesView.vue')
    },
    {
      path: '/teams',
      name: 'teams',
      component: () => import( '../components/TeamsView.vue')
    },
    {
      path: '/member/:memberId',
      name: 'member',
      component: () => import( '../components/TeamMember.vue')
    }
]

const router = new VueRouter({
  routes
})

export default router
