import { createRouter, createWebHistory, Router} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: () => import('../views/Dashboard.vue')
    },
    {
        path: '/',
        name: 'Mes Banques',
        component: () => import('../views/Dashboard.vue')
    },
    {
        path: '/',
        name: 'Historique des transactions',
        component: () => import('../views/Dashboard.vue')
    },
    {
        path: '/',
        name: 'Transfert',
        component: () => import('../views/Dashboard.vue')
    },
    {
        path: '/',
        name: 'Connecter une banque',
        component: () => import('../views/Dashboard.vue')
    },
]
const router: Router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
