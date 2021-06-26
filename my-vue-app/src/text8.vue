<template>
	<div class="app">
		<div class="aaa">
			<div class="bb">
				<div class="cc">111</div>
			</div>
		</div>
		<el-input v-model="input" placeholder="请输入内容"></el-input>
		<el-input-number
			v-model="num"
			@change="handleChange"
			:min="1"
			:max="10"
			label="描述文字"
		></el-input-number>
		<div class="block">
			<span class="demonstration">不显示间断点</span>
			<el-slider v-model="value1" :step="10"></el-slider>
		</div>
		<div class="block">
			<span class="demonstration">显示间断点</span>
			<el-slider v-model="value2" :step="10" show-stops></el-slider>
		</div>
		<el-button type="primary" icon="el-icon-search">搜索</el-button>
		<el-button type="primary" :size="mini" :round="true" :loading="true">
			加载中
		</el-button>

		<div class="table">
			密码：
			<el-input placeholder="" v-model="input1" show-password></el-input>
			再次确认密码：
			<el-input placeholder="" v-model="input2" show-password></el-input>
			年龄：
			<el-input v-model="input3" placeholder=""></el-input>
			<el-button type="primary" @click="onSubmit">提交</el-button>
			<el-button @click="reset">重置</el-button>
		</div>
		<!-- 轮播图 -->
		<div class="lunbo">
			<el-carousel indicator-position="outside">
				<el-carousel-item v-for="item in 4" :key="item">
					<div class="a" :style="`background-color:${getColor()};`">
						<h3>{{ item }}</h3>
					</div>
				</el-carousel-item>
			</el-carousel>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			input: '',
			input1: '',
			input2: '',
			input3: 20,
			num: 1,
			value1: 0,
			value2: 0
		};
	},
	methods: {
		getColor() {
			const red = Math.floor(Math.random() * 256);
			const green = Math.floor(Math.random() * 256);
			const blue = Math.floor(Math.random() * 256);
			return `rgb(${red},${green},${blue})`;
		},
		handleChange(value) {
			console.log(value);
		},
		onSubmit() {
			if (this.input1 !== this.input2) {
				console.log('两次密码不一致');
			}
			if (typeof this.input3 === 'number') {
				console.log('年龄合法');
			}
			if (this.input1 === this.input2) {
				console.log('提交成功');
			}
		},
		reset() {
			this.input1 = '';
			this.input2 = '';
			this.input3 = 20;
		}
	}
};
</script>

<style>
.el-carousel__item h3 {
	color: #475669;
	font-size: 18px;
	opacity: 0.75;
	line-height: 300px;
	margin: 0;
}
.a {
	text-align: center;
	widows: 100wx;
	height: 300px;
}
el-input {
	width: 60%;
}
.layout {
	height: 500px;
}
</style>
