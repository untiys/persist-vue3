//vite的请求本地图片资源方法
export const getAssetsImages = (imageName:string) => {
  return new URL(`/src/assets/image/${imageName}`, import.meta.url).href
}
