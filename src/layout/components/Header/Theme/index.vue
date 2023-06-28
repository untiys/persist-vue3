<template>
  <div class="theme">
    <el-space :size="16">
      <el-icon @click="isOpen = true" :size="20"><Discount /></el-icon>
      <div>狗蛋</div>
      <el-dropdown>
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
const isOpen = ref(false)
</script>

<style lang="scss" scoped>
.theme {
  display: flex;
  align-items: center;

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
