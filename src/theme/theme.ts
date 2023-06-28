// 暗黑，白色模式
export type activeThemeType = "light"

export const theme: Record<activeThemeType, { [K in string]: string }> = {
  light: {
    "--el-menu-hover-bg-color": "#cccccc",
    "--el-bg-color-page": "#f2f3f5",
    "--el-text-color-primary": "#303133",
  },
}
