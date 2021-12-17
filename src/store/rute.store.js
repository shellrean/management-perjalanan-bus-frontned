import axios from 'axios'

const state = () => ({
  rutes: {}
})

const mutations = {
  _assign_data_rutes(state, payload) {
    state.rutes = payload
  }
}

const actions = {
  fetchDataRutes,
  storeNewRute
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

function fetchDataRutes({ commit }, links) {
  return new Promise(async (resolve, reject) => {
    try {
      let link = 'http://localhost:8000/api/rutes';

      if (links.prev != null) {
        link = links.prev
      } else if (links.next != null) {
        link = links.next
      }

      let network = await axios.get(link)
      commit('_assign_data_rutes', network.data)

      resolve(network.data)
    } catch (e) {
      console.error(e)
      reject(e)
    }
  })
}

function storeNewRute({ commit }, rute) {
  return new Promise(async (resolve, reject) => {
    try {
      let link = 'http://localhost:8000/api/rutes';

      let network = await axios.post(link, rute)
      resolve(network.data)
    } catch (e) {
      console.error(e)
      reject(e)
    }
  })
}