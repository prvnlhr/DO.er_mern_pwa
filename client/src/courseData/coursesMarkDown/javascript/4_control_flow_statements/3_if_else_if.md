# if..else...if statement


The `if-else if` statement in JavaScript is an extension of the `if-else` statement that allows you to check multiple conditions in a sequential manner. It's especially useful when you have more than two possible outcomes for your code.

Here's the basic syntax of the `if-else if` statement:

```javascript
if (condition1) {
  // Code to be executed if condition1 is true
} else if (condition2) {
  // Code to be executed if condition1 is false and condition2 is true
} else if (condition3) {
  // Code to be executed if condition1 and condition2 are false and condition3 is true
} else {
  // Code to be executed if none of the conditions are true
}
```

Here's how the `if-else if` statement works in more detail:

1. The `if` keyword is followed by a set of parentheses `( )`, inside of which you provide the first condition to be evaluated. If the condition is `true`, the code block immediately following the `if` statement will be executed.

2. The `else if` keyword is followed by another set of parentheses `( )`, inside of which you provide the second condition to be evaluated. If the first condition is `false` and the second condition is `true`, the code block following the `else if` statement will be executed.

3. You can have multiple `else if` clauses to check additional conditions. Each `else if` clause is evaluated sequentially, and the first true condition encountered will execute its associated code block. If none of the conditions are true, the code block inside the `else` statement will be executed.

Here's an example of using the `if-else if` statement:

```javascript
let score = 85;

if (score >= 90) {
  console.log("Excellent!");
} else if (score >= 80) {
  console.log("Very good!");
} else if (score >= 70) {
  console.log("Good job!");
} else if (score >= 60) {
  console.log("Keep practicing.");
} else {
  console.log("Needs improvement.");
}
```

In this example, the program checks multiple conditions in sequence. If the `score` is greater than or equal to 90, "Excellent!" is printed. If not, it checks if the `score` is greater than or equal to 80, and so on. If none of the conditions are met, "Needs improvement." is printed.

### Nested `if-else if` Statements

You can also nest `if-else if` statements within each other to create more complex conditional structures:

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

### Using `if-else if` for Priority Conditions

The order of your `else if` clauses matters. The first true condition encountered will execute its associated code block, and the remaining `else if` clauses will be skipped. Therefore, if you have priority conditions, make sure to place them in the correct order.

### Summary

The `if-else if` statement in JavaScript allows you to check multiple conditions in a sequential manner. It's a powerful tool for handling complex decision-making scenarios in your code. By using nested `if-else if` statements and prioritizing conditions, you can create versatile and structured control flows to address various scenarios in your programs.