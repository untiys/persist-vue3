import type { _RouteRecordBase } from "vue-router"

// 扩展路由属性
declare module "vue-router" {
  // interface _RouteRecordBase {
  //   hidden?: boolean
  // }

  interface RouteMeta {
    title?: string
    isFull?: boolean
  }
}
