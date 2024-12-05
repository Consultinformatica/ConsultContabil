import { createRouter, createWebHistory } from 'vue-router'
import Institucional from '@/views/Institucional.vue';
import Contatos from '@/views/Contatos.vue';
import Servicos from '@/views/Servicos.vue';
import Home from '@/views/Home.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Início',
            component: Home
        },
        {
            path: '/contatos',
            name: 'Contatos',
            component: Contatos
        },
        {
            path: '/servicos',
            name: 'Servicos',
            component: Servicos
        },
        {
            path: '/sobre',
            name: 'Sobre',
            component: Institucional
        }
    ]
})

export default router;