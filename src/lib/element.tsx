import { ReactElement } from "./typings"

/**
 * @param type React元素类型
 * @param config 配置对象
 * @param children 子元素
 * */
export function createElement (type:string, config:Record<string,any>, ...children:Array<any>) {
  const props: Record<string,any> = {}
  // 将config上所有属性拷贝到 props上
  for (const propName in config) {
    props[propName] = config[propName]
  }
  props.children = children
  let element:ReactElement = {
    type, props
  }
  return element
}