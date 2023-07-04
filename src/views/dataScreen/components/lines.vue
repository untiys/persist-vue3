<template>
  <ChartCard title="近12日赋分统计图" bgType="1"
    ><ChartBox id="key3" :option="optionLine"
  /></ChartCard>
</template>

<script setup lang="ts">
import * as echarts from "echarts"

// 折线图
const optionLine = reactive({
  backgroundColor: "rgba(0,0,0,0.22)",
  tooltip: {
    trigger: "axis",
    axisPointer: {
      lineStyle: {
        color: "#57617B",
      },
    },
  },
  grid: {
    left: "3%",
    right: "3%",
    bottom: "7%",
    top: "15%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    axisLine: {
      show: false,
      lineStyle: {
        color: "#57617B",
      },
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      textStyle: {
        fontSize: 12,
        color: "#fff",
      },
    },
  },

  yAxis: {
    type: "value",
    axisTick: {
      show: false,
    },
    axisLine: {
      lineStyle: {
        color: "#57617B",
      },
    },
    axisLabel: {
      textStyle: {
        fontSize: 12,
        color: "#fff",
      },
    },
    splitLine: {
      lineStyle: {
        width: 0.5,
        color: "rgba(255, 255, 255, 0.2)",
      },
    },
  },
  series: [
    {
      name: "移动",
      type: "line",
      smooth: true,
      showSymbol: false,
      lineStyle: {
        normal: {
          width: 1.5,
        },
      },
      areaStyle: {
        color: "rgba(25, 227, 180, 0.3)",
      },
      itemStyle: {
        normal: {
          color: "#22FFCC",
        },
      },
    },
  ],
})
optionLine.xAxis.data = [
  "13:00",
  "13:05",
  "13:10",
  "13:15",
  "13:20",
  "13:25",
  "13:30",
  "13:35",
  "13:40",
  "13:45",
  "13:50",
  "13:55",
]
optionLine.series[0].data = [
  220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122,
]
</script>

<style lang="scss" scoped></style>
