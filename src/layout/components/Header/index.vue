<template>
  <div class="header">
    <div class="header-left">
      <div @click="toggleMenu" class="toogle">
        <el-icon :size="20"><Operation /></el-icon>
      </div>
      <div class="breadcrumb">
        <Breadcrumb />
      </div>
    </div>
    <div class="header-right"><Theme /></div>
  </div>
</template>

<script setup lang="ts">
import { useLayoutConfig } from "@/pinia/modules/layoutConfig"
import Breadcrumb from "./Breadcrumb/index.vue"
import Theme from "./Theme/index.vue"

const layoutConfig = useLayoutConfig()

const toggleMenu = () => {
  layoutConfig.isCollapse = !layoutConfig.isCollapse
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  height: 55px;
  justify-content: space-between;
  border-bottom: 1px solid var(--el-border-color-light);
  background-color: var(--el-menu-bg-color);
  .header-left {
    display: flex;
    align-items: center;
    .toogle {
      width: 55px;
      height: 55px;
      color: var(--el-menu-logo-color);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    .breadcrumb {
      margin-left: 20px;
    }
  }
  .header-right {
  }
}
</style>
