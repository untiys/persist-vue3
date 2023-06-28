// 改变颜色透明度
export function setLightColor(color: string) {
  let list = color.split(",")
  list.length = 3
  for (let i = 1; i <= 9; i++) {
    document.documentElement.style.setProperty(
      `--el-color-primary-light-${i}`,
      list.join(",") + "," + i / 10 + ")"
    )
  }
}
