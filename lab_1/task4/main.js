const memoize = (fn) => {
  const cache = {};

  return (...args) => {
    const key = JSON.stringify(args);
    if (key in cache) {
      console.log("from cache");

      return cache[key];
    } else {
      console.log("not from cache");
      const result = fn(...args);
      cache[key] = result;

      return result;
    }
  };
};

const calc = (a, b, c) => a + b + c;

const memoizedCalc = memoize(calc);

console.log(memoizedCalc(1, 2, 3)); // not from cache, logs 6
console.log(memoizedCalc(1, 2, 3)); // from cache, logs 6
console.log(memoizedCalc(4, 5, 6)); // not from cache, logs 15
console.log(memoizedCalc(4, 5, 6)); // from cache, logs 15
