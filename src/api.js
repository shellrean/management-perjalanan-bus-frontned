import axios from 'axios';


const $axios = axios.create({
  headers: {
    'Accept': 'application/json'
  }
})

$axios.interceptors.request.use(
  function(config) {
    config.url = `${process.env.VUE_APP_BASE_URL}/api/${config.url}`
    return config;
  },
  function(error) {
    return Promise.reject(error)
  }
)

export default $axios;