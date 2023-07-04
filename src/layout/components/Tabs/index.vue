<template>
  <div :class="['page', isShow ? 'page-active' : '']">
    <div class="left-btn" @click="scrollLeft" v-show="isShow">
      <el-icon><ArrowLeft /></el-icon>
    </div>
    <div :class="['tabs', isShow ? 'tabs-active' : '']" ref="tabsRef">
      <div class="tab-scroll" ref="tabScroll">
        <span
          :class="[
            'tab',
            item.path != '/home/index' ? 'tab-nohome' : '',
            item.path == currentRoute ? 'tab-active' : '',
          ]"
          v-for="item in tabs"
          :key="item.path"
          @click="handleTab(item.path)"
          >{{ item.meta.title }}
          <el-icon
            @click.stop="closeTab(item.path)"
            v-if="item.path != '/home/index'"
            ><Close /></el-icon
        ></span>
      </div>
    </div>
    <div class="right-btn" @click="scrollRight" v-show="isShow">
      <el-icon><ArrowRight /></el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormInstance } from "element-plus"
import { useTabsConfig } from "@/pinia/modules/tabsConfig"
const route = useRoute()
const router = useRouter()
const tabsConfig = useTabsConfig()

const tabs = computed(() => {
  return tabsConfig.tabs
})

const currentRoute = computed(() => {
  return route.path
})

const tabsRef = ref<FormInstance | any>()
const tabScroll = ref<FormInstance | any>()
const isShow = ref(false)

const totalMarginLeft = ref<number>(0)

// 点击左划按钮
const scrollLeft = () => {
  const tabScrollLeft = tabScroll.value.offsetLeft
  //   当tabScrol 左边框距离父盒子为0，或者小于500，直接为0，否则一次加500，往右移动
  if (tabScrollLeft == 0 || Math.abs(tabScrollLeft) < 500) {
    tabScroll.value.style.marginLeft = "0px"
    return
  }
  if (tabScrollLeft) {
    tabScroll.value.style.marginLeft = tabScrollLeft + 500 + "px"
  }
}
// 点击右划
const scrollRight = () => {
  // 获取盒子到父盒子的左边距，只读属性，而且没有offsetRight属性
  const tabScrollLeft = tabScroll.value.offsetLeft
  const widthScroll = tabsRef.value.scrollWidth
  const clientWidth = tabsRef.value.clientWidth

  //   当隐藏部分小于500时，直接左边距等于totalMarginLeft 的宽度，否者一次减500，盒子整体左滑
  if (widthScroll - clientWidth <= 500) {
    tabScroll.value.style.marginLeft = -totalMarginLeft.value + "px"
  } else {
    tabScroll.value.style.marginLeft = tabScrollLeft - 500 + "px"
  }
}
const handleTab = (path: string) => {
  router.push(path)
}
const closeTab = (path: string) => {
  tabsConfig.deleteTab(path)
}

const init = () => {
  // 获取总宽度，含隐藏部分
  const widthScroll = tabsRef.value?.scrollWidth
  //   获取可视区域宽度，不含隐藏部分
  const clientWidth = tabsRef.value?.clientWidth
  if (widthScroll > clientWidth) {
    isShow.value = true
    nextTick(() => {
      const widthScroll = tabsRef.value.scrollWidth
      //   获取可视区域宽度，不含隐藏部分
      const clientWidth = tabsRef.value.clientWidth
      //   记录一下，隐藏的部分宽度，之所以在nextick里写，是因为ishow为true时，左右切换按钮出来，隐藏部分宽度会变化，在上面右划到头的时候，需要设置成这个数值，不然不够精确
      totalMarginLeft.value = widthScroll - clientWidth
    })
  }
}
onMounted(() => {
  init()
})
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 40px;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  padding: 0 10px;
  background-color: var(--el-menu-bg-color);
  border-bottom: 1px solid var(--el-border-color-light);

  &-active {
    padding: 0 20px;
  }
}

.left-btn {
  display: flex;
  align-items: center;
  height: 40px;
  width: auto;
  position: absolute;
  left: 12px;
  cursor: pointer;
}
.right-btn {
  @extend .left-btn;
  left: inherit;
  right: 12px;
}
.tabs {
  height: 100%;
  width: calc(100% - 15px);
  overflow: hidden;
  white-space: nowrap;
  position: absolute;
  box-sizing: border-box;
  &-active {
    width: calc(100% - 60px);
    margin: 0 10px;
  }
  .tab {
    display: inline-block;
    height: 40px;
    padding: 0 20px;
    cursor: pointer;
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    transition: padding 0.3s;
    font-size: 14px;
    color: var(--el-text-color-primary);
    position: relative;
    :deep .el-icon {
      width: 0;
      transition: all 0.3s;
    }
    &-nohome:hover {
      padding: 0 10px;
      :deep .el-icon {
        width: 15px;
        font-size: 12px;
        margin-left: 5px;
      }
    }
    &-active:hover {
      padding: 0 20px;
    }
    &-active::before {
      content: "";
      position: absolute;
      bottom: 0.5px;
      left: 0;
      right: 0;
      height: 2px;
      background-color: var(--el-color-primary);
    }
    &-active {
      color: var(--el-color-primary);
      :deep .el-icon {
        width: 15px;
        margin-left: 5px;
        color: var(--el-color-primary);
      }
    }
  }

  .tab-scroll {
    transition: margin 0.3s;
  }
}
</style>
