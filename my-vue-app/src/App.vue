<template>
	<div id="app">
		<!-- {{count}}
   <button @click="onclick">
     点我+1
   </button> -->
		<!-- 前面加：为变量 字符串拼接为单引号 -->
		<!-- <div :class="'box ' + currentColor" @click="changeColor"></div> -->
		<text-7></text-7>

		<div :class="'box ' + color1"></div>
		<div :class="'box ' + color2"></div>
		<button @click="change">点击我变灯</button>
	</div>
</template>
<script>
import Text7 from './text7.vue'
export default {
	name: 'App',
	components: {
		Text7
	},
	data() {
		return {
			count: 1,
			currentColor: 'green',
			color1: 'gray',
			color2: 'gray',
			flag: true,
			list: []
		}
	},
	methods: {
		onclick() {
			console.log('按钮被点击')
			this.count++
		},
		changeColor() {
			this.currentColor = this.currentColor === 'red' ? 'green' : 'red'
		},
		change() {
			if (this.flag === true) {
				this.color1 = 'red'
				this.color2 = 'gray'
				this.flag = false
			} else {
				this.color2 = 'green'
				this.color1 = 'gray'
				this.flag = true
			}
		}
	},
	//计数器
	//初始化页面，初始化加载页面
	mounted() {
		setInterval(() => {
			this.count++
		}, 1000)
	}
}
</script>

<style>
#app {
	font-size: 100px;
}
.box {
	height: 100px;
	width: 100px;
	border-radius: 50%;
	background-color: gray;
}
.red {
	background-color: red;
}
.green {
	background-color: green;
}
.gray {
	border: 1px solid black;
	background-color: white;
}
</style>
