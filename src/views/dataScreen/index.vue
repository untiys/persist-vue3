<template>
  <div class="box">
    <!-- 大屏适配方案 -->
    <ScreenAdapter>
      <div class="page">
        <div class="left">
          <div class="item"><barCircle /></div>
          <div class="item"><barStep /></div>
          <div class="item"><lines /></div>
        </div>
        <div class="center">
          <mapBox />
        </div>
        <div class="right"></div>
      </div>
    </ScreenAdapter>
  </div>
</template>

<script setup lang="ts">
import barCircle from "./components/barCircle.vue"
import barStep from "./components/barStep.vue"
import lines from "./components/lines.vue"
import mapBox from "./components/mapBox.vue"
</script>

<style lang="scss" scoped>
.box {
  background-image: url("@/assets/images/page-bg.png");
  height: 100vh;
  width: 100vw;
  position: fixed;
}
.page {
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 30px;
  .left {
    width: 465px;
    height: 100%;

    .item {
      height: 33%;
    }
  }
  .center {
    width: auto;
    flex: 1;
  }
  .right {
    width: 500px;
  }
}
</style>
