<script>
import moment from 'moment'
import xss from 'xss'
import Avatar from 'vue-avatar/dist/Avatar'

export default {
	name: 'itemComment',
	components: {
		Avatar
	},
	props:{
		comment: Object
	},
	computed: {
		content(){
			return xss(this.comment.content);
		},
		fromNow: function(){
			moment.locale('zh-CN');
			return this.comment.created_at ? moment(this.comment.created_at).fromNow() : '';
		}
	}
}
</script>

<template>
	<section class="main">
		<section class="avatar">
			<Avatar :username="comment.nickname" :size="68"></Avatar>
			<img v-if="comment.avatar" :src="comment.avatar" onerror="this.style.display='none'" class="img-avatar"/>
		</section>
		<section class="main-content">
			<p><span class="nickname">{{comment.nickname}}</span><span class="fromnow">{{ fromNow }}</span></p>
			<section v-html="content" class="content" ></section>
		</section>
	</section>
</template>



<style scoped>
.wrapper{
	padding: 10px 0;
	font-size: 14px;
}
.main{
	padding: 35px 0 35px;
	border-bottom: 1px solid #e7ecf0;
	overflow: hidden;
}
.main .avatar{
	width: 68px;
	height: 68px;
	float: left;
	border-radius: 100%;
	position: relative;
}
.main .avatar .img-avatar{
	position: absolute;
	left: 0;
	top: 0;
	display: block;
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