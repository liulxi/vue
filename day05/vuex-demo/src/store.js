/**
 * vuex配置
 */

 import Vue from 'vue'
 import Vuex from 'vuex'

 Vue.use(Vuex);


 //定义属性(数据)
 var state={
 	count:7
 };

 //定义getters，用来获取属性
 const getters={
 	count(state){ //接收参数state对象
 		return state.count;
 	},
 	isEvenOrOdd(state){
 		return state.count%2==0?'偶数':'奇数'
 	}
 }

 //定义方法(动作)，要执行的操作，如流程控制、判断、异步请求等
 const actions={
 	/*increment:(context) => { //参数context是一个与store对象具有相同属性的方法的对象，但并不是store对象本身
 		// console.log(111);
 		// console.log(context); //包含：commit、state、dispatch、rootGetters、rootState、getters
 		console.log(context.commit;
 		console.log(context.state);
 	}*/
 	increment:({commit,state}) => { //ES6的对象解构
 		// console.log(commit);
 		// console.log(state);
 		commit('increment'); //提交一个名为increment的变化，名称可自定义，可认为是类型名
 	},
 	decrement:({commit,state}) => {
 		//判断当数字大于10时才能减少
 		if(state.count>10){
 			commit('decrement');
 		}
 	},
 	incrementAsyn:({commit}) => {
 		//异步操作
 		var p = new Promise((resolve,reject) => {
 			setTimeout(()=>{
 				resolve();
 			},3000);
 		});
 		p.then(()=>{
 			commit('increment');
 		}).catch(()=>{
 			console.log('异步操作失败');
 		});
 	}
 }

 //定义变化，处理状态的改变
 const mutations={
 	increment(state){
 		state.count++;
 	},
 	decrement(state){
 		state.count--;
 	}
 }


//创建store对象
const store=new Vuex.Store({
	state,
	getters,
	actions,
	mutations
});

 //导出store对象
 export default store;