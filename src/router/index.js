import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import BusIndex from '../views/bus/Bus.vue'
import BusAdd from '../views/bus/Add.vue'
import BusEdit from '../views/bus/Edit.vue'

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
  },
  {
    path: '/bus/add',
    name: 'bus.add',
    component: BusAdd
  },
  {
    path: '/bus/:id/edit',
    name: 'bus.edit',
    component: BusEdit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
