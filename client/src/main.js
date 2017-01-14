import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from './Main.vue'
import App from './App.vue'


import '../static/core.css'

Vue.use(VueRouter);

const routes = [
	{ path: '/admin', component: App }
]

const router = new VueRouter({
	routes
})


new Vue({
  el: '#app',
  router: router,
  template: '<Main/>',
  components: { Main }
})