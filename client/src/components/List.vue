<template>
	<section class="wrapper">
		<section class="left">
			<router-link class="post" to="/post">发布</router-link>
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
	margin: 40px auto;
	background: white;
}
.left{
	width: 185px;
	float: left;
}
.left .post{
	display: block;
	height: 36px;
	line-height: 36px;
	background: #31db7a;
	text-align: center;
	color: white;
	width: 100%;
	text-decoration: none;
	border-radius: 3px;
	font-size: 14px;
}
.right{
	margin-left: 215px;
}

.post a{
	font-size: 14px;
	color: #333;
}

@media screen and (max-width: 900px) {
	.wrapper{
		width: 100%;
		margin: 10px 0;
	}
	.left{
		float: none;
		margin: 0 auto;
		width: 100%;
		padding: 0 15px;
	}
	.right{
		margin-left: 0px;
	}
}
</style>