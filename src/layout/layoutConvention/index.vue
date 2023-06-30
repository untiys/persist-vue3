<template>
  <div class="layout">
    <el-aside
      class="layout-left"
      :style="{
        width: !isCollapse ? '210px' : '64px',
      }"
    >
      <div class="logo" alt="">
        <img src="@/assets/images/login-bg.jpg" alt="" />
        <span class="title" v-show="!isCollapse">卷无止境</span>
      </div>
      <el-scrollbar>
        <el-menu
          :router="false"
          :default-active="activeMenu"
          :collapse="isCollapse"
          class="el-menu-vertical-demo"
        >
          <SubMenu :menuList="menuList" />
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <div class="layout-right">
      <Header />
      <!-- <div>tabs</div> -->
      <main class="main">
        <RouterView />
      </main>
      <footer v-show="!isShowFooter" class="footer">
        2023年 6月30日 作者 - 然也
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLayoutConfig } from "@/pinia/modules/layoutConfig"
import { useMenuList } from "@/pinia/modules/menuList"

import SubMenu from "../components/SubMenu/index.vue"
import Header from "../components/Header/index.vue"

const route = useRoute()
const layoutConfig = useLayoutConfig()
const menuListStore = useMenuList()

const isCollapse = computed(() => {
  return layoutConfig.isCollapse
})

const isShowFooter = computed(() => {
  return layoutConfig.isShowFooter
})

const menuList = computed(() => {
  return JSON.parse(menuListStore.menuList)
})

const activeMenu = computed(() => {
  return route.path
})
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100vh;
  display: flex;
  &-left {
    height: 100%;
    background-color: var(--el-menu-bg-color);
    border-right: 1px solid var(--el-border-color-light);
    transition: 0.3s;
    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      height: 65px;
      img {
        width: 40px;
        height: 40px;
      }
      .title {
        font-size: 21px;
        font-weight: bold;
        margin-left: 6px;
        white-space: nowrap;
        color: var(--el-menu-logo-color);
      }
    }
    :deep .el-scrollbar {
      height: calc(100% - 65px);
    }
  }

  &-right {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .main {
    flex: 1;
    padding: 10px 12px;
    background-color: var(--el-bg-color-page);
  }
  .footer {
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 14px;
    border-top: 1px solid var(--el-border-color-light);
    color: var(--el-text-color-secondary);
    background-color: var(--el-menu-bg-color);
  }
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 210px;
}

:deep .el-menu-item.is-active,
:deep .el-menu-item.is-active:hover {
  background-color: var(--el-color-primary-light-1) !important;
  color: var(--el-menu-active-color);
}

:deep .el-menu-item {
  color: var(--el-text-color-primary);
  &:hover {
    color: var(--el-menu-hover-color);
    background-color: var(--el-menu-hover-bg-color) !important;
  }
}
:deep .el-menu-item.is-active::before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  content: "";
  height: 100%;
  width: 4px;
  background-color: var(--el-color-primary);
}
</style>

<style lang="scss"></style>
