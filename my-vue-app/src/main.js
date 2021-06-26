import Vue from 'vue';
import text14 from './text14.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/style/common.css';

// import ECharts from 'vue-echarts';
// import { use } from 'echarts/core';
// import { CanvasRenderer } from 'echarts/renderers';
// import { BarChart } from 'echartsarts';
// import { GridComponent, TooltipComponent } from 'echarts/components';
// use([CanvasRenderer, BarChart, GridComponent, TooltipComponent]);
Vue.config.productionTip = false;
Vue.use(ElementUI);
// Vue.component('v-chart', ECharts);
new Vue({
	render: h => h(text14)
}).$mount('#app');
