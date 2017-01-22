<template>
	<section>
		<Comments :comments="comments"></Comments>
	</section>
</template>

<script>
import { mapGetters } from 'vuex'
import Comments from '../list/Comments.vue'

export default {
	name: 'detailTopicComments',
	props:{
		topicId: String
	},
	components: {
		Comments
	},
	computed: mapGetters({
		comments : 'comments'
	}),
	created: function(){
		this.$store.dispatch('getComments', {topicId: this.topicId});
	}
}
</script>