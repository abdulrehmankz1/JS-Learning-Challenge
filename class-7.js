// Objects in JavaScript:
// Definition: An object in JavaScript is a collection of key-value pairs.
// Each key (also called a property) has a value, which can be any type of data
// (number, string, array, another object, or even a function). Objects are useful
// for storing and managing data in a structured way.

// Object Creation:
// You can create an object by using curly braces {} and defining key-value pairs inside.

// Creating an object
let person = {
    name: "Abdul Rehman",
    age: 25,
    city: "Karachi"
};

console.log(person);


// Accessing Properties:
// You can access object properties using dot notation or bracket notation.
// Accessing properties
console.log(person.name);  // Outputs: "Abdul Rehman" (dot notation)
console.log(person["age"]);  // Outputs: 25 (bracket notation)


// Object Methods:
// A method in an object is a function stored as a property.
// You can define functions inside an object and call them just like you would call object properties.

let user = {
    name: "Abdul Rehman",
    age: 25,
    city: "Karachi",

    // Method to greet
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

// Calling the method
person.greet();  // Outputs: "Hello, my name is Abdul Rehman"

// this keyword: In methods, this refers to the object itself,
// so this.name accesses the name property of the object.