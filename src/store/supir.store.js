import axios from 'axios'

const state = () => ({
  supirs: {}
})

const mutations = {
  _assign_supirs_data(state, payload) {
    state.supirs = payload
  }
}

const actions = {
  fetchDataSupirs,
  storeNewDataSupir,
  findDataSupir,
  updateNewDataSupir,
  deleteDataSupir
}

export default {
  namespaced: true,
  state, 
  mutations,
  actions
}

function fetchDataSupirs({ commit }, links) {
  return new Promise(async (resolve, reject) => {
    try {
      let link = 'http://localhost:8000/api/supirs';

      if (links.prev != null) {
        link = links.prev
      } else if (links.next != null) {
        link = links.next
      }

      let network = await axios.get(link)
      commit('_assign_supirs_data', network.data)

      resolve(network.data)
    } catch (e) {
      console.error(e)
      reject(e)
    }
  })
}

function storeNewDataSupir({ commit }, supir) {
  return new Promise(async (resolve, reject) => {
    try {
      let link = 'http://localhost:8000/api/supirs';

      let network = await axios.post(link, supir)
      resolve(network.data)
    } catch (e) {
      console.error(e)
      reject(e)
    }
  })
}

function findDataSupir({ commit }, supirId) {
  return new Promise(async (resolve, reject) => {
    try {
      let link = 'http://localhost:8000/api/supirs/'+supirId;

      let network = await axios.get(link)
      resolve(network.data)
    } catch (e) {
      console.error(e)
      reject(e)
    }
  })
}

function updateNewDataSupir({ commit }, supir) {
  return new Promise(async (resolve, reject) => {
    try {
      let link = 'http://localhost:8000/api/supirs/'+supir.id;

      let network = await axios.put(link, supir)
      resolve(network.data)
    } catch (e) {
      console.error(e)
      reject(e)
    }
  })
}

function deleteDataSupir({ commit }, supirId) {
  return new Promise(async (resolve, reject) => {
    try {
      let link = 'http://localhost:8000/api/supirs/'+supirId;

      let network = await axios.delete(link)
      resolve(network.data)
    } catch (e) {
      console.error(e)
      reject(e)
    }
  })
}