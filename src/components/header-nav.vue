<script setup>
import { topRouter } from '@/router/index.js'

const param = defineProps({
  studentId: {
    type: String,
    required: false,
    default: '学生名字',
  },
})
</script>

<template>
  <el-row style="height: 100%">
    <el-col :span="8" style="display: flex; justify-content: center; align-items: center">
      <h2
        style="
          font-size: 1.2rem;
          font-weight: 700;
          color: #2563eb;
          background-color: #dbeafe;
          border-radius: 5px;
          padding: 0 5px;
        "
      >
        职
      </h2>
      <h2 style="font-size: 1.2rem; font-weight: 700">大学生职业生涯规划系统</h2>
    </el-col>
    <el-col :span="8" style="display: flex; justify-content: center; align-items: center">
      <el-menu mode="horizontal" :router="true" :default-active="$route.path" :ellipsis="false">
        <el-menu-item
          v-for="item in topRouter"
          :key="item.path"
          :index="item.path"
          :title="item.name"
          >{{ item.name }}</el-menu-item
        >
      </el-menu>
    </el-col>
    <el-col :span="8" style="display: flex; justify-content: center; align-items: center">
      <el-button icon="Search" round />
      <el-button icon="Sunny" round />
      <el-avatar
        style="margin-left: 12px"
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      />
      <p style="margin-left: 12px">{{ param.studentId }}</p>
    </el-col>
  </el-row>
</template>

<style scoped></style>
