"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectCopier = void 0;
var ObjectCopier = /** @class */ (function () {
    function ObjectCopier(originalObject) {
        this.originalObject = originalObject;
    }
    ObjectCopier.prototype.deepCopy = function () {
        var copy = Array.isArray(this.originalObject) ? [] : {};
        for (var key in this.originalObject) {
            var value = this.originalObject[key];
            copy[key] = typeof value === 'object' ? new ObjectCopier(value).deepCopy() : value;
        }
        return copy;
    };
    return ObjectCopier;
}());
exports.ObjectCopier = ObjectCopier;
