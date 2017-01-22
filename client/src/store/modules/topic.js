import * as types from '../types'
import api from '../../api/index'

const state = {
	topic: {}
}

const getters = {
	topic: state => state.topic
}

const mutations = {
	[types.TOPIC_UPDATE](state, payload){
		state.topic = payload.topic;
	}
}

const actions = {
	getTopic({ commit, state }, payload){
		api.getTopic(payload.topicId,payload.page,payload.ps).then(result => commit(types.TOPIC_UPDATE, { topic : result.data.topic }));
	},

	postTopic({ commit, state }, payload){
		api.postTopic(payload.title, payload.content).then(result => commit(types.TOPIC_POST_BACK, { topic : result.data }));
	},
}

export default{
	state,
	getters,
	mutations,
	actions
}