import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/calculadoras',
    name: 'Calculadora',
    component: () => import('../views/Calculadora.vue')    
  },
  {
    path: '/imc',
    name: 'Imc',    
    component: () => import('../views/calculators/IMC.vue')
  },
  {
    path: '/profile',
    name: 'Profile',    
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/articles',
    name: 'Articles',    
    component: () => import('../views/Articles.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: "active",
  routes
})

export default router
