<script setup>
import useUserStore from '@/stores/user.js'
import { storeToRefs } from 'pinia'
import { onMounted, ref, watch } from 'vue'
import { getInfo } from '@/request/apis/UserApi.js'
import { ElMessage } from 'element-plus'

const { updateUserInfo } = useUserStore()
const { userInfo } = storeToRefs(useUserStore())
const info = ref(userInfo)
const isUpdate = ref(false)
const onLoading = ref(true)
watch(userInfo, (v) => {
  info.value = v
})

watch(info, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    isUpdate.value = true
  }
})
onMounted(() => {
  getInfo()
    .then(({ data }) => {
      updateUserInfo(data.data)
      onLoading.value = false
    })
    .catch(() => {
      ElMessage.error('请求失败，请重试')
    })
})

function update() {}
function reset() {}
</script>

<template>
  <div class="root-container" v-loading="onLoading">
    <el-card>
      <el-row>
        <el-col
          style="
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          "
        >
          <el-avatar :size="100" shape="circle">user</el-avatar>
          <h2 style="font-weight: 700">{{ info.name }}</h2>
        </el-col>
      </el-row>

      <el-divider />
      <el-row>
        <el-col class="col-tag">
          <div class="tag" style="height: 20px; width: 5px; background-color: #2563eb" />
          <el-text style="margin-left: 10px; color: #2563eb">我的信息</el-text>
        </el-col>
      </el-row>
      <el-form
        label-position="right"
        label-width="auto"
        style="margin-top: 20px; padding-left: 20px"
      >
        <el-form-item label="姓名:" :prop="info.name">
          <el-input v-model="info.name" style="width: 200px" />
        </el-form-item>

        <el-form-item label="学号:" :prop="info.studentId">
          <el-text>{{ info.studentId }}</el-text>
        </el-form-item>

        <el-form-item label="手机号:" :prop="info.phone">
          <el-input v-model="info.phone" style="width: 200px" />
        </el-form-item>

      </el-form>
      <el-divider />

      <el-row>
        <el-col class="center-col">
          <el-button type="primary" style="width: 100px" @click="update" :disabled="!isUpdate"
            >保存</el-button
          >
          <el-button type="danger" style="width: 100px" @click="reset" :disabled="isUpdate"
            >重置</el-button
          >
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<style scoped></style>
