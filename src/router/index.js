import { createRouter, createWebhHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";

const router = createRouter({
  history: createWebhHistory(),
  AppCardsroutes: [{ path: "/", name: "home", component: HomePage }],
});
