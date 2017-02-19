 <template>
	<section class="header">
		<section class="inner" :class="{open: mobileOpen}">
			<ul class="nav">
				<li><router-link to="/home">首页</router-link></li>
				<li><router-link to="/home">资料</router-link></li>
				<li><router-link to="/home">工具</router-link></li>
				<li><router-link to="/list">讨论</router-link></li>
				<li><router-link to="/home">关于</router-link></li>
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
		<section class="mobile-header">
			<i @click="open" class="menu v-android-more-vertical"></i>
			<h1><i>vchat</i></h1>
		</section>
		<section v-on:click.stop="close" class="mobile-mask" :class="{open: mobileOpen}"></section>
	</section>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
	name: 'headerNav',
	data(){
		return {
			mobileOpen: false
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
		},

		open: function(){
			if(this.mobileOpen){
				this.mobileOpen = false;
			}else{
				this.mobileOpen = true;
			}
		},
		close: function(){
			this.mobileOpen = false;
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
	padding: 0 24px;
	cursor: pointer;
}
.nav li a{
	text-decoration: none;
	color: #7f97b3;
	padding: 9px 16px;
	border-radius: 5px;
}
.nav li a.router-link-active{
	background: #e5ecf4;
}
.sign{
	float: right;
	overflow: hidden;
}
.sign li{
	float: left;
	font-size: 14px;
	line-height: 67px;
	padding: 0 20px;
	color: #7f97b3;
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
	line-height: 30px;
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

.mobile-header,
.mobile-mask{
	display: none;
}
@media screen and (max-width: 900px) {
	.mobile-mask{
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background: transparent;
		z-index:1;
	}
	.mobile-mask.open{
		display: block;
	}
	.inner{
		position: fixed;
		left: 0px;
		top: 0px;
		width: 260px;
		height: 100%;
		background: white;
		transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
	    -webkit-transform: translate(-280px, 0);
	    transform: translate(-280px, 0);
	    z-index: 2;
	    overflow: hidden;
	    box-shadow: 0 0 10px rgba(0,0,0,0.2);
	    padding-top: 130px;
	}
	.nav{
		float: none;
	}
	.nav li{
		float: none;
	}

	.search{
		float: none;
		position: absolute;
		top: 60px;
		left: 20px;
	}
	.sign{
		float: none;
	}
	.inner.open{
		transform: translate(0, 0);
	}
	
	.header{
		border:none;
		height:  40px;
	}
	.mobile-header{
		display: block;
		width: 100%;
		height: 40px;
		line-height: 40px;
		position: relative;
		background: rgba(255,255,255,1);
		box-shadow: 0 0 2px rgba(0,0,0,0.25);
		position: fixed;
		left: 0px;
		top: 0px;
		z-index: 1;
	}
	.mobile-header .menu{
		color: #cecece;
		font-size: 24px;
		position: absolute;
		top: 5px;
		left: 0px;
		padding-left: 10px;
	}
	.mobile-header h1{
		color: #8196b3;
		font-size: 14px;
		text-align: center;
	}
}
</style>