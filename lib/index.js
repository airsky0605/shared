"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var injectHook_1 = __importDefault(require("./shared/injectHook"));
var shared_1 = require("./shared/shared");
var business_1 = __importDefault(require("./shared/business"));
var exportAll = __assign(__assign(__assign({}, injectHook_1.default), { isEmpty: shared_1.isEmpty,
    isObject: shared_1.isObject,
    isMap: shared_1.isMap,
    isSet: shared_1.isSet }), business_1.default);
exports.default = exportAll;
//# sourceMappingURL=index.js.map