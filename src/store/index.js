import Vue from 'vue'
import Vuex from 'vuex'

import bus from './bus.store'
import supir from './supir.store'
import terminal from './terminal.store'
import rute from './rute.store'
import jadwal from './jadwal.store'
import auth from './auth.store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    access_token: localStorage.getItem('access_token')
  },
  mutations: {
    _set_token(state, payload) {
      state.access_token = payload
    }
  },
  actions: {
  },
  getters: {
    isAuth: state => {
      if(state.access_token != "" && state.access_token != null) {
        return true
      }
      return false
    }
  },
  modules: {
    bus,
    supir,
    terminal,
    rute,
    jadwal,
    auth
  }
})
