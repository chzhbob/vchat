<script>

export default {
	name: 'itemComment',
	props:{
		comment: Object
	}
}
</script>

<template>
	<section class="wrapper">
		<section class="right">
			<section>{{ comment.content }}</section>
		</section>
	</section>
</template>



<style scoped>
.right{
	width: 60%;
	margin: 20px auto;
	background: white;
	padding: 20px;
}
</style>