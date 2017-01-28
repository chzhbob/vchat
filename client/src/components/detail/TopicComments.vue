<template>
	<section>
		<Comments :comments="comments"></Comments>
		<a v-if='!commentsLoadAll' @click="loadMore" class="more" href="javascript:void(0)">查看更多...</a>
	</section>
</template>

<script>
import { mapGetters } from 'vuex'
import Comments from '../list/Comments.vue'

export default {
	name: 'detailTopicComments',
	props:{
		topicId: String
	},
	components: {
		Comments
	},
	computed: {
		...mapGetters({
			comments : 'comments',
			commentsLoadAll : 'commentsLoadAll'
		})
	},
	methods: {
		loadMore: function(){
			this.$store.dispatch('getComments', {topicId: this.topicId});
		}
	},
	created: function(){
		this.$store.commit('resetComments');
		this.$store.dispatch('getComments', {topicId: this.topicId});
	}
}
</script>

<style scopre>
.more{
	display: block;
	padding: 10px 0;
	color: #7f97b3;
	font-size: 14px;
}
</style>