<script>

import Topics from './Topics.vue'
export default {
	name: 'topics',

	data: () => {
		return{
			items: [{1:1},{2:2},{3:3},{4:4},{5:5}]
		}
	},

	components: {
		Topics
	}
}
</script>

<template>
	<section class="wrapper">
		<section class="left">1</section>
		<section class="right">
			<Topics :topics="items"></Topics>
		</section>
	</section>
</template>

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