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

function storeNewDataBus({ commit }, bus) {
  return new Promise(async (resolve, reject) => {
    try {
      let link = 'http://localhost:8000/api/buses';

      let network = await axios.post(link, bus)
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
      let link = 'http://localhost:8000/api/buses/'+busId;

      let network = await axios.get(link)
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
      let link = 'http://localhost:8000/api/buses/'+bus.id;

      let network = await axios.put(link, bus)
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
      let link = 'http://localhost:8000/api/buses/'+busId;

      let network = await axios.delete(link)
      resolve(network.data)
    } catch (e) {
      console.error(e)
      reject(e)
    }
  })
}