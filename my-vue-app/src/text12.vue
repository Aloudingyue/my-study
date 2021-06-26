<template>
	<div class="container">
		<e-charts :option="option"></e-charts>
	</div>
</template>

<script>
import ECharts from 'vue-echarts';
import { use } from 'echarts/core';

// import ECharts modules manually to reduce bundle size
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart, LineChart, MapChart } from 'echarts/charts';
import {
	GridComponent,
	TooltipComponent,
	GeoComponent
} from 'echarts/components';
use([
	CanvasRenderer,
	BarChart,
	LineChart,
	MapChart,
	GridComponent,
	TooltipComponent,
	GeoComponent
]);

export default {
	components: {
		ECharts
	},
	data() {
		return {
			option: {
				xAxis: {
					type: 'category',
					data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
				},
				yAxis: {
					type: 'value'
				},
				series: [
					{
						data: [150, 230, 224, 218, 135, 147, 260],
						type: 'bar'
					}
				]
			}
		};
	},
	mounted() {
		setInterval(() => {
			this.option.series[0].data = [
				Math.random() * 300,
				Math.random() * 300,
				Math.random() * 300,
				Math.random() * 300,
				Math.random() * 300,
				Math.random() * 300,
				Math.random() * 300
			];
		}, 1000);
		//重新下载，npm下载，引入github
		// axios.get('./static/china.json')
	}
};
</script>

<style>
body {
	margin: 0;
}

.container {
	width: 100vw;
	height: 100vh;
}
</style>
