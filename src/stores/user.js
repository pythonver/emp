import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getAllUsers } from '@/request/apis/userApi.js'

const useUserStore = defineStore('user', () => {
  const userList = ref([])

  function initUserList() {
    getAllUsers().then(({ data }) => {
      userList.value = data.data || []
    })
  }
  function updateUserList(data) {
    userList.value = data
  }
  function addNewUser(data) {
    userList.value.push(data)
  }
  return { userList, initUserList, updateUserList, addNewUser }
})

export default useUserStore
