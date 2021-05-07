"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSet = exports.isMap = exports.isObject = exports.isEmpty = exports.checkEnumerable = void 0;
var isObject = function (val) {
    return Object.prototype.toString.call(val) === '[object Object]';
};
exports.isObject = isObject;
var checkEnumerable = function (val) {
    return Object.keys(val).length === 0;
};
exports.checkEnumerable = checkEnumerable;
var isMap = function (val) {
    return Object.prototype.toString.call(val) === '[object Map]';
};
exports.isMap = isMap;
var isSet = function (val) {
    return Object.prototype.toString.call(val) === '[object Set]';
};
exports.isSet = isSet;
var isEmpty = function (val, options) {
    options = options || {};
    options.needNumberZero = options.needNumberZero || false;
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
    if (isSet(val)) {
        return exports.checkEnumerable(val);
    }
    if (isMap(val)) {
        return exports.checkEnumerable(val);
    }
    if (isObject(val)) {
        return exports.checkEnumerable(val);
    }
    return false;
};
exports.isEmpty = isEmpty;
//# sourceMappingURL=shared.js.map