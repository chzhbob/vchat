<template>
	<section class="wrapper">
		<section class="right">
			<section class="main">
				<h1>{{topic.title}}</h1>
				<section v-html="content" class="content" ></section>
			</section>
			<TopicComments :topicId="$route.params.topicId"></TopicComments>
			<CommentInput :topicId="$route.params.topicId"></CommentInput>
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

	computed: {
		...mapGetters({
			topic : 'topic'
		}),
		content(){
			return xss(this.topic.content);
		}
	},

	components: {
		TopicComments,
		CommentInput
	},

	created: function(){
		this.$store.dispatch('getTopic', {topicId: this.$route.params.topicId});
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