import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import accountRoutes from "./account/routes";

const Authentication = () => import("@/components/Authentication.vue");
const Page404 = () => import("@/components/pages/Page404.vue");

export enum CommonRouteName {
  AUTHENTICATION = "authentication",
  NOT_FOUND = "not-found",
}

enum CommonRoutePath {
  AUTHENTICATION = "/authentication",
}

const routes: RouteRecordRaw[] = [
  ...accountRoutes,
  {
    path: CommonRoutePath.AUTHENTICATION,
    name: CommonRouteName.AUTHENTICATION,
    component: Authentication,
    meta: {
      title: "Authentication",
      isPublic: true,
    },
  },
  {
    path: "/:catchAll(.*)",
    name: CommonRouteName.NOT_FOUND,
    component: Page404,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.onError((error) => {
  if (
    error.message.includes("Failed to fetch dynamically imported module") ||
    error.message.includes("Importing a module script failed")
  ) {
    window.location.reload();
  }
});

export default router;
