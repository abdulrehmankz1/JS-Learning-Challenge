// DOM Manipulation:
// DOM (Document Object Model) is a representation of the HTML structure of a
// webpage that allows JavaScript to access, modify, and interact with elements dynamically.

// Accessing DOM Elements:
// You can access elements in the DOM using JavaScript methods like:

// 1. getElementById(): Accesses an element by its id.

let element = document.getElementById("myElement");

// 2. getElementsByClassName(): Accesses elements by their class name (returns an HTMLCollection).

let elements = document.getElementsByClassName("myClass");

// 3. getElementsByTagName(): Accesses elements by their tag name (returns an HTMLCollection).

let paragraphs = document.getElementsByTagName("p");

// 4. querySelector(): Accesses the first element that matches a CSS selector.

let element1 = document.querySelector(".myClass");

// 5. querySelectorAll(): Accesses all elements that match a CSS selector (returns a NodeList).

let elements1 = document.querySelectorAll(".myClass");

// DOM Manipulation Methods:
// You can access elements in the DOM using JavaScript methods like:

// 1. Changing Text Content:
//  Use .textContent or .innerHTML to modify the text inside an element.

let heading = document.getElementById("myHeading");
heading.textContent = "New Heading";

// 2. Changing Style:
//  Use .style to modify the CSS of an element.

let box = document.getElementById("myBox");
box.style.backgroundColor = "blue";

// 3. Adding or Removing Classes:
//  Use .classList.add() or .classList.remove() to manipulate classes.

let button = document.querySelector(".btn");
button.classList.add("active");

// Adding or Removing Elements:
//  You can create, append, or remove elements dynamically using JavaScript.

let newElement = document.createElement("p");
newElement.textContent = "This is a new paragraph";
document.body.appendChild(newElement);

// Removing an Element:

let elementToRemove = document.getElementById("myElement");
elementToRemove.remove();
