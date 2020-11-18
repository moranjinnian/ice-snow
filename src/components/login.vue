<template>
  <div id="home">
    <div class="login">
      <!-- logo -->
      <div class="logo">
        <img src="../assets/images/logo1.png" alt="" />
        <img src="../assets/images/logo2.png" alt="" />
      </div>
      <!-- 操作区域-->
      <div class="operate">
        <!-- 账号 -->
        <mt-field placeholder="请输入手机号" type="tel" v-model="phone">
          <slot><i class="iconfont iconshouji font-style"></i></slot>
        </mt-field>
        <!-- 密码 -->
        <mt-field placeholder="请输入密码" type="password" v-model="password" right-icon="">
          <slot><i class="iconfont iconsuo font-style"></i></slot>
        </mt-field>
        <div class="register">
          <mt-button size="large" type="primary" @click.native="handleClick">点击登录</mt-button>
          <span><router-link to="/" >找回密码</router-link><router-link to="/" >注册账号</router-link></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      value: "搜索",
      phone:"",
      password:"",
    };
  },
  methods:{
  
    handleClick(){

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
