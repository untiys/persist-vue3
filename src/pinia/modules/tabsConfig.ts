import { defineStore } from "pinia"
import { TabsConfig } from "../interface/index"
import router from "@/router"
export const useTabsConfig = defineStore({
  id: "tabsConfig",
  state: (): TabsConfig => ({
    tabs: [
      {
        path: "/home/index",
        name: "/home/index",
        component: "/home/index",
        meta: {
          title: "首页",
          isFull: false,
          icon: "HomeFilled",
        },
      },
    ],
    // 已存在的tab对象
    accessTabs: {
      "/home/index": true,
    },
  }),
  actions: {
    pushTab(item: Menu.MenuOptions) {
      // 如果不存在存在相同路由
      if (!(this.accessTabs[item.path] == true)) {
        //   全屏的页面，不加入tab
        if (!item.meta.isFull) {
          this.tabs.push(item)
          this.accessTabs[item.path] = true
        }
      }
    },
    deleteTab(path: string) {
      let index: number = 0
      this.tabs.forEach((item, i) => {
        if (item.path == path) {
          delete this.accessTabs[path]
          this.tabs.splice(i, 1)
          index = i - 1
        }
      })
      router.push(this.tabs[index].path)
    },
  },
  persist: true,
})
