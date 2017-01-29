<template>
	<section class="header">
		<section class="inner">
			<ul class="nav">
				<li>vchat</li>
				<li>热门讨论</li>
				<li>关于</li>
			</ul>
			<ul class="sign">
				<li>注册</li>
				<li>登录</li>
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
.sign{
	float: right;
}
.sign li{
	float: left;
	font-size: 14px;
	color: #7f97b3;
	line-height: 67px;
	padding: 0 20px;
	cursor: pointer;
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