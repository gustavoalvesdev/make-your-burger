import { createWebHistory, createRouter } from "vue-router";

import Home from '../views/Home.vue';
import Pedidos from '../views/Pedidos.vue';

const routes = [
    { path: '/', component: Home },
    {path: '/pedidos', component: Pedidos },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})