<template>
	<section class="wrapper">
		<section class="input-wrapper">
			<input v-model="content" type="text"/>
		</section>
		<a href="javascript:void(0)" @click="submit">发送</a>
	</section>
</template>

<script>

import { mapGetters } from 'vuex'
import * as types from '../../store/types'

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
	computed: mapGetters({
		postState : 'postState'
	}),
	watch: {
		postState : function(newPostState){
			if(newPostState == 1){
				this.content = '';
			}else if(newPostState == 2){
				// FIX ME notify fail
			}

			this.$store.commit(types.COMMENTS_POST_RESET);
		}
	},
	methods:{
		submit: function(){
			this.$store.dispatch('postComment', {topicId: this.topicId, content: this.content});
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