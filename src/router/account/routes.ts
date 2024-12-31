const AccountCreationPage = () => import('@/components/pages/AccountCreationPage.vue');
const AccountValidationPage = () => import('@/components/pages/AccountValidationPage.vue');

import { userStore } from "@/store/user";
import { RouteRecordRaw } from "vue-router";
import { AccountRouteName } from "./routeAccountName";

export enum AccountRoutePath {
  ACCOUNT_CREATION = "/account-creation",
  ACCOUNT_VALIDATION = "/account-validation",
}

const onboardingGuard = () => {
  const { user } = userStore();
  if(user.onboardingDone) {
    return false;
  }
};

const accountRoutes: RouteRecordRaw[] = [
  {
    path: AccountRoutePath.ACCOUNT_CREATION,
    name: AccountRouteName.ACCOUNT_CREATION,
    component: AccountCreationPage,
    meta: {
      title: 'Création du compte',
      isPublic: true,
    },
  },
  {
    beforeEnter: onboardingGuard,
    path: AccountRoutePath.ACCOUNT_VALIDATION,
    name: AccountRouteName.ACCOUNT_VALIDATION,
    component: AccountValidationPage,
    meta: {
      title: 'Validation du compte',
      isPublic: true
    }
  }
];

export default accountRoutes;
