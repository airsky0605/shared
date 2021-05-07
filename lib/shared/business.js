"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterEmptyOfObject = void 0;
var shared_1 = require("./shared");
var filterEmptyOfObject = function (obj) {
    var newObj = {};
    if (!shared_1.isObject(obj)) {
        throw new Error('该方法只接收对象');
    }
    if (shared_1.checkEnumerable(obj)) {
        return obj;
    }
    for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
        var key = _a[_i];
        var val = obj[key];
        if (shared_1.isObject(val)) {
            newObj[key] = exports.filterEmptyOfObject(obj[key]);
        }
        else if (val !== null && typeof val !== 'undefined' && val !== '') {
            newObj[key] = obj[key];
        }
    }
    return newObj;
};
exports.filterEmptyOfObject = filterEmptyOfObject;
exports.default = {
    filterEmptyOfObject: exports.filterEmptyOfObject
};
//# sourceMappingURL=business.js.map