<script setup lang="ts">
import HeaderNav from '@/components/header-nav.vue'
import AsizeNav from '@/components/asize-nav.vue'
import BottomBar from '@/components/bottom-bar.vue'
</script>

<template>
<div class="root-container">
  <el-container style="height: 100%;overflow: hidden">
    <el-header style="border-bottom: 1px #DCDFE6 solid" ><header-nav/></el-header>

    <el-container style="overflow: auto">
      <el-aside width="250px" style="border-right: 1px #DCDFE6 solid;padding: 15px">
        <asize-nav/>
      </el-aside>
      <el-container>
        <el-main><RouterView/></el-main>
        <el-footer height="30px"><bottom-bar/></el-footer>
      </el-container>

    </el-container>
  </el-container>
</div>
</template>

<style scoped>
.root-container {
  height: 100%;
}
</style>
