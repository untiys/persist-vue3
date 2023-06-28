<template>
  <el-drawer :modelValue="isOpen" title="主题设置" size="300px">
    <div m-b-50px>
      <el-divider>
        <el-icon><Notification /></el-icon><span m-l-10px>布局切换</span>
      </el-divider>
      <div flex class="layout-toggle">
        <div @click="layoutConfig.setLayout('layoutConventionType')">经典</div>
        <div @click="layoutConfig.setLayout('layoutVerticalType')">横向</div>
      </div>
    </div>
    <div m-b-50px>
      <el-divider>
        <el-icon><Cherry /></el-icon><span m-l-10px>主题切换</span>
      </el-divider>
      <div class="theme-item">
        <div>主题颜色</div>
        <el-color-picker
          v-model="themeColor"
          show-alpha
          :predefine="preColors"
          @change="layoutConfig.setThemeColor"
        />
      </div>
    </div>
  </el-drawer>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia"
import { useLayoutConfig } from "@/pinia/modules/layoutConfig"
defineProps<{ isOpen: boolean }>()
const layoutConfig = useLayoutConfig()
let { themeColor, preColors } = storeToRefs(layoutConfig)
</script>

<style lang="scss" scoped>
div {
  color: var(--el-text-color-primary);
}
.layout-toggle {
  align-items: center;
  justify-content: space-around;
  & > div {
    cursor: pointer;
  }
}
.theme-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
:deep .el-divider__text {
  display: flex;
  align-items: center;
}
:deep .el-drawer__header {
  margin-bottom: 0;
}
</style>
