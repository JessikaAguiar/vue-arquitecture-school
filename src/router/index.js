import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import MyTravelPage from '../pages/MyTravelPage.vue'
import ProfilePage from '@/pages/ProfilePage.vue'

const routes = [
    {path: '/', component: HomePage},
    {path: '/my-travel', component: MyTravelPage},
    {path: '/profile', component: ProfilePage}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
