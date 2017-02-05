<script>
import moment from 'moment'
import xss from 'xss'

export default {
	name: 'itemComment',
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
			<img :src="comment.created_avatar">
		</section>
		<section class="main-content">
			<p><span class="nickname">{{comment.created_name}}</span><span class="fromnow">{{ fromNow }}</span></p>
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