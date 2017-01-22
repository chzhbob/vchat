<template>
	<section class="wrapper">
		<section class="right">
			<section>{{ comment.content }}</section>
		</section>
	</section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'comment',
	props:{
		comment: Object
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