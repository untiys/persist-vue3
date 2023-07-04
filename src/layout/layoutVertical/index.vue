<template>
  <div class="layout">
    <header class="header">
      <div class="logo" alt="">
        <img src="@/assets/images/login-bg.jpg" alt="" />
        <span class="title">卷无止境</span>
      </div>
      <div class="menu">
        <el-scrollbar>
          <el-menu
            mode="horizontal"
            :router="false"
            :default-active="activeMenu"
            :collapse="isCollapse"
            class="el-menu-vertical-demo"
          >
            <SubMenu :menuList="menuList" />
          </el-menu>
        </el-scrollbar>
      </div>
      <Theme />
    </header>
    <Tabs />
    <main class="main">
      <RouterView />
    </main>
    <footer v-show="!isShowFooter" class="footer">
      2023年 6月30日 作者 - 然也
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useLayoutConfig } from "@/pinia/modules/layoutConfig"
import { useMenuList } from "@/pinia/modules/menuList"
import Theme from "../components/Header/Theme/index.vue"
import SubMenu from "../components/SubMenu/index.vue"
import Tabs from "../components/Tabs/index.vue"

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

const authBoardColor = computed(() => {
  return layoutConfig.getAuthBoardColor
})
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .header {
    display: flex;
    align-items: center;
    height: 58px;
    background-color: #191a20;
    .logo {
      width: 210px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 40px;
        height: 40px;
        margin-right: 15px;
      }
      .title {
        font-size: 21px;
        font-weight: bold;
        margin-left: 6px;
        white-space: nowrap;
        color: #fff;
      }
    }
    .menu {
      flex: 1;
    }
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
    border-top: 1px solid var(--el-border-color-light);
    color: var(--el-text-color-secondary);
    background-color: var(--el-menu-bg-color);
  }
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 210px;
}

:deep .el-menu--horizontal > .el-menu-item.is-active {
  color: #fff !important;
  background-color: var(--el-color-primary) !important;
  border-bottom: 2px solid var(--el-color-primary) !important;
}

:deep .el-menu-item.is-active:hover {
  color: #fff;
  background-color: var(--el-color-primary);
}
:deep .el-menu-item {
  color: #bdbdc0 !important;
  background-color: #191a20 !important;
  &:hover {
    color: #fff !important;
    background-color: #030304 !important;
  }
}

:deep .el-sub-menu__title {
  color: #bdbdc0 !important;
  background-color: #191a20 !important;
  &:hover {
    color: #fff !important;
    background-color: #030304 !important;
  }
}
:deep .el-sub-menu.is-active {
  .el-sub-menu__title {
    color: #fff !important;
    background-color: var(--el-color-primary) !important;
    border-bottom: 2px solid var(--el-color-primary) !important;
  }
}
</style>
