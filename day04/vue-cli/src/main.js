import Vue from 'vue'
import VueRouter from 'vue-router' //引入路由模块
import App from './App.vue'
import routerConfig from './router.config.js' //一般将路由配置放到单独的文件中，需要引入

//使用VueRoute
Vue.use(VueRouter);

//创建路由实例
const router=new VueRouter(routerConfig);


new Vue({
  el: '#app',
  render: h => h(App),
  router
})
