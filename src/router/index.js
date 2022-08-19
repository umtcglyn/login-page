import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        name : "Home",
        path : "/",
        component : () => import("@/views/Home.vue")
    },
    {
        name : "LoginPage",
        path : "/login",
        component : () => import("@/views/Login.vue")
    },
    {
        name : "RegisterPage",
        path : "/register",
        component : () => import("@/views/Register.vue")
    },
]

const router = createRouter({
    routes,
    history : createWebHashHistory()
});

export default router;