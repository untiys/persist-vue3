<template>
  <ChartCard title="各部门积分统计">
    <ChartBox id="key1" :option="optionBar1"
  /></ChartCard>
</template>

<script setup lang="ts">
import * as echarts from "echarts"
const optionBar1 = reactive({
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
      name: "2020",
      type: "bar",
      barWidth: 20,
      itemStyle: {
        //lenged文本
        opacity: 0.7,
        color: (params) => {
          return new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(0, 183, 255, 1)", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(34, 68, 172, 0.35)", // 100% 处的颜色
              },
            ],
            false
          )
        },
      },
    },
    // 柱图头部的圆
    {
      tooltip: {
        show: false,
      },
      name: "",
      type: "pictorialBar",
      symbolSize: [20, 8],
      symbolOffset: [0, -5],
      itemStyle: {
        opacity: 1,
        color: "rgba(33, 243, 255, 0.7)",
      },
      symbolPosition: "end",
    },
    {
      tooltip: {
        show: false,
      },
      type: "pictorialBar",
      symbolSize: [20, 8],
      symbolOffset: [0, 0],
      z: 12,
      itemStyle: {
        color: "rgba(31, 97, 234, 0.40)",
      },
      data: [1, 1, 1, 1, 1, 1],
    },
  ],
})
optionBar1.xAxis.data = ["13:00", "13:05", "13:10", "13:15", "13:20"]
optionBar1.series[0].data = [220, 182, 191, 134, 150, 120]

optionBar1.series[1].data = [220, 182, 191, 134, 150, 120]
</script>

<style lang="scss" scoped></style>
