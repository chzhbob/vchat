<template>
	<section class="wrapper">
		<section class="input-wrapper">
			<input v-model="content" type="text"/>
		</section>
		<a href="javascript:void(0)" @click="submit">发送</a>
	</section>
</template>

<script>

import api from '../../api/index'

export default {
	name: 'detailCommentInput',
	props: {
		topicId: String
	},
	data(){
		return {
			title: null,
			content: null
		}
	},
	methods:{
		submit: function(){
			api.postComment(this.topicId, this.content).then(
				data => this.$router.back(),
				err => this.error(err)
			);
		},

		error: function(err){
			alert(err)
		}
	}
}
</script>

<style scoped>
.wrapper{
	width: 100%;
	overflow: hidden;
	padding-top: 20px;
}
.wrapper .input-wrapper{
	width: 90%;
	float: left;
	border-bottom: 1px solid #ddd;
	padding: 0 3px;
}
.wrapper .input-wrapper input{
	width: 100%;
	border: none;
	font-size: 16px;
	line-height: 24px;
	outline: none;
	color: #333;
}
.wrapper a{
	display: block;
	width: 10%;
	float: left;
	font-size: 14px;
	color: #7f97b3;
	border:1px solid #ddd;
	line-height: 25px;
	text-align: center;
	text-decoration: none;
}
</style>