import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import BusIndex from '../views/bus/Bus.vue'
import BusAdd from '../views/bus/Add.vue'
import BusEdit from '../views/bus/Edit.vue'

import SupirIndex from '../views/supir/Supir.vue'
import SupirAdd from '../views/supir/Add.vue'
import SupirEdit from '../views/supir/Edit.vue'

import TerminalIndex from '../views/terminal/Terminal.vue'
import TerminalAdd from '../views/terminal/Add.vue'
import TerminalEdit from '../views/terminal/Edit.vue'

import RuteIndex from '../views/rute/Rute.vue'
import RuteAdd from '../views/rute/Add.vue'
import RuteEdit from '../views/rute/Edit.vue'
import RuteView from '../views/rute/View.vue'

import JadwalIndex from '../views/jadwal/Jadwal.vue'
import JadwalAdd from '../views/jadwal/Add.vue'
import JadwalEdit from '../views/jadwal/Edit.vue'

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
  },
  {
    path: '/supir',
    name: 'supir.index',
    component: SupirIndex
  },
  {
    path: '/supir/add',
    name: 'supir.add',
    component: SupirAdd
  },
  {
    path: '/supir/:id/edit',
    name: 'supir.edit',
    component: SupirEdit
  },
  {
    path: '/terminal',
    name: 'terminal.index',
    component: TerminalIndex
  },
  {
    path: '/terminal/add',
    name: 'terminal.add',
    component: TerminalAdd
  },
  {
    path: '/terminal/:id/edit',
    name: 'terminal.edit',
    component: TerminalEdit
  },
  {
    path: '/rute',
    name: 'rute.index',
    component: RuteIndex
  },
  {
    path: '/rute/add',
    name: 'rute.add',
    component: RuteAdd
  },
  {
    path: '/rute/:id/edit',
    name: 'rute.edit',
    component: RuteEdit
  },
  {
    path: '/rute/:id',
    name: 'rute.show',
    component: RuteView
  },
  {
    path: '/jadwal',
    name: 'jadwal.index',
    component: JadwalIndex
  },
  {
    path: '/jadwal/add',
    name: 'jadwal.add',
    component: JadwalAdd
  },
  {
    path: '/jadwal/:id/edit',
    name: 'jadwal.edit',
    component: JadwalEdit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
