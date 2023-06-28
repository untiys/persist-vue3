import { createWebHashHistory, createRouter } from "vue-router"
import { useMenuList } from "@/pinia/modules/menuList"
import { staticRouter, errorRouter } from "./modules/routes"
import NProgress from "nprogress"
import "nprogress/nprogress.css"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...staticRouter, ...errorRouter],
})

let getRouter = false
// 路由守卫
router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const menuStore = useMenuList()
  window.axiosPromiseArr?.forEach((ele: any, index: number) => {
    // 路由跳转之前，终止上一个页面正在请求的内容
    ele.cancel()
    // 清空请求的参数
    delete window.axiosPromiseArr[index]
  })
  document.title = to.meta.title as string

  const token = localStorage.getItem("token")
  if (!token) {
    if (to.path === "/login") {
      next()
    } else {
      next("/login")
    }
  } else {
    if (!getRouter) {
      getRouter = true
      await menuStore.getMenuListApi()
      await menuStore.getInitMenus()
      next({ ...to, replace: true })
    } else {
      if (to.path === "/") {
        next("/home/index")
      } else {
        next()
      }
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router
