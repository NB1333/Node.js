"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adder = void 0;
var Adder = /** @class */ (function () {
    function Adder() {
        this.sum = 0;
    }
    Adder.prototype.add = function (y) {
        if (y === undefined) {
            return this.sum;
        }
        else {
            this.sum += y;
            return this.add.bind(this);
        }
    };
    return Adder;
}());
exports.Adder = Adder;
