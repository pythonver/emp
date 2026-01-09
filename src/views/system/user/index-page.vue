<script setup>
import { ref } from 'vue'

import BaseInfo from '@/views/system/user/base-info.vue'
import UserProfile from '@/views/system/user/user-profile.vue'

const activeName = ref('user-info')
</script>

<template>
  <div class="root-container">
    <el-tabs v-model="activeName" type="card" class="demo-tabs">
      <el-tab-pane label="我的资料" name="user-info">
        <base-info/>
      </el-tab-pane>
      <el-tab-pane label="我的画像" name="user-detail">
        <user-profile />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped>
.center-col {
  display: flex;
  justify-content: center;
  align-items: center;
}
.col-tag {
  display: flex;
  align-items: center;
}
</style>
