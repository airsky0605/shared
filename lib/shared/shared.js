"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

//TODO:
// isEmpty
// 空字符串  ☑️
// 空对象   ☑️
// 空数组   ☑️
// 空Map   ☑️
// 空set   ☑️
// null   ☑️
// undefined ☑️
//是否是一个对象
var isObject = function isObject(val) {
  return Object.prototype.toString.call(val) === '[object Object]';
}; // 是否是一个Map对象


var isMap = function isMap(val) {
  return Object.prototype.toString.call(val) === '[object Map]';
}; //是否是一个Set对象


var isSet = function isSet(val) {
  return Object.prototype.toString.call(val) === '[object Set]';
};

var isEmpty = function isEmpty(val, options) {
  options = options || {};
  options.needNumberZero = options.needNumberZero || false; // 默认值不开启数字为0的校验的判空

  if (val === null) {
    return true;
  }

  if (typeof val === 'undefined') {
    return true;
  }

  if (typeof val === 'string') {
    return val.trim().length === 0;
  }

  if (typeof val === 'number' && options.needNumberZero) {
    return val === 0;
  }

  if (Array.isArray(val)) {
    return val.length === 0;
  }

  if (isObject(val)) {
    return Object.keys(val).length === 0;
  }

  if (isMap(val)) {
    return Object.keys(val).length === 0;
  }

  if (isSet(val)) {
    return Object.keys(val).length === 0;
  }

  return false; //如果全都不满足的话  就表示有内容 有内容 就返回false
};

var _default = {
  isEmpty: isEmpty,
  isObject: isObject,
  isMap: isMap,
  isSet: isSet
};
exports.default = _default;