export interface menuList {
  menuList: string
}

export interface layoutConfig {
  layoutType: string
  isCollapse: boolean
  themeColor: string
  preColors: string[]
  modelType: boolean
  isDeath: boolean
  isShowFooter: boolean
  breadcrumb: { [K in string]: any }
}

export interface TabsConfig {
  tabs: Menu.MenuOptions[]
  accessTabs: {
    [K in string]: boolean
  }
}
