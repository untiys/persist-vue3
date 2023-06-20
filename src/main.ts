import { createApp } from "vue"

import App from "./App.vue"
import pinia from "./pinia/index"
import router from "./router"

import "./assets/css/normalize.css"
import "uno.css"

const app = createApp(App)
app.use(pinia)
app.use(router)

app.mount("#app")
