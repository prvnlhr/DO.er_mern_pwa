# The `while` Loop in JavaScript

The `while` loop is a fundamental control flow structure in JavaScript that allows you to repeatedly execute a block of code as long as a specified condition is true. It is often used when you don't know the exact number of iterations needed beforehand.

## Basic Syntax

Here's the basic syntax of a `while` loop:

```javascript
while (condition) {
  // Code to be executed while the condition is true
}
```

- The `condition` is evaluated before each iteration of the loop.
- If the condition is `true`, the code block inside the loop is executed.
- After each iteration, the condition is re-evaluated, and the loop continues as long as the condition remains `true`.

## Example

Let's say you want to print numbers from 1 to 5 using a `while` loop:

```javascript
let count = 1;

while (count <= 5) {
  console.log(count);
  count++;
}
```

In this example:
- The initial value of `count` is set to 1.
- The `while` loop checks if `count` is less than or equal to 5.
- If the condition is true, the code block inside the loop prints the value of `count`.
- After each iteration, the value of `count` is incremented by 1 using the `count++` statement.

## Using `break` and `continue`

Inside a `while` loop, you can use the `break` statement to immediately exit the loop and the `continue` statement to skip the current iteration and move to the next one.

```javascript
let count = 1;

while (count <= 10) {
  if (count === 5) {
    break; // Exit the loop when count is 5
  }
  
  if (count % 2 === 0) {
    count++;
    continue; // Skip even numbers
  }

  console.log(count);
  count++;
}
```

## Infinite Loops

Be cautious when using `while` loops to avoid creating infinite loops, where the condition never becomes `false`. An infinite loop can cause your program to hang or become unresponsive.

```javascript
while (true) {
  // This loop will run forever
}
```

## Summary

The `while` loop in JavaScript allows you to repeatedly execute a block of code while a specified condition is true. It's useful for situations where you don't know the exact number of iterations in advance. Use the `break` statement to exit the loop and the `continue` statement to skip the current iteration. Be cautious when using `while` loops to avoid creating infinite loops.