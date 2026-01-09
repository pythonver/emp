<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'
</script>

<template>
  <div class="root-container">
    <!--  简介  -->
    <el-card class="home-card custom-card" body-style="margin: 0;padding:1.5rem">
      <h2 style="font-weight: 700">欢迎使用大学生职业生涯规划系统</h2>
      <p style="color: #374151">
        这是一个帮助大学生进行职业生涯规划与分析的综合平台，通过职业测评、目标规划、
        职业信息查询等功能，助您找到适合自己的职业发展方向。
      </p>
    </el-card>

    <el-card class="home-card" style="margin-top: 20px">
      <el-row :align="'middle'">
        <el-col :span="22">
          <h1 style="font-weight: 700">欢迎回来，张三</h1>
          <p>2025年10月30日星期四</p>
        </el-col>
        <el-col :span="2">
          <el-avatar
            style="margin-left: 12px"
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          />
        </el-col>
      </el-row>
    </el-card>

    <el-card class="home-card" style="margin-top: 20px">
      <el-row>
        <el-col :span="20"><h3 style="font-weight: 700">职业规划进度</h3></el-col>
        <el-col :span="4"> <el-tag size="large" round>35%已完成</el-tag> </el-col>
      </el-row>
      <el-row style="margin-top: 20px">
        <el-col :span="24">
          <el-progress :color="'#2563eb'" :stroke-width="15" :text-inside="true" :percentage="35" />
        </el-col>
      </el-row>
      <el-row style="margin-top: 20px">
        <el-col :span="20" style="display: flex; justify-content: start">
          <p style="font-size: 1rem">下一步行动：</p>
          <el-button link type="primary" style="font-size: 1rem">完成职业测评</el-button>
        </el-col>
        <el-col :span="4">
          <el-button link type="primary" style="font-size: 1rem"
            >立即行动<el-icon><ArrowRight /></el-icon
          ></el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<style scoped>
.home-card {
  border-radius: 10px;
}
.custom-card {
  background-image: linear-gradient(to bottom right, #eff6ff, #faf5ff);
}
</style>
