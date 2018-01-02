<template>
	<h1>welcome to itany</h1>

	<h2 @click="change">{{name}}</h2>

	<user-list></user-list>
</template>	

<script>
	// console.log(111);
	export default {
		data(){
			return {
				name:'tom'
			}
		},
		methods:{
			change(){
				this.name='汤姆'
			}
		},
		components:{
			'user-list':User
		}
	}

	//引入模块
	import User from './components/User.vue'
</script>

<style>	
	body{
		background-color: #ccc;
	}
	h1{
		color:blue;
	}
</style>