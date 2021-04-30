import { isObject,checkEnumerable } from './shared'
/**
 * 过滤掉对象的空项 返回一个新的对象
 * 比较经常用到的场景在搜索筛选项，有的服务一开始枚举没有undefeated或者是null的支持 这时候就需要手动来执行这个操作
 */
export const filterEmptyOfObject = (obj) => {
  const newObj = {}
  if (!isObject(obj)) {
    throw new Error('该方法只接收对象')
  }
  //如果是空对象的话 直接返回当前的回去
  if (checkEnumerable(obj)) {
    return obj
  }
  for (const key of Object.keys(obj)) {
    const val = obj[key]
   if (isObject(val)) {
      newObj[key] = filterEmptyOfObject(obj[key])
    } else if (val !== null && typeof val !== 'undefined' && val !== '') {
      // 如果是不等于的null 或者是 undefined的  那我们全都要 除了object在上面已经处理掉了
      newObj[key] = obj[key]
    }
  }
  return newObj
}
export default {
  filterEmptyOfObject
}
