<script>
import Topic from '../item/Topic.vue'
export default {
	name: 'listTopics',
	props: {
		topics: Array
	},
	components: {
		Topic
	}
}
</script>

<template>
	<ul class="topics">
		<Topic v-for="topic of topics" :topic="topic"></Topic>
	</ul>
</template>
