<script>
import { mapGetters } from 'vuex'
import Comment from './list/Comment.vue'

export default {
	name: 'comments',

	components: {
		Comment
	},

	props:{
		topicId: String
	},
	
	computed: mapGetters({
		comments : 'comments'
	}),
	created: function(){
		this.$store.dispatch('getComments', {topicId: this.topicId});
	}
}
</script>

<template>
	<ul class="comments">
		<Comment v-for="comment of comments" :comment="comment"></Comment>
	</ul>
</template>