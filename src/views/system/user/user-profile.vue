<script setup>
import { onMounted, reactive, ref } from 'vue'
import getProfile, { updateProfile } from '@/request/apis/UserProfileApi.js'
import { ElMessage } from 'element-plus'

const formRef = ref()
const formRules = reactive({
  age: [
    { min: 0, max: 120, message: '年龄必须为正数', trigger: 'blur' },
  ]
})
const profile = reactive({
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
const placeholder = {
  workExperience: '请简要描述工作经验（无经验可填 “应届毕业生” 或 “无相关经验”）示例：2 年互联网前端开发经验，负责企业官网、移动端 H5 开发，熟练使用 Vue 生态完成组件封装和性能优化；3 年教育培训行业课程顾问经验，主导 3 期线下课程招生，累计签约学员 120+',
  projectExperience: '请描述核心项目经验（包括项目角色、职责、成果，无则填 “无”）示例：参与电商平台前端重构项目，担任核心开发，负责商品列表、购物车模块开发，优化接口请求策略，页面加载速度提升 40%；主导校园二手交易小程序开发，独立完成前端界面设计与逻辑实现，上线后累计用户 5000+',
  availableTimePerWeek: '请填写每周可投入时间（单位：小时，整数）',

}
const educationValue = [
  "小学",
  "初中",
  "高中",
  "中专",
  "大专",
  "本科",
  "硕士研究生",
  "博士研究生",
  "博士后"
]
const onLoading = ref(true)
onMounted(() => {
  getProfile()
    .then(({ data }) => {
      Object.assign(profile, data.data)
      onLoading.value = false
    })
    .catch((err) => {
      console.log(err)
    })
})

function handleSave(){
  updateProfile(profile).then(() => {
    ElMessage.success('保存成功')
  }).catch(() => {
    ElMessage.error('保存失败了，请充数')
  })
}
function handleReset(){

}
</script>

<template>
  <div class="root-container" v-loading="onLoading">
    <el-form label-position="top" :model="profile" label-width="auto" ref="formRef" :rules="formRules">
      <el-row :gutter="50">
        <el-col :span="10">
          <el-form-item label="年龄" prop="age">
            <el-input v-model="profile.age" placeholder="请填写真实年龄（正数,0-120之间) 如：26" type="number" />
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="学历">
            <el-select v-model="profile.education" placeholder="请选择最高学历">
              <el-option
                v-for="(item, index) in educationValue"
                :key="index"
                :label="item"
                :value="item"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="50">
        <el-col :span="10">
          <el-form-item label="专业">
            <el-input placeholder="请填写所学专业，无专业可填“无” 如：计算机科学与技术" v-model="profile.major" />
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="所在城市">
            <el-input v-model="profile.city" placeholder="请填写当前所在城市（精确到地级市） 如：深圳" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="50">
        <el-col :span="10">
          <el-form-item label="硬技能">
            <el-input type="textarea" v-model="profile.hardSkills" placeholder="请填写硬技能（专业技能，用逗号隔开） 如：java"
          /></el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="软技能">
            <el-input type="textarea" v-model="profile.softSkills" placeholder="请填写软技能（通用能力，用逗号隔开）如：团队协作能力" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="50">
        <el-col :span="10">
          <el-form-item label="工作经历">
            <el-input
              type="textarea"
              :rows="5"
              v-model="profile.workExperience"
              :placeholder="placeholder.workExperience"
          /></el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="项目经历">
            <el-input
              type="textarea"
              :rows="5"
              v-model="profile.projectExperience"
              :placeholder="placeholder.projectExperience"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="50">
        <el-col :span="10">
          <el-form-item label="每周可学习小时，如：23小时">
            <el-input type="number" v-model="profile.availableTimePerWeek" placeholder="请输入可学习时长">
              <template #suffix>
                <el-text>/小时</el-text>
              </template>
            </el-input></el-form-item
          >
        </el-col>
        <el-col :span="10">
          <el-form-item label="学习预算范围">
            <el-input v-model="profile.budgetRange" :placeholder="placeholder.availableTimePerWeek" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="50">
        <el-col :span="10">
          <el-form-item label="MBTI类型">
            <el-input v-model="profile.mbtiType" placeholder="请填写 MBTI 性格类型（如 INTJ/ESFP，无则填 “未测试”）"
          /></el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="保存或取消">
            <el-button type="primary" style="max-width: 200px" @click="handleSave">保存</el-button>
            <el-button type="danger" style="max-width: 200px" @click="handleReset">重置</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<style scoped></style>
