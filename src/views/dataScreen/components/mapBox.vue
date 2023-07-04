<template>
  <div class="map-box">
    <div id="map"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from "echarts"
import axios from "axios"

const lineData = [
  [
    [120.840444, 30.08389],
    [120.871592, 30.04166],
  ],
  [
    [120.874237, 29.916803],
    [120.871592, 30.04166],
  ],
  [
    [121.000988, 29.884548],
    [120.871592, 30.04166],
  ],
]

const mapDate = [
  {
    name: "上虞区人民法院",
    value: [120.871592, 30.04166],

    type: "暂予监外处置情况",
    data: [
      {
        title: "已处置案件数",
        value: 10,
        unit: "件",
      },
      {
        title: "待处置案件数",
        value: 10,
        unit: "件",
      },
    ],
  },
  {
    name: "上虞区司法局",
    value: [120.840444, 30.08389],

    type: "暂予监外处置情况",
    data: [
      {
        title: "参与案件件数",
        value: 10,
        unit: "件",
      },
      {
        title: "已处置案件数",
        value: 10,
        unit: "件",
      },
      {
        title: "待处置案件数",
        value: 10,
        unit: "件",
      },
      {
        title: "平均处置时长",
        value: 10,
        unit: "件/天",
      },
    ],
  },
  {
    name: "上虞区检察院",
    value: [120.874237, 29.916803],

    type: "暂予监外处置情况",
    data: [
      {
        title: "参与案件件数",
        value: 10,
        unit: "件",
      },
      {
        title: "已处置案件数",
        value: 10,
        unit: "件",
      },
      {
        title: "待处置案件数",
        value: 10,
        unit: "件",
      },
      {
        title: "平均处置时长",
        value: 10,
        unit: "件/天",
      },
    ],
  },
  {
    name: "上虞区公安局",
    value: [121.000988, 29.884548],

    type: "暂予监外处置情况",
    data: [
      {
        title: "参与案件件数",
        value: 10,
        unit: "件",
      },
      {
        title: "已处置案件数",
        value: 10,
        unit: "件",
      },
      {
        title: "待处置案件数",
        value: 10,
        unit: "件",
      },
      {
        title: "平均处置时长",
        value: 10,
        unit: "件/天",
      },
    ],
  },
]

const init = () => {
  axios.get("/shangyu.json").then((res) => {
    let myEchart = echarts.init(document.getElementById("map") as HTMLElement)
    echarts.registerMap("jx", res.data)

    let option = {
      tooltip: {
        show: false,
        trigger: "item",
        triggerOn: "mousemove",
        enterable: true,
        backgroundColor: "transparent",
        borderColor: "transparent",
        padding: 0,
      },
      geo: {
        show: true,
        map: "jx",
        center: [120.909, 29.975458],
        aspectScale: 1.1, //整体缩放，改变大小
        zoom: 1.09,
        label: {
          normal: {
            show: false,
          },
          emphasis: {
            show: false,
          },
        },
        itemStyle: {
          areaColor: "transparent",
          borderColor: "transparent",
          emphasis: {
            areaColor: "transparent",
          },
        },
      },
      series: [
        // 使用geo的配置
        {
          type: "map",
          geoIndex: 0,
          selectedMode: false,
        },
        //地图线的动画效果
        {
          type: "lines",
          zlevel: 2,
          // coordinateSystem: "geo",
          effect: {
            show: true,
            period: 3, //箭头指向速度，值越小速度越快
            trailLength: 0.8, //特效尾迹长度[0,1]值越大，尾迹越长重
            symbol: "", //箭头图标
            symbolSize: 8, //图标大小
          },
          lineStyle: {
            normal: {
              color: "rgba(0,255,191,0.2)",
              width: 1, //尾迹线条宽度
              opacity: 0, //尾迹线条透明度
              curveness: 0.3, //尾迹线条曲直度
            },
          },
          data: lineData,
        },
        {
          type: "effectScatter",
          coordinateSystem: "geo",
          itemStyle: {
            color: "rgba(0, 186, 255, 1)",
          },
          rippleEffect: {
            period: 4, //涟漪扩散速度
            scale: 6,
            brushType: "fill",
          },
          // symbolSize: [30, 20], //更改尺寸，扁平之类的
          z: 999,
          data: mapDate,
        },
      ],
    }
    myEchart.setOption(option)

    window.addEventListener("resize", () => {
      myEchart.resize()
    })
  })
}
onMounted(() => {
  init()
})
</script>

<style lang="scss" scoped>
.map-box {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-image: url("../../../assets/images/map-bg.png");
  background-size: 85%;
  background-position: 51%;
  #map {
    width: 100%;
    height: 100%;
  }
}
</style>
