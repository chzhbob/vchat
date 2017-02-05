import * as types from '../types'
import api from '../../api/index'

const state = {
	
}

const getters = {
	
}

const mutations = {
	
}

const actions = {
	register({ commit, state }, payload){
		api.register(payload.email,payload.password);
	},
	login({ commit, state }, payload){
		api.login(payload.email,payload.password);
	}
	
}

export default{
	state,
	getters,
	mutations,
	actions
}