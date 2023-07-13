import { presetUno, presetAttributify, presetIcons } from "unocss"

import transformerDirectives from "@unocss/transformer-directives"

export default {
  // unocss结合原生css指令
  transformers: [transformerDirectives()],
  // 使用Unocss预设
  presets: [presetUno(), presetAttributify(), presetIcons()],
  // 自定义规则
  rules: [
    // ["bg-blue", { display: "flex", "align-items": "center" }],
    // ["white", { color: "white" }],
  ],
  // 合并自定义样式
  shortcuts: {
    // fl: "bg-blue white p-l-2px",
    // common: "m-l-2px p-10px flex",
  },
}
