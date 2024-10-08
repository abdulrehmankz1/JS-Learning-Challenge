
// Changing text content of an element
let heading = document.getElementById("mainHeading");
let changeHeadingBtn = document.getElementById("changeHeadingBtn");

changeHeadingBtn.addEventListener("click", function() {
    heading.textContent = "Heading Changed!";
});

// Adding a new paragraph
let contentDiv = document.getElementById("content");
let addParagraphBtn = document.getElementById("addParagraphBtn");

addParagraphBtn.addEventListener("click", function() {
    let newParagraph = document.createElement("p");
    newParagraph.textContent = "This is a new paragraph!";
    contentDiv.appendChild(newParagraph);
});
