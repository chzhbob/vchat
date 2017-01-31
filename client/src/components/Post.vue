<template>
	<section class="wrapper">
		<section class="right">
			<section class="input-wrapper">
				<input v-model="title" />
			</section>
			<section class="input-wrapper">
				<textarea v-model="content"></textarea>
			</section>
			<a @click="submit" class="submit" href="javascript:void(0)">发布</a>
		</section>		
	</section>
</template>

<script>

import api from '../api/index'

export default {
	name: 'post',
	data(){
		return {
			title: null,
			content: null
		}
	},
	methods:{
		submit: function(){
			api.postTopic(this.title, this.content).then(
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
.right{
	width: 1110px;
	margin: 20px auto;
	background: white;
	padding: 20px;
}
.right input{
	width: 100%;
	border: none;
	outline: none;
	font-size: 14px;
	color: #333;
	height: 20px;
	line-height: 20px;
}
.right textarea{
	width: 100%;
	height: 50px;
	border: none;
	outline: none;
	font-size: 14px;
	color: #333;
	height: 400px;
}
.input-wrapper{
	border-radius: 4px;
	border: 1px solid #ddd;
	box-shadow: inset 0px 0px 2px #ddd;
	margin-bottom: 15px;
	padding: 5px;
}
.submit{
	display: block;
	background: #a8bbdb;
	color: white;
	width: 185px;
	text-align: center;
	border-radius: 5px;
	line-height: 36px;
	height: 36px;
	text-decoration: none;
	margin: 0 auto;
	font-size: 14px;
}
</style>