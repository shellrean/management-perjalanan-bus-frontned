import $http from '../api';

const state = () => ({
  buses: {},
  page: 1
})

const mutations = {
  _assign_data_buses(state, payload) {
    state.buses = payload
  },
  _set_page(state, payload) {
    state.page = payload
  }
}

const actions = {
  fetchDataBuses,
  storeNewDataBus,
  getBusData,
  updateDataBus,
  deleteBusData
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

function fetchDataBuses({ commit, state }) {
  return new Promise(async (resolve, reject) => {
    try {
      let link = 'buses?page='+state.page;

      let network = await $http.get(link)
      commit('_assign_data_buses', network.data)

      resolve(network.data)
    } catch (e) {
      console.error(e)
      reject(e)
    }
  })
}

function storeNewDataBus({ commit }, bus) {
  return new Promise(async (resolve, reject) => {
    try {
      let link = 'buses';

      let network = await $http.post(link, bus)
      resolve(network.data)
    } catch (e) {
      console.error(e)
      reject(e)
    }
  })
}

function getBusData({ commit }, busId) {
  return new Promise(async (resolve, reject) => {
    try {
      let link = 'buses/'+busId;

      let network = await $http.get(link)
      resolve(network.data)
    } catch (e) {
      console.error(e)
      reject(e)
    }
  })
}

function updateDataBus({ commit }, bus) {
  return new Promise(async (resolve, reject) => {
    try {
      let link = 'buses/'+bus.id;

      let network = await $http.put(link, bus)
      resolve(network.data)
    } catch (e) {
      console.error(e)
      reject(e)
    }
  })
}

function deleteBusData({ commit }, busId) {
  return new Promise(async (resolve, reject) => {
    try {
      let link = 'buses/'+busId;

      let network = await $http.delete(link)
      resolve(network.data)
    } catch (e) {
      console.error(e)
      reject(e)
    }
  })
}