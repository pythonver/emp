import request from '@/request/request.js'


export default function getProfile(){
  return request.get('/userprofile/get')
}

export function updateProfile(data){
  return request.post('/userprofile/update',data)
}
