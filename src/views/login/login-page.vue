<script setup>
import { reactive, ref } from 'vue'
import router from '@/router/index.js'
import login from '@/request/apis/UserApi.js'
import { ElMessage } from 'element-plus'
import { useRoute } from 'vue-router'
const type = useRoute().query.type
if (type === 'logout') {
  console.log("删除")
  localStorage.removeItem('token')
  // window.location.reload()
  router.replace({
    path: '/login', // 目标路径（还是 login 页）
    query: {} // 清空查询参数
  }).then(() => {
    // 替换 URL 后再刷新（此时 URL 已没有 type=logout，不会循环）
    window.location.reload();
  });
}

const loginForm = reactive({
  studentId: '',
  password: '',
})
const isLogin = ref(false)

function toLogin() {
  isLogin.value = true
  login(loginForm)
    .then(({ data }) => {
      router.push('/system')
      localStorage.setItem('token', data.data)
    })
    .catch((error) => {
      ElMessage.error(error.message)
    })
    .finally(() => {
      isLogin.value = false
    })

  // router.push('/system')
}
</script>

<template>
  <div class="root-container">
    <el-form :model="loginForm" label-width="auto" class="login-form" label-position="top">
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
        <p>登录您的账号开始职业规划之旅</p>
      </div>
      <el-form-item label="学号">
        <el-input type="text" placeholder="输入账号" v-model="loginForm.studentId" size="large" />
      </el-form-item>

      <el-form-item label="密码">
        <el-input
          type="password"
          show-password
          placeholder="密码"
          v-model="loginForm.password"
          size="large"
        />
      </el-form-item>

      <el-button
        style="width: 100%"
        type="primary"
        color="#2563eb"
        :loading="isLogin"
        @click="toLogin"
        size="large"
      >
        {{ isLogin ? '登陆中..' : '登录' }}
      </el-button>

      <div class="to-register">
        <p>还没有账号？</p>
        <router-link to="/register">
          <el-button link type="primary">立即注册</el-button>
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
.to-register {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}
</style>
