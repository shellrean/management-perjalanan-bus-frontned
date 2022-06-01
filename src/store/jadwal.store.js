import $http from '../api';

const state = () => ({
  jadwals: {}
})

const mutations = {
  _assign_data_jadwals(state, payload) {
    state.jadwals = payload
  }
}

const actions = {
  fetchDataJadwals,
  storeDataJadwal,
  getDataJadwal,
  updateDataJadwal
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

function fetchDataJadwals({ commit }, links) {
  return new Promise(async (resolve, reject) => {
    try {
      let link = 'jadwals';

      if (links.prev != null) {
        link = links.prev
      } else if (links.next != null) {
        link = links.next
      }

      let network = await $http.get(link)
      commit('_assign_data_jadwals', network.data)

      resolve(network.data)
    } catch (e) {
      console.error(e)
      reject(e)
    }
  })
}

function storeDataJadwal({ }, payload) {
  return new Promise(async (resolve, reject) => {
    try {
      let link = "jadwals";

      let network = await $http.post(link, payload)
      resolve(network.data)
    } catch (e) {
      console.error(e)
      reject(e)
    }
  })
}

function getDataJadwal({ }, jadwalId) {
  return new Promise(async (resolve, reject) => {
    try {
      let link = "jadwals/" + jadwalId;

      let network = await $http.get(link)
      resolve(network.data)
    } catch (e) {
      console.error(e)
      reject(e)
    }
  })
}

function updateDataJadwal({ }, payload) {
  return new Promise(async (resolve, reject) => {
    try {
      let link = "jadwals/" + payload.id;

      let network = await $http.put(link, payload)
      resolve(network.data)
    } catch (e) {
      console.error(e)
      reject(e)
    }
  })
}