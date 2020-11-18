<template>
  <div id="home">
    <!-- 顶部 -->
    <div class="header">
      <router-link to="/" slot="left">
       <i class="iconfont iconLC_icon_user_line_1"></i>
      </router-link>
      <!-- 搜索框 -->
      <div class="searchbar">
        <i class="iconfont iconsousuo"></i>
        <input type="text" name="" id="">
      </div>

    </div>
    <!-- 主体内容 -->
    <div class="content">
      <div class="banner">
        <img src="../assets/images/index_img1.png" alt="">
      </div>
      <ul class="link-list">
        <li><router-link to="/login" ><i class="iconfont iconyonghu1"></i><span>注册登录</span></router-link></li>
        <li><router-link to="/" ><i class="iconfont iconshuben"></i><span>活动介绍</span></router-link></li>
        <li><router-link to="/" ><i class="iconfont iconfenlei"></i><span>下载专区</span></router-link></li>
      </ul>
      <!-- pic-list -->
       <ul class="pic-list">
        <li><router-link to="/" ><img src="../assets/images/index_img2.png" alt=""></router-link></li>
        <li><router-link to="/" ><img src="../assets/images/index_img3.png" alt=""></router-link></li>
        <li><router-link to="/" ><img src="../assets/images/index_img4.png" alt=""></router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      value:'搜索',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
