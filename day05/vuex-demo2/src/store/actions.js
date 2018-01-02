/**
 * 定义方法
 */

import types from './types.js'

const actions={
 	increment:({commit}) => {
 		commit(types.INCREMENT);
 	},
 	decrement:({commit,state}) => {
 		if(state.user.count>10){ //注意访问形式，数据在模块下
 			commit(types.DECREMENT);
 		}
 	}
 }

 export default actions