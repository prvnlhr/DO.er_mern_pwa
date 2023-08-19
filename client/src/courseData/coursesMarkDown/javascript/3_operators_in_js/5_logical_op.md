# Logical Operators in JavaScript

Logical operators are used in JavaScript to combine or manipulate Boolean values. They allow you to perform logical operations on expressions and control the flow of your code based on certain conditions. JavaScript provides three main logical operators: `&&` (logical AND), `||` (logical OR), and `!` (logical NOT).

## Logical AND (`&&`) Operator

The logical AND operator (`&&`) returns `true` if both operands are `true`, and `false` otherwise. It short-circuits, meaning that if the left operand is `false`, it doesn't evaluate the right operand, as the result will always be `false`.

```javascript
let isTrue = true;
let isFalse = false;

console.log(isTrue && isFalse); // false (both operands are not true)
```

## Logical OR (`||`) Operator

The logical OR operator (`||`) returns `true` if at least one of the operands is `true`, and `false` if both operands are `false`. Like the AND operator, it short-circuits when the left operand is `true`.

```javascript
let isTrue = true;
let isFalse = false;

console.log(isTrue || isFalse); // true (at least one operand is true)
```

## Logical NOT (`!`) Operator

The logical NOT operator (`!`) is a unary operator that reverses the Boolean value of its operand. It returns `true` if the operand is `false`, and `false` if the operand is `true`.

```javascript
let isTrue = true;

console.log(!isTrue); // false (reverses the value of isTrue)
```

## Combining Logical Operators

Logical operators can be combined to create complex expressions. When combining operators, JavaScript follows operator precedence rules. Parentheses can be used to explicitly control the order of evaluation.

```javascript
let num = 5;

// Combining && and || operators
console.log(num > 0 && num < 10); // true (both conditions are true)
console.log(num > 0 || num > 10); // true (at least one condition is true)
console.log(!(num > 10)); // true (reverses the value of the condition)
```

## Short-Circuiting

Logical operators use short-circuiting behavior, which means that they don't always evaluate all operands. For example, when using the `&&` operator, if the left operand is `false`, the result will be `false` regardless of the value of the right operand.

```javascript
let result = false && someFunction(); // someFunction() is not called
```

Similarly, with the `||` operator, if the left operand is `true`, the result will be `true` without evaluating the right operand.

```javascript
let result = true || someFunction(); // someFunction() is not called
```

## Summary

Logical operators are essential for combining and manipulating Boolean values in JavaScript. They provide powerful tools for controlling program flow based on conditions and making decisions. Understanding how logical operators work and their short-circuiting behavior is important for writing efficient and effective JavaScript code.