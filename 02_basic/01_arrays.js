// Arrays
const myArr = [1, 2, 3, 4, 5, "hi", true]; 
// The array can contain elements of different types like numbers, strings, and booleans.
// Arrays in JavaScript are resizable and can contain other arrays, objects, strings, and booleans.

console.log(myArr); // Index starts from 0 

/* 
 When you copy an array, it creates a shallow copy. 
 A shallow copy means creating a new object or array that copies the values from the original one, 
 but only at the first level. If the original object contains nested objects or arrays, 
 the shallow copy will still reference those nested elements rather than creating new copies of them.
 
 **Also, take a look at deep copy for a full duplication of nested elements.
*/

console.log(myArr[0]);

let arr = new Array(1, 2, 3, 4, 5);
console.log("------------ Array Methods ------------------");
console.log("Initial array:", arr);

arr.push(6); // Push adds an element to the end of the array
console.log("After pushing value:", arr);

arr.pop(); // Pop removes the last element (no need to pass an argument)
console.log("After popping value:", arr);

console.log("Includes 1:", arr.includes(1)); // Check if array contains 1
console.log("Index of 5th element:", arr.indexOf(5));

const arrofarr = arr.join(); // Convert the array to a string
console.log("Joined array as string:", arrofarr);

/* 
Slice vs Splice:
- `slice()` does not modify the original array, it returns a shallow copy of selected elements.
- `splice()` modifies the original array by removing or replacing elements.
  
Example:
const array1 = [1, 2, 3, 4, 5, 6];

array1.slice(1, 3) 
// Excludes the 3rd index element, does not modify the original array.
// Output: [2, 3]  Original array remains [1, 2, 3, 4, 5, 6]

array1.splice(1, 3) 
// Includes the 3rd index element and modifies the original array.
// Output: [2, 3, 4] Original array after splice: [1, 5, 6]
*/

console.log("\n--------------- Slice and Splice ---------------\n");

const array1 = [1, 2, 3, 4, 5, 6];
console.log("Original array:", array1);

console.log("After slicing array:", array1.slice(1, 3)); 
console.log("Original array after slice:", array1);

console.log("\nAfter splicing:", array1.splice(1, 3)); 
console.log("Original array after splice:", array1);
