import config from '../utils/constants/config'
const axios = require('axios')

const instance = axios.create({
  baseURL: config.apiDomain,
})

export default instance
