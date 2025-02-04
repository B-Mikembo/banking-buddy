import { PageManager } from "./pages.config";
import { createPinia, setActivePinia, defineStore } from "pinia";
const pinia = createPinia();
setActivePinia(pinia);

const usePageStore = defineStore("pageStore", {
  state: () => ({
    pages: [] as PageManager[],
  }),
  actions: {
    addPage(page: PageManager) {
      this.pages.push(page);
    },
    getPageByName(name: string) {
      return this.pages.find((p) => p.getName() === name);
    },
  },
});

export const pages = usePageStore();