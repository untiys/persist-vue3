import { createWebHashHistory, createRouter } from "vue-router"
import { useMenuList } from "@/pinia/modules/menuList"
import { staticRouter, errorRouter } from "./modules/routes"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...staticRouter, ...errorRouter],
})

let getRouter = false
// 路由守卫
router.beforeEach(async (to, from, next) => {
  const menuStore = useMenuList()
  window?.axiosPromiseArr?.forEach((ele: any, index: number) => {
    ele.cancel() // 路由跳转之前，终止上一个页面正在请求的内容
    // 清空请求的参数
    delete window.axiosPromiseArr[index]
  })

  document.title = to.meta.title as string

  const token = localStorage.getItem("token")

  if (!token) {
    next("/login")
  } else {
    if (!getRouter) {
      getRouter = true
      await menuStore.getMenuListApi()
      await menuStore.getInitMenus()
      next({ ...to, replace: true })
    } else {
      next()
    }
  }
})

export default router
