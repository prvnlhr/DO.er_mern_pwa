# Default Parameters in JavaScript Functions

In JavaScript, default parameters allow you to provide default values for function parameters in case they are not explicitly passed when the function is called. This feature makes your code more flexible and helps handle various scenarios without needing to manually check for undefined values.

## Syntax

The syntax for using default parameters in a function declaration is as follows:

```javascript
function functionName(param1 = defaultValue1, param2 = defaultValue2, ...) {
  // Function body
}
```

## Example: Using Default Parameters

```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Guest!
greet("John"); // Output: Hello, John!
```

In this example, the `greet` function has a default parameter `name` set to `"Guest"`. If no argument is provided when calling `greet`, the default value `"Guest"` is used.

## Default Parameters and Expressions

Default parameter values can also be expressions, not just simple values:

```javascript
function calculateTotal(price, taxRate = 0.1, discount = 0) {
  return price + (price * taxRate) - discount;
}

console.log(calculateTotal(100)); // Output: 110
console.log(calculateTotal(100, 0.15)); // Output: 115
console.log(calculateTotal(100, 0.1, 20)); // Output: 90
```

In this example, the `calculateTotal` function calculates the total cost based on the price, tax rate, and discount. The default values for `taxRate` and `discount` are set to 0.1 (10%) and 0, respectively.

## Caution with Falsy Default Values

Be cautious when using falsy values (e.g., `0`, `""`, `false`, `null`, `undefined`, and `NaN`) as default parameter values. If you intend to provide a falsy value intentionally, it may not work as expected when using the default parameter.

## Default Parameters and Function Expressions

Default parameters can also be used with function expressions:

```javascript
const add = function (a = 0, b = 0) {
  return a + b;
};

console.log(add(5, 3)); // Output: 8
console.log(add(5)); // Output: 5
console.log(add()); // Output: 0
```

In this example, the function expression `add` has default parameters `a` and `b`, both set to `0`.

## Summary

Default parameters in JavaScript functions allow you to specify default values for parameters, making your code more robust and flexible. When a parameter is not provided during a function call, the default value is used instead. This feature simplifies your code and helps handle various scenarios without extra conditional checks.