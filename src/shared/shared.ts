import { Isobject } from '../interface/shared'

//是否是一个对象
 const isObject = (val:unknown) => {
  return Object.prototype.toString.call(val) === '[object Object]'
}
//判断是否有可枚举的属性
export const checkEnumerable = (val) => {
  return Object.keys(val as unknown).length === 0
}
// 是否是一个Map对象
const isMap = (val:unknown) => {
  return Object.prototype.toString.call(val) === '[object Map]'
}
//是否是一个Set对象
const isSet = (val:unknown) => {
  return Object.prototype.toString.call(val) === '[object Set]'
}
//TODO:
// isEmpty
// 空字符串  ☑️
// 空对象   ☑️
// 空数组   ☑️
// 空Map   ☑️
// 空set   ☑️
// null   ☑️
// undefined ☑️
const isEmpty = (val:unknown, options?:Isobject) => {
  options = options || {}
  options.needNumberZero = options.needNumberZero || false // 默认值不开启数字为0的校验的判空
  if (val === null) {
    return true
  }
  if (typeof val === 'undefined') {
    return true
  }
  if (typeof val === 'string') {
    return val.trim().length === 0
  }
  if (typeof val === 'number' && options.needNumberZero) {
    return val === 0
  }
  if (Array.isArray(val)) {
    return val.length === 0
  }
  if (isSet(val)) {
    return checkEnumerable(val)
  }
  if (isMap(val)) {
    return checkEnumerable(val)
  }
  if (isObject(val)) {
    return checkEnumerable(val)
  }
  return false
}
export {
  isEmpty,
  isObject,
  isMap,
  isSet,
}
