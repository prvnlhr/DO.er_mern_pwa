# Exponential Operator (`**`) in JavaScript

The exponential operator (`**`) in JavaScript is used to raise a number to a certain power. It provides a concise and straightforward way to perform exponentiation without the need for complex functions or loops. The exponential operator is a part of the ECMAScript 2016 (ES7) specification.

## Basic Usage

The syntax of the exponential operator is as follows:

```javascript
base ** exponent
```

Here, `base` is the number you want to raise to a power, and `exponent` is the power to which you want to raise the base.

For example:

```javascript
let result = 2 ** 3; // 2 raised to the power of 3
console.log(result); // 8
```

## Negative Exponents

You can also use negative exponents with the exponential operator. A negative exponent indicates that the base should be raised to the reciprocal of the exponent.

For example:

```javascript
let result = 2 ** -3; // 2 raised to the power of -3
console.log(result); // 0.125 (1 / 2^3)
```

## Fractional Exponents

The exponential operator also supports fractional exponents, which represent roots. For example, raising a number to the power of 0.5 calculates its square root.

```javascript
let result = 16 ** 0.5; // Square root of 16
console.log(result); // 4
```

## Order of Operations

The exponential operator follows the usual order of operations. If you have multiple operations in an expression, you can use parentheses to control the order of evaluation.

```javascript
let result = 2 + 3 ** 2; // Equivalent to 2 + (3 ** 2)
console.log(result); // 11
```

## Combining with Assignment

You can also use the exponential operator in combination with assignment operators to update a variable's value.

```javascript
let x = 2;
x **= 3; // Equivalent to x = x ** 3
console.log(x); // 8
```

## Summary

The exponential operator (`**`) in JavaScript provides a concise and intuitive way to perform exponentiation. It allows you to raise a number to a certain power, including negative and fractional exponents. The operator follows the order of operations and can be combined with assignment operators to update variable values.