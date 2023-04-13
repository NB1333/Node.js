import { Adder } from './Adder';
import { AnagramChecker as AC } from "./AnagramChecker";
import { ObjectCopier as OC } from "./ObjectCopier";
import { FunctionCache as FC } from "./FunctionCache";

const firstTask = new Adder();

const secondTask_1 = new AC('Hello', 'oleeh');
const secondTask_2 = new AC('integral', 'triangle');

const person = {
    name: 'John',
    surname: 'Doe',
    age: 25,
    address: {
        city: 'New York',
        country: 'USA'
    }
}

const thirdTask = new OC(person);

const fourthTask = new FC<number[], number>((a, b, c) => a + b + c);

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
