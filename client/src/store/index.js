import Vue from 'vue'
import Vuex from 'vuex'
import topic from './modules/topic'
import topics from './modules/topics'
import comments from './modules/comments'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	modules:{
		topic,
		topics,
		comments
	},
	actions: {},
	state: {},
	mutations: {},
	strict: debug
})