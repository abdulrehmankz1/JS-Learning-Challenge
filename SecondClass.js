// Operators in JavaScript
// Operator: An operator is a special symbol used to perform operations on one, two, or three operands,
//  resulting in a value.Operators are essential for manipulating data and variables in JavaScript.


// 1. Arithmetic Operators
// Definition: Arithmetic operators are used to perform mathematical calculations such as addition,
//  subtraction, multiplication, and division.

let a = 10;
let b = 5;

let addition = a + b; 
console.log("Addition: ", addition);

let subtraction = a - b;
console.log("Subtraction: ", subtraction); 

let multiplication = a * b; 
console.log("Multiplication: ", multiplication); 

let division = a / b; 
console.log("Division: ", division);

let modulus = a % b;
console.log("Modulus: ", modulus);

let exponentiation = a ** b;
console.log("Exponentiation: ", exponentiation);


// 2. Assignment Operators
// Definition: Assignment operators are used to assign values to variables
//  They can also perform operations while assigning a value.

let x = 10;

x += 5;
console.log("Addition Assignment (x += 5): ", x);

x -= 3;
console.log("Subtraction Assignment (x -= 3): ", x);

x *= 2; 
console.log("Multiplication Assignment (x *= 2): ", x); 

x /= 4;
console.log("Division Assignment (x /= 4): ", x);

x %= 5;
console.log("Modulus Assignment (x %= 5): ", x); 

x **= 3; 
console.log("Exponentiation Assignment (x **= 3): ", x);

// 3. Comparison Operators
// Definition: Comparison operators are used to compare two values, returning a Boolean value (true or false).

let isEqual = a === b; // Strict equality
console.log("Is Equal (===): ", isEqual);

let isNotEqual = a !== b; // Strict inequality
console.log("Is Not Equal (!==): ", isNotEqual);

let isGreaterThan = a > b; 
console.log("Is Greater Than: ", isGreaterThan); 

let isLessThan = a < b; 
console.log("Is Less Than: ", isLessThan); 

let isGreaterThanOrEqual = a >= b; 
console.log("Is Greater Than or Equal To: ", isGreaterThanOrEqual); 

let isLessThanOrEqual = a <= b; 
console.log("Is Less Than or Equal To: ", isLessThanOrEqual); 

// 2. Logical Operators
// Definition: Logical operators are used to combine multiple Boolean expressions or values.

let condition1 = true;
let condition2 = false;

let andOperator = condition1 && condition2; // Logical AND
console.log("Logical AND (&&): ", andOperator);

let orOperator = condition1 || condition2; // Logical OR
console.log("Logical OR (||): ", orOperator);

let notOperator = !condition1; // Logical NOT
console.log("Logical NOT (!): ", notOperator);

// 3. String Operators
// Definition: The string operator (+) is used to concatenate (join) two or more strings.

let firstName = "Abdul";
let lastName = "Rehman";

let fullName = firstName + " " + lastName; // Concatenation
console.log("Full Name: ", fullName);