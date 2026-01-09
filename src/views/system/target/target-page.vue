<script setup>
import { reactive, ref } from 'vue'
import { Finished } from '@element-plus/icons-vue'

const target = ref([
  {
    id: 1,
    type: '长期目标',
    start_date: '2024-10-29',
    finish_date: '2027-05-29',
    title: '3年内成为前端开发工程师',
    progress: 15,
    children: [
      {
        title: '学会Vue',
        progress: 90,
      },
      {
        title: '完成2个项目实战',
        progress: 80,
      },
    ],
  },
  {
    id: 1,
    type: '长期目标',
    start_date: '2024-10-29',
    finish_date: '2027-05-29',
    title: '3年内成为前端开发工程师',
    progress: 15,
    children: [
      {
        title: '学会Vue',
        progress: 90,
      },
      {
        title: '完成2个项目实战',
        progress: 80,
      },
    ],
  },
])

const dialog = ref(false)

const targetForm = reactive({
  title: '',
  type: '',
  start_date: '',
  finish_date: '',
})
</script>

<template>
  <div class="root-container">
    <el-row justify="space-between">
      <el-col :span="20"><h2 style="font-weight: 700">职业目标规划</h2></el-col>
      <el-col :span="4"
        ><el-button icon="plus" type="primary" size="large" @click="dialog = true"
          >添加规划目标</el-button
        ></el-col
      >
    </el-row>

    <el-card
      v-for="item in target"
      :key="item.id"
      class="assessment-card"
      style="margin-top: 20px; margin-bottom: 20px"
    >
      <el-row>
        <el-col style="display: flex" :span="20">
          <el-tag>{{ item.type }}</el-tag>
          <p>创建于{{ item.start_date }}</p>
        </el-col>

        <el-col :span="4" style="display: flex; justify-content: end">
          <el-button icon="edit" class="no-border-btn" />
          <el-button icon="delete" class="no-border-btn" />
        </el-col>
      </el-row>

      <el-row>
        <h3 style="font-weight: 700">{{ item.title }}</h3>
      </el-row>
      <el-row>
        <p>
          <el-icon style="margin-right: 5px"><Finished /></el-icon>截止时间{{ item.finish_date }}
        </p>
      </el-row>
      <el-row style="margin-top: 20px; margin-bottom: 20px">
        <el-col>
          <p>完成进度</p>
          <el-progress text-inside :percentage="item.progress" :stroke-width="15" />
        </el-col>
      </el-row>
      <h3 style="font-weight: 700">任务分解</h3>

      <el-row v-for="(i, index) in item.children" :key="index" style="margin-bottom: 20px">
        <el-col>
          <p>{{ i.title }}</p>
          <el-progress text-inside :percentage="i.progress" :stroke-width="15" />
        </el-col>
      </el-row>
    </el-card>

    <el-dialog v-model="dialog">
      <h2 style="font-weight: 700; color: #000">创建新目标</h2>

      <el-form :model="targetForm" label-position="top">
        <el-form-item label="目标标题" class="target-form-item">
          <el-input placeholder="请输入目标标题" v-model="targetForm.title" size="large" />
        </el-form-item>

        <el-row>
          <el-col :span="10">
            <el-form-item label="目标类型" class="target-form-item">
              <el-select v-model="targetForm.type" placeholder="请选择目标类型" size="large">
                <el-option value="长期目标" label="长期目标(一年以上)"></el-option>
                <el-option value="短期目标" label="短期目标(一年以内)"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="10" :offset="2">
            <el-form-item label="截止日期" class="target-form-item">
              <el-date-picker
                v-model="targetForm.finish_date"
                type="date"
                placeholder="请选择截止日期"
                size="large"
              />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row justify="end" style="margin-top: 20px">
          <el-button type="default" plain>取消</el-button>
          <el-button type="primary" plain>保存</el-button>
        </el-row>
      </el-form>
    </el-dialog>
  </div>
</template>

<style scoped>
.root-container {
  height: 100%;
  padding-bottom: 20px;
}
.no-border-btn {
  border: none !important;
}
.target-form-item {
  margin-top: 10px;
}
</style>
