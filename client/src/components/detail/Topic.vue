<template>
	<section v-if="isReady" class="wrapper">
		<section class="right">
			<section class="main">
				<section class="avatar">
					<img :src="topic.avatar">
				</section>
				<section class="main-content">
					<p><span class="nickname">{{topic.nickname}}</span><span class="fromnow">{{ fromNow }}</span></p>
					<h1>{{topic.title}}</h1>
					<section v-html="content" class="content" ></section>
				</section>
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
import moment from 'moment'

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
		},
		fromNow: function(){
			moment.locale('zh-CN');
			return this.topic.created_at ? moment(this.topic.created_at).fromNow() : '';
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
	width: 1110px;
	margin: 20px auto;
	background: white;
	padding: 20px;
}
.main{
	padding: 0px 0 35px;
	border-bottom: 1px solid #e7ecf0;
	overflow: hidden;
}
.main .avatar{
	width: 68px;
	height: 68px;
	float: left;
	background: url(~assets/avatar-boy.jpg) no-repeat;
	background-size: 100% 100%;
	border-radius: 100%;
}
.main .avatar img{
	width: 100%;
	height: 100%;
	object-fit:cover;
	border: none;
	border-radius: 100%;
}
.main .main-content{
	margin-left: 95px;
}
.main .nickname{
	font-size: 16px;
	color: #2f2f2f;
}
.main .fromnow{
	padding-left: 15px;
	font-size: 12px;
	color: #cecece;
}
.main h1{
	font-size: 14px;
	color: #646464;
	padding-bottom: 20px;
	padding-top: 20px;
}
.main .content{
	font-size: 14px;
	color: #646464;
}
</style>