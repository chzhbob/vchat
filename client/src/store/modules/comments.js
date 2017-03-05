import * as types from '../types'
import api from '../../api/index'

const state = {
	items: [],
	page: 1,
	pageSize: 20,
	isLoadAll: true,
	postState: 0, // 0:发送中 1:发送成功 2:发送失败
	postMsg: '', // 失败信息
	uid: null,
	nickname: '',
	avatar: ''
}

const getters = {
	comments: state => state.items,
	postState: state => state.postState,
	commentsLoadAll: state => state.isLoadAll,
	postMsg: state => state.postMsg
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
		state.postMsg = '';
	},

	[types.COMMENTS_POST_SUCCESS](state, payload){
		state.postState = 1;
		state.items.push(payload);
	},

	[types.COMMENTS_POST_FAIL](state, payload){
		state.postState = 2;
		state.postMsg = payload.msg;
	},

	[types.COMMENTS_USERS_UPDATE_STATUS](state, payload){
		if(payload){
			state.uid = payload.uid;
			state.nickname = payload.nickname;
			state.avatar = payload.avatar;
		}else{
			state.uid = null;
			state.nickname = '';
			state.avatar = '';
		}
	}
}

const actions = {
	getComments({ commit, state }, payload){
		return api.getComments(payload.topicId, state.page, state.pageSize).then(result => commit(types.COMMENTS_UPDATE, { items : result.data.comments }));
	},

	postComment({ commit, state }, payload){
		return api.postComment(payload.topicId, payload.content).then(
			result => {

				if(result.data.code == 0){
					commit(types.COMMENTS_POST_SUCCESS, {
						id : result.data.comment.id,
						content : payload.content,
						nickname : state.nickname,
						avatar : state.avatar,
						created_at : result.data.comment.created_at
					});
				}else{
					commit(types.COMMENTS_POST_FAIL, {
						content : payload.content,
						msg: result.data.msg
					});
				}
			},
			err => commit(types.COMMENTS_POST_FAIL, {
				content : payload.content,
				msg: result.data.msg
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