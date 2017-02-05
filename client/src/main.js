import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import store from './store'
import Admin from './components/Admin.vue'
import Register from './components/Register.vue'
import Login from './components/Login.vue'
import List from './components/List.vue'
import Post from './components/Post.vue'
import Topic from './components/detail/Topic.vue'

import '../static/core.css'
import '../static/fonts/styles.css'

Vue.use(VueRouter);


const routes = [
	{ path: '/admin', component: Admin },
	{ path: '/login', component: Login },
	{ path: '/register', component: Register },
	{ path: '/list', component: List },
	{ path: '/list/page/:page', component: List },
	{ path: '/post', component: Post },
	{ path: '/topic/:topicId', component: Topic }
]

const router = new VueRouter({
	routes
})


new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App },
  store
})