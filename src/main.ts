import { createApp } from "vue"

import App from "./App.vue"
import * as Icons from "@element-plus/icons-vue"

import pinia from "./pinia/index"
import router from "./router"

import "./assets/css/normalize.css"
import "uno.css"

import "@/assets/css/common.scss"

const app = createApp(App)

Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key as keyof typeof Icons])
})
app.use(pinia)
app.use(router)

app.mount("#app")
