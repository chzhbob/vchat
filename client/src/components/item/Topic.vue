<script>
import moment from 'moment'

export default {
	name: 'itemTopic',
	props: {
		topic: Object
	},
	computed: {
		fromNow: function(){
			moment.locale('zh-CN');
			return this.topic.last_reply_at ? moment(this.topic.last_reply_at).fromNow() : '';
		}
	},

	methods: {
		nav: function(){
			this.$router.push(`/topic/${this.topic.id}`);
			
		}
	}
}
</script>

<template>
	<li class="topic-item" @click="nav">
		<section class="avatar">
			<img :src="topic.avatar" />
		</section>
		<section class="detail">
			<h2>{{topic.title}}</h2>
			<p><span>{{topic.last_reply_name}}</span> {{ fromNow }}</p>
			<section class="controls">
				<section class="comments">
					<i class="v-comment-o"></i>
					{{topic.comments}}
				</section>
			</section>
		</section>
	</li>
</template>

<style scoped>
.topic-item{
	overflow: hidden;
	padding: 10px 15px;
	border-radius: 5px;
}
.topic-item:hover{
	background: #e7ebf4;
	cursor: pointer;
}
.topic-item .avatar{
	width: 45px;
	height: 45px;
	float: left;
}
.topic-item .avatar img{
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 100%;
}
.topic-item .detail{
	margin-left: 60px;
	position: relative;
}
.topic-item .detail h2{
	font-size: 16px;
	color: #646464;
	padding-top: 2px;
	padding-bottom: 5px;
}
.topic-item .detail p{
	font-size: 12px;
	color: #7f97b3;
}
.topic-item .detail p span{
	font-weight: bold;
}

.topic-item .detail .controls{
	position: absolute;
	right: 0px;
	top: 0px;
}
.topic-item .detail .controls .comments{
	color: #8196b3;
	font-size: 12px;
	line-height: 45px;
	vertical-align: middle;
	font-weight: bold;
}
.topic-item .detail .controls .comments i{
	margin-right: 2px;
	font-size: 14px;
	position: relative;
	top: 2px;
}
</style>