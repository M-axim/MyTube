import {createRouter, createWebHistory} from 'vue-router';
import Index from './views/Index'
import Subscribe from './views/Subscribe'

let routes = [
    {
        name: "Home",
        path: "/",
        component: Index
    },
    {
        name: "Subscribe",
        path: "/subscribe",
        component: Subscribe
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router