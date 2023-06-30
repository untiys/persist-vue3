<template>
  <component :is="layoutClass[layoutType]"></component>
</template>

<script setup lang="ts">
import { useLayoutConfig } from "@/pinia/modules/layoutConfig"
import layoutConvention from "./layoutConvention/index.vue"
import layoutVertical from "./layoutVertical/index.vue"
// 获取几个布局类型
const layoutConfig = useLayoutConfig()

const layoutClass: { [key in string]: any } = {
  layoutConventionType: layoutConvention,
  layoutVerticalType: layoutVertical,
}
const layoutType = computed(() => {
  return layoutConfig.layoutType || "layoutConventionType"
})
</script>

<style lang="scss" scoped></style>
