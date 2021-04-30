/*eslint no-extend-native:0*/
export const injectArrayEquals = () => {
  if (Array.prototype['equals'])
    console.warn(
      '已存在equals的方法,可能的原因是已经有同样的注入，或者是第三方的框架已经注入，此处直接overwrite 忘悉知'
    )

  Array.prototype['equals'] = function (array) {
    if (!array) return false
    if (this.length != array.length) return false
    for (var i = 0, l = this.length; i < l; i++) {
      if (this[i] instanceof Array && array[i] instanceof Array) {
        if (!this[i].equals(array[i])) return false
      } else if (this[i] != array[i]) {
        return false
      }
    }
    return true
  }
  Object.defineProperty(Array.prototype, 'equals', { enumerable: false })
}
export const injectObjectEquals = () => {
  Object.prototype['equals'] = function (object2) {
    for (const propName in this) {
      if (this.hasOwnProperty(propName) != object2.hasOwnProperty(propName)) {
        return false
      } else if (typeof this[propName] != typeof object2[propName]) {
        return false
      }
    }
    for (const propName in object2) {
      if (this.hasOwnProperty(propName) != object2.hasOwnProperty(propName)) {
        return false
      } else if (typeof this[propName] != typeof object2[propName]) {
        return false
      }
      if (!this.hasOwnProperty(propName)) continue
      if (
        this[propName] instanceof Array &&
        object2[propName] instanceof Array
      ) {
        if (!this[propName].equals(object2[propName])) return false
      } else if (
        this[propName] instanceof Object &&
        object2[propName] instanceof Object
      ) {
        if (!this[propName].equals(object2[propName])) return false
      } else if (this[propName] != object2[propName]) {
        return false
      }
    }
    return true
  }
}
export default {
  injectArrayEquals,
  injectObjectEquals,
}
