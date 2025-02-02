<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import {  reactive } from 'vue';

//const { proxy } = getCurrentInstance();
const locale = zhCn;
const config = reactive({
  max:1
})
</script>

<template>
  <el-config-provider :locale="locale" :message="config">
   <router-view></router-view>
  </el-config-provider>
</template>

<style lang='scss' scoped>

</style>