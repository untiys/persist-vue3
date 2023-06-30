<template>
  <el-config-provider :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
import zhCn from "element-plus/dist/locale/zh-cn.mjs"
import { useLayoutConfig } from "@/pinia/modules/layoutConfig"
import { setLightColor } from "@/utils/color"
import { theme } from "@/theme/theme"

const layoutConfig = useLayoutConfig()

watchEffect(() => {
  document.documentElement.style.setProperty(
    "--el-color-primary",
    layoutConfig.themeColor
  )
  const styles = theme[layoutConfig.modelType ? "dark" : "light"]
  for (let i in styles) {
    document.documentElement.style.setProperty(i, styles[i])
  }
})
watchEffect(() => {
  if (layoutConfig.isDeath) {
    document.getElementsByTagName("html")[0].style.filter = "grayscale(100%)"
  } else {
    document.getElementsByTagName("html")[0].style.filter = "grayscale(0)"
  }
})
setLightColor(layoutConfig.themeColor)

const setDarkModel = () => {
  const styles = theme[layoutConfig.modelType ? "dark" : "light"]

  for (let i in styles) {
    document.documentElement.style.setProperty(i, styles[i])
  }
}
setDarkModel()
</script>

<style lang="scss" scoped></style>
