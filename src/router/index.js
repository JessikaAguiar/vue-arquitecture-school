import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import MyTravelPage from '../pages/MyTravelPage.vue'
import ProfilePage from '@/pages/ProfilePage.vue'

const routes = [
    {path: '/', component: HomePage, meta: { title: 'Travelgram' }},
    {path: '/my-travel', component: MyTravelPage, meta: { title: 'Minhas Viagens' }},
    {path: '/profile', component: ProfilePage, meta: { title: 'Meu Perfil' }}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// Global hook para atualizar o title do navegador
router.beforeEach((to, from, next) => {
    const defaultTitle = 'Travelgram';
    document.title = to.meta.title || defaultTitle;
    next();
});

export default router
