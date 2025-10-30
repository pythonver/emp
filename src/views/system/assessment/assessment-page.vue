<script setup>
import { ref, watch } from 'vue'
import { List } from '@element-plus/icons-vue'

const assessmentType = ref('mbti')
const assessmentStep = ref(0)
const quests = ref([
  {
    qid: 1,
    content: '你喜欢独处?',
    option: [
      { id: 1, content: '是', },
      { id: 2, content: '否' }
    ]
  },
  {
    qid: 2,
    content: '你做决定时更依赖？',
    option: [
      { id: 1, content: '逻辑分析' },
      { id: 2, content: '情感感受' }
    ]
  },
  {
    qid: 3,
    content: '你更擅长？',
    option: [
      { id: 1, content: '制定详细计划' },
      { id: 2, content: '灵活应对变化' }
    ]
  },
  {
    qid: 4,
    content: '你更擅长？',
    option: [
      { id: 1, content: '制定详细计划' },
      { id: 2, content: '灵活应对变化' }
    ]
  }
])
const answer = ref([])
const currentStep = ref(0)
const currentAnswer = ref(0)

const assessmentResult = ref({
  start_date: '2025/10/30',
  result: 'INFJ',
  result_detail: '你是一位务实、果断的人，喜欢组织和管理事务。你倾向于清晰的结构和明确的目标，擅长制定计划并执行。在团队中，你往往是可靠的领导者，能够有效地分配任务并确保项目按时完成。你重视效率和实际结果，不太喜欢模糊不清的情况。'
})

function nextOrSubmit() {
  const curQid = quests.value[currentStep.value].qid
  const hasAnswer = answer.value.findIndex(item => item.qid === curQid)
  if (hasAnswer !== -1) {
    answer.value[hasAnswer].oid = currentAnswer.value
  }else {
    const c = {qid: curQid, oid: currentAnswer.value}
    answer.value.push(c)
  }

  if (currentStep.value + 1 === quests.value.length) {
    console.log("提交答案", answer.value)
    assessmentStep.value = 4
    return
  }
  currentStep.value ++

  const nextQid = quests.value[currentStep.value].qid
  const nextAnswer =  answer.value.findIndex(item => item.qid === nextQid)
  if (nextAnswer === -1) {
    currentAnswer.value = 0
  }else {
    currentAnswer.value = answer.value[nextAnswer.value].oid
  }
}
function lastOne(){
  currentStep.value--

  const curQid = quests.value[currentStep.value].qid
  const curAns =  answer.value.findIndex(item => item.qid === curQid)
  if (curAns === -1) {
    currentAnswer.value = 0
  }else {
    currentAnswer.value = answer.value[curAns].oid
  }
}
</script>

<template>
  <div class="root-container" v-if="assessmentStep !== 4">
    <h1 style="font-weight: 700">职业测评</h1>
    <el-card class="assessment-card" style="margin-top: 20px">
      <template v-if="assessmentStep === 0">
        <h3 style="font-weight: 700">选择测试类型</h3>
        <el-radio-group
          type="button"
          v-model="assessmentType"
          class="no-dot-radio"
          style="margin-top: 20px"
        >
          <el-radio value="mbti" class="assessment-radio">
            <div style="display: flex; flex-direction: column">
              <h3 style="font-weight: 700">MBTI职业性格测评</h3>
              <p>了解你的性格类型，探索适合的职业方向</p>
            </div>
          </el-radio>

          <el-radio value="霍兰德" class="assessment-radio" style="margin-top: 20px">
            <div style="display: flex; flex-direction: column">
              <h3 style="font-weight: 700">霍兰德职业兴趣测评</h3>
              <p>分析兴趣倾向，匹配职业类型</p>
            </div>
          </el-radio>
        </el-radio-group>

        <el-button class="assessment-btn" style="width: 100%;margin-top: 20px;font-size: 1.1rem" size="large" type="primary" icon="VideoPlay" @click="assessmentStep = 1">开始测评</el-button>
      </template>
      <template v-else-if="assessmentStep === 1">
        <el-row >
          <el-col :span="22">第{{currentStep + 1}}题/共{{quests.length}}题</el-col>
          <el-col :span="2"><el-button link type="default" @click="assessmentStep = 0">取消</el-button></el-col>
        </el-row>
        <el-row class="assessment-row">
          <el-col>
            <el-progress :stroke-width="15" :text-inside="true" :percentage="(currentStep + 1) / quests.length * 100"/>
          </el-col>
        </el-row >
        <el-row class="assessment-row">
          <el-col><h2 style="font-weight: 700">{{quests[currentStep].content}}</h2></el-col>
        </el-row>

        <el-radio-group v-model="currentAnswer" class="dot-radio">
          <el-radio
            class="assessment-radio answer-radio"
                    v-for="item in quests[currentStep].option"
                    :key="item.id" :value="item.id">
            {{item.content}}
            </el-radio>
        </el-radio-group>

        <el-row class="assessment-row">
          <el-col :span="20">
            <el-button link type="default" @click="lastOne" :disabled="currentStep === 0">上一题</el-button>
          </el-col>
          <el-col :span="4">
            <el-button type="primary" @click="nextOrSubmit" :disabled="currentAnswer === 0">{{currentStep + 1 === quests.length ? '提交答案' :'下一题'}}</el-button>
          </el-col>
        </el-row>
      </template>
      <template v-else-if="assessmentStep === 2"></template>
    </el-card>
  </div>
  <div class="root-container" v-else>
    <el-card class="assessment-card" style="margin-top: 20px">
      <el-row align="middle">
        <el-col :span="18">
          <h2 style="font-weight: 700">MBTI职业性格测评报告</h2>
          <p>报告生成日期：{{ assessmentResult.start_date }}</p>
        </el-col>
        <el-col :span="6" style="display: flex;align-items: center">
          <el-button icon="download" type="default">下载原报告</el-button>
          <el-button icon="share" type="default">分享</el-button>
        </el-col>
      </el-row>

      <el-card style="background-color: #eff6ff;margin-top: 20px">
        <el-row>
          <el-col :span="22" style="display: flex; flex-direction: row;align-items: center" >
            <img src="@/assets/result.png" alt="" style="max-height: 48px">
            <div style="margin-left: 20px">
              <h3 style="font-weight: 700;">测评结果</h3>
              <h2 style="font-weight: 700;color: #2563EB">{{ assessmentResult.result }}</h2>
            </div>
          </el-col>
        </el-row>
      </el-card>
    </el-card>

    <el-card class="assessment-card" style="margin-top: 20px">
      <h3 style="font-weight: 700">结果分析</h3>
      <p>{{assessmentResult.result_detail}}</p>
    </el-card>
  </div>
</template>

<style scoped>
.assessment-card {
  border-radius: 10px;
}
.el-radio {
  height: auto;
  margin: 0;
}
/* 隐藏单选按钮的圆点 */
.no-dot-radio /deep/ .el-radio__inner {
  display: none; /* 隐藏默认圆点 */
}

/* 隐藏原生 radio 输入框（但保留点击交互） */
.no-dot-radio /deep/ .el-radio__original {
  opacity: 0;
  width: 0;
  height: 0;
}

/* 未选中状态的文字样式 */
.no-dot-radio /deep/ .el-radio__label {
  display: block; /* 让label也撑满宽度，点击区域更大 */
  width: 100%;
  padding: 5px 10px;
  color: #606266;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
}

/* 选中状态的样式（自定义效果，如背景色/文字色） */
.no-dot-radio /deep/ .el-radio.is-checked .el-radio__label {
  color: #409eff; /* 选中文字颜色 */
  font-weight: bold;
  background-color: #eef7ff; /* 选中背景色 */
  /* 圆角效果 */
  border: 2px solid #2563eb;
}
.assessment-radio,
.no-dot-radio {
  width: 100%;
}
.assessment-btn {
  transition: transform 0.3s ease;
}
.assessment-btn:hover {
  transform: scale(1.05); /* 悬停时放大1.05倍，数值可调整（如1.1表示放大10%） */
}
.assessment-row{
  margin-top: 20px;
}
.dot-radio ,.dot-radio /deep/ .el-radio__label{
  width: 100%;
  font-weight: 700;
  font-size: 1.1rem;
}
.answer-radio{
  padding: 5px 10px;
  margin-top: 20px;
  display: block;
}
</style>
