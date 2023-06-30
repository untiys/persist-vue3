<template>
  <div>
    <el-breadcrumb :separator-icon="ArrowRight">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="e in breadcrumb" :key="e.path">{{
          e.meta.title
        }}</el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { useLayoutConfig } from "@/pinia/modules/layoutConfig"
import { useMenuList } from "@/pinia/modules/menuList"
import { ArrowRight } from "@element-plus/icons-vue"
const route = useRoute()
const layoutConfig = useLayoutConfig()
const menuList = useMenuList()
const menus = JSON.parse(menuList.menuList)
const breadcrumb = computed(() => {
  let breadcrumbs = layoutConfig.getBreadcrumb(menus)[route.path]

  if (breadcrumbs[0].path != "/home/index") {
    breadcrumbs = [
      { path: "/home/index", meta: { icon: "HomeFilled", title: "首页" } },
    ]
  }
  return breadcrumbs
})
</script>

<style lang="scss" scoped>
:deep .el-breadcrumb__inner {
  color: var(--el-text-color-primary) !important;
}
:deep .el-breadcrumb__separator {
  color: var(--el-text-color-primary) !important;
}
</style>
