<template>
	<section v-if="isReady" class="wrapper">
		<section class="right">
			<section class="main">
				<h1>{{topic.title}}</h1>
				<section v-html="content" class="content" ></section>
			</section>
			<TopicComments :topicId="topicId"></TopicComments>
			<CommentInput :topicId="topicId"></CommentInput>
		</section>
	</section>
</template>

<script>
import { mapGetters } from 'vuex'
import xss from 'xss'
import TopicComments from './TopicComments.vue'
import CommentInput from './CommentInput.vue'

export default {
	name: 'detailTopic',
	components: {
		TopicComments,
		CommentInput
	},

	data(){
		return{
			isReady: false,
			topicId: null
		}
	},
	computed: {
		...mapGetters({
			topic : 'topic'
		}),
		content(){
			return xss(this.topic.content);
		}
	},
	watch: {
		topic : function(newTopic){
			newTopic === {} ? this.isReady = false : this.isReady = true;
		}
	},
	methods: {
		fetchData: function(){
			this.topicId = this.$route.params.topicId
			this.$store.dispatch('getTopic', {topicId: this.topicId});
		}
	},
	beforeRouteUpdate: function(to, from, next){
		this.topicId = null;
		this.isReady = false;
		this.fetchData();
		next();
	},
	created: function(){
		this.fetchData();
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
.main h1{
	font-size: 16px;
	content: #333;
	padding-bottom: 10px;
}
.main .content{
	font-size: 12px;
}
</style>