// 暗黑，白色模式
export type activeThemeType = "light" | "dark"

export const theme: Record<activeThemeType, { [K in string]: string }> = {
  light: {
    "--el-menu-hover-bg-color": "#cccccc",
    "--el-bg-color-page": "#f2f3f5",
    "--el-text-color-primary": "#303133",
    "--el-menu-bg-color": "#fff",
    "--el-menu-logo-color": "var(--el-text-color-primary)",
    "--el-menu-active-color": "var(--el-color-primary)",
    "--el-menu-hover-color": "var(--el-text-color-primary)",
    "--el-border-color-light": "#e4e7ed",
    "--el-dawder-border-color": "#dcdfe6",
    "--el-text-color-secondary": "#909399",
  },
  dark: {
    "--el-menu-hover-bg-color": "#000000",
    "--el-bg-color-page": "var(--el-menu-bg-color)",
    "--el-text-color-primary": "#bdbdc0",
    "--el-border-color-light": "#414243",
    "--el-menu-bg-color": "#141414",
    "--el-menu-active-color": "#fff",
    "--el-dawder-border-color": "var(--el-border-color-light)",
    "--el-menu-logo-color": "var(--el-menu-active-color)",
    "--el-menu-hover-color": "var(--el-menu-active-color)",
    "--el-text-color-secondary": "#A3A6AD",
  },
}
