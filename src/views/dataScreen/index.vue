<template>
  <div class="box">
    <!-- 大屏适配方案 -->
    <ScreenAdapter>
      <div class="page" id="screen">
        <div class="left">
          <div class="item">
            <Card title="各部门积分统计" bgType="1">
              <ChartBox id="key1" :option="optionBar1"
            /></Card>
          </div>
          <div class="item">
            <Card title="事件类型积分采集分析" bgType="2">
              <ChartBox id="key2" :option="optionBar2" />
            </Card>
          </div>
          <div class="item">
            <Card title="近12日赋分统计图" bgType="1"
              ><ChartBox id="key3" :option="optionLine"
            /></Card>
          </div>
        </div>
      </div>
    </ScreenAdapter>
  </div>
</template>

<script setup>
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

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;
  display: flex;
  .left {
    width: 465px;
    height: 100%;

    .item {
      height: 33%;
    }
  }
}
.box {
  background: #e2d7d7;
  height: 100vh;
  width: 100vw;
  position: fixed;
}
</style>
