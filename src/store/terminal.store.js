import axios from 'axios'

const state = () => ({
  terminals: {}
})

const mutations = {
  _assign_terminals_data(state, payload) {
    state.terminals = payload
  }
}

const actions = {
  fetchDataTerminals,
  storeNewTerminal
}

export default {
  namespaced: true,
  state, 
  mutations,
  actions
}

function fetchDataTerminals({ commit }, links) {
  return new Promise(async (resolve, reject) => {
    try {
      let link = 'http://localhost:8000/api/terminals';

      if (links.prev != null) {
        link = links.prev
      } else if (links.next != null) {
        link = links.next
      }

      let network = await axios.get(link)
      commit('_assign_terminals_data', network.data)

      resolve(network.data)
    } catch (e) {
      console.error(e)
      reject(e)
    }
  })
}

function storeNewTerminal({ commit }, terminal) {
  return new Promise(async (resolve, reject) => {
    try {
      let link = 'http://localhost:8000/api/terminals';

      let network = await axios.post(link, terminal)
      resolve(network.data)
    } catch (e) {
      console.error(e)
      reject(e)
    }
  })
}