import Vue from 'vue'
import Vuex from 'vuex'

import bus from './bus.store'
import supir from './supir.store'
import terminal from './terminal.store'

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
    terminal
  }
})
