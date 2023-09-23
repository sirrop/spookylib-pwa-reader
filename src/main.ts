import { routes } from "./routes.ts";
import App from './App.vue'
import "bootstrap-icons/font/bootstrap-icons.min.css"
import "./style.css"
import { createApp } from "vue";

const app = createApp(App)
app.use(routes)
app.mount('#app')
