import config from '../utils/constants/config'
const axios = require('axios')

const instance = axios.create({
  // baseURL: config.apiDomain,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  },
})

export default instance
