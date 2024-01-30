import { createRouter,  createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import QuizView from "../views/QuizView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
        path: "/",
        name: "home",
        component: HomeView,
        },
        {
        path: "/home",
        redirect: "/", // to redirect possible paths of the same component instead of creating another path for the same component
        },
        {
        path: "/about",
        name: "about",
        component: AboutView,
        },
        {
        path: "/quiz/:id",
        name: "quiz",
        component: QuizView,
        },
        {
        path: "/:catchall(.*)*", // a RegEx to deal with undefined paths
        name: "Not Found",
        component: NotFoundView,
        },
    ],
    });

export default router;