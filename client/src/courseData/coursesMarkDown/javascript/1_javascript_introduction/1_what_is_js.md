
# Notes and documentation


When defining your color system, it might feel like a waste of time figuring out specific shades of every color you're working with. However, it won't be long until you're in need of more colors as your component library grows and evolves. It's a much better idea to define these properly from the start, so you don't box yourself into a limited color palette.

When choosing the right colors in UI design, accessibility should always be front of mind. Many designers ignore basic accessibility fundamentals and design products that don't meet basic accessibility standards. Google now even penalizes websites with low-contrast text and inaccessible color systems.


```js
// Merge Sort implementation in JavaScript

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Test the merge sort function
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log("Original array:", arr);
const sortedArray = mergeSort(arr);
console.log("Sorted array:", sortedArray);

```



It doesn't have to be complicated. Good practice simply involves making sure designs are as suitable for everyone — older users, visually impaired, color-blind, and others (including users on low contrast, low-quality displays). Great UI design should be easy to see for everyone.
Color accessibility is mostly tied to text. More specifically, how legible or easy-to-read text is on a screen. Ensuring all of your design components have sufficient contrast levels will go a long way for users with vision problems.


Formatted version of the list as a nested ordered list:

1. **ECMAScript 5 (ES5)**:
   - Formatted version of the list as a nested ordered list.
   - Introduced JSON support with methods like `JSON.stringify()` and `JSON.parse()`.
   - Enhanced array methods like `forEach()`, `map()`, `filter()`, and `reduce()`.
   - Improved error handling with `try-catch` statements.

2. **ECMAScript 6 (ES6) / ECMAScript 2015**:
   - Introduced arrow functions `() => {}` for more concise function syntax.
   - Added `let` and `const` keywords for block-scoped variable declarations.
   - Introduced classes, allowing for object-oriented programming in JavaScript.
   - Introduced template literals for more flexible string interpolation.
   - Enhanced object syntax with shorthand property names and computed property names.
   - Introduced modules for better code organization and encapsulation.

3. **ECMAScript 2016 (ES2016) and ECMAScript 2017 (ES2017)**:
   - Introduced the exponential operator `*` for calculating exponentiation.
   - Added `async` and `await` keywords for handling asynchronous operations.
   - Introduced the `includes()` method for checking if an array includes a specific value.
   - Added improvements to objects and arrays, such as `Object.values()`, `Object.entries()`, `Array.prototype.includes()`, and trailing commas in function parameter lists.

4. **ECMAScript 2018 (ES2018) and ECMAScript 2019 (ES2019)**:
   - Introduced rest and spread operators `...` for working with arrays and objects.
   - Added asynchronous iteration with `for-await-of` loop.
   - Introduced new regular expression features like named capture groups and lookbehind assertions.
   - Added optional catch binding to conditionally catch exceptions without creating a variable.

5. **ECMAScript 2020 (ES2020) and ECMAScript 2021 (ES2021)**:
   - Introduced the nullish coalescing operator `??` to provide a default value for nullish (null or undefined) values.
   - Added optional chaining operator `?.` to access nested properties without causing errors if intermediate values are nullish.
   - Introduced the `BigInt` type for working with arbitrarily large integers.
   - Added logical assignment operators `||=`, `&&=` for concise assignment with conditions.
   - Introduced private class fields using `#` symbol for encapsulation.

The list is now organized as a nested ordered list, with each version of ECMAScript and its features listed as sub-items.


To write JavaScript code in Markdown, you can use fenced code blocks. In fenced code blocks, you enclose your JavaScript code within three backticks (```) before and after the code. Additionally, you can specify the language (e.g., "javascript") to get proper syntax highlighting in Markdown rendering environments that support it.

Here's an example of a JavaScript merge sort algorithm written in Markdown:

```javascript
// Merge Sort implementation in JavaScript

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Test the merge sort function
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log("Original array:", arr);
const sortedArray = mergeSort(arr);
console.log("Sorted array:", sortedArray);
```

When you use fenced code blocks with the "javascript" language specifier, it will render the JavaScript code with proper syntax highlighting, making it more readable and easier to understand for readers.

Note that the syntax highlighting and rendering of code blocks may vary depending on the Markdown renderer or platform you are using to view the Markdown content.