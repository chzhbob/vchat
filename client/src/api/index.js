import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

const api = {}
export default api;

const domain_url = 'http://localhost:3000/api/'

api.getTopics = function(guid){
	return Vue.http.jsonp( domain_url + 'topics/hot', {
		params : { guid: guid }
	});
}