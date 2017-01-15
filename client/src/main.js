import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Admin from './components/Admin.vue'
import List from './components/List.vue'

import '../static/core.css'
import '../static/fonts/styles.css'

Vue.use(VueRouter);

const routes = [
	{ path: '/admin', component: Admin },
	{ path: '/List', component: List }
]

const router = new VueRouter({
	routes
})


new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App }
})