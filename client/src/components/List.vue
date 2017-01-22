<template>
	<section class="wrapper">
		<router-link to="post">发布</router-link>
		<section class="right">
			<Topics :topics="topics"></Topics>
		</section>
	</section>
</template>

<script>
import { mapGetters } from 'vuex'
import Topics from './list/Topics.vue'
export default {
	name: 'list',
	components: {
		Topics
	},
	computed: mapGetters({
		topics : 'topics'
	}),
	created: function(){
		this.$store.dispatch('getHotTopics');
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
</style>