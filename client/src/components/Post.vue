<template>
	<section class="wrapper">
		<section class="right">
			<section>
				<input v-model="title" />
			</section>
			<section>
				<textarea v-model="content"></textarea>
			</section>
			<a @click="submit" href="javascript:void(0)">发布</a>
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
	width: 60%;
	margin: 20px auto;
	background: white;
	padding: 20px;
}
.right input{
	width: 100%;
}
.right textarea{
	width: 100%;
	margin-top: 10px;
	height: 50px;
}
</style>