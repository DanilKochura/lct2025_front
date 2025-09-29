import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from "@/components/Dashboard.vue";
import Region from "@/components/Region.vue";
import Flight from "@/components/Flight.vue";
import History from "@/components/History.vue";

const routes = [
    {
        path: '/',
        component: Dashboard,
        props: true, // Передаем параметр id как prop
    },
    {
        path: '/region/:id',
        component: Region,
        props: true, // Передаем параметр id как prop
    },
    {
        path: '/flight/:id',
        component: Flight,
        props: true, // Передаем параметр id как prop
    },
    {
        path: '/history',
        component: History,
        props: true, // Передаем параметр id как prop
    }

]

export default createRouter({
    history: createWebHistory(),
    routes,
})


