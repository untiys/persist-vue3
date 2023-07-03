<template>
  <div :class="['page', isShow ? 'page-active' : '']">
    <div class="left-btn" @click="scrollLeft" v-show="isShow">
      <el-icon><ArrowLeft /></el-icon>
    </div>
    <div :class="['tabs', isShow ? 'tabs-active' : '']" ref="tabsRef">
      <div class="tab-scroll" ref="tabScroll">
        <span class="tab" v-for="i in 25">设施给</span>
      </div>
    </div>
    <div class="right-btn" @click="scrollRight" v-show="isShow">
      <el-icon><ArrowRight /></el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormInstance } from "element-plus"
const tabsRef = ref<FormInstance>()
const tabScroll = ref<FormInstance>()
const isShow = ref(false)

const totalMarginLeft = ref<number>()
// 点击左划按钮
const scrollLeft = () => {
  const tabScrollLeft = tabScroll.value.offsetLeft
  console.log(tabScroll.value.offsetLeft)
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
  const tabScrollLeft = tabScroll.value.offsetLeft
  const widthScroll = tabsRef.value.scrollWidth
  const clientWidth = tabsRef.value.clientWidth
  console.log(tabScrollLeft, widthScroll - clientWidth, totalMarginLeft.value)
  if (widthScroll - clientWidth <= 500) {
    tabScroll.value.style.marginLeft = -totalMarginLeft.value + "px"
  } else {
    tabScroll.value.style.marginLeft = tabScrollLeft - 500 + "px"
  }
}
onMounted(() => {
  // 获取总宽度，含隐藏部分
  const widthScroll = tabsRef.value.scrollWidth
  //   获取可视区域宽度，不含隐藏部分
  const clientWidth = tabsRef.value.clientWidth
  if (widthScroll > clientWidth) {
    isShow.value = true
    nextTick(() => {
      const widthScroll = tabsRef.value.scrollWidth
      //   获取可视区域宽度，不含隐藏部分
      const clientWidth = tabsRef.value.clientWidth
      totalMarginLeft.value = widthScroll - clientWidth
    })
  }
})
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 40px;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
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
    line-height: 40px;
    padding: 0 20px;
    cursor: pointer;
    // border-bottom: 2px solid red;
    box-sizing: border-box;
  }
  .tab-scroll {
    transition: margin 0.3s;
  }
}
</style>
