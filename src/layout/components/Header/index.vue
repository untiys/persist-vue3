<template>
  <div class="header">
    <div class="header-left">
      <div @click="toggleMenu" class="toogle">
        <el-icon><Guide /></el-icon>
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
  .header-left {
    display: flex;
    align-items: center;
    .toogle {
      width: 55px;
      height: 55px;
      line-height: 55px;
      text-align: center;
      cursor: pointer;
      background-color: rgb(246, 246, 246);

      &:hover {
        background-color: rgb(231, 229, 229);
        transition: 0.3s;
      }
    }
    .breadcrumb {
      margin-left: 20px;
    }
  }
  .header-right {
  }
}
</style>
