<template>
<div class="login-panel">
  <div class="title drag">RuChat</div>
  <div class="login-form">
    <div class="error-msg">error</div>
    <el-form :model="formData" :rules="rules" ref="formDataRef" label-width="0px" @submit.prevent>
      <el-form-item prop="email">
        <el-input size="large" clearable v-model.trim="formData.email" placeholder="请输入邮箱" >
          <template #prefix>
            <span class="iconfont icon-email"></span>
          </template>
        </el-input>
      </el-form-item>
        <el-form-item prop="nickname" v-if="!isLogin">
        <el-input  size="large" clearable v-model.trim="formData.nickname" placeholder="请输入昵称">
          <template #prefix>
            <span class="iconfont icon-user-nick"></span>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input show-password size="large" clearable v-model.trim="formData.password" placeholder="请输入密码">
          <template #prefix>
            <span class="iconfont icon-password"></span>
          </template>
        </el-input>
      </el-form-item>
           <el-form-item prop="password" v-if="!isLogin">
        <el-input show-password size="large" clearable v-model.trim="registerPassword" placeholder="请确认密码">
          <template #prefix>
            <span class="iconfont icon-password"></span>
          </template>
        </el-input>
      </el-form-item>
       <el-form-item prop="checkCode">
        <el-input  size="large" clearable v-model.trim="formData.checkCode" placeholder="请输入验证码">
          <template #prefix>
            <span class="iconfont icon-checkcode"></span>
          </template>
        </el-input>
      </el-form-item>
       <el-form-item prop="">
       <el-button type="primary" class="login-btn" @click="handleLogin">{{isLogin?"登录":"注册"}}</el-button>
      </el-form-item>
      <div class="bottom-link">
        <span class="a-link" @click="loginOrRegister">{{isLogin?"没有账号？":"已有账号？"}}</span>
      </div>
    </el-form>

  </div>
</div>
</template>
<script setup lang="ts">
import { ref, getCurrentInstance, toRef } from 'vue';
import { LoginRequest,RegisterRequest } from '../types';
let { proxy }= getCurrentInstance()!;
let formData = ref<RegisterRequest>({ email: '', password: '', checkCode: '', nickname: '' });

function handleLogin(){
  console.log(formData.value);
}
let registerPassword=ref('');
let formDataRef = ref();
const rules = {
  email: [
    { required: true, message: '请输入用户名', }
  ],
  password: [
    { required: true, message: '请输入密码', }
  ]
};
const isLogin = ref(true);
// 登录或注册
function loginOrRegister() {
  // 发送登录或注册消息
  window.ipcRenderer.send('loginOrRegister', !isLogin.value);
  // 切换登录或注册
  isLogin.value = !isLogin.value;
}
</script>

<style lang='scss' scoped>
.email-selet{
  width: 250px;
}
.loading-panel {
  height: calc(100vh - 32px);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img{
    width: 300px;
  }
}

.login-panel{
    background-color: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 3px;
    .title{
      height: 30px;
      padding: 5px 0px 0px 10px;
    }
 
  .login-form{
    padding: 0px 15px 20px 15px;
    :deep(.el-input__wrapper){
      box-shadow: none;
      border-radius: none;
    }
  }
  .el-form-item{
    border-bottom: 1px solid #e5e5e5;
  }
  .email-panel{
    align-items: center;
    width: 100%;
    display: flex;
    .input{
      flex: 1;
    }
    .icon-down{
      margin-left: 3px;
      width: 16px;
      cursor: pointer;
      border: none;
    }
  }
  .error-msg{
    line-height: 30px;
    height: 30px;
    color: #f56c6c;
  }
  .check-code-panel{
    display: flex;
    .check-code{
      cursor: pointer;
      width: 120px;
      margin-left:5px;
    }
  }
  .login-btn{
    margin-top: 20px;
    width: 100%;
    background: #07c160;
    height: 36px;
    font-size: 16px;
  }
  .bottom-link{
    text-align: right;
  }

}
</style>