<template>
	<li class="topic-item" @click="nav">
		<section class="avatar">
			<Avatar :username="topic.nickname" :size="45" ></Avatar>
			<img v-if="topic.avatar" :src="topic.avatar" onerror="this.style.display='none'" class="img-avatar"/>
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

<script>
import moment from 'moment'
import Avatar from 'vue-avatar/dist/Avatar'

export default {
	name: 'itemTopic',
	components: {
		Avatar
	},
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
	position: relative;
}
.topic-item .avatar .img-avatar{
	position: absolute;
	left: 0px;
	top: 0px;
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
	padding-right: 50px;

	word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
}
.topic-item .detail p{
	font-size: 12px;
	color: #7f97b3;
	padding-top: 5px;
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