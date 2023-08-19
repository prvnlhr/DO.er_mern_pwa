# Ternary operator

The ternary operator, also known as the conditional operator, is a concise way to write conditional statements in JavaScript. It provides a compact syntax for expressing simple if-else logic. The ternary operator takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false.

The basic syntax of the ternary operator is as follows:

```javascript
condition ? expression_if_true : expression_if_false;
```

Here's how the ternary operator works:

1. The `condition` is evaluated first. If the condition is `true`, the expression immediately following the `?` (question mark) is executed. If the condition is `false`, the expression immediately following the `:` (colon) is executed.

2. The result of the executed expression becomes the value of the entire ternary expression.

Here's an example of using the ternary operator:

```javascript
let isStudent = true;
let status = isStudent ? "Student" : "Not a student";

console.log(status); // "Student"
```

In this example, if `isStudent` is `true`, the value of `status` will be set to "Student". If `isStudent` is `false`, the value of `status` will be set to "Not a student".

You can also use the ternary operator to return values directly or assign values to variables:

```javascript
let age = 18;
let allowed = age >= 18 ? "Allowed" : "Not allowed";

console.log(allowed); // "Allowed"
```

The ternary operator is particularly useful for concise assignments, especially when you want to choose between two values based on a condition.

Nested Ternary Operators:

You can also nest ternary operators within each other for more complex conditions. However, excessive nesting can make the code harder to read and understand, so use it judiciously.

```javascript
let temperature = 25;
let weather = temperature > 30 ? "Hot" : temperature > 20 ? "Warm" : "Cool";

console.log(weather); // "Warm"
```

In this example, if the `temperature` is greater than 30, it's considered "Hot". If not, it checks whether the temperature is greater than 20, and if so, it's considered "Warm". Otherwise, it's considered "Cool".

Summary:

The ternary operator in JavaScript provides a compact way to express simple conditional logic.
It takes a condition and two expressions (for true and false outcomes) and returns the value of the executed expression.
The ternary operator is commonly used for concise assignments and is a powerful tool for simplifying your code.
However, avoid excessive nesting of ternary operators to maintain code readability.