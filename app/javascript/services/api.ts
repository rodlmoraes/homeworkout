import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'production'
  ? 'https://arcane-fjord-39570.herokuapp.com/api'
  : 'http://localhost:3000/api'
const api = axios.create({
  baseURL,
})

export default api
