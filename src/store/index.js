import Vue from 'vue'
import Vuex from 'vuex'

import bus from './bus.store'
import supir from './supir.store'

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
    supir
  }
})
