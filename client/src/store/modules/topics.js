import * as types from '../types'
import api from '../../api/index'

const state = {
	items: [],
	page: 1,
	pageSize: 20,
	total: 0
}

const getters = {
	topics: state => state.items,
	topicsPage: state => state.page,
	topicsPageSize: state => state.pageSize,
	topicsTotal: state => state.total
}

const mutations = {
	[types.TOPICS_UPDATE](state, payload){
		state.items = payload.items;
		state.total = payload.total;
	},

	[types.TOPIC_POST_BACK](state, payload){
		state.items = payload.topic;
		// state.items = [..state.items, payload.topic]
	}
}

const actions = {
	getHotTopics({ commit, state }, payload){
		if(payload){
			api.getTopics(payload.page, state.pageSize).then(result => commit(types.TOPICS_UPDATE, { items : result.data.topics, total : result.data.total }));	
		}else{
			api.getTopics(state.page, state.pageSize).then(result => commit(types.TOPICS_UPDATE, { items : result.data.topics, total : result.data.total }));	
		}
	}
}

export default{
	state,
	getters,
	mutations,
	actions
}