# Introduction to the JavaScript Function Type

In JavaScript, functions are not just blocks of code that perform specific tasks; they are also objects of a built-in constructor called the "Function" type. This unique characteristic of functions as objects provides them with properties and methods that offer additional capabilities beyond their primary role in executing code.

## Properties of Functions

JavaScript functions have two important properties:

1. **length**: The `length` property of a function indicates the number of named arguments that the function expects. This property allows you to determine the arity of a function, which is the number of arguments it can accept.

Example:
```javascript
function add(x, y) {
    return x + y;
}

console.log(add.length); // Outputs: 2
```

2. **prototype**: The `prototype` property of a function refers to the prototype object associated with objects created using that function as a constructor. It is commonly used when working with constructor functions and prototypes.

Example:
```javascript
function Dog(name) {
    this.name = name;
}

console.log(Dog.prototype); // Outputs: Dog {}
```

## The `new.target` Property

Introduced in ECMAScript 6 (ES6), the `new.target` property provides a way to determine whether a function was called using the `new` keyword as a constructor. It allows you to enforce certain behavior when a function is used as a constructor or as a regular function.

Example:
```javascript
function Shape() {
    if (!new.target) {
        throw 'Shape must be instantiated with new keyword';
    }
}

const circle = new Shape(); // No error
const square = Shape();     // Throws an error
```

## Function Methods: `apply`, `call`, and `bind`

JavaScript functions come with three powerful methods: `apply`, `call`, and `bind`. These methods are used to control the function's execution context and arguments.

1. **`apply` Method**: Calls a function with a given `this` value and an array-like object or an iterable of arguments.

Example:
```javascript
function greet(message) {
    console.log(message + ', ' + this.name);
}

const person = { name: 'Alice' };

greet.apply(person, ['Hello']); // Outputs: Hello, Alice
```

2. **`call` Method**: Similar to `apply`, but it takes arguments as separate values rather than an array or iterable.

Example:
```javascript
greet.call(person, 'Hi'); // Outputs: Hi, Alice
```

3. **`bind` Method**: Creates a new function with a bound `this` value, which can be useful for saving a specific context.

Example:
```javascript
function displayFullName() {
    console.log(this.firstName + ' ' + this.lastName);
}

const user = {
    firstName: 'John',
    lastName: 'Doe'
};

const boundFunction = displayFullName.bind(user);
boundFunction(); // Outputs: John Doe
```

These methods allow you to control the execution context of a function, enabling you to use functions flexibly in different scenarios.

## Summary

JavaScript functions are unique in that they are instances of the Function type, which grants them properties like `length` and `prototype`, as well as methods such as `apply`, `call`, and `bind`. Understanding and utilizing these properties and methods enhances your ability to manipulate functions and their behavior in various contexts.