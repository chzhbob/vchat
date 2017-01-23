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
		<section>{{ comment.content }}</section>
	</section>
</template>



<style scoped>
.wrapper{
	padding: 10px 0;
	font-size: 14px;
}
</style>