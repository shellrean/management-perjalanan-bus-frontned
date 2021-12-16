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
  storeNewTerminal,
  findTerminal,
  updateTerminal,
  deleteTerminal
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

function updateTerminal({ commit }, terminal) {
  return new Promise(async (resolve, reject) => {
    try {
      let link = 'http://localhost:8000/api/terminals/'+terminal.id;

      let network = await axios.put(link, terminal)
      resolve(network.data)
    } catch (e) {
      console.error(e)
      reject(e)
    }
  })
}

function findTerminal({ commit }, terminalId) {
  return new Promise(async (resolve, reject) => {
    try {
      let link = 'http://localhost:8000/api/terminals/'+terminalId;

      let network = await axios.get(link)
      resolve(network.data)
    } catch (e) {
      console.error(e)
      reject(e)
    }
  })
}

function deleteTerminal({ commit }, terminalId) {
  return new Promise(async (resolve, reject) => {
    try {
      let link = 'http://localhost:8000/api/terminals/'+terminalId;

      let network = await axios.delete(link)
      resolve(network.data)
    } catch (e) {
      console.error(e)
      reject(e)
    }
  })
}