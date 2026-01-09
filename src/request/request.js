import axios from 'axios'

const request = axios.create({
  // baseURL: 'http://localhost:8080',
  baseURL: 'http://192.168.43.33:8080',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})
request.interceptors.request.use(
  (config) => {
    if (localStorage.getItem('token')) {
      config.headers['Authorization'] = localStorage.getItem('token')
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

request.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  },
)
export default request
