import type { RouteRecordRaw } from "vue-router"

// 静态路由页面
export const staticRouter: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      title: "登录页",
    },
  },
  {
    path: "/layout",
    name: "layout",
    component: () => import("@/layout/index.vue"),
    redirect: "/home/index",
    children: [],
  },
]

// 错误路由页面
export const errorRouter: RouteRecordRaw[] = [
  //   {
  //     path: "/403",
  //     name: "403",
  //     component: () => import("@/components/ErrorMessage/403.vue"),
  //     meta: {
  //       title: "403页面",
  //     },
  //   },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404/index.vue"),
    meta: {
      title: "404页面",
    },
  },
  //   {
  //     path: "/500",
  //     name: "500",
  //     component: () => import("@/components/ErrorMessage/500.vue"),
  //     meta: {
  //       title: "500页面",
  //     },
  //   },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/404/index.vue"),
    meta: {
      title: "404页面",
    },
  },
]
