<template>
	<!-- 少写原生，没有提供的功能少写，组件提供什么就用什么 -->
	<el-container>
		<el-header>Header</el-header>
		<el-main>
			<!-- @input 跟踪input输入的内容 -->
			<!-- <input type="text" name="" id="" :value="text" @input="onChange"> -->
			<input type="text" v-model="detext" />
			{{ detext }}
			<el-input v-model="input" placeholder="请输入内容"></el-input>
		</el-main>
		<el-date-picker
			v-model="value11"
			type="date"
			placeholder="选择日期"
		></el-date-picker>
		<ul>
			<!-- v-for 可以遍历数组，列表，还可以遍历函数（具有返回值） -->
			<li v-for="data in formatedList" :key="data">{{ data }}</li>
		</ul>
		<div class="a" :date="date">{{ date }}</div>
		<div class="table">
			<div class="ta">
				密码：
				<el-input
					placeholder="请输入密码"
					v-model="input"
					show-password
				></el-input>
			</div>
			<div class="tb">
				再次密码：
				<el-input
					placeholder="请输入密码"
					v-model="input"
					show-password
				></el-input>
			</div>
			<div class="tc">
				年龄：
				<el-input
					placeholder="请输入内容"
					v-model="input3"
					clearable
				></el-input>
			</div>
			<div class="td">
				<button @click="tijiao">提交</button>
				<button>重置</button>
			</div>
		</div>
		<el-footer>
			<button @click="shijian">点击</button>
			<el-carousel indicator-position="outside">
				<el-carousel-item v-for="item in 4" :key="item">
					<div class="sw" :style="`backgrround-color:${getColor()};`">
						<h3>{{ item }}</h3>
					</div>
				</el-carousel-item>
			</el-carousel>
		</el-footer>
	</el-container>
</template>

<script>
import moment from 'moment';
export default {
	data() {
		return {
			input: '',
			input1: '',
			input2: '',
			input3: '',
			text: '请输入',
			detext: '10',
			value11: '',
			date: 1622476801000,
			list: [
				1622476801000, //timestamp>>> YYYYMMDD
				1622476801000,
				1622476801000,
				1622476801000,
				1622476801000
			]
		};
	},
	methods: {
		onChange(event) {
			console.log((this.text = event.target.value));
		},
		shijian() {
			console.log(moment(this.date).format('YYYY-MM-DD  HH:mm:ss'));
		},
		getColor() {
			const red = Math.floor(Math.random() * 256);
			const green = Math.floor(Math.random() * 256);
			const blue = Math.floor(Math.random() * 256);
			return `rgb(${red},${green},${blue})`;
		}
	},
	computed: {
		formatedList() {
			//moment 格式化时间格式
			//
			//   return this.list.map((date) => {
			//   return moment(date).format('YYYY-MM-DD HH:mm:ss');
			//   });
			return this.list.map(data => moment(data).format('YYYY-MM-DD  HH:mm:ss'));
		}
	},
	mounted() {
		this.date = moment(this.date).format('YYYY-MM-DD  HH:mm:ss');
	}
};
</script>

<style>
.el-carousel__item h3 {
	color: red;
	font-size: 18px;
	opacity: 0.75;
	line-height: 300px;
	margin: 0;
}
.sw {
	height: 500px;
	width: 100wx;
	text-align: center;
}
.el-footer {
	height: 500px;
}
</style>
