// 모든 컴포넌트에서 사용하고 싶은 기능을 정의 하는 곳

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default {
  install(Vue) {
    Vue.prototype.$_Chart = Chart.register(...registerables);

    // // BarChart.vue
    // this.$_Chart;

    // // LineChart.vue
    // this.$_Chart;
  },
};
