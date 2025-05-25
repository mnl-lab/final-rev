import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import EditView from "@/views/EditView.vue";
import BookView from "@/views/BookView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/book/:id",
            name: "book-detail",
            component: BookView,
            props: true
        },
        {
            path: "/edit/:id",
            name: "edit-book",
            component: EditView,
            props: true
        }
    ]
})
export default router;