import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.vue";
import { router } from "./router/index";

const app = createApp(App);

app.use(router);
app.mount("#app");
