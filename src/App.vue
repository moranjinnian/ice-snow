<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
  fnResize()
    window.onresize = function () {
    fnResize()
  }
  function fnResize() {
    var deviceWidth = document.documentElement.clientWidth || window.innerWidth
    if (deviceWidth >= 750) {
      deviceWidth = 750
    }
    if (deviceWidth <= 320) {
      deviceWidth = 320
    }
    document.documentElement.style.fontSize = (deviceWidth / 7.5*2) + 'px'
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
