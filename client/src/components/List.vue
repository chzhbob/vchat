<template>
	<section class="wrapper">
		<section class="left">1</section>
		<section class="right">
			<Topics :topics="topics"></Topics>
		</section>
	</section>
</template>

<script>
import { mapGetters } from 'vuex'
import Topics from './Topics.vue'
export default {
	name: 'topics',
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
.left{
	width: 20%;
	float: left;
}
.right{
	width: 80%;
	float: left;
	background: white;
	padding: 20px;
}
</style>