# Comparison Operators in JavaScript

Comparison operators are essential tools in JavaScript for comparing values and determining relationships between them. These operators evaluate expressions and return a Boolean value (`true` or `false`) based on the comparison result. They are fundamental for making decisions and controlling the flow of your code.

## Equality (`==`) Operator

The equality operator (`==`) compares two values for equality, performing type coercion if necessary. It returns `true` if the values are equal and `false` otherwise.

```javascript
let num1 = 5;
let num2 = '5';

console.log(num1 == num2); // true (values are equal, type coercion occurs)
```

## Inequality (`!=`) Operator

The inequality operator (`!=`) compares two values for inequality, performing type coercion if necessary. It returns `true` if the values are not equal and `false` if they are.

```javascript
let num1 = 5;
let num2 = '6';

console.log(num1 != num2); // true (values are not equal, type coercion occurs)
```

## Strict Equality (`===`) Operator

The strict equality operator (`===`) compares two values for equality without performing type coercion. It returns `true` if both the values and their types are equal, and `false` otherwise.

```javascript
let num1 = 5;
let num2 = '5';

console.log(num1 === num2); // false (values are equal, but types are different)
```

## Strict Inequality (`!==`) Operator

The strict inequality operator (`!==`) compares two values for inequality without performing type coercion. It returns `true` if either the values or their types are not equal, and `false` if they are.

```javascript
let num1 = 5;
let num2 = '6';

console.log(num1 !== num2); // true (values are not equal, and types are different)
```

## Greater Than (`>`) and Less Than (`<`) Operators

The greater than (`>`) operator compares two values and returns `true` if the left value is greater than the right value. The less than (`<`) operator returns `true` if the left value is less than the right value.

```javascript
let num1 = 10;
let num2 = 5;

console.log(num1 > num2); // true (10 is greater than 5)
console.log(num1 < num2); // false (10 is not less than 5)
```

## Greater Than or Equal To (`>=`) and Less Than or Equal To (`<=`) Operators

The greater than or equal to (`>=`) operator compares two values and returns `true` if the left value is greater than or equal to the right value. The less than or equal to (`<=`) operator returns `true` if the left value is less than or equal to the right value.

```javascript
let num1 = 5;
let num2 = 5;

console.log(num1 >= num2); // true (5 is equal to 5)
console.log(num1 <= num2); // true (5 is equal to 5)
```

## Summary

Comparison operators are crucial for evaluating expressions and making decisions in JavaScript. They allow you to compare values for equality, inequality, and relative magnitude. Understanding and using comparison operators effectively is essential for creating robust and logic-driven JavaScript code.