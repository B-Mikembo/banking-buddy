import { RouteRecordRaw } from "vue-router";
import { AccountRouteName } from "./accountRouteName";
import AccountCreationPage from "@/pages/AccountCreationPage.vue";

export enum AccountRoutePath {
    ACCOUNT_CREATION = '/account-creation'
}

const accountRoutes: RouteRecordRaw[] = [
    {
        path: AccountRoutePath.ACCOUNT_CREATION,
        name: AccountRouteName.ACCOUNT_CREATION,
        component: AccountCreationPage,
        meta: {
            title: 'Création du compte',
            isPublic: true
        }
    }
];

export default accountRoutes;