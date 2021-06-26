<template>
	<div class="pp">
		<div class="container">
			<div class="a m">
				<div class="aa p">1</div>
				<div class="bb p">2</div>
				<div class="cc p">3</div>
			</div>
			<div class="b m">
				<div class="ma p">4</div>

				<div class="mb p">5</div>
				<div class="mc p">6</div>
			</div>
			<div class="c m">
				<div class="na p">7</div>
				<div class="nb p">8</div>
				<div class="nc p">9</div>
			</div>

			<div class="d m">
				<div class="xa p">10</div>
				<div class="xb p">11</div>
				<div class="xc p">12</div>
			</div>
		</div>
		<div class="e">
			<el-row>
				<el-button icon="el-icon-search" circle></el-button>
				<el-button type="primary" icon="el-icon-edit" circle></el-button>
				<el-button type="success" icon="el-icon-check" circle></el-button>
				<el-button type="info" icon="el-icon-message" circle></el-button>
				<el-button type="warning" icon="el-icon-star-off" circle></el-button>
				<el-button type="danger" icon="el-icon-delete" circle></el-button>
			</el-row>
		</div>
		<div>
			<el-link icon="el-icon-edit" :underline="false">编辑</el-link>
			<el-link :underline="false">
				查看
				<i class="el-icon-view el-icon--right"></i>
			</el-link>
			<el-pagination
				background
				layout="prev, pager, next"
				:total="1000"
			></el-pagination>
			<el-badge :value="3" class="item">
				<el-button size="small">回复</el-button>
			</el-badge>
			<el-button :plain="true" @click="open1">消息</el-button>
			<el-button :plain="true" @click="open2">成功</el-button>
			<el-button :plain="true" @click="open3">警告</el-button>
			<el-button :plain="true" @click="open4">错误</el-button>
		</div>
		<div>
			<el-steps :active="active" finish-status="success">
				<el-step title="步骤 1"></el-step>
				<el-step title="步骤 2"></el-step>
				<el-step title="步骤 3"></el-step>
			</el-steps>

			<el-button style="margin-top: 12px;" @click="next">下一步</el-button>
		</div>
		<div>
			<el-popover
				placement="top-start"
				title="标题"
				width="200"
				trigger="hover"
				content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
			>
				<el-button slot="reference">hover 激活</el-button>
			</el-popover>

			<el-popover
				placement="bottom"
				title="标题"
				width="200"
				trigger="click"
				content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
			>
				<el-button slot="reference">click 激活</el-button>
			</el-popover>

			<el-popover
				ref="popover"
				placement="right"
				title="标题"
				width="200"
				trigger="focus"
				content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
			></el-popover>
			<el-button v-popover:popover>focus 激活</el-button>

			<el-popover
				placement="bottom"
				title="标题"
				width="200"
				trigger="manual"
				content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
				v-model="visible"
			>
				<el-button slot="reference" @click="visible = !visible">
					手动激活
				</el-button>
			</el-popover>
		</div>
		<div>
			<el-row :gutter="12">
				<el-col :span="6">
					<el-card shadow="always">
						总是显示
					</el-card>
				</el-col>
				<el-col :span="6">
					<el-card shadow="hover">
						鼠标悬浮时显示
					</el-card>
				</el-col>
				<el-col :span="6">
					<el-card shadow="never">
						从不显示
					</el-card>
				</el-col>
			</el-row>
		</div>
		<div>
			<el-carousel :interval="4000" type="card" height="200px">
				<el-carousel-item v-for="item in 6" :key="item">
					<h3 class="medium">{{ item }}</h3>
				</el-carousel-item>
			</el-carousel>
		</div>
		<div>
			<el-collapse v-model="activeNames" @change="handleChange">
				<el-collapse-item title="一致性 Consistency" name="1">
					<div>
						与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
					</div>
					<div>
						在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
					</div>
				</el-collapse-item>
				<el-collapse-item title="反馈 Feedback" name="2">
					<div>
						控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
					</div>
					<div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
				</el-collapse-item>
				<el-collapse-item title="效率 Efficiency" name="3">
					<div>简化流程：设计简洁直观的操作流程；</div>
					<div>
						清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
					</div>
					<div>
						帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
					</div>
				</el-collapse-item>
				<el-collapse-item title="可控 Controllability" name="4">
					<div>
						用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
					</div>
					<div>
						结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
					</div>
				</el-collapse-item>
			</el-collapse>
		</div>
		<div>
			<div>
				<span>雨纷纷</span>
				<el-divider direction="vertical"></el-divider>
				<span>旧故里</span>
				<el-divider direction="vertical"></el-divider>
				<span>草木深</span>
			</div>
		</div>
		<!-- <div class="demo-image__placeholder">
			<div class="block">
				<span class="demonstration">默认</span>
				<el-image :src="src"></el-image>
			</div>
			<div class="block">
				<span class="demonstration">自定义</span>
				<el-image :src="src">
					<div slot="placeholder" class="image-slot">
						加载中
						<span class="dot">...</span>
					</div>
				</el-image>
			</div>
		</div> -->
		<div>
			<el-radio-group v-model="direction">
				<el-radio label="ltr">从左往右开</el-radio>
				<el-radio label="rtl">从右往左开</el-radio>
				<el-radio label="ttb">从上往下开</el-radio>
				<el-radio label="btt">从下往上开</el-radio>
			</el-radio-group>

			<el-button
				@click="drawer = true"
				type="primary"
				style="margin-left: 16px;"
			>
				点我打开
			</el-button>

			<el-drawer
				title="我是标题"
				:visible.sync="drawer"
				:direction="direction"
				:before-close="handleClose"
			>
				<span>我来啦!</span>
			</el-drawer>
		</div>
		<div>
			<el-checkbox-group v-model="checkedCities">
				<el-checkbox v-for="city in cities" :label="city" :key="city">
					{{ city }}
				</el-checkbox>
			</el-checkbox-group>
		</div>
		<div v-for="item in checkedCities" :key="item">
			<label for="">{{ item }}</label>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			active: 0,
			visible: false,
			activeNames: ['1'],
			src:
				'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
			drawer: false,
			direction: 'rtl',
			cities: ['上海', '北京', '广州', '深圳'],
			checkedCities: []
		};
	},
	methods: {
		handleChange(val) {
			console.log(val);
		},
		open1() {
			this.$message({
				showClose: true,
				message: '这是一条消息提示'
			});
		},

		open2() {
			this.$message({
				showClose: true,
				message: '恭喜你，这是一条成功消息',
				type: 'success'
			});
		},

		open3() {
			this.$message({
				showClose: true,
				message: '警告哦，这是一条警告消息',
				type: 'warning'
			});
		},

		open4() {
			this.$message({
				showClose: true,
				message: '错了哦，这是一条错误消息',
				type: 'error'
			});
		},
		next() {
			if (this.active++ > 2) this.active = 0;
		}
	}
};
</script>

<style>
.container {
	display: flex;
}
.m {
	flex: 1;
	width: 100%;
	height: 25%;
	color: red;
}
.el-carousel__item h3 {
	color: #475669;
	font-size: 14px;
	opacity: 0.75;
	line-height: 200px;
	margin: 0;
}

.el-carousel__item:nth-child(2n) {
	background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
	background-color: #d3dce6;
}
</style>
