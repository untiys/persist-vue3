<template>
  <div class="card">
    <div
      class="head-bg"
      :style="{
        backgroundImage: `url(${jifen})`,
      }"
    >
      {{ title }}
    </div>
    <div class="main">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import jifen from "@/assets/images/jifen-caiji.png"

const props = defineProps({
  title: "",
})
</script>

<style lang="scss" scoped>
.card {
  height: 100%;
  .head-bg {
    background-size: 100% 100%;
    height: 52px;
    color: #fff;
    font-size: 16px;
    line-height: 52px;
    padding: 0 34px;
    font-family: douyu;
  }
  .main {
    height: calc(100% - 52px);
  }
}
</style>
