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

let b = 1;
while (b <= 10) {
  console.log(b);
  b++;
}

// do...while Loop:
// A do...while loop is similar to the while loop, but the block of code is executed at least once, even if the condition is false.

let a = 1;
do {
  console.log(a);
  a++;
} while (a <= 10);
