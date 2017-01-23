import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

const api = {}
export default api;

const domain_url = 'http://localhost:3000/api/'

api.getTopics = function(page, ps){
	return Vue.http.jsonp( domain_url + 'topics/hot', {
		params : { page, ps }
	});
}

api.getTopic = function(topicId, page = 1, ps = 20){
	return Vue.http.jsonp( domain_url + `topics/topic/${topicId}`, {
		params : { page, ps }
	});
}

api.getComments = function(topicId, page = 1, ps = 20){
	return Vue.http.jsonp( domain_url + `comments/topic/${topicId}`, {
		params : { page, ps }
	});
}

api.postTopic = function(title, content){
	return Vue.http.jsonp( domain_url + 'topics/post', {
		params : { title, content }
	});
}

api.postComment = function(topicId, content){
	return Vue.http.jsonp( domain_url + 'comments/post', {
		params : { topicId, content }
	});
}