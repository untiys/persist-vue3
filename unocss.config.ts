import { presetUno, presetAttributify, presetIcons } from "unocss"

import transformerDirectives from "@unocss/transformer-directives"

export default {
  // unocss结合原生css指令
  transformers: [transformerDirectives()],
  // 使用Unocss预设
  presets: [presetUno(), presetAttributify(), presetIcons()],
  // 自定义规则
  rules: [["f-item", { display: "flex", "align-items": "center" }]],
  // 合并自定义样式
  shortcuts: {
    fl: "bg-blue white p-l-2px",
  },
}
