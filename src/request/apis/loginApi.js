import request from '@/request/request.js'

export default function login(data) {
  return request.post('/login', data)
}
