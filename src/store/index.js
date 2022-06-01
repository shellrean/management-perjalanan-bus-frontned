import Vue from 'vue'
import Vuex from 'vuex'

import bus from './bus.store'
import supir from './supir.store'
import terminal from './terminal.store'
import rute from './rute.store'
import jadwal from './jadwal.store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    bus,
    supir,
    terminal,
    rute,
    jadwal
  }
})
