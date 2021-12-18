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
  storeNewRute,
  getDataRute,
  updateDataRute,
  deleteDataRute
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

function getDataRute({ commit }, ruteId) {
  return new Promise(async (resolve, reject) => {
    try {
      let link = 'http://localhost:8000/api/rutes/'+ruteId;

      let network = await axios.get(link)
      resolve(network.data)
    } catch (e) {
      console.error(e)
      reject(e)
    }
  })
}

function updateDataRute({ commit }, rute) {
  return new Promise(async (resolve, reject) => {
    try {
      let link = 'http://localhost:8000/api/rutes/'+rute.id;

      let network = await axios.put(link, rute)
      resolve(network.data)
    } catch (e) {
      console.error(e)
      reject(e)
    }
  })
}

function deleteDataRute({ commit }, ruteId) {
  return new Promise(async (resolve, reject) => {
    try {
      let link = 'http://localhost:8000/api/rutes/'+ruteId;

      let network = await axios.delete(link)
      resolve(network.data)
    } catch (e) {
      console.error(e)
      reject(e)
    }
  })
}