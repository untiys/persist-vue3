<template>
  <ChartCard title="事件类型积分采集分析" bgType="2">
    <ChartBox id="key2" :option="optionBar2" />
  </ChartCard>
</template>

<script setup lang="ts">
import * as echarts from "echarts"

// 分步柱图
const optionBar2 = reactive({
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
    bottom: "20%",
    top: "8%",
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
      rotate: -45,
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
      name: "设备在线率",
      type: "bar",
      barWidth: 15,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(10, 252, 255, 1)",
            },
            {
              offset: 1,
              color: "rgba(12, 160, 254, 1)",
            },
          ]),
        },
      },
    },
    {
      tooltip: {
        show: false,
      },
      // 分隔
      type: "pictorialBar",
      itemStyle: {
        normal: {
          color: "#0F375F",
        },
      },
      symbolRepeat: "fixed",
      symbolMargin: 3,
      symbol: "rect",
      symbolClip: true,
      symbolSize: [18, 2],
      symbolPosition: "start",
      symbolOffset: [1, 1],
      z: 5,
    },
  ],
})
optionBar2.xAxis.data = ["13:00", "13:05", "13:10", "13:15", "13:20"]
optionBar2.series[0].data = [220, 182, 191, 134, 150, 120]
optionBar2.series[1].data = [220, 182, 191, 134, 150, 120]
</script>

<style lang="scss" scoped></style>
