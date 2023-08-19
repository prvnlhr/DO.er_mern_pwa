
# Primitive vs Reference Values in JavaScript

JavaScript has two fundamental types of values: primitive values and reference values. Understanding the distinction between these two types is crucial for writing efficient and bug-free code.

## Primitive Values

Primitive values are basic, indivisible data types that are stored directly in memory. They represent simple values and are immutable, meaning their values cannot be changed after they're created. JavaScript has six primitive data types:

1. **Number**: Represents numeric values, including integers and floating-point numbers. For example:
   ```javascript
   let count = 42;
   ```

2. **String**: Represents sequences of characters, such as text. For example:
   ```javascript
   let greeting = "Hello, World!";
   ```

3. **Boolean**: Represents the truth values `true` or `false`. For example:
   ```javascript
   let isTrue = true;
   ```

4. **Undefined**: Represents a variable that has been declared but hasn't been assigned a value yet. For example:
   ```javascript
   let undefinedVar;
   ```

5. **Null**: Represents the deliberate absence of any object value. For example:
   ```javascript
   let empty = null;
   ```

6. **Symbol (ES6)**: Represents a unique and immutable value, often used as object property keys. For example:
   ```javascript
   let uniqueSymbol = Symbol();
   ```

When you work with primitive values, you're dealing with the actual value itself. If you assign a primitive value to another variable, a copy of the value is made.

## Reference Values

Reference values are more complex data types that are composed of multiple values. They are stored as references (memory addresses) and are mutable, meaning their contents can be changed after they're created. Reference values include:

1. **Object**: Represents a collection of key-value pairs. Objects can be custom-defined or built-in, such as arrays and functions. For example:
   ```javascript
   let person = { name: "Alice", age: 30 };
   ```

2. **Array**: A specialized object that holds an ordered list of values. For example:
   ```javascript
   let numbers = [1, 2, 3];
   ```

3. **Function**: A block of reusable code that can be called with arguments. Functions are also objects in JavaScript. For example:
   ```javascript
   function greet(name) {
     return "Hello, " + name + "!";
   }
   ```

Reference values are stored in the heap memory. When you assign a reference value to a variable, you're actually storing a reference to the memory location where the object is stored. This means that if you modify the object using one variable, the change will be reflected in all variables that reference the same object.

## Pass by Value vs Pass by Reference

JavaScript behaves differently when it comes to passing primitive values and reference values to functions:

- **Pass by Value (Primitive Values)**: When you pass a primitive value to a function, a copy of the value is passed. Any modifications to the value inside the function do not affect the original value outside the function.

- **Pass by Reference (Reference Values)**: When you pass a reference value to a function, a reference to the value is passed. Changes made to the object inside the function affect the original object outside the function.

## Memory Allocation

JavaScript uses two memory locations for variables: stack and heap.

- **Stack**: Static data, including primitive values and references to objects, is stored on the stack. This data has a fixed size and is allocated at compile time.

- **Heap**: Objects and functions, which may have varying sizes, are stored on the heap. Memory for these data types is allocated at runtime as needed.

## Copying Values

- **Primitive Values**: When you assign a primitive value from one variable to another, a copy of the value is created and assigned to the new variable. Changes to one variable do not affect the other.

- **Reference Values**: When you assign a reference value from one variable to another, both variables reference the same object in memory. Changes to the object through one variable will affect all variables referencing the object.

In summary, understanding primitive and reference values is essential for effective JavaScript programming. It helps you avoid unexpected behaviors and enables you to design efficient and maintainable code.