<template>
	<section class="wrapper">
		<router-link to="post">发布</router-link>
		<section class="right">
			<Topics :topics="topics"></Topics>
		</section>
		<PageNavi :pa="page" :ps="pageSize" :total="total"></PageNavi>
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
	created: function(){
		this.$store.dispatch('getHotTopics');
	}
}
</script>

<style scoped>
.right{
	width: 60%;
	margin: 20px auto;
	background: white;
	padding: 20px;
}
</style>