import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import BusIndex from '../views/bus/Bus.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bus',
    name: 'bus.index',
    component: BusIndex
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
