<template>
  <template v-for="subItem in menuList" :key="subItem.path">
    <el-sub-menu v-if="subItem.children?.length" :index="subItem.path">
      <template #title>
        <el-icon>
          <component :is="subItem.meta.icon"></component>
        </el-icon>
        <span>{{ subItem.meta.title }}</span>
      </template>
      <SubMenu :menuList="subItem.children" />
    </el-sub-menu>
    <el-menu-item
      v-else
      :index="subItem.path"
      @click="handleClickMenu(subItem)"
    >
      <el-icon>
        <component :is="subItem.meta.icon"></component>
      </el-icon>
      <template #title>
        <span class="sle">{{ subItem.meta.title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<script lang="ts">
import { useTabsConfig } from "@/pinia/modules/tabsConfig"
export default defineComponent({
  name: "SubMenu",
  props: ["menuList"],
  setup() {
    const router = useRouter()
    const tabsConfig = useTabsConfig()

    const handleClickMenu = (subItem: Menu.MenuOptions) => {
      tabsConfig.pushTab(subItem)
      router.push(subItem.path)
    }

    return {
      handleClickMenu,
    }
  },
})
</script>
