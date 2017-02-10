<template>
	<section>
		<section class="header-slide">
			<img src="~assets/header.jpg" />
		</section>
		<section class="features-wrapper">
			<section class="features">
				<h1><i>We Provide Training & Tools For <br/> Assessing Executive Function</i></h1>
				<section class="features-detail">
					<p>幼儿园的工作是复杂而具体的。光幼儿园的一日生活就包括：专门的教育教学活动、游戏活动还有生活常规活动等多种多样的活动。其中的生活常规活动又包括：用餐、就寝、入厕等很多小的细节和工作。这些活动虽然微不足道，也不被大家所重视，但却是幼儿养成良好生活习惯和幼儿园一日活动得以顺利开展中不可缺少的重要环节。</p>
					<p>幼儿的一日生活常规规范着幼儿的言行，它体现在幼儿的生活习惯、学习习惯和行为习惯上。因此在班级常规管理过程中，我们班两位老师总是目标一致，相互配合，统一要求;对孩子的要求坚持一贯，不朝令夕改。</p>
				</section>
				<section class="feature-block">
					<section class="feature-bg"></section>
					<section class="feature-cover">
						<img src="~assets/cover1.jpg" />
					</section>
					<section class="feature-detail">
						<h2>对幼儿做到要求统一</h2>
						<p>在一个班集体中，两位教师由于性格、生活环境等不同，工作作风、工作方法也不尽相同，但不管怎样在引导孩子明辨是非，培养良好的行为习惯等方面，达成共识，做到要求统一。就这样在统一要求，严格管理中，孩子们逐渐明白了该怎样做，不该怎样做。</p>
						<a href="javascript:void(0)">更多内容</a>
					</section>
				</section>
			</section>
		</section>

	</section>
</template>

<style scoped>
.header-slide{
	width: 100%;
	height: 470px;
}
.header-slide img{
	width: 100%;
	height: 100%;
	object-fit: cover;
}
.features-wrapper{
	background: #299ee1;
	color: white;
}
.features{
	width: 1100px;
	margin: 0 auto;
}
.features h1{
	font-size: 34px;
	text-align: center;
	line-height: 34px;
	padding: 30px 0;
}
.features-detail{
	padding: 10px 0;
	overflow: hidden;
}
.features-detail p{
	float: left;
	width: 50%;
	padding: 0 30px;
	font-size: 16px;
	line-height: 24px;
}
.features-detail p:nth-child(odd){
	border-right: 1px solid #2994da;
}
.features-detail p:nth-child(even){
	border-left: 1px solid #2994da;
}

.feature-block{
	position: relative;
	width: 1050px;
}
.feature-block .feature-bg{
	position: absolute;
	height: 445px;
	width: 100%;
	left: -50px;
	top: 30px;
	background: #f59a16;
}
.feature-block{
	
}
</style>