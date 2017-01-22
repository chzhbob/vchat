<template>
	<section>
		<span v-for="(i,item) of items" @click="navi(i)">{{i}}</span>
	</section>
</template>


<script>
export default {
	name: 'utilPageNavi',
	
	props: {
		pa: Number,
		ps: Number,
		total: Number
	},

	computed: {
		items: function(){
			return Math.ceil(this.total / this.ps);	
		}
	},

	methods: {
		navi: function(index){
			this.$router.push('list/2');
			// this.$store.dispatch('getHotTopics', {page : index});
		}
	}
}
</script>