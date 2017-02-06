<template>
	<section class="header">
		<section class="inner">
			<ul class="nav">
				<li>vchat</li>
				<li><router-link to="/list">热门讨论</router-link></li>
				<li>关于</li>
			</ul>
			<ul class="sign">
				<template v-if="!uid">
					<li><router-link to="/register">注册</router-link></li>
					<li><router-link to="/login">登录</router-link></li>
				</template>
				<template v-if="uid">
					<li>你好，{{nickname}}</li>
					<li><a href="javascript:void(0);" @click="logout">登出</a></li>
				</template>
			</ul>
			<section class="search">
				<i class="v-search"></i>
				<section class="input-wrapper">
					<input placeholder="搜索" />
				</section>
			</section>
		</section>
	</section>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
	name: 'headerNav',
	data(){
		return {

		}
	},
	computed: mapGetters({
		uid : 'uid',
		nickname : 'nickname',
		avatar : 'avatar'
	}),
	methods: {
		logout: function(){
			this.$store.dispatch('logout');
		}
	},
	created: function(){
		this.$store.dispatch('getLoginStatus');
	}
}

</script>

<style scoped>
.header{
	width: 100%;
	height: 67px;
	background: white;
	border-bottom: 1px solid #ddd;
}
.inner{
	width: 1110px;
	margin: 0 auto;
	overflow: hidden;
}
.nav{
	overflow: hidden;
	float: left;
}
.nav li{
	float: left;
	font-size: 14px;
	color: #7f97b3;
	line-height: 67px;
	padding: 0 40px;
	cursor: pointer;
}
.nav li a{
	text-decoration: none;
	color: #7f97b3;
}
.sign{
	float: right;
}
.sign li{
	float: left;
	font-size: 14px;
	line-height: 67px;
	padding: 0 20px;
}
.sign li a{
	text-decoration: none;
	color: #7f97b3;
}
.search{
	float: right;
	width: 220px;
	height: 38px;
	/*background: #e5ecf4;*/
	border: 1px solid #e5ecf4;
	border-radius: 3px;
	padding: 5px 10px;
	margin-top: 15px;
	margin-right: 15px;
}
.search i{
	font-size: 14px;
	color: #7f97b3;
	width: 24px;
	float: left;
	line-height: 29px;
}
.search .input-wrapper{
	margin-left: 24px;
}
.search .input-wrapper input{
	width: 100%;
	border: none;
	background: none;
	outline: none;
	font-size: 14px;
	color: #4f89db;
	height: 26px;
	line-height: 26px;
}
::-webkit-input-placeholder{
	color: #7f97b3; 
} 
</style>