import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import actions from './actions.js'
import getters from './getters.js'
import user from './modules/user.js'

export default new Vuex.Store({
	actions,
	getters,
	modules:{ //相当于state，包含状态数据 
		user
	}
});