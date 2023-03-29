# Description of the first task of the first laboratory work. 

The `add()` function is a wrapper function in Node.js that allows you to add an arbitrary number of numbers. The function takes any number of parameters in the following form: `console.log(add(2)(5)(7)(1)(6)(5)(11)());` and returns their sum.

### Parameters:
The function does not take any parameters as such. Instead, it uses the concept of closure to keep previous arguments in memory and append them to subsequent arguments when the function is called with an empty argument.

### Returns:
The function returns the sum of all numbers passed as arguments by `add()` calls.

### Algorithm:
1. The `add()` function returns an internal closure function that expects one argument, the next number.
2. This internal function checks if the argument was passed. If so, it adds it to the previous value and returns itself again to allow a chain of calls.
3. If the argument was not passed, the inner function returns the sum of all previous values.
4. The wrapper function saves all previous arguments using closures and adds them to the next value the next time the inner function is called.
5. When the chain of `add()` calls ends with an empty argument, the inner function returns the sum of all previous values that were stored in memory using closure.

### Example of usage:
    console.log(add(2)(5)(7)(1)(6)(5)(11)()); // 37
