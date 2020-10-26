import axios from 'axios'

const baseURLs = {
  production: 'https://arcane-fjord-39570.herokuapp.com/api',
  // development: 'http://localhost:3000/api',
  // test: 'https://127.0.0.1:64793/api',
}

const api = axios.create({
  baseURL: baseURLs[process.env.NODE_ENV] || 'https://arcane-fjord-39570.herokuapp.com/api',
})

export default api
