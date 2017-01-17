<template>
	<section class="wrapper">
		<section class="right">
			<h1>{{topic.title}}</h1>
			<section>{{ topic.content }}</section>
		</section>
	</section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'topic',
	
	computed: mapGetters({
		topic : 'topic'
	}),
	created: function(){
		this.$store.dispatch('getTopic', {topicId: this.$route.params.topicId});
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