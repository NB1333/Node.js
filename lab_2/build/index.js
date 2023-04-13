"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Adder_1 = require("./Adder");
var AnagramChecker_1 = require("./AnagramChecker");
var ObjectCopier_1 = require("./ObjectCopier");
var FunctionCache_1 = require("./FunctionCache");
var firstTask = new Adder_1.Adder();
var secondTask_1 = new AnagramChecker_1.AnagramChecker('Hello', 'oleeh');
var secondTask_2 = new AnagramChecker_1.AnagramChecker('integral', 'triangle');
var person = {
    name: 'John',
    surname: 'Doe',
    age: 25,
    address: {
        city: 'New York',
        country: 'USA'
    }
};
var thirdTask = new ObjectCopier_1.ObjectCopier(person);
var fourthTask = new FunctionCache_1.FunctionCache(function (a, b, c) { return a + b + c; });
console.log('\nThis is output of first task: \n' + firstTask.add(2)(5)(7)(1)(6)(5)(11)());
console.log('\nThis is output of second task: \n' + secondTask_1.isAnagram());
console.log(secondTask_2.isAnagram());
console.log('\nThis is output of third task: \n' + 'Original object: ' + JSON.stringify(person));
console.log('\nCopied object: ' + JSON.stringify(thirdTask.deepCopy()));
console.log('Comparison result: ' + (thirdTask.deepCopy() === person));
console.log('\nThis is output of fourth task: \n' + fourthTask.execute(1, 2, 3)); // returns 6 from function execution
console.log(fourthTask.execute(1, 2, 3)); // returns 6 from cache
console.log(fourthTask.execute(4, 2, 3)); // returns 9 from function execution
console.log(fourthTask.execute(4, 2, 3)); // returns 9 from cache
