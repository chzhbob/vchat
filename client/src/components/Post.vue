<template>
	<section class="wrapper">
		<section class="right">
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
			content: null
		}
	},
	methods:{
		submit: function(){
			this.$store.dispatch('postTopic', {
				content : this.content
			});
		}
	},

	created: function(){
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
.right textarea{
	width: 100%;
	height: 50px;
}
</style>