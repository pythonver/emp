<script setup>
import { reactive, ref } from 'vue'
import { register } from '@/request/apis/UserApi.js'
import { ElMessage } from 'element-plus'
import router from '@/router/index.js'

const registerForm = reactive({
  name: '',
  studentId: '',
  password: '',
})
const isLoading = ref(false)

function toRegister() {
  isLoading.value = true
  register(registerForm)
    .then(() => {
      ElMessage.success('注册成功')
      router.push({ path: '/login' })
    })
    .catch((err) => {
      ElMessage.error(err)
    })
    .finally(() => {
      isLoading.value = false
    })
}
</script>

<template>
  <div class="root-container">
    <el-form :model="registerForm" label-width="auto" class="login-form" label-position="top">
      <div
        style="
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-bottom: 2rem;
        "
      >
        <h1 style="font-size: 1.4rem; font-weight: 700">大学生职业生涯规划系统</h1>
        <p>注册账号开始职业规划之旅</p>
      </div>
      <el-form-item label="姓名">
        <el-input type="text" placeholder="输入姓名" v-model="registerForm.name" size="large" />
      </el-form-item>

      <el-form-item label="学号">
        <el-input
          type="text"
          placeholder="输入账号"
          v-model="registerForm.studentId"
          size="large"
        />
      </el-form-item>

      <el-form-item label="密码">
        <el-input
          type="password"
          show-password
          placeholder="密码"
          v-model="registerForm.password"
          size="large"
        />
      </el-form-item>

      <el-button
        style="width: 100%"
        type="primary"
        color="#2563eb"
        :loading="isLoading"
        @click="toRegister"
        size="large"
      >
        {{ isLoading ? '注册中..' : '立即注册' }}
      </el-button>

      <div class="to-login">
        <p>已有账号？</p>
        <router-link to="/login">
          <el-button link type="primary">登录</el-button>
        </router-link>
      </div>
    </el-form>
  </div>
</template>

<style scoped>
.root-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login-form {
  width: 450px;
  border: 1px solid #dcdfe6;
  box-sizing: content-box;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.to-login {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}
</style>
