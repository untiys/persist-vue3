<template>
  <el-config-provider :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
import zhCn from "element-plus/dist/locale/zh-cn.mjs"
import { useLayoutConfig } from "@/pinia/modules/layoutConfig"
import { setLightColor } from "@/utils/color"
const layoutConfig = useLayoutConfig()

watchEffect(() => {
  document.documentElement.style.setProperty(
    "--el-color-primary",
    layoutConfig.themeColor
  )
})
setLightColor(layoutConfig.themeColor)
</script>

<style lang="scss" scoped></style>
