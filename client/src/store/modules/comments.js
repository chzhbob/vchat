import * as types from '../types'
import api from '../../api/index'

const state = {
	items: [],
	page: 1,
	pageSize: 20,
	isLoadAll: true,
	postState: 0 // 0:发送中 1:发送成功 2:发送失败
}

const getters = {
	comments: state => state.items,
	postState: state => state.postState,
	commentsLoadAll: state => state.isLoadAll
}

const mutations = {
	resetComments(state){
		state.items = [];
		state.page = 1;
		state.pageSize = 20;
		state.isLoadAll = true;
		state.postState = 0;
	},

	[types.COMMENTS_UPDATE](state, payload){
		if(payload.items.length < state.pageSize){
			state.isLoadAll = true;
		}else{
			state.isLoadAll = false;
		}
		state.items = state.items.concat(payload.items);
		state.page++;
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
	}
}

const actions = {
	getComments({ commit, state }, payload){
		api.getComments(payload.topicId, state.page, state.pageSize).then(result => commit(types.COMMENTS_UPDATE, { items : result.data.comments }));
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