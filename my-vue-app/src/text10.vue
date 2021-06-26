<template>
	<el-container>
		<el-aside width="400px">
			<div class="l-header">
				<div class="l-header-one">
					<img
						src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
						alt=""
					/>
				</div>
				<div class="l-header-two">Serati Ma</div>
				<div class="l-header-three">海纳百川，有容乃大</div>
				<div class="l-header-four">
					<p>
						<span>
							<img
								src="/static/Contacts.png"
								alt=""
								width="20px"
								height="20px"
							/>
						</span>
						交互专家
					</p>
					<p>
						<span>
							<img
								src="/static/cluster.png"
								alt=""
								width="20px"
								height="20px"
							/>
						</span>
						蚂蚁金服-某某某事业群-某某平台部-某某技术部-UED
					</p>
					<p>
						<span>
							<img src="/static/home.png" alt="" width="20px" height="20px" />
						</span>
						浙江省杭州市
					</p>
				</div>
			</div>
			<div class="l-body">
				<div class="flag">标签</div>
				<div class="sa">
					<el-tag
						:key="tag"
						type="info"
						effect="plain"
						v-for="tag in dynamicTags"
						:closable="true"
						:disable-transitions="false"
						@close="handleClose(tag)"
					>
						{{ tag }}
					</el-tag>
				</div>
				<div class="ss">
					<el-input
						class="input-new-tag"
						v-if="inputVisible"
						v-model="inputValue"
						ref="saveTagInput"
						size="small"
						effect="plain"
						color="grey"
						@keyup.enter.native="handleInputConfirm"
						@blur="handleInputConfirm"
					></el-input>
					<el-button
						v-else
						class="button-new-tag"
						size="small"
						effect="plain"
						@click="showInput"
					>
						+ new tag
					</el-button>
				</div>
			</div>
			<div class="l-fooster">
				<div class="flag">团队</div>
				<div class="box">
					<div class="box-1">
						<div class="box-1-x">
							<span>
								<img
									src="/static/zhifubao.png"
									alt=""
									width="20px"
									height="20px"
								/>
							</span>
							<span class="spann">科学搬砖组</span>
						</div>
						<div class="box-1-x">
							<span>
								<img src="/static/A.png" alt="" width="20px" height="20px" />
							</span>
							<span class="spann">全组都是吴彦祖</span>
						</div>
					</div>
					<div class="box-2">
						<div class="box-2-x">
							<span>
								<img
									src="/static/zhonger.png"
									alt=""
									width="20px"
									height="20px"
								/>
							</span>
							<span class="spann">中二少女团</span>
						</div>
						<div class="box-2-x">
							<span>
								<img src="/static/pro.png" alt="" width="20px" height="20px" />
							</span>
							<span class="spann">程序员日常</span>
						</div>
					</div>
					<div class="box-3">
						<div class="box-3-x">
							<span>
								<img src="/static/B.png" alt="" width="20px" height="20px" />
							</span>
							<span class="spann">高逼格设计天团</span>
						</div>
						<div class="box-3-x">
							<span>
								<img
									src="/static/pianni.png"
									alt=""
									width="20px"
									height="20px"
								/>
							</span>
							<span class="spann">骗你来学计算机</span>
						</div>
					</div>
				</div>
			</div>
		</el-aside>
		<el-main>
			<el-tabs type="border-card">
				<el-tab-pane label="文章（8）">
					<div class="one block">
						<div class="one-1 a">
							<div class="name">Alipay</div>
							<div class="tag">
								<el-tag type="info" size="small">Ant Design</el-tag>
								<el-tag type="info" size="small">设计语言</el-tag>
								<el-tag type="info" size="small">蚂蚁金服</el-tag>
							</div>
						</div>
						<div class="one-2 b">
							<div class="culumn">
								段落示意：蚂蚁金服设计平台
								ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
								ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
							</div>
							<div class="link">
								<span>
									<img
										src="/static/zhifubao.png"
										alt=""
										width="20px"
										height="20px"
									/>
								</span>
								<a href="#" class="aa">付小小</a>
								发布在
								<a href="#">https://ant.design</a>
								<span class="span">2021-06-22 12:47</span>
							</div>
						</div>
						<div class="one-3 c">
							<i class="el-icon-star-off"><font color="grey">112</font></i>
							<el-divider direction="vertical"></el-divider>
							<i class="el-icon-thumb">111</i>
							<el-divider direction="vertical"></el-divider>
							<i class="el-icon-chat-dot-round">111</i>
						</div>
					</div>
					<div class="two block">
						<div class="one-1 a">
							<div class="name">Angular</div>
							<div class="tag">
								<el-tag type="info" size="small">Ant Design</el-tag>
								<el-tag type="info" size="small">设计语言</el-tag>
								<el-tag type="info" size="small">蚂蚁金服</el-tag>
							</div>
						</div>
						<div class="one-2 b">
							<div class="culumn">
								段落示意：蚂蚁金服设计平台
								ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
								ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
							</div>
							<div class="link">
								<span>
									<img src="/static/A.png" alt="" width="20px" height="20px" />
								</span>
								<a href="#" class="aa">曲丽丽</a>
								发布在
								<a href="#">https://ant.design</a>
								<span class="span">2021-06-22 10:47</span>
							</div>
						</div>
						<div class="one-3 c">
							<i class="el-icon-star-off"><font color="grey">116</font></i>
							<el-divider direction="vertical"></el-divider>
							<i class="el-icon-thumb">147</i>
							<el-divider direction="vertical"></el-divider>
							<i class="el-icon-chat-dot-round">17</i>
						</div>
					</div>
					<div class="three block">
						<div class="one-1 a">
							<div class="name">Ant Design</div>
							<div class="tag">
								<el-tag type="info" size="small">Ant Design</el-tag>
								<el-tag type="info" size="small">设计语言</el-tag>
								<el-tag type="info" size="small">蚂蚁金服</el-tag>
							</div>
						</div>
						<div class="one-2 b">
							<div class="culumn">
								段落示意：蚂蚁金服设计平台
								ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
								ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
							</div>
							<div class="link">
								<span>
									<img
										src="/static/zhonger.png"
										alt=""
										width="20px"
										height="20px"
									/>
								</span>
								<a href="#" class="aa">林东东</a>
								发布在
								<a href="#">https://ant.design</a>
								<span class="span">2021-06-22 08:47</span>
							</div>
						</div>
						<div class="one-3 c">
							<i class="el-icon-star-off"><font color="grey">133</font></i>
							<el-divider direction="vertical"></el-divider>
							<i class="el-icon-thumb">165</i>
							<el-divider direction="vertical"></el-divider>
							<i class="el-icon-chat-dot-round">14</i>
						</div>
					</div>
					<div class="four block">
						<div class="one-1 a">
							<div class="name">Ant Design Pro</div>
							<div class="tag">
								<el-tag type="info" size="small">Ant Design</el-tag>
								<el-tag type="info" size="small">设计语言</el-tag>
								<el-tag type="info" size="small">蚂蚁金服</el-tag>
							</div>
						</div>
						<div class="one-2 b">
							<div class="culumn">
								段落示意：蚂蚁金服设计平台
								ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
								ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
							</div>
							<div class="link">
								<span>
									<img
										src="/static/pro.png"
										alt=""
										width="20px"
										height="20px"
									/>
								</span>
								<a href="#" class="aa">周星星</a>
								发布在
								<a href="#">https://ant.design</a>
								<span class="span">2021-06-22 06:47</span>
							</div>
						</div>
						<div class="one-3 c">
							<i class="el-icon-star-off"><font color="grey">161</font></i>
							<el-divider direction="vertical"></el-divider>
							<i class="el-icon-thumb">123</i>
							<el-divider direction="vertical"></el-divider>
							<i class="el-icon-chat-dot-round">20</i>
						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="应用（8）">
					<div class="fa">
						<el-row>
							<el-col>
								<el-card :body-style="{ padding: '0px' }">
									<div class="r1">
										<span>
											<img
												src="/static/zhifubao.png"
												alt=""
												width="20px"
												height="20px"
											/>
										</span>
										<span class="span2">Alipay</span>
										<br />
										<div class="user">
											<p class="p">活跃用户 新增用户</p>
											<p class="p1">15万 1,071</p>
										</div>
									</div>
									<div class="r2">
										<span>
											<i class="el-icon-download"></i>
											<el-divider direction="vertical"></el-divider>
										</span>
										<span>
											<i class="el-icon-edit"></i>
											<el-divider direction="vertical"></el-divider>
										</span>
										<span>
											<i class="el-icon-share"></i>
											<el-divider direction="vertical"></el-divider>
										</span>
										<span><i class="el-icon-more"></i></span>
									</div>
								</el-card>
							</el-col>
						</el-row>
						<el-row>
							<el-col>
								<el-card :body-style="{ padding: '0px' }">
									<div class="r1">
										<span>
											<img
												src="/static/zhonger.png"
												alt=""
												width="20px"
												height="20px"
											/>
										</span>
										<span class="span2">Ant Design</span>
										<br />
										<div class="user">
											<p class="p">活跃用户 新增用户</p>
											<p class="p1">13万 1,029</p>
										</div>
									</div>
									<div class="r2">
										<span>
											<i class="el-icon-download"></i>
											<el-divider direction="vertical"></el-divider>
										</span>
										<span>
											<i class="el-icon-edit"></i>
											<el-divider direction="vertical"></el-divider>
										</span>
										<span>
											<i class="el-icon-share"></i>
											<el-divider direction="vertical"></el-divider>
										</span>
										<span><i class="el-icon-more"></i></span>
									</div>
								</el-card>
							</el-col>
						</el-row>
						<el-row>
							<el-col>
								<el-card :body-style="{ padding: '0px' }">
									<div class="r1">
										<span>
											<img
												src="/static/pro.png"
												alt=""
												width="20px"
												height="20px"
											/>
										</span>
										<span class="span2">Ant Design pro</span>
										<br />
										<div class="user">
											<p class="p">活跃用户 新增用户</p>
											<p class="p1">15万 1,160</p>
										</div>
									</div>
									<div class="r2">
										<span>
											<i class="el-icon-download"></i>
											<el-divider direction="vertical"></el-divider>
										</span>
										<span>
											<i class="el-icon-edit"></i>
											<el-divider direction="vertical"></el-divider>
										</span>
										<span>
											<i class="el-icon-share"></i>
											<el-divider direction="vertical"></el-divider>
										</span>
										<span><i class="el-icon-more"></i></span>
									</div>
								</el-card>
							</el-col>
						</el-row>
						<el-row>
							<el-col>
								<el-card :body-style="{ padding: '0px' }">
									<div class="r1">
										<span>
											<img
												src="/static/B.png"
												alt=""
												width="20px"
												height="20px"
											/>
										</span>
										<span class="span2">Boostrap</span>
										<br />
										<div class="user">
											<p class="p">活跃用户 新增用户</p>
											<p class="p1">16万 1,042</p>
										</div>
									</div>
									<div class="r2">
										<span>
											<i class="el-icon-download"></i>
											<el-divider direction="vertical"></el-divider>
										</span>
										<span>
											<i class="el-icon-edit"></i>
											<el-divider direction="vertical"></el-divider>
										</span>
										<span>
											<i class="el-icon-share"></i>
											<el-divider direction="vertical"></el-divider>
										</span>
										<span><i class="el-icon-more"></i></span>
									</div>
								</el-card>
							</el-col>
						</el-row>
					</div>
					<div class="fa">
						<el-row>
							<el-col>
								<el-card :body-style="{ padding: '0px' }">
									<div class="r1">
										<span>
											<img
												src="/static/A.png"
												alt=""
												width="20px"
												height="20px"
											/>
										</span>
										<span class="span2">Angular</span>
										<br />
										<div class="user">
											<p class="p">活跃用户 新增用户</p>
											<p class="p1">15万 1,071</p>
										</div>
									</div>
									<div class="r2">
										<span>
											<i class="el-icon-download"></i>
											<el-divider direction="vertical"></el-divider>
										</span>
										<span>
											<i class="el-icon-edit"></i>
											<el-divider direction="vertical"></el-divider>
										</span>
										<span>
											<i class="el-icon-share"></i>
											<el-divider direction="vertical"></el-divider>
										</span>
										<span><i class="el-icon-more"></i></span>
									</div>
								</el-card>
							</el-col>
						</el-row>
						<el-row>
							<el-col>
								<el-card :body-style="{ padding: '0px' }">
									<div class="r1">
										<span>
											<img
												src="/static/zhonger.png"
												alt=""
												width="20px"
												height="20px"
											/>
										</span>
										<span class="span2">Ant Design</span>
										<br />
										<div class="user">
											<p class="p">活跃用户 新增用户</p>
											<p class="p1">13万 1,029</p>
										</div>
									</div>
									<div class="r2">
										<span>
											<i class="el-icon-download"></i>
											<el-divider direction="vertical"></el-divider>
										</span>
										<span>
											<i class="el-icon-edit"></i>
											<el-divider direction="vertical"></el-divider>
										</span>
										<span>
											<i class="el-icon-share"></i>
											<el-divider direction="vertical"></el-divider>
										</span>
										<span><i class="el-icon-more"></i></span>
									</div>
								</el-card>
							</el-col>
						</el-row>
						<el-row>
							<el-col>
								<el-card :body-style="{ padding: '0px' }">
									<div class="r1">
										<span>
											<img
												src="/static/pro.png"
												alt=""
												width="20px"
												height="20px"
											/>
										</span>
										<span class="span2">Ant Design pro</span>
										<br />
										<div class="user">
											<p class="p">活跃用户 新增用户</p>
											<p class="p1">15万 1,160</p>
										</div>
									</div>
									<div class="r2">
										<span>
											<i class="el-icon-download"></i>
											<el-divider direction="vertical"></el-divider>
										</span>
										<span>
											<i class="el-icon-edit"></i>
											<el-divider direction="vertical"></el-divider>
										</span>
										<span>
											<i class="el-icon-share"></i>
											<el-divider direction="vertical"></el-divider>
										</span>
										<span><i class="el-icon-more"></i></span>
									</div>
								</el-card>
							</el-col>
						</el-row>
						<el-row>
							<el-col>
								<el-card :body-style="{ padding: '0px' }">
									<div class="r1">
										<span>
											<img
												src="/static/B.png"
												alt=""
												width="20px"
												height="20px"
											/>
										</span>
										<span class="span2">Boostrap</span>
										<br />
										<div class="user">
											<p class="p">活跃用户 新增用户</p>
											<p class="p1">16万 1,042</p>
										</div>
									</div>
									<div class="r2">
										<span>
											<i class="el-icon-download"></i>
											<el-divider direction="vertical"></el-divider>
										</span>
										<span>
											<i class="el-icon-edit"></i>
											<el-divider direction="vertical"></el-divider>
										</span>
										<span>
											<i class="el-icon-share"></i>
											<el-divider direction="vertical"></el-divider>
										</span>
										<span><i class="el-icon-more"></i></span>
									</div>
								</el-card>
							</el-col>
						</el-row>
					</div>
					<div class="fa">
						<el-row>
							<el-col>
								<el-card :body-style="{ padding: '0px' }">
									<div class="r1">
										<span>
											<img
												src="/static/A.png"
												alt=""
												width="20px"
												height="20px"
											/>
										</span>
										<span class="span2">Angular</span>
										<br />
										<div class="user">
											<p class="p">活跃用户 新增用户</p>
											<p class="p1">15万 1,071</p>
										</div>
									</div>
									<div class="r2">
										<span>
											<i class="el-icon-download"></i>
											<el-divider direction="vertical"></el-divider>
										</span>
										<span>
											<i class="el-icon-edit"></i>
											<el-divider direction="vertical"></el-divider>
										</span>
										<span>
											<i class="el-icon-share"></i>
											<el-divider direction="vertical"></el-divider>
										</span>
										<span><i class="el-icon-more"></i></span>
									</div>
								</el-card>
							</el-col>
						</el-row>
						<el-row>
							<el-col>
								<el-card :body-style="{ padding: '0px' }">
									<div class="r1">
										<span>
											<img
												src="/static/zhonger.png"
												alt=""
												width="20px"
												height="20px"
											/>
										</span>
										<span class="span2">Ant Design</span>
										<br />
										<div class="user">
											<p class="p">活跃用户 新增用户</p>
											<p class="p1">13万 1,029</p>
										</div>
									</div>
									<div class="r2">
										<span>
											<i class="el-icon-download"></i>
											<el-divider direction="vertical"></el-divider>
										</span>
										<span>
											<i class="el-icon-edit"></i>
											<el-divider direction="vertical"></el-divider>
										</span>
										<span>
											<i class="el-icon-share"></i>
											<el-divider direction="vertical"></el-divider>
										</span>
										<span><i class="el-icon-more"></i></span>
									</div>
								</el-card>
							</el-col>
						</el-row>
						<el-row>
							<el-col>
								<el-card :body-style="{ padding: '0px' }">
									<div class="r1">
										<span>
											<img
												src="/static/pro.png"
												alt=""
												width="20px"
												height="20px"
											/>
										</span>
										<span class="span2">Ant Design pro</span>
										<br />
										<div class="user">
											<p class="p">活跃用户 新增用户</p>
											<p class="p1">15万 1,160</p>
										</div>
									</div>
									<div class="r2">
										<span>
											<i class="el-icon-download"></i>
											<el-divider direction="vertical"></el-divider>
										</span>
										<span>
											<i class="el-icon-edit"></i>
											<el-divider direction="vertical"></el-divider>
										</span>
										<span>
											<i class="el-icon-share"></i>
											<el-divider direction="vertical"></el-divider>
										</span>
										<span><i class="el-icon-more"></i></span>
									</div>
								</el-card>
							</el-col>
						</el-row>
						<el-row>
							<el-col>
								<el-card :body-style="{ padding: '0px' }">
									<div class="r1">
										<span>
											<img
												src="/static/B.png"
												alt=""
												width="20px"
												height="20px"
											/>
										</span>
										<span class="span2">Boostrap</span>
										<br />
										<div class="user">
											<p class="p">活跃用户 新增用户</p>
											<p class="p1">16万 1,042</p>
										</div>
									</div>
									<div class="r2">
										<span>
											<i class="el-icon-download"></i>
											<el-divider direction="vertical"></el-divider>
										</span>
										<span>
											<i class="el-icon-edit"></i>
											<el-divider direction="vertical"></el-divider>
										</span>
										<span>
											<i class="el-icon-share"></i>
											<el-divider direction="vertical"></el-divider>
										</span>
										<span><i class="el-icon-more"></i></span>
									</div>
								</el-card>
							</el-col>
						</el-row>
					</div>
				</el-tab-pane>
				<el-tab-pane label="项目（8）">角色管理</el-tab-pane>
			</el-tabs>
		</el-main>
	</el-container>
</template>

<script>
export default {
	data() {
		return {
			dynamicTags: [
				'很有想法的',
				'专注设计',
				'辣~',
				'大长腿',
				'川妹子',
				'海纳百川'
			],
			inputVisible: false,
			inputValue: '',
			list: [
				{ src: '/static/zhifubao.png', word: '科学搬砖组' },
				{ src: '/static/A.png', word: '全组都是吴彦祖' },
				{ src: '/static/zhonger.png', word: '中二少女团' },
				{ src: '/static/pro.png', word: '程序员日常' },
				{ src: '/static/B.png', word: '高逼格设计天团' },
				{ src: '/static/pianni.png', word: '骗你来学计算机' }
			]
		};
	},
	methods: {
		handleClose(tag) {
			this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
		},

		showInput() {
			this.inputVisible = true;
		},

		handleInputConfirm() {
			let inputValue = this.inputValue;
			if (inputValue) {
				this.dynamicTags.push(inputValue);
			}
			this.inputVisible = false;
			this.inputValue = '';
		}
	}
};
</script>

<style>
/* el-asede 设置 */
a {
	list-style: none;
	text-decoration: none;
}
.el-aside {
	display: block;
	height: 800px;
	margin-top: 20px;
	margin-left: 20px;
	padding: 20px;
	background: #fff;
	border: 1px solid #dcdfe6;
	box-shadow: 0 2px 4px 0 rgb(0 0 0 / 12%), 0 0 6px 0 rgb(0 0 0 / 4%);
}
/* l-header 设置 */
.l-header {
	border-bottom: 1px dotted rgb(224, 219, 219);
}
.l-header-one {
	box-sizing: border-box;
	bottom: 20px;
}
.l-header-one img {
	display: block;
	width: 120px;
	height: 120px;
	margin-left: 120px;
}
.l-header-two {
	margin-top: 20px;
	margin-bottom: 4px;
	color: black;
	font-weight: 500;
	font-size: 20px;
	text-align: center;
	line-height: 20px;
}
.l-header-three {
	margin-bottom: 4px;
	color: black;
	font-size: 14px;
	text-align: center;
	line-height: 28px;
	font-family: 100;
	bottom: 20px;
}
.l-header-four {
	margin-top: 20px;
	margin-left: 60px;
	font-size: 14px;
}
span img {
	transform: translateY(20%);
}
.el-tag + .el-tag {
	margin-left: 10px;
}
.button-new-tag {
	margin-left: 10px;
	height: 32px;
	line-height: 30px;
}
.input-new-tag {
	display: block;
	margin-left: 10px;
	margin-top: 10px;
	width: 90px;
}
.sa {
	color: grey;
}
/* l-body 设置 */
.l-body {
	margin-top: 10px;
	padding: 10px;
	border-bottom: 1px dotted rgb(224, 219, 219);
}
.input-new-tag {
	margin-right: 10px;
}
.flag {
	margin-bottom: 10px;
	font-size: 14px;
}
/* 伪元素渲染竖线 */
.el-icon-star-off {
	position: relative;
}

.el-icon-thumb {
	position: relative;
	padding-left: 20px;
}

/* l-fooster设置 */
.l-fooster {
	margin-top: 10px;
	padding: 10px;
	border-bottom: 1px dotted rgb(224, 219, 219);
}
.box {
	margin-top: 10px;
}
.box-1 {
	display: flex;
	height: 50px;
}
.box-1-x {
	flex: 1;
}
.box-2 {
	display: flex;
	height: 50px;
}
.box-2-x {
	flex: 1;
}
.box-3 {
	display: flex;
	height: 50px;
}
.box-3-x {
	flex: 1;
}
/* el-main  */
/* 文章页 */
.block {
	margin: 20px;
	border-bottom: 1px solid rgb(224, 219, 219);
	height: 220px;
}
.tag {
	margin-top: 10px;
	color: black;
}
.el-tag {
	margin-bottom: 10px;
}
.one-2 {
	margin-top: 20px;
}
.link {
	margin-top: 10px;
	font-size: 14px;
}
.spann {
	padding-left: 10px;
}
span img {
	border-radius: 50%;
}
.span {
	padding-left: 20px;
	color: gray;
}
.aa {
	padding-left: 10px;
}
.one-3 {
	margin-top: 20px;
	color: gray;
	font-size: 14px;
}
.el-icon-star-off {
	color: blue;
}
.el-icon-chat-dot-round {
	padding-left: 30px;
}
.fa {
	display: flex;
}
.el-row {
	flex: 1;
	margin-left: 15px;
	margin-top: 20px;
}
.el-row:hover {
	background-color: whitesmoke;
	box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3), 0 0 8px rgba(0, 0, 0, 0.1);
	transition: 0.3s linear;
}
.el-card {
	padding: 20px;
}
.span2 {
	padding-left: 20px;
}
.p {
	padding-left: 40px;
	color: gray;
}
.p1 {
	padding-left: 40px;
	font-size: 20px;
}
.r2 {
	margin-top: 30px;
	border-top: 1px solid rgb(224, 219, 219);
	padding-top: 15px;
}
.r2 span {
	padding-top: 10px;
	padding-left: 15px;
	color: grey;
}
</style>
