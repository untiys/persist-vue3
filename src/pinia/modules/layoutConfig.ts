import { defineStore } from "pinia"
import { layoutConfig } from "../interface/index"
import { setLightColor } from "@/utils/color"

export const useLayoutConfig = defineStore({
  id: "layout",
  state: (): layoutConfig => ({
    layoutType: "layoutConventionType",
    isCollapse: false,
    // 主题颜色
    themeColor: "rgba(64, 158, 255, 1)",
    preColors: [
      "rgba(64, 158, 255, 1)",
      "#ff8c00",
      "#ffd700",
      "#90ee90",
      "#00ced1",
      "#1e90ff",
      "#c71585",
      "rgba(255, 69, 0, 0.68)",
      "rgb(255, 120, 0)",
      "hsv(51, 100, 98)",
    ],
    modelType: false, // false为白天模式
    isDeath: false, //哀悼模式
    isShowFooter: false, //是否隐藏页脚
    breadcrumb: [],
  }),
  getters: {
    // 不同布局，右侧用户栏颜色不同
    getAuthBoardColor(state) {
      const authBoardColors: { [K in string]: string } = {
        layoutConventionType: "#303133",
        layoutVerticalType: "#fff",
      }
      return authBoardColors[state.layoutType]
    },
  },
  actions: {
    // 递归获取面包屑
    getBreadcrumb(
      menuList: Menu.MenuOptions[],
      parent: Menu.MenuOptions[] = [],
      result: { [K in string]: any } = {}
    ) {
      for (let e of menuList) {
        result[e.path] = [...parent, e]
        if (e.children) {
          this.getBreadcrumb(e.children, result[e.path], result)
        }
      }
      return result
      // this.breadcrumb = result
    },
    // 设置布局类型
    setLayout(type: string) {
      this.layoutType = type
    },
    setThemeColor(color: string) {
      if (!color) {
        this.themeColor = "rgba(64, 158, 255, 1)"
        setLightColor("rgba(64, 158, 255, 1)")

        return
      }
      this.themeColor = color
      setLightColor(color)
    },
  },
  persist: true,
})
