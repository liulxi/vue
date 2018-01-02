import Vue from 'vue'
import App from './App.vue'

import store from './store.js' //导入store对象

new Vue({
  store, //配置store选项，指定store对象	，会自动将store对象注入到所有的子组件中，在子组件中可以this.$store访问store对象
  el: '#app',
  render: h => h(App)
})
