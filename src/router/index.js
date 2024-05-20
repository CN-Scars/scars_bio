import { createRouter, createWebHistory } from 'vue-router'
import AboutMe from '../components/AboutMe.vue'

const routes = [
    {
        path: '/',
        name: 'AboutMe',
        component: AboutMe
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
