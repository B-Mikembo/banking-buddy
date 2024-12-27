import { createRouter, createWebHistory, Router} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: () => import('../views/Dashboard.vue')
    },
    {
        path: '/MyAccounts',
        name: 'Mes Banques',
        component: () => import('../views/Accounts.vue')
    },
    {
        path: '/MyTransactions',
        name: 'Historique des transactions',
        component: () => import('../views/Transactions.vue')
    },
    {
        path: '/Transfer',
        name: 'Transfert',
        component: () => import('../views/Transfer.vue')
    },
    {
        path: '/LinkAccount',
        name: 'Connecter une banque',
        component: () => import('../views/LinkingBank.vue')
    },
]
const router: Router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
