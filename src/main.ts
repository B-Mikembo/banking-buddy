import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/routes'
import VueApexCharts from 'vue3-apexcharts'

const app = createApp(App).use(router);
app.component('apexchart', VueApexCharts);
app.mount('#app');