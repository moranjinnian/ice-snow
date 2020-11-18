// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style/reset.css'
import './assets/style/border.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import "./icon/iconfont.css"
import { Search } from 'mint-ui';

Vue.component(Search.name, Search);
Vue.config.productionTip = false

Vue.use(VueAxios,axios);
Vue.use(Mint);
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
