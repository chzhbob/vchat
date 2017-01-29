<template>
	<section class="wrapper">
		<section class="left">
			<router-link to="/post">发布</router-link>
		</section>
		<section class="right">
			<Topics :topics="topics"></Topics>
		</section>
		<PageNavi :pa="page" :ps="pageSize" :total="total" :target="'list'"></PageNavi>
	</section>
</template>

<script>
import { mapGetters } from 'vuex'
import Topics from './list/Topics.vue'
import PageNavi from './util/PageNavi.vue'
export default {
	name: 'list',
	components: {
		Topics,
		PageNavi
	},
	computed: mapGetters({
		topics : 'topics',
		page : 'topicsPage',
		pageSize : 'topicsPageSize',
		total : 'topicsTotal'
	}),
	watch:{
		'$route' : 'fetchData'
	},
	created: function(){
		this.fetchData();
	},
	methods: {
		fetchData: function(){
			this.$store.dispatch('getHotTopics' , {page : this.$route.params.page ? Number.parseInt(this.$route.params.page) : 1});
		}
	}
}
</script>

<style scoped>
.wrapper{
	width: 1110px;
	margin: 20px auto;
	background: white;
}
.left{
	width: 185px;
	float: left;
}
.right{
	margin-left: 185px;
}
.post{
	width: 1110px;
	margin: 20px auto;
	background: white;
	padding: 20px;
}
.post a{
	font-size: 14px;
	color: #333;
}
</style>