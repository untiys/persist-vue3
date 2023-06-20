<template>
  <div class="screen-adapter" :style="style">
    <slot></slot>
  </div>
</template>
<script lang="ts">
export default defineComponent({
  name: "ScreenAdapter",
  props: {
    width: {
      type: String,
      default: "1920",
    },
    height: {
      type: String,
      default: "1080",
    },
  },
  setup(props) {
    const { width, height } = toRefs(props)
    const scaleRatio = ref(1)
    const style = computed(() => {
      return {
        width: width.value + "px",
        height: height.value + "px",
        transform: `scale(${scaleRatio.value}) translate(-50%, -50%)`,
      }
    })
    const Debounce = (fn: Function, delay?: number) => {
      delay = delay || 200
      let timer: NodeJS.Timeout | null
      return (...rest: any) => {
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          timer = null
          fn.call(this, ...rest)
        }, delay)
      }
    }
    // 获取放大缩小比例 以小的为准
    const getScaleRatio = () => {
      const w = window.innerWidth / +width.value
      const h = window.innerHeight / +height.value
      scaleRatio.value = w < h ? w : h
    }
    onMounted(() => {
      getScaleRatio()
      window.onresize = Debounce(getScaleRatio)
    })
    onUnmounted(() => {
      window.onresize = null
    })
    return {
      style,
    }
  },
})
</script>
<style lang="scss" scoped>
.screen-adapter {
  position: absolute;
  top: 50%;
  left: 50%;
  transition: 0.3s;
  transform-origin: 0 0; // 变化中心改为左上角 默认是center
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
