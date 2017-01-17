import * as types from '../types'
import api from '../../api/index'

const state = {
	items: []
}

const getters = {
	topics: state => state.items
}

const mutations = {
	[types.TOPICS_UPDATE](state, payload){
		state.items = payload.items;
	}
}

const actions = {
	getHotTopics({ commit, state }){
		api.getTopics().then(result => commit(types.TOPICS_UPDATE, { items : result.data.topics }));
	}
}

export default{
	state,
	getters,
	mutations,
	actions
}