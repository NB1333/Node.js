# Description of the fourth task of the first laboratory work. 

## Wrapper function for caching the results of another function

This function allows you to cache the result of any other function with an arbitrary number of parameters. When the function is called again with the same parameters, the result will be retrieved from the cache, which reduces the execution time.

### Syntax
    const memoize = (fn) => { ... };
### Parameters
- `fn` – the function you want to cache.
### Returns.
A new function that accepts an arbitrary number of parameters and will call the original function `fn`.

### Algorithm.
1. Create an empty cache object to store the result caches.
2. Return a new function that accepts an arbitrary number of parameters and will call the original function fn.
3. Each time a new function is called:
    1. Create a cache key with parameters converted to a JSON string.
    2. Check if the result is in the cache by key.
    3. If the result is in the cache, return it.
    4. If the result is not in the cache, call the original fn function with parameters.
    5. Save the result in the cache by key.
    6. Return the result.

### Example of usage

    const calc = (a, b, c) => a + b + c;
    const memoizedCalc = memoize(calc);

    console.log(memoizedCalc(2, 3, 4)); // 9 (not from cache)
    console.log(memoizedCalc(2, 3, 4)); // 9 (from cache)

    console.log(memoizedCalc(1, 2, 3)); // 6 (not from cache)
    console.log(memoizedCalc(2, 3, 4)); // 9 (from cache)
    console.log(memoizedCalc(1, 2, 3)); // 6 (from cache)

In this example, the `calc` function calculates the sum of three numbers, and the `memoize` function is a wrapper function that caches the results of the `calc` function.

The first time `memoizedCalc(2, 3, 4)` is called, the result is calculated using the original calc function and returned `(9)`. The second time `memoizedCalc(2, 3, 4)` is called, the result will be taken from the cache, which reduces the execution time.

Similarly, when calling `memoizedCalc(1, 2, 3)`, the result will be calculated using the original calc function and returned `(6)`. In subsequent calls to `memoizedCalc(2, 3, 4)` and `memoizedCalc(1, 2, 3)`, the results will be taken from the cache.

### Result:
![Result of memoize](/lab_1/images/result_of_memoize.jpeg)