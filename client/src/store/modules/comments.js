import * as types from '../types'
import api from '../../api/index'

const state = {
	items: []
}

const getters = {
	comments: state => state.items
}

const mutations = {
	[types.COMMENTS_UPDATE](state, payload){
		state.items = payload.items;
	}
}

const actions = {
	getComments({ commit, state }, payload){
		api.getComments(payload.topicId).then(result => commit(types.COMMENTS_UPDATE, { items : result.data.comments }));
	}
}

export default{
	state,
	getters,
	mutations,
	actions
}