<template>
  <div class="chart" :id="id"></div>
</template>

<script setup>
import { nextTick, onMounted, watch } from "vue"
import * as echarts from "echarts"
const props = defineProps({
  id: "",
  option: {},
})

watch(
  () => props.option,
  () => {
    init()
  },
  {
    deep: true,
  }
)
const init = () => {
  const myChart = echarts.init(document.getElementById(props.id))

  myChart.setOption(props.option)
  window.addEventListener("resize", () => {
    myChart.resize()
  })
}

onMounted(() => {
  nextTick(() => {
    init()
  })
})
</script>

<style lang="scss" scoped>
.chart {
  height: 100%;
  width: 100%;
}
</style>
