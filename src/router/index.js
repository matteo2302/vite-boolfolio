import { createRouter, createWebHashHistory } from "vue-router";
import Homepage from "../pages/Homepage.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Homepage,
    },
  ],
});
export { router };
