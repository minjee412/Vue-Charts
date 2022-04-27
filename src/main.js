import { createApp } from 'vue';
import App from './App.vue';
import ChartPlugin from './plugins/ChartPlugin';

// .use() => install(); 실행
const app = createApp(App);
app.mount('#app');
app.use(ChartPlugin);
