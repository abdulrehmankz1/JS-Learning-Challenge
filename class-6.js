// Arrays in JavaScript:
// Definition: An array is a data structure that can hold multiple values in a single variable.
// Arrays are used to store a collection of data, which can be accessed by their index (starting from 0).

let fruits = ["apple", "banana", "mango"];
console.log(fruits);


// Common Array Methods:

// 1. push():
// Adds an element to the end of the array.

fruits.push("orange");
console.log(fruits);  // Outputs: ["apple", "banana", "mango", "orange"]

// 2. pop():
// Removes the last element from the array.

fruits.pop();
console.log(fruits);  // Outputs: ["apple", "banana", "mango"]

// 3. shift():
// Removes the first element from the array.

fruits.shift();
console.log(fruits);  // Outputs: ["banana", "mango"]

// 4. unshift():
// Adds an element to the beginning of the array.

fruits.unshift("grapes");
console.log(fruits);  // Outputs: ["grapes", "banana", "mango"]

// 5. slice():
// Extracts a section of the array without modifying the original array.
// It takes two arguments: the starting index and the ending index (optional).

let slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits);  // Outputs: ["banana", "mango"]

// 6. splice():
// Adds/removes elements from the array.
// It takes three arguments: the starting index, the number of elements to remove,
// and the elements to add (optional).

// Example (remove):

fruits.splice(1, 1);  // Removes 1 element from index 1
console.log(fruits);  // Outputs: ["grapes", "mango"]

// Example (add):

fruits.splice(1, 0, "banana");
console.log(fruits);  // Outputs: ["grapes", "banana", "mango"]