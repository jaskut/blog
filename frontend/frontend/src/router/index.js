import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/main/Home.vue";
import PostView from "@/views/main/Post.vue";
import CategoryView from "@/views/main/Category.vue";
import TagView from "@/views/main/Tag.vue";
import AllCategoriesView from "@/views/main/AllCategories.vue";
import AllTagsView from "@/views/main/AllTags.vue";
import SignUpView from "@/views/user/SignUp.vue";
import SignInView from "@/views/user/SignIn.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/category/:category",
    name: "Category",
    component: CategoryView,
  },
  {
    path: "/tag",
    name: "Tag",
    component: TagView,
  },
  {
    path: "/post/:slug",
    name: "Post",
    component: PostView,
  },
  {
    path: "/categories",
    name: "Categories",
    component: AllCategoriesView,
  },
  {
    path: "/tags",
    name: "Tags",
    component: AllTagsView,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUpView,
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignInView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
