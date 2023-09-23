import { ViteSSGContext } from "vite-ssg";
import { ViteSSG } from "vite-ssg/single-page";
import { routes } from "./routes.ts";
import App from './App.vue'
import "bootstrap-icons/font/bootstrap-icons.min.css"
import "./style.css"

function init(context: ViteSSGContext<false>): void {
    context.app.use(routes)
}

export const createApp = ViteSSG(App, init)
