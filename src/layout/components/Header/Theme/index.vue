<template>
  <div class="theme">
    <el-space :size="16">
      <el-icon @click="isOpen = true" :size="20"><Discount /></el-icon>
      <div>狗蛋</div>
      <el-dropdown trigger="click">
        <img
          class="auth-icon"
          src="../../../../assets/images/login-bg.jpg"
          alt=""
        />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>退出账号</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-space>
    <Drewer v-model="isOpen" :isOpen="isOpen" />
  </div>
</template>

<script setup lang="ts">
import { useLayoutConfig } from "@/pinia/modules/layoutConfig"
const layoutConfig = useLayoutConfig()

// 当白天模式和布局是经典布局时，字体颜色为黑色，其余都为白色
const color = computed(() => {
  return !layoutConfig.modelType &&
    layoutConfig.layoutType == "layoutConventionType"
    ? "#303133"
    : "#fff"
})

const isOpen = ref(false)
</script>

<style lang="scss" scoped>
.theme {
  display: flex;
  align-items: center;
  color: v-bind(color);
  .auth-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  :deep .el-tooltip__trigger {
    outline: none;
  }
  :deep .el-icon {
    cursor: pointer;
  }
}
</style>
