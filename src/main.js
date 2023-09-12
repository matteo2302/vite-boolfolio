import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.vue";
import { router } from "./router";
App.use(router);
createApp(App).mount("#app");
