import axios from 'axios'

const state = () => ({
  buses: {}
})

const mutations = {
  _assign_data_buses(state, payload) {
    state.buses = payload
  }
}

const actions = {
  fetchDataBuses
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

function fetchDataBuses({ commit }, links) {
  return new Promise(async (resolve, reject) => {
    try {
      let link = 'http://localhost:8000/api/buses';

      if (links.prev != null) {
        link = links.prev
      } else if (links.next != null) {
        link = links.next
      }

      let network = await axios.get(link)
      commit('_assign_data_buses', network.data)

      resolve(network.data)
    } catch (e) {
      console.error(e)
      reject(e)
    }
  })
}