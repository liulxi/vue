/**
 * 用户模块
 */

import types from '../types.js'

const state={
	count:6
} 

const getters={
	count(state){
		return state.count;
	}
}

const mutations={
	[types.INCREMENT](state){
		state.count++;
	},
	[types.DECREMENT](state){
		state.count--;
	}
}

export default {
	state,
	getters,
	mutations
}