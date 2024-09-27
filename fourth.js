// Loops in JavaScript:
// Definition: Loops are used to repeatedly execute a block of code
// as long as a specified condition is true. They are useful for tasks that require repetition,
// like printing numbers or going through arrays.

// for Loop:
// A for loop is used when you know how many times you want to repeat a block of code.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// while Loop:
// A while loop is used when you want to repeat a block of code as long as a certain condition is true.

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// do...while Loop:
// A do...while loop is similar to the while loop, but the block of code is executed at least once, even if the condition is false.

let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);
