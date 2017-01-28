<script>
import Comment from '../item/Comment.vue'
export default {
	name: 'listComments',
	props:{
		comments: Array
	},
	components: {
		Comment
	}
}
</script>

<template>
	<ul class="comments">
		<Comment v-for="comment of comments" :comment="comment" ></Comment>
	</ul>
</template>