import Login from './Login.vue'

export default {
	install:function(Vue){ //需要配置install方法
		Vue.component('Login',Login);
	}
}