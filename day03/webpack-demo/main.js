/**
 * 使用ES6语法引入模块
 */

import Vue from 'vue' //引入内置模块，直接指定名称
import App from './App.vue' //引入自定义模块，需要指定路径 

new Vue({
	el:'body',
	components:{
		app:App
	}
});