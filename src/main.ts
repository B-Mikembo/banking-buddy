import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "@/router";
import { createPinia } from "pinia";
import VueApexCharts from "vue3-apexcharts";

import '@gouvfr/dsfr/dist/component/modal/modal.min.css';
import '@gouvfr/dsfr/dist/core/core.min.css';
import '@gouvfr/dsfr/dist/utility/utility.min.css';
import '@gouvfr/dsfr/dist/component/button/button.min.css';
import '@gouvfr/dsfr/dist/component/input/input.min.css';
import '@gouvfr/dsfr/dist/component/logo/logo.min.css';
import '@gouvfr/dsfr/dist/component/link/link.min.css';
import '@gouvfr/dsfr/dist/component/form/form.min.css';
import '@gouvfr/dsfr/dist/component/tag/tag.min.css';
import '@gouvfr/dsfr/dist/component/checkbox/checkbox.min.css';
import '@gouvfr/dsfr/dist/component/radio/radio.min.css';
import '@gouvfr/dsfr/dist/component/badge/badge.min.css';
import '@gouvfr/dsfr/dist/dsfr.module.min.js';
import '@gouvfr/dsfr/dist/component/select/select.min.css';
import '@gouvfr/dsfr/dist/component/stepper/stepper.min.css';

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);
app.use(router);
app.component("apexchart", VueApexCharts);

app.mount("#app");
