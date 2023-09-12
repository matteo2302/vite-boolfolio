import { createRouter } from "vue-router";
import HomePage from "../pages/HomePage.vue";

const router = createRouter({
  AppCardsroutes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
  ],
});
export { router };
