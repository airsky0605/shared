"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*eslint no-extend-native:0*/
var injectArrayEquals = function injectArrayEquals() {
  if (Array.prototype['equals']) console.warn('已存在equals的方法,可能的原因是已经有同样的注入，或者是第三方的框架已经注入，此处直接overwrite 忘悉知');

  Array.prototype['equals'] = function (array) {
    if (!array) return false;
    if (this.length != array.length) return false;

    for (var i = 0, l = this.length; i < l; i++) {
      if (this[i] instanceof Array && array[i] instanceof Array) {
        if (!this[i].equals(array[i])) return false;
      } else if (this[i] != array[i]) {
        return false;
      }
    }

    return true;
  };

  Object.defineProperty(Array.prototype, 'equals', {
    enumerable: false
  });
};

var injectObjectEquals = function injectObjectEquals() {
  Object.prototype['equals'] = function (object2) {
    for (var propName in this) {
      if (this.hasOwnProperty(propName) != object2.hasOwnProperty(propName)) {
        return false;
      } else if (_typeof(this[propName]) != _typeof(object2[propName])) {
        return false;
      }
    }

    for (var _propName in object2) {
      if (this.hasOwnProperty(_propName) != object2.hasOwnProperty(_propName)) {
        return false;
      } else if (_typeof(this[_propName]) != _typeof(object2[_propName])) {
        return false;
      }

      if (!this.hasOwnProperty(_propName)) continue;

      if (this[_propName] instanceof Array && object2[_propName] instanceof Array) {
        if (!this[_propName].equals(object2[_propName])) return false;
      } else if (this[_propName] instanceof Object && object2[_propName] instanceof Object) {
        if (!this[_propName].equals(object2[_propName])) return false;
      } else if (this[_propName] != object2[_propName]) {
        return false;
      }
    }

    return true;
  };
};

var _default = {
  injectArrayEquals: injectArrayEquals,
  injectObjectEquals: injectObjectEquals
};
exports.default = _default;