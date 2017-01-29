<template>
	<section>
		<HeaderNav></HeaderNav>
		<router-view></router-view>	
	</section>
</template>

<script>

import HeaderNav from './components/HeaderNav.vue'

export default{
	name: 'App',
	components: {HeaderNav}
}

</script>