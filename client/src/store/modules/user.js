import * as types from '../types'
import api from '../../api/index'

const state = {
	uid: null,
	nickname: '',
	avatar: ''
}

const getters = {
	uid: state => state.uid,
	nickname: state => state.nickname,
	avatar: state => state.avatar
}

const mutations = {
	[types.USERS_UPDATE_STATUS](state, payload){
		if(payload){
			state.uid = payload.uid;
			state.nickname = payload.nickname;
			state.avatar = payload.avatar;
		}else{
			state.uid = null;
			state.nickname = '';
			state.avatar = '';
		}
	},
}

const actions = {
	register({ commit, state }, payload){
		return api.register(payload.email,payload.password);
	},
	login({ commit, state }, payload){
		return api.login(payload.email,payload.password).then(result => new Promise(function(resolve, reject){
			if(result.data.code == 0 && result.data.user){
				let commitData = {
					uid : result.data.user.uid,
					nickname : result.data.user.nickname,
					avatar : result.data.user.avatar
				}
				commit(types.USERS_UPDATE_STATUS, commitData);
				commit(types.COMMENTS_USERS_UPDATE_STATUS, commitData);
				resolve();
			}else{
				reject(result.data.msg);
			}
		}));
	},
	logout({ commit, state }, payload){
		return api.logout().then(result => {
			if(result.data.code == 0){
				commit(types.USERS_UPDATE_STATUS, null);
			}
		});
	},
	getLoginStatus({ commit, state }, payload){
		return api.getLoginStatus().then(result => {
			if(result.data.code == 0 && result.data.user){
				let commitData = {
					uid : result.data.user.uid,
					nickname : result.data.user.nickname,
					avatar : result.data.user.avatar
				}
				commit(types.USERS_UPDATE_STATUS, commitData);
				commit(types.COMMENTS_USERS_UPDATE_STATUS, commitData);
			}
		});
	}
}

export default{
	state,
	getters,
	mutations,
	actions
}