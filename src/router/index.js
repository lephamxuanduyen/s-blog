import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import CreateBlog from "../pages/CreateBlog.vue";
import ReadingList from "../pages/ReadingList.vue";
import Topics from "../pages/Topics.vue"
import EditBlog from "../pages/EditBlog.vue";
import DetailBlog from "../pages/DetailBlog.vue";

const route = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
            meta: {
                title: "S-blog",
            }
        },
        {
            path: "/reading-list",
            name: "ReadingList",
            component: ReadingList,
            meta: {
                title: "Reading List | S-blog",
            }
        },
        {
            path: "/topics",
            name: "Topics",
            component: Topics,
            meta: { 
                title: "Topics | S-blog",
            }
        },
        {
            path: "/create-blog",
            name: "Create Blog",
            component: CreateBlog,
            meta: {
                title: "Create Post | S-blog",
            }
        },
        {
            path: "/edit-blog/:id",
            name: "Edit Blog",
            component: EditBlog,
            meta: {
                title: "Edit Post | S-blog",
            }
        },
        {
            path: "/blogs/:id",
            name: "Detail Blog",
            component: DetailBlog,
            meta: {
                title: "Detail Blog | S-blog",
            }
        }
        ,
        {
            path: "/notfound",
            name: "Not Found",
            meta: {
                title: "Not Found | S-blog",
            }
        },
    ]
})

route.beforeEach((to, from) => {
    document.title = to.meta?.title ?? 'Default Title'
  })

export default route