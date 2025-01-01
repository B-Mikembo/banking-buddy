import { createApp } from "vue";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import "./style.css";
import App from "@/App.vue";
import { createPinia } from "pinia";
import router from "@/router";

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

declare global {
  interface Window {
    _paq: any;
    dsfr(element: HTMLElement | null): {
      model: {
        conceal(): void;
        disclose(): void;
      }
    }
  }
}

interface HTMLElement {
  addEventListener(
    type: "dsfr.conceal",
    listener: (event: Event) => void,
    options?: boolean | AddEventListenerOptions,
  ): void;
  removeEventListener(
    type: "dsfr.conceal",
    listener: (event: Event) => void,
    options?: boolean | EventListenerOptions
  ): void;
}

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(router);
app.use(pinia);

app.mount("#app");
