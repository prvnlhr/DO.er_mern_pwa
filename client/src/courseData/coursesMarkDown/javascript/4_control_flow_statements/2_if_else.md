# if..else statement

In JavaScript, the `if-else` statement is used to create branching logic, allowing your program to execute different code blocks based on whether a given condition is true or false. This is particularly useful for handling multiple possible outcomes in your code.

Here's the basic syntax of the `if-else` statement:

```javascript
if (condition) {
  // Code to be executed if the condition is true
} else {
  // Code to be executed if the condition is false
}
```

Here's how the `if-else` statement works in more detail:

1. The `if` keyword is followed by a set of parentheses `( )`, inside of which you provide the condition to be evaluated. If the condition is `true`, the code block immediately following the `if` statement will be executed. If the condition is `false`, the code block inside the `else` statement will be executed.

2. The `else` keyword is followed by a code block enclosed in curly braces `{ }`. This code block will be executed if the condition in the `if` statement is `false`.

Here's an example of using the `if-else` statement:

```javascript
let age = 15;

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

## Nested `if-else` Statements

You can nest `if-else` statements within each other to create more complex conditional structures:

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

## Ternary Operator vs. `if-else`

The `if-else` statement is ideal for handling more complex scenarios, while the ternary operator (`? :`) is useful for simpler conditional assignments. Here's an example of using both approaches:

```javascript
// Using if-else
let isAdult;
if (age >= 18) {
  isAdult = "Yes";
} else {
  isAdult = "No";
}
console.log(isAdult);

// Using ternary operator
let isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult);
```

Both approaches achieve the same result, but the `if-else` statement is more suitable when you need to execute multiple lines of code based on the condition.

## Summary

The `if-else` statement in JavaScript provides a powerful way to introduce branching logic into your programs. It allows you to execute different code blocks based on the evaluation of a condition. By using `else if` clauses and nesting, you can handle a wide range of scenarios and control the flow of your code effectively.