import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import accountRoutes from "./account/routes";
import { title } from "process";

const Authentication = () => import("@/components/Authentication.vue");
const Page404 = () => import("@/pages/Page404.vue");

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
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../pages/Dashboard.vue'),
    meta: {
      title: "page",
      isPublic: true,
    },
  },
  {
    path: '/MyAccounts',
    name: 'Mes Banques',
    component: () => import('../pages/Accounts.vue'),
    meta: {
      title: "page",
      isPublic: true
    }
  },
  {
    path: '/MyTransactions',
    name: 'Historique des transactions',
    component: () => import('../pages/Transactions.vue'),
    meta: {
      title: "page",
      isPublic: true
    }
  },
  {
    path: '/Transfer',
    name: 'Transfert',
    component: () => import('../pages/Transfer.vue'),
    meta: {
      title: "page",
      isPublic: true
    }
  },
  {
    path: '/LinkAccount',
    name: 'Connecter une banque',
    component: () => import('../pages/LinkingBank.vue'),
    meta: {
      title: "page",
      isPublic: true
    }
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
