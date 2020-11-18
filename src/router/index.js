import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      // 登录
      path: '/login',
      component: resolve => require(['../components/login.vue'], resolve),
      meta: {title: '登录'}
  },
  ]
})
