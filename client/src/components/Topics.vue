<script>
import Topic from './Topic.vue'
export default {
	name: 'Topics',
	components: {
		Topic
	},
	props: {
		topics: Array
	}
}
</script>

<template>
	<ul class="topics">
		<Topic v-for="topic of topics" :topic="topic"></Topic>
	</ul>
</template>
