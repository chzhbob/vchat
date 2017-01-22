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
import { mapGetters } from 'vuex'
import Topics from './list/Topics.vue'
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
			this.$store.dispatch('postTopic', {
				title: this.title,
				content : this.content
			});
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