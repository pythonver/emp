<script setup >
import { topRouter } from '@/router/index.js'
import { userRouter } from '@/router/index.js'
import { User } from '@element-plus/icons-vue'

const param = defineProps({
  username: {
    type: String,
    default: '这位同学'
  },
  id : {
    type: String,
    default: '202313143000401'
  }
})
</script>

<template>
  <p style="padding-left: 20px;margin-top: 20px;color: #6b7281;font-size: 0.75rem">导航</p>
  <el-menu mode="vertical" :router="true" :default-active="$route.path" :ellipsis="false" class="custom-menu">
    <el-menu-item class="custom-menu-item" v-for="item in topRouter" :key="item.path" :index="item.path" :title="item.name">
      {{ item.name }}
    </el-menu-item>
  </el-menu>
  <p style="padding-left: 20px;margin-top: 20px;color: #6b7281;font-size: 0.75rem">个人</p>
  <el-menu mode="vertical" :router="true" :default-active="$route.path" :ellipsis="false" class="custom-menu">
    <el-menu-item class="custom-menu-item"  v-for="item in userRouter" :key="item.path" :index="item.path" :title="item.name">
      <el-icon><User/></el-icon>
      {{ item.name }}
    </el-menu-item>


  </el-menu>
  <el-row  style="margin-top: 20px">
    <el-col :span="24" style="display: flex">
      <el-avatar style="margin-left: 12px" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"/>
      <div style="margin-left: 12px">
        <h4>{{param.username}}</h4>
        <p>{{param.id}}</p>
      </div>
    </el-col>
  </el-row>
  <el-row justify="center">
    <el-button icon="SwitchButton" type="danger" style="width: 100%;margin-top: 10px">退出登录</el-button>
  </el-row>

</template>

<style scoped>
.custom-menu{
  border: none;
}
/* 未被选择的样式 */
.custom-menu /deep/ .el-menu-item {
  color: #666; /* 未选中时的文字颜色 */
  font-size: 14px;
  padding: 0 20px; /* 调整间距 */
}

/* 鼠标悬停时的样式（可选） */
.custom-menu /deep/ .el-menu-item:hover {
  color: #2c3e50; /* 悬停时文字颜色 */
  background-color: #f5f7fa; /* 悬停时背景色 */
}

/* 被选择（激活）时的样式 */
.custom-menu /deep/ .el-menu-item.is-active {
  color: #2563EB; /* 选中时的文字颜色（Element 主题蓝） */
  font-weight: bold; /* 选中时加粗 */
  background-color: #eef7ff; /* 选中时的背景色 */
  border-left: 5px solid #409eff;
  border-radius: 5px;
}
.custom-menu-item{

}
</style>
