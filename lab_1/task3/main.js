// Task 3
function deepClone(obj) {
  // check for primitive types and null
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  // creating a new object or array
  const newObj = Array.isArray(obj) ? [] : {};

  // recursive call to deepClone() for all object properties
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[key] = deepClone(obj[key]);
    }
  }

  return newObj;
}

const obj = {
  name: 'John',
  age: 30,
  hobbies: ['reading', 'sports'],
  address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA'
  }
  };

  const clonedObj = deepClone(obj);

  console.log(clonedObj); // { name: 'John', age: 30, hobbies: ['reading', 'sports'], address: { street: '123 Main St', city: 'Anytown', state: 'CA' } }
  console.log(clonedObj === obj); // false
