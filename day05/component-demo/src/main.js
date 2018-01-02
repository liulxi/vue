import Vue from 'vue'
import App from './App.vue'

import Login from './components/user'

Vue.use(Login); //只要在index.js中定义了install方法，就可以配置Vue.use()来全局使用

new Vue({
  el: '#app',
  render: h => h(App)
})
