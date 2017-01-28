import * as types from '../types'
import api from '../../api/index'

const state = {
	items: [],
	postState: 0 // 0:发送中 1:发送成功 2:发送失败
}

const getters = {
	comments: state => state.items,
	postState: state => state.postState
}

const mutations = {
	[types.COMMENTS_UPDATE](state, payload){
		state.items = payload.items;
	},

	[types.COMMENTS_POST_RESET](state){
		state.postState = 0;
	},

	[types.COMMENTS_POST_SUCCESS](state, payload){
		state.postState = 1;
		state.items.push(payload);
	},

	[types.COMMENTS_POST_FAIL](state, payload){
		state.postState = 2;
	},
}

const actions = {
	getComments({ commit, state }, payload){
		api.getComments(payload.topicId).then(result => commit(types.COMMENTS_UPDATE, { items : result.data.comments }));
	},

	postComment({ commit, state }, payload){
		api.postComment(payload.topicId, payload.content).then(
			result => commit(types.COMMENTS_POST_SUCCESS, {
						id : result.data.comment.id,
						content : payload.content
					}),
			err => commit(types.COMMENTS_POST_FAIL, {
				content : payload.content
			})
		);
	},
}

export default{
	state,
	getters,
	mutations,
	actions
}