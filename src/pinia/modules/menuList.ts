import { defineStore } from "pinia"
import { menuList } from "../interface/index"
import type { RouteRecordRaw } from "vue-router"
import router from "@/router"

import { getMenu } from "@/api/common"

// 引入 views 文件夹下所有 vue 文件
const components = import.meta.glob("@/views/**/*.vue")

export const useMenuList = defineStore({
  id: "menus",
  state: (): menuList => ({
    menuList: "",
  }),
  actions: {
    // 调菜单接口，失活数据
    getMenuListApi() {
      return getMenu().then((res) => {
        this.menuList = JSON.stringify(res.data)
      })
    },
    // 获取初始化完成的菜单数组
    getInitMenus() {
      const routerList = JSON.parse(this.menuList)
      const routes = this.initRoute(routerList)
      // 添加动态路由
      routes.forEach((e: RouteRecordRaw) => {
        if (e.meta?.isFull) {
          router.addRoute(e)
        } else {
          router.addRoute("layout", e)
        }
      })
    },
    // 初始化菜单
    initRoute(routerList: RouteRecordRaw[]) {
      // 递归处理数据
      return routerList.map((e: RouteRecordRaw) => {
        e.component = components["../../views" + e.component + ".vue"]
        if (e.children) {
          this.initRoute(e.children)
        }
        return e
      })
    },
  },
  persist: false,
})
