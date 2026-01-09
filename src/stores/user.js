import { defineStore } from 'pinia'
import { reactive } from 'vue'

const useUserStore = defineStore('user', () => {
  const userInfo = reactive({
    userId: undefined,
    studentId: '',
    name: '',
    phone: '',
  })
  const userProfile = reactive({
    createdAt: '',
    updatedAt: '',
    id: 0,
    userId: 0,
    age: 0,
    education: '',
    major: '',
    city: '',
    hardSkills: '',
    softSkills: '',
    workExperience: '',
    projectExperience: '',
    availableTimePerWeek: 0,
    budgetRange: '',
    mbtiType: '',
  })
  function updateUserInfo(data) {
    Object.keys(data).forEach((key) => {
      userInfo[key] = data[key]
    })
  }
  return { userInfo, updateUserInfo, userProfile }
})

export default useUserStore
