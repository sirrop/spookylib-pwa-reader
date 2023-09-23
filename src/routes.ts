import {createRouter, createWebHistory} from "vue-router";
import Home from "./pages/Home.vue";
import Articles from "./pages/Articles.vue";
import Search from "./pages/Search.vue";
import ForYou from "./pages/ForYou.vue";

export const routes = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/articles',
            component: Articles
        },
        {
            path: '/search',
            component: Search
        },
        {
            path: '/for-you',
            component: ForYou
        }
    ]
})