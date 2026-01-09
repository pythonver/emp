import request from '@/request/request.js'

export default function login(data) {
  return request.post('/user/login', data)
}
export function logout() {
  return request.post('/user/logout')
}
export function register(data) {
  return request.post('/user/register', data)
}

export function getInfo() {
  return request.get('/user/info')
}

export function updateInfo(data) {
  return request.post('/user/info', { data: data })
}
