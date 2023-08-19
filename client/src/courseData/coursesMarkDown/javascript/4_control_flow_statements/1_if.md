# if statement

In JavaScript, the `if` statement is used to execute a block of code conditionally, based on a specified condition. It allows you to control the flow of your program by determining whether a certain set of instructions should be executed or not.

The basic syntax of the `if` statement is as follows:

```javascript
if (condition) {
  // Code to be executed if the condition is true
}
```

Here's how the `if` statement works in more detail:

1. The `if` keyword is followed by a set of parentheses `( )`. Inside the parentheses, you provide the condition that you want to evaluate. This condition should be an expression that results in a Boolean value (`true` or `false`).

2. If the condition evaluates to `true`, the code block inside the curly braces `{ }` immediately following the `if` statement will be executed. If the condition is `false`, the code block is skipped.

3. You can also include an optional `else` clause to specify a block of code that should be executed when the condition is `false`. The `else` block is executed only if the `if` condition is not met.

Here's an example of using the `if` statement:

```javascript
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
```

In this example, if the `age` is greater than or equal to 18, the message "You are an adult." will be printed to the console. Otherwise, the message "You are a minor." will be printed.

## Multiple Conditions: `else if`

You can also use the `else if` clause to check for multiple conditions:

```javascript
let score = 85;

if (score >= 90) {
  console.log("Excellent!");
} else if (score >= 70) {
  console.log("Good job!");
} else {
  console.log("Keep working.");
}
```

In this example, the program checks multiple conditions in sequence. If the `score` is greater than or equal to 90, "Excellent!" is printed. If the `score` is not above 90 but is greater than or equal to 70, "Good job!" is printed. Otherwise, "Keep working." is printed.

## Nesting `if` Statements

You can also nest `if` statements within each other to create more complex conditional structures:

```javascript
let num = 10;

if (num > 0) {
  if (num % 2 === 0) {
    console.log("Positive even number.");
  } else {
    console.log("Positive odd number.");
  }
} else if (num < 0) {
  console.log("Negative number.");
} else {
  console.log("Zero.");
}
```

In this example, the program first checks if `num` is positive. If positive, it further checks whether it's even or odd. If `num` is negative, the program prints "Negative number." If `num` is not positive or negative, it prints "Zero."

## Ternary Operator

The ternary operator (`? :`) provides a shorthand way to write simple `if-else` statements:

```javascript
let isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult);
```

This code is equivalent to:

```javascript
let isAdult;
if (age >= 18) {
  isAdult = "Yes";
} else {
  isAdult = "No";
}
console.log(isAdult);
```

The ternary operator allows you to assign a value to a variable based on a condition.

## Summary

The `if` statement in JavaScript is a fundamental tool for adding conditional logic to your code. It allows you to execute different blocks of code based on whether a specified condition evaluates to `true` or `false`. By combining `if`, `else if`, and `else` clauses, as well as using nesting and the ternary operator, you can create complex decision-making structures in your JavaScript programs.