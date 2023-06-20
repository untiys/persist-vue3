import request from "@/utils/request"
import axios from "axios"
// // post请求
// function dict2(url:string,data?:Data) {
//    return request({url,method:'post',data})
// }

// 模拟接口菜单
export function getMenu() {
  return new Promise<any>((resolve) => {
    axios.get("/public/menu.json").then((res) => {
      resolve(res.data)
    })
  })
}

// 统一导出
export // dict,
// dict2
 {}
