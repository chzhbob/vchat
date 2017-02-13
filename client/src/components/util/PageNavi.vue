<template>
	<section class="navi">
		<section class="navi-wrapper">
			<span v-for="(i,item) of items" @click="navi(i)" :class="{'active' : pa == i}">{{i}}</span>
		</section>
	</section>
</template>


<script>
export default {
	name: 'utilPageNavi',
	
	props: {
		pa: Number,
		ps: Number,
		total: Number,
		target: String
	},

	computed: {
		items: function(){
			if(this.total && this.ps){
				return Math.ceil(this.total / this.ps);	
			}else{
				return 0;
			}
			
		}
	},

	methods: {
		navi: function(index){
			this.$router.push(`/${this.target}/page/${index}`);
		}
	}
}
</script>

<style scoped>
.navi{
	width: 1110px;
	margin: 20px auto;
	background: white;
	padding: 20px;
	overflow: hidden;
}
.navi-wrapper{
	overflow: hidden;
	float: right;
}
.navi span{
	display: block;
	float: left;
	border: 1px solid #ddd;
	line-height: 24px;
	font-size: 12px;
	color: #ccc;
	padding: 0 10px;
	margin-right: 5px;
	cursor: pointer;
}
.navi span.active{
	color: #7f97b3;
	border-color: #ccc;
	font-weight: bold;
}

@media screen and (max-width: 900px) {
	.navi{
		width: 100%;
	}
}
</style>