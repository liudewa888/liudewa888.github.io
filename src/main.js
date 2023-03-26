import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";

import "./assets/css/base.css";
import "./assets/css/normalize.css";
import "./assets/css/global.css";
import "element-plus/dist/index.css";

import "./assets/css/md.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
