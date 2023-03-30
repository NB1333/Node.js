"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnagramChecker = void 0;
var AnagramChecker = /** @class */ (function () {
    function AnagramChecker(str1, str2) {
        this.str1 = str1;
        this.str2 = str2;
    }
    AnagramChecker.prototype.isAnagram = function () {
        // Normalize strings by removing non-alphanumeric characters and converting to lowercase
        var normalizedStr1 = this.str1.replace(/[^\w]/g, '').toLowerCase();
        var normalizedStr2 = this.str2.replace(/[^\w]/g, '').toLowerCase();
        // Check if both strings have the same length
        if (normalizedStr1.length !== normalizedStr2.length) {
            return false;
        }
        // Sort the characters in both strings and compare them
        var sortedStr1 = normalizedStr1.split('').sort().join('');
        var sortedStr2 = normalizedStr2.split('').sort().join('');
        return sortedStr1 === sortedStr2;
    };
    return AnagramChecker;
}());
exports.AnagramChecker = AnagramChecker;
