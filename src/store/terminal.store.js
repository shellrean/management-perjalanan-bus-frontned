import $http from '../api';

const state = () => ({
  terminals: {},
  page: 1
})

const mutations = {
  _assign_terminals_data(state, payload) {
    state.terminals = payload
  },
  _set_page(state, payload) {
    state.page = payload
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

function fetchDataTerminals({ commit, state }, qSearch) {
  return new Promise(async (resolve, reject) => {
    try {
      let link = `terminals?page=${state.page}&q=${qSearch}`;

      let network = await $http.get(link)
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
      let link = 'terminals';

      let network = await $http.post(link, terminal)
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
      let link = 'terminals/'+terminal.id;

      let network = await $http.put(link, terminal)
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
      let link = 'terminals/'+terminalId;

      let network = await $http.get(link)
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
      let link = 'terminals/'+terminalId;

      let network = await $http.delete(link)
      resolve(network.data)
    } catch (e) {
      console.error(e)
      reject(e)
    }
  })
}