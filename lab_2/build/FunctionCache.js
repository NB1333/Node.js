"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionCache = void 0;
var FunctionCache = /** @class */ (function () {
    function FunctionCache(fn) {
        this.fn = fn;
        this.cache = new Map();
    }
    FunctionCache.prototype.execute = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var key = JSON.stringify(args);
        if (this.cache.has(key)) {
            return this.cache.get(key);
        }
        var result = this.fn.apply(this, args);
        this.cache.set(key, result);
        return result;
    };
    return FunctionCache;
}());
exports.FunctionCache = FunctionCache;
