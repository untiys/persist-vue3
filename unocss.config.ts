import { presetUno, presetAttributify, presetIcons } from "unocss"

import transformerDirectives from "@unocss/transformer-directives"

export default {
  // unocss结合原生css指令
  transformers: [transformerDirectives()],
  // 使用Unocss预设
  presets: [presetUno(), presetAttributify(), presetIcons()],
  // 自定义规则
  rules: [
    ["bg-blue", { "background-color": "blue" }],
    ["white", { color: "white" }],
  ],
  // 合并自定义样式
  shortcuts: {
    hass: "bg-blue white p-l-2px",
  },
}
