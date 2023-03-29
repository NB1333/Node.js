### Description of the third task of the first laboratory work. 

From this you can understand that the deepClone function takes one argument - the object to be cloned. The function returns a deep copy of that object.

### Arguments:

`obj` - the object to be copied.

### Returns:

`result` - a deep copy of the obj object.

### Algorithm:

1. Check if the passed argument is an object. If not, return it unchanged.
2. Create a new result object.
3. We iterate over all the properties of the obj object using the for...in loop:
    1. If the current property is an object or an array, recursively call the deepClone function for this property and write its deep copy to result.
    2. If the current property is a primitive, just write its value to result.
4. Return result.

### Example of usage:

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

In this example, we create an object called `obj` that contains the name, age, hobby, and address. Then we call the `deepClone()` function with `obj` as an argument and store the result in the `clonedObj` variable. After that, we print `clonedObj` to the console to make sure it is a deep copy of `obj`.

### Result:
![Result of deep cloning](/lab_1/images/result_of_deep_cloning.jpeg)