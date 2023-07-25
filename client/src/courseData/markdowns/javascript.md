# JavaScript

**JavaScript** is a programming language initially designed to interact with elements of web pages. In web browsers, JavaScript consists of three main parts:

1. **ECMAScript:** It provides the core functionality of JavaScript.
2. **Document Object Model (DOM):** It provides interfaces for interacting with elements on web pages.
3. **Browser Object Model (BOM):** It provides the browser API for interacting with the web browser.

JavaScript allows you to add interactivity to a web page by enhancing its functionality, such as validating forms, creating interactive maps, and displaying animated charts. When a web page is loaded, the JavaScript code is executed by the web browser's JavaScript engine. The engine modifies the HTML and CSS to update the user interface dynamically.

JavaScript engines, initially implemented as interpreters, are now commonly implemented as just-in-time compilers for improved performance.

JavaScript can be used both on the client-side (in web browsers) and the server-side. Node.js is a popular server-side environment for JavaScript, enabling access to databases, file systems, etc.

**JavaScript History:**

- Created in 1995 by Brendan Eich, initially named Mocha and later LiveScript.
- Renamed to JavaScript to leverage Java's popularity.
- JavaScript 1.0 was released with Netscape Navigator 2, followed by JavaScript 1.1 with Netscape Navigator 3.
- Microsoft's Internet Explorer 3 (IE 3) introduced JScript as its own JavaScript implementation.
- JavaScript was standardized by ECMA, resulting in ECMAScript (ISO/IEC-16262) to define a general-purpose, cross-platform scripting language.

## **ECMA Script**

ECMAScript (ES) is a standardized scripting language specification that defines the core features and syntax of JavaScript. It provides guidelines for implementing JavaScript in web browsers and other environments.

The term "ECMAScript" originated from the organization that oversees the standardization process, known as the European Computer Manufacturers Association (ECMA). The ECMA-262 standard document defines the specification for ECMAScript.

Here are some of the major versions of ECMAScript and their notable features:

1. **ECMAScript 5 (ES5):**
    - Added strict mode for more secure and optimized code.
    - Introduced JSON support with methods like `JSON.stringify()` and `JSON.parse()`.
    - Enhanced array methods like `forEach()`, `map()`, `filter()`, and `reduce()`.
    - Improved error handling with `try-catch` statements.
2. **ECMAScript 6 (ES6) / ECMAScript 2015:**
    - Introduced arrow functions (`() => {}`) for more concise function syntax.
    - Added `let` and `const` keywords for block-scoped variable declarations.
    - Introduced classes, allowing for object-oriented programming in JavaScript.
    - Introduced template literals for more flexible string interpolation.
    - Enhanced object syntax with shorthand property names and computed property names.
    - Introduced modules for better code organization and encapsulation.
3. **ECMAScript 2016 (ES2016) and ECMAScript 2017 (ES2017):**
    - Introduced the exponential operator (`*`) for calculating exponentiation.
    - Added `async` and `await` keywords for handling asynchronous operations.
    - Introduced the `includes()` method for checking if an array includes a specific value.
    - Added improvements to objects and arrays, such as `Object.values()`, `Object.entries()`, `Array.prototype.includes()`, and trailing commas in function parameter lists.
4. **ECMAScript 2018 (ES2018) and ECMAScript 2019 (ES2019):**
    - Introduced rest and spread operators (`...`) for working with arrays and objects.
    - Added asynchronous iteration with `for-await-of` loop.
    - Introduced new regular expression features like named capture groups and lookbehind assertions.
    - Added optional catch binding to conditionally catch exceptions without creating a variable.
5. **ECMAScript 2020 (ES2020) and ECMAScript 2021 (ES2021):**
    - Introduced the nullish coalescing operator (`??`) to provide a default value for nullish (null or undefined) values.
    - Added optional chaining operator (`?.`) to access nested properties without causing errors if intermediate values are nullish.
    - Introduced the `BigInt` type for working with arbitrarily large integers.
    - Added logical assignment operators (`||=`, `&&=`) for concise assignment with conditions.
    - Introduced private class fields using `#` symbol for encapsulation.

These are just some of the key features introduced in each ECMAScript version. It's important to note that new features are continually added to ECMAScript through new versions and proposals, allowing JavaScript to evolve and provide more powerful and expressive capabilities for developers.

## Document Object Model (DOM)

The DOM is an application programming interface(API) that represents the structure and content of an HTML or XML document as a tree-like structure. It `provides a way for JavaScript to access, manipulate, and update elements, attributes, and text within an HTML document`.

Key features and concepts of the DOM include: 

[JavaScript DOM Tutorial](https://www.javascripttutorial.net/javascript-dom/)

1. **Document Object:** The top-level object representing the entire web page, accessible through the `document` global variable.
2. **Elements:** HTML tags such as `<div>`, `<p>`, `<ul>`, etc., are represented as element objects in the DOM. JavaScript can interact with these elements to modify their properties, content, and style.
3. **Methods and Properties:** The DOM provides numerous methods and properties to access and manipulate elements, such as `getElementById()`, `querySelector()`, `innerHTML`, `setAttribute()`, and more.
4. **Event Handling:** JavaScript can register event handlers on DOM elements to respond to user interactions like clicks, mouse movements, form submissions, and keyboard input.
5. **Traversal and Manipulation:** JavaScript can navigate the DOM tree using methods like `parentNode`, `childNodes`, `nextSibling`, etc., to access and modify related elements.

By using the DOM, JavaScript can dynamically update the content, style, and structure of a web page based on user interactions or other events.

## Browser Object Model (BOM)

[JavaScript Browser Object Model (BOM)](https://www.javascripttutorial.net/javascript-bom/)

BOM (Browser Object Model) in JavaScript refers to the set of objects and APIs provided by web browsers that allow JavaScript to interact with and control the browser window and its various components. 

The BOM represents the browser window and provides objects and methods to interact with the browser itself, such as managing the browser history, manipulating the URL, displaying dialog boxes, controlling the opening and closing of windows or tabs, and interacting with cookies. It includes objects like **`window`**, **`navigator`**, **`location`**, **`history`**, **`screen`**, etc. The BOM is responsible for providing additional functionalities and properties beyond what is specified by JavaScript's core language features. It allows developers to control and manipulate the browser's behavior and features.

While the DOM (Document Object Model) focuses on interacting with the document structure and content, the BOM provides functionality specific to the browser environment.

Here are some key components and functionalities of the BOM:

**1. Window Object:**
The `window` object represents the browser window or tab and serves as the entry point to access BOM functionalities. It provides methods and properties to interact with the browser window.

For example, you can use the `window.open()` method to open a new browser window or tab:

```jsx
const newWindow = window.open('<https://www.example.com>', '_blank');

```

**2. Navigator Object:**
The `navigator` object provides information about the browser, such as its name, version, user agent string, and platform. It allows you to access browser-related details and perform browser detection.

For example, you can retrieve the browser's name and version using the `navigator.userAgent` property:

```jsx
const browserName = navigator.userAgent;

```

**3. Location Object:**
The `location` object represents the current URL of the web page and allows you to work with URLs. It provides properties and methods to access and manipulate the URL components.

For example, you can get the current URL using the `location.href` property:

```jsx
const currentURL = location.href;

```

You can also modify the URL and navigate to a different page using the `location.assign()` method:

```jsx
location.assign('<https://www.example.com>');

```

**4. History Object:**
The `history` object allows you to interact with the browser's navigation history. It provides methods to navigate backward and forward through the user's browsing history.

For example, you can go back one step in the history using the `history.back()` method:

```jsx
history.back();

```

**5. Timing Functions:**
The BOM includes timing functions that allow you to schedule and execute code at specific intervals. The two commonly used timing functions are `setTimeout()` and `setInterval()`.

The `setTimeout()` function executes a specified function after a certain delay:

```jsx
setTimeout(function() {
  // Code to execute after the delay
}, 2000); // 2 seconds delay

```

The `setInterval()` function repeatedly executes a function at a specified interval:

```jsx
setInterval(function() {
  // Code to execute repeatedly
}, 1000); // 1-second interval

```

**6. Dialog Boxes:**
The BOM provides methods to display dialog boxes for user interaction. Commonly used dialog box methods are `alert()`, `confirm()`, and `prompt()`.

- `alert()` displays an alert dialog with a message:
    
    ```jsx
    alert('Hello, world!');
    ```
    
- `confirm()` displays a confirmation dialog with OK and Cancel buttons:
    
    ```jsx
    const result = confirm('Are you sure?');
    if (result) {
      // OK button was clicked
    } else {
      // Cancel button was clicked
    }
    ```
    
- `prompt()` displays a dialog to input text and returns the entered value:
    
    ```jsx
    const name = prompt('Please enter your name:');
    ```
    

These are some of the functionalities provided by the BOM in JavaScript. The BOM allows JavaScript to interact with the browser environment, manage windows, handle navigation, and perform tasks beyond the scope of the document and its elements.

### Difference between `prompt()`, `alert()`, `confirm()`

The `prompt()`, `alert()`, and `confirm()` are built-in dialog box methods in JavaScript that allow interaction with the user. They serve different purposes and have distinct behaviors:

**1. prompt()**
The `prompt()` method displays a dialog box with a message to the user and provides an input field for the user to enter a response. It returns the value entered by the user as a string or `null` if the user cancels the dialog.

Example:

```jsx
const name = prompt('Please enter your name:');
console.log(name); // Outputs the value entered by the user or null
```

The `prompt()` dialog box typically has an OK button to submit the entered value and a Cancel button to dismiss the dialog.

**2. alert()**
The `alert()` method displays a simple dialog box with a message to the user. It is used to provide information or notify the user about something. The `alert()` dialog box only has an OK button to dismiss the dialog.

Example:

```jsx
alert('Hello, world!');
```

The `alert()` dialog box does not return any value. It is primarily used for displaying messages or alerts to the user.

**3. confirm()**
The `confirm()` method displays a dialog box with a message and OK/Cancel buttons. It is used to obtain user confirmation or choice. If the user clicks the OK button, `confirm()` returns `true`. If the user clicks the Cancel button, it returns `false`.

Example:

```jsx
const result = confirm('Are you sure?');
console.log(result); // Outputs true if OK was clicked, false if Cancel was clicked
```

The `confirm()` dialog box is commonly used to ask for user confirmation before performing an action or making a decision.

In summary:

- `prompt()` is used to get user input and returns the entered value or `null`.
- `alert()` is used to display information to the user and does not return a value.
- `confirm()` is used to get user confirmation and returns `true` or `false`.

These dialog box methods provide ways to interact with users and gather input or display important messages in JavaScript applications.

## SYNTAX IN JAVASCRIPT

[JavaScript Syntax](https://www.javascripttutorial.net/javascript-syntax/)

## VARIABLES IN JS

[JavaScript Variables](https://www.javascripttutorial.net/javascript-variables/)

## DATA TYPES IN JS

[JavaScript Data Types](https://www.javascripttutorial.net/javascript-data-types/)

In JavaScript, there are several data types that you can work with. Here is a list of the different data types in JavaScript:

1. **Primitive Data Types :**
    - Number : Represents numeric values.
    - String : Represents textual data.
    - Boolean : Represents a logical value of either true or false.
    - Undefined : Represents an uninitialized or unassigned value.
    - Null : Represents the intentional absence of any object value.
    - Symbol : Represents a unique identifier (introduced in ECMAScript 6).
2. **Complex Data Types :**
    - Object : Represents a collection of key-value pairs.
    - Array : Represents an ordered list of values.
    - Function : Represents a reusable block of code.
3. **Special Data Types :**
    - BigInt : Represents arbitrary precision integers (introduced in ECMAScript 2020).

1. **Number** 
    - JavaScript uses the `number` type to represent both integers and floating-point values. Technically, the JavaScript `number` type uses the IEEE-754 format.
    - ES2020 introduced a new primitive type `[bigint](https://www.javascripttutorial.net/es-next/javascript-bigint/)` representing big integer numbers with values larger than 253 – 1.
    
    In JavaScript, number literals are the notation used to represent numeric values directly in the source code. There are different formats for number literals in JavaScript, each with its own syntax and usage. 
    
    1. **Decimal (Base 10) Literals :**
        - The most common format for number literals is decimal notation, which represents numbers in base 10 using digits 0-9.
        - Example:
            
            ```jsx
            let num1 = 10;      // Decimal literal representing the number 10
            let num2 = 3.14;    // Decimal literal representing the number 3.14
            let num3 = -5;      // Decimal literal representing the number -5
            ```
            
    2. **Binary (Base 2) Literals :**
        - Binary notation represents numbers in base 2 using digits 0 and 1, prefixed with `0b` or `0B`.
        - Example:
            
            ```jsx
            let num4 = 0b1010;  // Binary literal representing the number 10 (0b1010 = 10 in decimal)
            let num5 = 0b1101;  // Binary literal representing the number 13 (0b1101 = 13 in decimal)
            ```
            
    3. **Octal (Base 8) Literals :**
        - An octal literal number starts with the digit zero (0) followed by a sequence of octal digits (numbers from 0 through 7).
        - Octal notation represents numbers in base 8 using digits 0-7, prefixed with `0o` or `0O`.
        - Note: Octal literals are not allowed in strict mode.
        - Example:
            
            ```jsx
            let num6 = 0o12;    // Octal literal representing the number 10 (0o12 = 10 in decimal)
            let num7 = 0o17;    // Octal literal representing the number 15 (0o17 = 15 in decimal)
            ```
            
        
        `NOTE`: If an octal number contains a number not in the range from 0 to 7, the JavaScript engine ignores the 0 and treats the number as a decimal.
        
        ```jsx
        let num = 080;
        console.log(num);
        
        Output :
        80
        ```
        
        This implicit behavior might cause issues. Therefore, ES6 introduced a new [octal literal](https://www.javascripttutorial.net/es6/octal-and-binary-literals/) that starts with the `0o` followed by a sequence of octal digits (from 0 to 7). For example:
        
        ```jsx
        let num = 0o71;
        console.log(num);
        ```
        
        Output:
        
        ```jsx
        57
        ```
        
        If you an invalid number after `0o`, JavaScript will issue a syntax error like this:
        
        ```jsx
        let num = 0o80;
        console.log(num);
        ```
        
        Output:
        
        ```jsx
        let num = 0o80;
                  ^^
        SyntaxError: Invalid or unexpected token
        ```
        
    
    1. **Hexadecimal (Base 16) Literals :**
        - Hexadecimal notation represents numbers in base 16 using digits 0-9 and letters A-F (case-insensitive), prefixed with `0x` or `0X`.
        - Example:
        
        ```jsx
        let num8 = 0xA;     // Hexadecimal literal representing the number 10 (0xA = 10 in decimal)
        let num9 = 0xFF;    // Hexadecimal literal representing the number 255 (0xFF = 255 in decimal)
        ```
        
    
    1. **Floating- point numbers**
        
        To define a floating-point literal number, you include a decimal point and at least one number after that. For example:
        
        ```jsx
        let price = 9.99;
        let tax = 0.08;
        let discount = .05;// valid but not recommeded
        ```
        
        When you have a very big number, you can use e-notation. E-notation indicates a number should be multiplied by 10 raised to a given power. For example:
        
        ```jsx
        let amount = 3.14e7;
        console.log(amount);
        ```
        
        Output:
        
        ```jsx
        31400000
        ```
        
        The notation `3.14e7` means that take `3.14` and multiply it by `107`.
        
        Likewise, you can use the E-notation to represent a very small number. For example:
        
        ```jsx
        let amount = 5e-7;
        console.log(amount);
        ```
        
        Output:
        
        ```jsx
        0.0000005
        ```
        
        The 5e-7 notation means that take 5 and divide it by 10,000,000.
        
        Also, JavaScript automatically converts any floating-point number with at least six zeros after the decimal point into e-notation. For example:
        
        ```jsx
        let amount = 0.0000005;
        console.log(amount);
        ```
        
        Output:
        
        ```jsx
        5e-7
        ```
        
        Floating-point numbers are accurate up to 17 decimal places. When you perform arithmetic operations on floating-point numbers, you often get the approximate result. For example:
        
        ```jsx
        let amount = 0.2 + 0.1;
        console.log(amount);
        ```
        
        Output:
        
        ```jsx
        0.30000000000000004
        ```
        
    2. **Exponential Notation :**
        - Exponential notation represents numbers in a compact form using scientific notation, with the base and exponent separated by `e` or `E`.
        - When you have a very big number, you can use e-notation. E-notation indicates a number should be multiplied by 10 raised to a given power
        - Example:
            
            ```jsx
            let num10 = 3.14e2;   // Exponential literal representing the number 314 (3.14e2 = 314 in decimal)
            let num11 = 1.5e-3;   // Exponential literal representing the number 0.0015 (1.5e-3 = 0.0015 in decimal)
            ```
            
    
    1. Big Intergers
        
        JavaScript introduced the `[bigint](https://www.javascripttutorial.net/es-next/javascript-bigint/)` type starting in ES2022. The `bigint` type stores whole numbers whose values are greater than 253 – 1.
        
        A big integer literal has the `n` character at the end of an integer literal like this:
        
        ```jsx
        let pageView = 9007199254740991n;
        ```
        
    
    ### **JavaScript numeric separator**
    
    - The numeric separator allows you to `create a visual separation` between groups of digits by using underscores (`_`) as separators.
        
        For example, the following number is very difficult to read especially when it contains long digit repetitions:
        
        ```jsx
        const budget = 1000000000;
        ```
        
        Is this a billion or a hundred million?
        
        The numeric separator fixes this readability issue as follows:
        
        ```jsx
        const budget = 1_000_000_000;
        ```
        
        As you can see, the number is now very easy to interpret.
        
        JavaScript allows you to use numeric separators for both integer and floating-point [numbers](https://www.javascripttutorial.net/javascript-number/). For example:
        
        ```jsx
        let amount = 120_201_123.05; // 120201123.05
        let expense = 123_450;// 123450
        let fee = 12345_00;// 1234500
        ```
        
        It’s important to note that all numbers in JavaScript are floating-point numbers.
        
        Also, you can use the numeric separators for factional and exponent parts. For example:
        
        ```jsx
        let amount = 0.000_001;// 1 millionth
        ```
        
        It’s important to notice that you can use the numeric separator for `[bigint](https://www.javascripttutorial.net/es-next/javascript-bigint/)` literal, binary literal, octal literal, and hex literal. For example:
        
        ```jsx
        // BigInt
        max = 9_223_372_036_854_775_807n;
        
        // binary
        let nibbles = 0b1011_0101_0101;
        
        // octal
        let val = 0o1234_5670;
        
        // hex
        let message = 0xD0_E0_F0;
        ```
        
2. **String**
    - JavaScript strings are primitive values.
    - Strings are `immutable`. It means that if you modify a string, you will always get a new string. The original string doesn’t change.
    
    To create literal strings, you use either single quotes (`'`) or double quotes (`"`) like this:
    
    ```jsx
    let str = 'Hi';
    let greeting = "Hello";
    ```
    
    ES6 introduced [template literals](https://www.javascripttutorial.net/es6/javascript-template-literals/) that allow you to define a string backtick ( ` ) characters:
    
    ```jsx
    let name = `John`';
    ```
    
    The template literals allow you to use the single quotes and double quotes inside a string without the need of escaping them. For example:
    
    ```jsx
    let mesage = `"I'm good". She said";
    ```
    
    Also, you can place the [variables](https://www.javascripttutorial.net/javascript-variables/) and expressions inside a template literal. JavaScript will replace the variables with their value in the string. This is called string interpolation. For example:
    
    ```jsx
    let name = 'John';
    let message = `Hi, I'm ${name}.`;
    
    console.log(message);
    ```
    
    Output:
    
    ```jsx
    Hi, I'm John.
    ```
    
    In this example, JavaScript replaces the `name` variable with its value inside the template literal.
    
    ## Escaping special characters
    
    To escape special characters, you use the backslash `\` character. For example:
    
    - Windows line break: `'\r\n'`
    - Unix line break: `'\n'`
    - Tab: `'\t'`
    - Backslash `'\'`
    
    The following example uses the backslash character to escape the single quote character in a string:
    
    ```jsx
    let str = 'I\'m a string!';
    ```
    
    ## **Different Operations on String in JS**
    
    1. **String Concatenation :** 
        - Concatenation is the process of combining two or more strings together to create a new string.
        - In JavaScript, you can use the `+` operator or the `concat()` method to concatenate strings.
        - Example:
            
            ```jsx
            let str1 = "Hello";
            let str2 = "World";
            
            // Using the + operator
            let result1 = str1 + " " + str2;                // Output: "Hello World"
            
            // Using the concat() method
            let result2 = str1.concat(" ", str2);           // Output: "Hello World"
            ```
            
    2. **String Length :**
        - You can find the length of a string using the `length` property.
        - Example:
            
            ```jsx
            let str = "Hello World";
            console.log(str.length);                        // Output: 11
            ```
            
    3. **Accessing Characters :**
        - Individual characters within a string can be accessed using square brackets (`[]`) or the `charAt()` method.
        - The index starts from 0 for the first character.
        - Example:
            
            ```jsx
            let str = "Hello";
            console.log(str[0]);                             // Output: "H"
            console.log(str.charAt(1));                      // Output: "e"
            ```
            
    4. **Substring Extraction :**
        - You can extract a portion of a string using the `substring()` method or the `slice()` method.
        - These methods take the starting and ending indexes as arguments.
        - Example:
            
            ```jsx
            let str = "Hello World";
            let substring1 = str.substring(0, 5);            // Output: "Hello"
            let substring2 = str.slice(6);                   // Output: "World
            ```
            
    5. **Changing Case :**
        - You can convert a string to uppercase or lowercase using the `toUpperCase()` and `toLowerCase()` methods, respectively.
        - Example:
            
            ```jsx
            let str = "Hello World";
            let uppercase = str.toUpperCase();               // Output: "HELLO WORLD"
            let lowercase = str.toLowerCase();               // Output: "hello world"
            ```
            
    6. **Searching within a String :**
        - JavaScript provides methods such as `indexOf()` and `lastIndexOf()` to search for a substring within a string.
        - The `indexOf()` method returns the index of the first occurrence of a substring, while `lastIndexOf()` returns the index of the last occurrence.
        - Example:
            
            ```jsx
            let str = "Hello World";
            let index1 = str.indexOf("World");               // Output: 6
            let index2 = str.lastIndexOf("l");               // Output: 
            ```
            
    7. **Replacing Substrings :**
        - You can replace a specific substring within a string using the `replace()` method.
        - The `replace()` method takes two arguments: the substring to be replaced and the replacement string.
        - Example:
            
            ```jsx
            let str = "Hello World";
            let newStr = str.replace("World", "Universe");    // Output: "Hello Universe"
            ```
            
    
    ### Converting values to string
    
    In JavaScript, you can convert values of different data types to strings using various methods. Here are some common approaches to converting values to strings:
    
    1. **String Conversion using `String() Constructor`:**
        - You can use the `String()` constructor as a function to convert a value to a string.
        - Example:
        
        ```jsx
        let num = 10;
        let str = String(num);      // Converts the number 10 to the string "10"
        ```
        
    2. **String Conversion using the `toString()` Method:**
        - Most JavaScript data types have a `toString()` method that converts the value to a string representation.
        - Example:
        
        ```jsx
        let num = 10;
        let str = num.toString();   // Converts the number 10 to the string "10"
        ```
        
    3. **String Conversion using `Template Literals`:**
        - Template literals, denoted by backticks (``), allow you to embed values directly into a string.
        - The values are automatically converted to strings.
        - Example:
        
        ```jsx
        let num = 10;
        let str = `The number is: ${num}`;   // Converts the number 10 to the string "The number is: 10
        ```
        
    4. **String Conversion using the `+` Operator:**
        - The `+` operator can be used for string concatenation.
        - When you concatenate a string with a value of another data type, JavaScript automatically converts the non-string value to a string.
        - Example:
        
        ```jsx
        let num = 10;
        let str = "The number is: " + num;   // Converts the number 10 to the string "The number is: 10"
        ```
        
    5. **String Conversion using `JSON.stringify()`:**
        - The `JSON.stringify()` function converts a JavaScript object or value to a JSON string.
        - Example:
        
        ```jsx
        let obj = { name: "John", age: 25 };
        let str = JSON.stringify(obj);     // Converts the object to the string '{"name":"John","age":25}'
        ```
        
    
    ### String comparison in JS
    
    In JavaScript, you can compare strings using various comparison operators and methods. Here are the common approaches for comparing strings:
    
    1. **Equality Operator (==) and Strict Equality Operator (===):**
        - The equality operator (`==`) compares two strings for equality, performing type coercion if necessary.
        - The strict equality operator (`===`) compares two strings for equality without performing type coercion.
        - Example:
            
            ```jsx
            let str1 = "Hello";
            let str2 = "World";
            
            console.log(str1 == str2);   // Output: false
            console.log(str1 === str2);  // Output: false
            
            ```
            
    2. **Comparison Operators (<, >, <=, >=):**
        - Comparison operators can be used to compare strings lexicographically (based on the Unicode values of their characters).
        - Example:
            
            ```jsx
            let str1 = "apple";
            let str2 = "banana";
            
            console.log(str1 < str2);    // Output: true
            console.log(str1 > str2);    // Output: false
            
            let str2 = "Aardvark";
            let str3 = "zoraster";
            console.log(str2 < str3); // Output : true => A(65) < z(122)
            ```
            
    3. **localeCompare() Method:**
        - The `localeCompare()` method compares two strings and returns a value indicating their relative order.
        - It considers locale-specific rules for comparison.
        - The method returns a negative value if the first string comes before the second, a positive value if it comes after, and 0 if they are considered equal.
        - Example:
            
            ```jsx
            let str1 = "apple";
            let str2 = "banana";
            
            console.log(str1.localeCompare(str2));  // Output: -1
            ```
            
    4. **startsWith(), endsWith(), includes() Methods :**
        - JavaScript provides methods like `startsWith()`, `endsWith()`, and `includes()` to check if a string starts with, ends with, or contains a specific substring, respectively.
        - Example:
            
            ```jsx
            let str = "Hello, World";
            
            console.log(str.startsWith("Hello"));   // Output: true
            console.log(str.endsWith("World"));     // Output: true
            console.log(str.includes("o"));         // Output: true
            ```
            
    
3. **Boolean**
    
    In JavaScript, the Boolean data type represents a logical value that can be either true or false. It is often used for making decisions and controlling the flow of a program. Here is a detailed explanation of the Boolean data type in JavaScript:
    
    1. **Boolean Values:**
        - The Boolean data type has two possible values: true and false.
        - Example:
            
            ```jsx
            let isTrue = true;     // Boolean variable with the value true
            let isFalse = false;   // Boolean variable with the value false
            
            ```
            
    2. **Boolean Casting:**
        - JavaScript provides a `Boolean()` function that can be used to explicitly convert other values to their corresponding Boolean representation.
        - When converting other values to Boolean, the following rules apply:
            - The Boolean() function returns false for the following values :
                - false
                - 0 (zero)
                - "" (empty string)
                - null
                - undefined
                - NaN (Not a Number)
                - All other values, including `non-empty strings`, `non-zero numbers`, and `objects`, are converted to true.
        - Example:
            
            ```jsx
            console.log(Boolean(false));        // false
            console.log(Boolean(0));            // false
            console.log(Boolean(""));           // false
            console.log(Boolean(null));         // false
            console.log(Boolean(undefined));    // false
            console.log(Boolean(NaN));          // false
            
            console.log(Boolean(true));         // true
            console.log(Boolean(10));           // true
            console.log(Boolean("Hello"));      // true
            console.log(Boolean({}));           // true
            
            ```
            
    3. **Behavior of Different Data Types with Boolean :**
        - When used in a Boolean context, values of different data types behave as follows:
            - Boolean: The Boolean value itself remains unchanged.
            - Number: Non-zero numbers and positive or negative infinity are considered true, while 0 and NaN are considered false.
            - String: An empty string ("") is considered false, while non-empty strings are considered true.
            - Undefined: The value undefined is considered false.
            - Null: The value null is considered false.
            - Object: All objects, including arrays and functions, are considered true.
        - Example:
            
            ```jsx
            let boolValue = true;
            console.log(boolValue);               // true
            
            let numValue = 10;
            console.log(Boolean(numValue));       // true
            
            let stringValue = "Hello";
            console.log(Boolean(stringValue));    // true
            
            let undefinedValue;
            console.log(Boolean(undefinedValue)); // false
            
            let nullValue = null;
            console.log(Boolean(nullValue));      // false
            
            let objValue = {};
            console.log(Boolean(objValue));       // true
            
            ```
            
    
4. **undefined**
    
    In JavaScript, `undefined` is a data type that represents the absence of a value. It is commonly used to indicate that a variable has been declared but has not been assigned a value.
    
    Here are some key points about the `undefined` data type in JavaScript:
    
    1. Default Value: If a variable is declared but not assigned a value, it is automatically initialized with `undefined`.
        
        ```jsx
        let myVariable;
        console.log(myVariable);  // Output: undefined
        ```
        
    2. Return Value: When a function does not explicitly return a value, it implicitly returns `undefined`.
        
        ```jsx
        function doSomething() {
          // No return statement
        }
        
        let result = doSomething();
        console.log(result);  // Output: undefined
        ```
        
    3. Property or Index Access: If you access a property or index that does not exist in an object or array, it will return `undefined`.
        
        ```jsx
        let obj = { name: "John", age: 25 };
        console.log(obj.address);  // Output: undefined
        
        let arr = [10, 20, 30];
        console.log(arr[3]);  // Output: undefined
        ```
        
    4. Variable Reset: You can explicitly assign `undefined` to a variable to reset its value.
        
        ```jsx
        let myVariable = 10;
        myVariable = undefined;
        console.log(myVariable);  // Output: undefined
        ```
        
    5. Checking for `undefined`: You can use the `typeof` operator or compare the value to `undefined` to check if a variable or expression is `undefined`.
        
        ```jsx
        let myVariable;
        console.log(typeof myVariable === "undefined");  // Output: true
        
        let value = getValue();
        if (value === undefined) {
          console.log("Value is undefined");
        }
        ```
        
    6. Difference from `null`: `undefined` is distinct from `null` in JavaScript. `null` is an assignment value that indicates the absence of an object, while `undefined` indicates the absence of a value or uninitialized variable.
    
    It's important to handle `undefined` values appropriately in your JavaScript code to avoid unexpected errors.
    
5. **Null**
    
    In JavaScript, `null` is a data type that represents the intentional absence of any object value. It is typically used to indicate that a variable has been explicitly assigned a null value.
    
    Here are some important points about the `null` data type in JavaScript:
    
    1. Explicit Assignment: You can assign the value `null` to a variable to indicate that it has no value or that it is intentionally empty.
        
        ```jsx
        let myVariable = null;
        console.log(myVariable);  // Output: null
        
        ```
        
    2. Different from `undefined`: While `undefined` is used to represent the absence of a value or uninitialized variables, `null` represents the absence of an object value.
        
        ```jsx
        let myVariable;
        console.log(myVariable);  // Output: undefined
        
        myVariable = null;
        console.log(myVariable);  // Output: null
        
        ```
        
    3. Type of `null`: The `typeof` operator returns `"object"` for `null`, which is an artifact of JavaScript's history and is considered a quirk of the language.
        
        ```jsx
        let myVariable = null;
        console.log(typeof myVariable);  // Output: object
        
        ```
        
    4. Comparisons: When comparing values, `null` is equal to `undefined` when using loose equality (`==`) but not strict equality (`===`).
        
        ```jsx
        let myVariable = null;
        console.log(myVariable == undefined);  // Output: true
        console.log(myVariable === undefined);  // Output: false
        
        ```
        
    5. Resetting Variable Value: You can assign `null` to a variable to reset its value or indicate that it should no longer reference an object.
        
        ```jsx
        let obj = { name: "John" };
        obj = null;  // obj no longer references the object
        
        ```
        
    6. Checking for `null`: To check if a variable or expression is `null`, you can directly compare it to `null`.
        
        ```jsx
        let myVariable = null;
        if (myVariable === null) {
          console.log("Variable is null");
        }
        
        ```
        
    
    It's important to note that `null` is a specific value that you assign to a variable, whereas `undefined` is a default value that variables can have if they haven't been assigned a value.
    
6. **Symbol**
    
    ES6 added `Symbol` as a new primitive type. Unlike other primitive types such as [number](https://www.javascripttutorial.net/javascript-data-types/#number), [boolean](https://www.javascripttutorial.net/javascript-data-types/#boolean), [null](https://www.javascripttutorial.net/javascript-data-types/#null), [undefined](https://www.javascripttutorial.net/javascript-data-types/#undefined), and [string](https://www.javascripttutorial.net/javascript-data-types/#string), the symbol type doesn’t have a literal form.
    
    [The Ultimate Guide to JavaScript Symbol](https://www.javascripttutorial.net/es6/symbol/)
    

To create a new symbol, you use the global `Symbol()` function as shown in this example:

```jsx
let s = Symbol('foo');j
```

The `Symbol()` function creates a new *unique* value each time you call it:

```jsx
console.log(Symbol() === Symbol());// false
```

1. **Object**
    
    In JavaScript, an object is an unordered collection of key-value pairs. Each key-value pair is called a property.
    
    The key of a property can be a string. And the value of a property can be any value, e.g., a [string](https://www.javascripttutorial.net/javascript-string-type/), a [number](https://www.javascripttutorial.net/javascript-number/), an [array](https://www.javascripttutorial.net/javascript-array/), and even a [function](https://www.javascripttutorial.net/javascript-function/).
    
    **JavaScript provides you with many ways to create an object :**
    
    1. **Object constructor :**
        
        The simplest way to create an empty object is using the Object constructor. Currently this approach is not recommended.
        
        ```jsx
        var object = new Object();
        ```
        
    
    1. **Object's create method :**
        
        The create method of Object creates a new object by passing the prototype object as a parameter
        
        ```jsx
        var object = Object.create(null);
        ```
        
    
    1. **Object literal syntax :**
        
        The object literal syntax (or object initializer), is a comma-separated set of name-value pairs wrapped in curly braces.
        
        ```jsx
        var object = {
             name: "Sudheer",
             age: 34
        };
        
        // Object literal property values can be of any data type, 
        // including array, function, and nested object.
        ```
        
        **`Note`:** This is an easiest way to create an object
        
    2. **Function constructor :**
        
        Create any function and apply the new operator to create object instances,
        
        ```jsx
        function Person(name) {
          this.name = name;
          this.age = 21;
        }
        var object = new Person("Sudheer");
        ```
        
    
    1. **Function constructor with prototype :**
        
        This is similar to function constructor but it uses prototype for their properties and methods,
        
        ```jsx
        function Person() {}
        Person.prototype.name = "Sudheer";
        var object = new Person();
        ```
        
        This is equivalent to an instance created with an object create method with a function prototype and then call that function with an instance and parameters as arguments.
        
        ```jsx
        function func() {};
        
        new func(x, y, z);
        ```
        
        **(OR)**
        
        ```jsx
        // Create a new instance using function prototype.
        var newInstance = Object.create(func.prototype)
        
        // Call the function
        var result = func.call(newInstance, x, y, z),
        
        // If the result is a non-null object then use it 
        // otherwise just use the new instance.
        console.log(result && typeof result === 'object' ? result : newInstance);
        ```
        
    
    1. **ES6 Class syntax :**
        
        ES6 introduces class feature to create the objects
        
        ```jsx
        class Person {
          constructor(name) {
            this.name = name;
          }
        }
        
        var object = new Person("Sudheer");
        ```
        
    
    1. **Singleton pattern :** 
        
        A Singleton is an object which can only be instantiated one time. Repeated calls to its constructor return the same instance and this way one can ensure that they don't accidentally create multiple instances.
        
        ```jsx
        var object = new (function () {
          this.name = "Sudheer";
        })();
        ```
        

### Accessing properties of Objects

In JavaScript, there are different ways to access properties of an object. Here are the commonly used methods :

1. **Dot notation** :
You can use the dot (`.`) notation to access properties of an object directly by specifying the property name after the object's variable name.
    
    ```jsx
    var person = {
      name: "John",
      age: 30
    };
    
    console.log(person.name); // Output: John
    console.log(person.age); // Output: 30
    ```
    
2. **Bracket notation** :
Bracket notation involves using square brackets (`[]`) to access object properties. This notation is useful when the property name is stored in a variable or contains special characters.
    
    ```jsx
    var person = {
      name: "John",
      age: 30
    };
    
    var propertyName = "name";
    console.log(person[propertyName]); // Output: John
    
    console.log(person["age"]); // Output: 30
    ```
    
3. **Object destructuring** :
Object destructuring allows you to extract specific properties from an object and assign them to individual variables.
    
    ```jsx
    var person = {
      name: "John",
      age: 30
    };
    
    var { name, age } = person;
    console.log(name); // Output: John
    console.log(age); // Output: 30
    ```
    
4. **Object.keys()** :
The `Object.keys()` method returns an array containing the property names of an object. You can then access the object properties using a loop or index.
    
    ```jsx
    var person = {
      name: "John",
      age: 30
    };
    
    var keys = Object.keys(person);
    console.log(person[keys[0]]); // Output: John
    console.log(person[keys[1]]); // Output: 30
    ```
    

`NOTE`:

- When a property name contains spaces, you need to place it inside quotes. For example, the following `address` object has the `'building no'` as a property:

```jsx
let address = {
    'building no': 3960,
    street: 'North 1st street',
    state: 'CA',
    country: 'USA'
};
```

To access the `'building no'` property, you need to use the array-like notation:

```jsx
address['building no'];
```

If you use the dot notation, you’ll get an error:

```jsx
address.'building no';
```

Error:

```jsx
SyntaxError: Unexpected string
```

Note that it is not a good practice to use spaces in the property names of an object.

Reading from a property that does not exist will result in an `[undefined](https://www.javascripttutorial.net/javascript-undefined/)`. For example:

```jsx
console.log(address.district);
```

Output:

```jsx
undefined
```

### Modifying value of property inside object

To modify the value of a property in JavaScript, you can use either the dot notation or the bracket notation. Here's how you can modify the value of a property:

1. **Dot notation** :
Use the dot (`.`) notation to modify the value of a property by directly assigning a new value to it.
    
    ```jsx
    var person = {
      name: "John",
      age: 30
    };
    
    person.name = "Jane"; // Modifying the value of 'name' property
    person.age = 35; // Modifying the value of 'age' property
    
    console.log(person.name); // Output: Jane
    console.log(person.age); // Output: 35
    ```
    
2. **Bracket notation** :
Use the square brackets (`[]`) with the property name inside to modify the value of a property.
    
    ```jsx
    var person = {
      name: "John",
      age: 30
    };
    
    person["name"] = "Jane"; // Modifying the value of 'name' property
    person["age"] = 35; // Modifying the value of 'age' property
    
    console.log(person.name); // Output: Jane
    console.log(person.age); // Output: 35
    ```
    

### **Adding a new property to an object**

To add a new property to an existing object in JavaScript, you can use either the dot notation or the bracket notation. Here's how you can add a new property:

1. **Dot notation** :
Use the dot (`.`) notation to add a new property to an object by assigning a value to it.
    
    ```jsx
    var person = {
      name: "John",
      age: 30
    };
    
    person.address = "123 Main St"; // Adding a new property 'address'
    
    console.log(person.address); // Output: 123 Main St
    
    ```
    
2. **Bracket notation** :
Use the square brackets (`[]`) with the new property name inside to add a new property to an object.
    
    ```jsx
    var person = {
      name: "John",
      age: 30
    };
    
    person["address"] = "123 Main St"; // Adding a new property 'address'
    
    console.log(person.address); // Output: 123 Main St
    
    ```
    

### **Deleting a property of an object**

To delete a property from an object in JavaScript, you can use the `delete` keyword followed by the property name. Here's how you can delete a property:

```jsx
var person = {
  name: "John",
  age: 30
};

delete person.age; // Deleting the 'age' property

console.log(person.age); // Output: undefined

```

In the above example, the `delete` keyword is used to remove the `age` property from the `person` object. After deleting the property, accessing it will return `undefined`.

It's important to note that deleting a property only removes the property from the object, but it does not delete the value itself or affect any other references to the value. It simply removes the association between the object and the property.

You can also use bracket notation to delete a property:

```jsx
var person = {
  name: "John",
  age: 30
};

delete person["age"]; // Deleting the 'age' property

console.log(person.age); // Output: undefined

```

By using the `delete` keyword with either dot notation or bracket notation, you can remove a property from an object in JavaScript.

### **Checking if a property exists**

To check if a property exists in an object in JavaScript, you can use the `in` operator or the `hasOwnProperty()` method. Here's how you can check if a property exists:

1. **Using the** `in` **operator** :
The `in` operator checks if a property exists in an object, including properties inherited from its prototype chain.
    
    ```jsx
    var person = {
      name: "John",
      age: 30
    };
    
    console.log("name" in person); // Output: true
    console.log("address" in person); // Output: false
    
    ```
    
    In the above example, the `in` operator is used to check if the properties "name" and "address" exist in the `person` object. It returns `true` if the property exists and `false` otherwise.
    
2. **Using the** `hasOwnProperty()` **method** :
    
    
    The `hasOwnProperty()` method is used to check if an object has a specific property. It does not check inherited properties.
    
    ```jsx
    var person = {
      name: "John",
      age: 30
    };
    
    console.log(person.hasOwnProperty("name")); // Output: true
    console.log(person.hasOwnProperty("address")); // Output: false
    
    ```
    
    In the above example, the `hasOwnProperty()` method is used to check if the properties "name" and "address" exist in the `person` object. It returns `true` if the property exists and `false` otherwise.
    

`NOTE`: 

It's important to note that when using the `in` operator, it checks both the object's own properties and its prototype chain. On the other hand, `hasOwnProperty()` only checks the object's own properties.

## Primitive and Reference values in JS

[JavaScript Primitive vs. Reference Values](https://www.javascripttutorial.net/javascript-primitive-vs-reference-values/)

# Arrays in JS

In JavaScript, an array is a special type of object used to store multiple values in a single variable. It is an ordered collection of elements, where each element is identified by an index starting from 0. Arrays in JavaScript can hold values of any data type, including numbers, strings, objects, and even other arrays.

## Different ways to create array in JS

In JavaScript, there are several ways to create an array. Here are some commonly used methods:

1. **Array Literal Syntax**  :
The simplest way to create an array is using array literal syntax. This involves enclosing the elements within square brackets `[]` and separating them with commas.
    
    ```jsx
    var fruits = ["apple", "banana", "orange"];
    ```
    
2. **Array Constructor** : 
You can also create an array using the Array constructor. This involves using the `new` keyword followed by the `Array` constructor and passing the elements as arguments.
    
    ```jsx
    var fruits = new Array("apple", "banana", "orange");
    ```
    
    It's important to note that if you pass a single numeric argument to the Array constructor, it creates an empty array with the given length.
    
    ```jsx
    var numbers = new Array(5); // Creates an empty array with length 5
    ```
    
3. **Array.from()** :
The `Array.from()` method creates a new array from an iterable or array-like object. It can convert strings, sets, maps, and other iterable objects into an array.
    
    ```jsx
    var str = "Hello";
    var charArray = Array.from(str); // Converts string to array of characters
    ```
    
4. **Array.of()** :
The `Array.of()` method creates a new array with the specified elements as arguments. It is useful for creating an array with a single element or when the number of arguments is dynamic.
    
    ```jsx
    var numbers = Array.of(1, 2, 3, 4, 5); 
    // Creates an array with specified numbers
    ```
    
5. **Spread Operator** :
The spread operator (`...`) can be used to create a new array by spreading the elements of an existing array or combining multiple arrays.
    
    ```jsx
    var arr1 = [1, 2, 3];
    var arr2 = [4, 5, 6];
    var combinedArray = [...arr1, ...arr2]; 
    // Combines arrays into a new array
    ```
    
6. **Array.from() with Mapping Function** :
Using `Array.from()` with a mapping function allows you to create a new array by applying a function to each element of an existing array.
    
    ```jsx
    var numbers = [1, 2, 3];
    var squaredNumbers = Array.from(numbers, x => x * x); 
    // Applies a mapping function to each element
    ```
    

## Accessing elements in array

In JavaScript, you can access individual elements of an array using their index. The index starts from 0, so the first element is at index 0, the second element is at index 1, and so on. Here are some ways to access array elements:

1. **Bracket Notation** :
The most common way to access an array element is by using bracket notation `[]`. You provide the index inside the brackets to retrieve the corresponding element.
    
    ```jsx
    var fruits = ["apple", "banana", "orange"];
    console.log(fruits[0]); // Output: "apple"
    console.log(fruits[1]); // Output: "banana"
    ```
    

1. **Dot Notation** :
In JavaScript, arrays are also objects, so you can access array elements using dot notation. However, this method is not recommended for arrays because it works only if the index is a valid identifier (e.g., a single word without spaces or special characters).
    
    ```jsx
    var fruits = ["apple", "banana", "orange"];
    console.log(fruits.0); // Invalid syntax
    console.log(fruits.1); // Invalid syntax
    ```
    

1. **Dynamic Index** :
You can use variables or expressions as the index to access array elements dynamically.
    
    ```jsx
    var fruits = ["apple", "banana", "orange"];
    var index = 1;
    console.log(fruits[index]); // Output: "banana"
    
    var dynamicIndex = 2 + 1;
    console.log(fruits[dynamicIndex]); // Output: "orange"
    ```
    

1. **Negative Index** :
JavaScript allows using negative indexes to access array elements. A negative index counts from the end of the array, with -1 representing the last element, -2 representing the second last element, and so on.
    
    ```jsx
    var fruits = ["apple", "banana", "orange"];
    console.log(fruits[-1]); // Output: undefined
    console.log(fruits[-2]); // Output: undefined
    ```
    
    It's important to note that negative indexes won't wrap around to the end of the array like some other programming languages. Instead, they will simply return `undefined` for invalid indexes.
    
2. **Accessing Multidimensional Arrays** :
JavaScript arrays can also be multidimensional, meaning they can contain other arrays as elements. To access elements of a multidimensional array, you use multiple sets of square brackets.
    
    ```jsx
    var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    console.log(matrix[0][1]); // Output: 2
    console.log(matrix[2][0]); // Output: 7
    ```
    

Remember to ensure that the index you provide is within the valid range of the array's length. Trying to access an element outside the array's bounds will result in `undefined`.

## Different Operations on Array

1. `length`:
    - The `length` property of an array returns the number of elements in the array.
    - Example:
        
        ```jsx
        var fruits = ["apple", "banana", "orange"];
        console.log(fruits.length); // Output: 3
        ```
        

1. `slice()`:
    - The **`slice()`** method `returns the selected elements` in an array as a new array object.
    - It selects the elements starting at the given start argument, and ends at the given optional end argument without including the last element.
    - If you omit the second argument then it selects till the end.
    - Example:
        
        ```jsx
        let arrayIntegers = [1, 2, 3, 4, 5];
        let arrayIntegers1 = arrayIntegers.slice(0, 2); // returns [1,2]
        let arrayIntegers2 = arrayIntegers.slice(2, 3); // returns [3]
        let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]
        ```
        

1. `splice()`:
    - The **`splice()`** method is used either adds/removes items to/from an array, and then `returns the removed item`.
    - The first argument specifies the array position for insertion or deletion whereas the optional second argument indicates the number of elements to be deleted. Each additional argument is added to the array.
    - Example:
        
        ```jsx
        let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
        let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
        let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];
        
        let arrayIntegers1 = arrayIntegersOriginal1.splice(0, 2); // returns [1, 2]; original array: [3, 4, 5]
        let arrayIntegers2 = arrayIntegersOriginal2.splice(3); // returns [4, 5]; original array: [1, 2, 3]
        let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); //returns [4]; original array: [1, 2, 3, "a", "b", "c", 5]
        ```
        

1. `shift()`:
    - The `shift()` method removes the first element from an array and returns that element.
    - Example:
        
        ```jsx
        var fruits = ["apple", "banana", "orange"];
        var removedFruit = fruits.shift();
        console.log(removedFruit); // Output: "apple"
        console.log(fruits); // Output: ["banana", "orange"]
        ```
        

1. `unshift()`:
    - The `unshift()` method adds one or more elements to the beginning of an array and returns the new length of the array.
    - Example:
        
        ```jsx
        var fruits = ["banana", "orange"];
        fruits.unshift("apple");
        console.log(fruits); // Output: ["apple", "banana", "orange"]
        ```
        

1. `indexOf()`:
    - The `indexOf()` method returns the first index at which a specified element is found in an array, or -1 if the element is not found.
    - Example:
        
        ```jsx
        var fruits = ["apple", "banana", "orange"];
        var index = fruits.indexOf("banana");
        console.log(index); // Output: 1
        ```
        

1. `concat()`:
    - The `concat()` method combines two or more arrays and returns a new array without modifying the original arrays.
    - Example:
        
        ```jsx
        var fruits1 = ["apple", "banana"];
        var fruits2 = ["orange", "grape"];
        var combinedFruits = fruits1.concat(fruits2);
        console.log(combinedFruits); 
        // Output: ["apple", "banana", "orange", "grape"]
        ```
        

1. `includes()`:
    - The `includes()` method checks if an array contains a specified element and returns true or false.
    - Example:
        
        ```jsx
        var fruits = ["apple", "banana", "orange"];
        var includesBanana = fruits.includes("banana");
        console.log(includesBanana); // Output: true
        ```
        
    
2. `push()`:
    - The `push()` method adds one or more elements to the end of an array and returns the new length of the array.
    - Example:
        
        ```jsx
        var fruits = ["apple", "banana"];
        var newLength = fruits.push("orange", "grape");
        console.log(fruits); // Output: ["apple", "banana", "orange", "grape"]
        console.log(newLength); // Output: 4
        ```
        

1. `pop()`:
    - The `pop()` method removes the last element from an array and returns that element.
    - Example:
        
        ```jsx
        var fruits = ["apple", "banana", "orange"];
        var removedFruit = fruits.pop();
        console.log(removedFruit); // Output: "orange"
        console.log(fruits); // Output: ["apple", "banana"]
        ```
        
    

## Map(), filter(), Reduce(), forEach() in JS

1. `map()`:
    - The `map()` method creates a new array by applying a provided function to each element of the original array.
    - It iterates over the array, calls the provided function with each element, and returns a new array with the results.
    - The **`map()`** method does not mutate the original array.
    - Example:
        
        ```jsx
        var numbers = [1, 2, 3, 4, 5];
        var multipliedNumbers = numbers.map(function (num) {
          return num * 2;
        });
        console.log(multipliedNumbers); // Output: [2, 4, 6, 8, 10]
        ```
        

1. `filter()`:
    - The `filter()` method creates a new array with all the elements that pass a certain condition based on a provided function.
    - It iterates over the array, calls the provided function with each element, and includes the elements in the new array if the condition is true.
    - The **`filter()`** method does not mutate the original array.
    - Example:
        
        ```jsx
        var numbers = [1, 2, 3, 4, 5];
        var evenNumbers = numbers.filter(function (num) {
          return num % 2 === 0;
        });
        console.log(evenNumbers); // Output: [2, 4]
        ```
        

1. `reduce()`:
    - The `reduce()` method reduces an array to a single value by applying a provided function to each element of the array, accumulating the result.
    - It iterates over the array, calls the provided function with an accumulator and the current element, and returns a single value.
    - It is commonly used for calculations that involve aggregating array values, such as summing, averaging, or finding the maximum/minimum value.
    - Example:
        
        ```jsx
        var numbers = [1, 2, 3, 4, 5];
        var sum = numbers.reduce(function (accumulator, num) {
          return accumulator + num;
        }, 0);
        console.log(sum); // Output: 15
        ```
        

1. `forEach()`:
    - The `forEach()` array method loops through any array, executing a provided function once for each array element in ascending index order. This function is referred to as a callback function.
    - It does not return a new array or a value. It is mainly used for its side effects.
    - The original array remains unchanged
    - Example:
        
        ```jsx
        var numbers = [1, 2, 3, 4, 5];
        numbers.forEach(function (num, index) {
          console.log("Element at index " + index + ": " + num);
        });
        
        // Output:
        Element at index 0: 1
        Element at index 1: 2
        Element at index 2: 3
        Element at index 3: 4
        Element at index 4: 5
        ```
        
    

# Operators in JS

## Arithmetic operators

These operators are used for performing basic mathematical operations in JavaScript.

| Operator | Description | Example |
| --- | --- | --- |
| + | Addition | 2 + 3 |
| - | Subtraction | 5 - 2 |
| * | Multiplication | 3 * 4 |
| / | Division | 10 / 2 |
| % | Modulo | 10 % 3 |
| ** | Exponentiation | 2 ** 3 |

### **Addition operator `+`**

- The addition operator returns the sum of two values
- For example, the following uses the addition operator to calculate the sum of two numbers:
    
    ```jsx
    let sum = 10 + 20;
    console.log(sum);// 30
    ```
    
- Also, you can use the addition operator with two [variables](https://www.javascripttutorial.net/javascript-variables/). For example:
    
    ```jsx
    let netPrice    = 9.99,
        shippingFee = 1.99;
    let grossPrice  = netPrice + shippingFee;
    
    console.log(grossPrice);
    ```
    
    Output:
    
    ```jsx
    11.98
    ```
    

### **Addition operator with strings**

If either value is a `string`, the addition operator uses the following rules :

- If both values are strings, it concatenates the second string to the first one.
- For example, the following uses the addition operator to add concatenate two strings
    
    ```jsx
    let x = '10',
        y = '20';
    let result = x + y;
    
    console.log(result); // '1020'
    
    ```
    

- If one value is a string, it implicitly converts the numeric value into a string and concatenates two strings.
- In this example, JavaScript converts the number `10` into a string `'10'` and concatenates the second string `'20'` to it.
    
    ```jsx
    let result = 10 + '20';
    
    console.log(result); // '1020'
    ```
    

- Here's a table with the given values and their corresponding results when using the addition operator in JavaScript:
    
    
    | First Value | Second Value | Result | Explanation |
    | --- | --- | --- | --- |
    | NaN | NaN | NaN | If either value is NaN, the result is NaN. |
    | Infinity | Infinity | Infinity | Infinity + Infinity ⇒ Infinity. |
    | -Infinity | -Infinity | -Infinity | -Infinity + (-Infinity) ⇒ -Infinity. |
    | Infinity | -Infinity | NaN | Infinity + (-Infinity) results in NaN (Not a Number). |
    | +0 | +0 | +0 | +0 + (+0) ⇒ +0. |
    | -0 | +0 | +0 | -0 + (+0) ⇒ +0. |
    | -0 | -0 | -0 | -0 + (-0) ⇒ -0. |
    
    **Explanation** :
    
    - When either value is NaN (Not a Number), the result of addition will be NaN.
    - When both values are positive or negative infinity, the result will be the corresponding infinity.
    - Adding positive zero and positive zero results in positive zero.
    - Adding negative zero and positive zero also results in positive zero.
    - Adding negative zero and negative zero results in negative zero.
    
    Note that NaN represents an invalid or undefined value, and positive zero and negative zero are two different representations of zero in JavaScript.
    

### **Subtraction operator `-`**

- The subtraction operator (`-`) subtracts one number from another.
- If a value is a `string`, a `boolean`, `null`, or `undefined`, the JavaScript engine will:
    - First, convert the value to a number using the `Number()` function.
    - Second, perform the subtraction.
    
    **With `strings` :**
    
    If you try to use the subtraction operator with string operands, JavaScript will attempt to convert the strings into numbers before performing the subtraction. If the conversion is successful, it will subtract the numbers; otherwise, it may produce unexpected results.
    
    Here are a few examples to illustrate how JavaScript handles the subtraction operator with string data types:
    
    Example 1:
    
    ```jsx
    let result = "10" - "5";
    console.log(result); // Output: 5
    ```
    
    In this example, both operands ("10" and "5") are strings that can be successfully converted to numbers. JavaScript performs the subtraction operation and produces the correct result of 5.
    
    Example 2 :
    
    ```jsx
    let result = "10" - "abc";
    console.log(result); // Output: NaN
    ```
    
    In this case, the second operand ("abc") cannot be converted into a number, so JavaScript returns `NaN` (Not a Number) as the result. This occurs because the subtraction operation requires both operands to be numbers.
    
    Example 3 :
    
    ```jsx
    let result = "10" - "2" + 3;
    console.log(result); // Output: 11
    ```
    
    Here, the first two operands ("10" and "2") are successfully converted to numbers, and the subtraction operation results in 8. The final addition operation (`8 + 3`) produces the result of 11.
    
    It's important to note that JavaScript performs implicit type coercion when using the subtraction operator with string operands. However, it's generally recommended to explicitly convert strings to numbers using functions like `parseInt()` or `parseFloat()` before performing mathematical operations to ensure predictable results.
    
    **With `boolean` :**
    
    - When boolean values (true/false) are involved, JavaScript treats true as 1 and false as 0 during type coercion.
    - Here are a few examples:
        
        ```jsx
        let result1 = 10 - true;
        console.log(result1); // Output: 9
        
        let result2 = 10 - false;
        console.log(result2); // Output: 10
        ```
        
        In the first example, true is coerced to 1, and the subtraction operation results in 9. In the second example, false is coerced to 0, and the subtraction operation results in 10.
        
    
    **With `Null` , `Undefined` :**
    
    1. **Null** :
        - When null is involved, JavaScript treats it as 0 during the type coercion process.
        - Here's an example:
        
        ```jsx
        let result = 10 - null;
        console.log(result); // Output: 10
        ```
        
        In this case, null is coerced into the number 0, and the subtraction operation results in 10.
        
    2. **Undefined** :
        - When `undefined` is used, JavaScript converts it to `NaN` (Not a Number) during the type coercion process.
        - Here's an example:
        
        ```jsx
        let result = 10 - undefined;
        console.log(result); // Output: NaN
        ```
        
        Since undefined cannot be converted into a number, the subtraction operation results in NaN.
        
    
    It's important to note that while JavaScript performs implicit type coercion, it's generally recommended to use the subtraction operator (`-`) with operands of appropriate types to ensure predictable and maintainable code.
    

### Multiplication operator `*`

1. **Numbers** :
    - When used with numbers, the multiplication operator performs the standard mathematical operation of multiplying two numbers.
    
    ```jsx
    let result = 5 * 3;
    console.log(result); // Output: 15
    ```
    
    In this example, the multiplication operator multiplies the numbers 5 and 3, resulting in 15.
    
2. **Strings** :
    - When used with strings, the multiplication operator performs a type coercion by converting the string to a number and then performs the multiplication.
    
    ```jsx
    let result = "5" * "3";
    console.log(result); // Output: 15
    ```
    
    In this case, both operands ("5" and "3") are strings that can be successfully converted to numbers. JavaScript converts them to numbers and performs the multiplication, resulting in 15.
    
    - Example where the conversion of a string to a number is not possible:
    
    ```jsx
    let result = "abc" * "2";
    console.log(result); // Output: NaN
    ```
    
    In this example, the first operand is the string "abc", which cannot be converted to a number. Similarly, the second operand is the string "2". Since both operands cannot be converted to numbers, the multiplication operation results in NaN (Not a Number). This occurs when JavaScript is unable to perform the necessary string-to-number conversion for the multiplication operation.
    
3. **Boolean** :
    - When used with boolean values, JavaScript treats true as 1 and false as 0 and performs the multiplication operation accordingly.
    
    ```jsx
    let result1 = true * 5;
    console.log(result1); // Output: 5
    
    let result2 = false * 10;
    console.log(result2); // Output: 0
    ```
    
    In the first example, true is treated as 1, so the multiplication of true and 5 results in 5. In the second example, false is treated as 0, so the multiplication of false and 10 results in 0.
    
4. **Null** :
    - When null is involved, JavaScript treats it as 0 during type coercion, and the multiplication operation behaves accordingly.
    
    ```jsx
    let result = null * 5;
    console.log(result); // Output: 0
    ```
    
    In this example, null is coerced into the number 0, so the multiplication of null and 5 results in 0.
    
5. **Undefined** :
    - When undefined is used, JavaScript converts it to NaN (Not a Number) during the type coercion process.
    
    ```jsx
    let result = undefined * 10;
    console.log(result); // Output: NaN
    ```
    
    Since undefined cannot be converted into a number, the multiplication operation results in NaN.
    

It's important to note that while JavaScript performs implicit type coercion, it's generally recommended to use the multiplication operator (`*`) with operands of appropriate types to ensure predictable and maintainable code.

| First Operand | Second Operand | Result | Explanation |
| --- | --- | --- | --- |
| Number | Number | Number | Standard multiplication operation between two numbers |
| String | Number | Number | String is converted to a number, then multiplication |
| Number | String | Number | String is converted to a number, then multiplication |
| String | String | NaN | If either string cannot be converted, result is NaN |
| Boolean | Number | Number | Boolean is treated as 1 or 0, then multiplication |
| Number | Boolean | Number | Boolean is treated as 1 or 0, then multiplication |
| Boolean | String | Number | Boolean is treated as 1 or 0, string is converted to num |
| String | Boolean | Number | String is converted to number, boolean is 1 or 0 |
| Null | Number | Number | Null is treated as 0, then multiplication |
| Number | Null | Number | Null is treated as 0, then multiplication |
| Null | String | Number | Null is treated as 0, string is converted to number |
| String | Null | Number | String is converted to number, null is treated as 0 |
| Undefined | Number | NaN | Undefined cannot be converted to a number |
| Number | Undefined | NaN | Undefined cannot be converted to a number |
| Undefined | String | NaN | Undefined cannot be converted to a number |
| String | Undefined | NaN | Undefined cannot be converted to a number |

### **Divide operator `/`**

1. **Numbers** :
    - When used with numbers, the division operator performs the standard mathematical operation of dividing one number by another.
    
    ```
    let result = 10 / 2;
    console.log(result); // Output: 5
    
    ```
    
    In this example, the division operator divides the number 10 by 2, resulting in 5.
    
2. **Strings** :
    - When used with strings, the division operator performs a type coercion by converting the strings to numbers and then performs the division.
        
        ```jsx
        let result = "10" / "2";
        console.log(result); // Output: 5j
        ```
        
    
    In this case, both operands ("10" and "2") are strings that can be successfully converted to numbers. JavaScript converts them to numbers and performs the division, resulting in 5.
    
    - If string conversion is not possible, JavaScript will not be able to perform the division operation and will result in NaN (Not a Number). Here's an example:
        
        ```jsx
        let result = "abc" / "2";
        console.log(result); // Output: NaN
        ```
        
    
    In this example, the first operand is the string "abc", which cannot be converted to a number. Similarly, the second operand is the string "2". Since both operands cannot be converted to numbers, the division operation results in NaN.
    
    Whenever JavaScript encounters operands that cannot be converted to numbers during division, it will produce NaN as the result. NaN represents the result of an undefined or non-representable value in JavaScript's number system.
    
3. **Boolean** :
    - When used with boolean values, JavaScript treats true as 1 and false as 0 and performs the division operation accordingly.
    
    ```jsx
    let result1 = 10 / true;
    console.log(result1); // Output: 10
    
    let result2 = 10 / false;
    console.log(result2); // Output: Infinity
    ```
    
    In the first example, true is treated as 1, so the division of 10 by true results in 10. In the second example, false is treated as 0, so the division of 10 by false results in positive infinity (Infinity).
    
4. **Null** :
    - When null is involved, JavaScript treats it as 0 during type coercion, and the division operation behaves accordingly.
    
    ```jsx
    let result = 10 / null;
    console.log(result); // Output: Infinity
    ```
    
    In this example, null is coerced into the number 0, so the division of 10 by null results in positive infinity (Infinity).
    
5. **Undefined** :
    - When undefined is used, JavaScript converts it to NaN (Not a Number) during the type coercion process.
    
    ```jsx
    let result = 10 / undefined;
    console.log(result); // Output: NaN
    ```
    
    Since undefined cannot be converted into a number, the division operation results in NaN.
    

It's important to note that while JavaScript performs implicit type coercion, it's generally recommended to use the division operator (`/`) with operands of appropriate types to ensure predictable and maintainable code. Additionally, dividing by zero (`0`) results in positive or negative infinity, and dividing a non-zero number by zero results in either positive or negative Infinity or NaN depending on the context.

The following table shows the divide operators’ behavior when applying to special values:

| First Value | Second Value | Result | Explanation |
| --- | --- | --- | --- |
| NaN |  | NaN | If either value is NaN, the result is NaN |
| A number | 0 | Infinity | 1/0 = Infinity |
| Infinity | Infinity | NaN | Infinity / Infinity = NaN |
| 0 | 0 | NaN | 0/0 = NaN |
| Infinity | A positive number | Infinity | Infinity / 2 = Infinity |
| Infinity | A negative number | -Infinity | Infinity / -2 = -Infinity |

### Arithmetic operator with objects

In JavaScript, arithmetic operators work differently with objects compared to primitive data types like numbers or strings. When an arithmetic operator is used with objects, JavaScript will attempt to convert the objects to primitive values using the internal `valueOf()` and `toString()` methods. Then, the arithmetic operation is performed on the resulting primitive values. Here are examples to illustrate how arithmetic operators work with objects:

1. **Addition Operator** `+` :
    
    ```jsx
    let obj1 = {
      valueOf: function() {
        return 5;
      }
    };
    
    let obj2 = {
      toString: function() {
        return "10";
      }
    };
    
    let result = obj1 + obj2;
    console.log(result); // Output: 15
    
    ```
    
    In this example, `obj1` has a `valueOf()` method that returns the number `5`. `obj2` has a `toString()` method that returns the string `"10"`. When the addition operator is applied to `obj1` and `obj2`, JavaScript first converts them to primitive values (`5` and `"10"`, respectively) and then performs the addition operation, resulting in `15`.
    
2. **Subtraction Operator** `-`:
    
    ```jsx
    let obj1 = {
      valueOf: function() {
        return 10;
      }
    };
    
    let obj2 = {
      toString: function() {
        return "5";
      }
    };
    
    let result = obj1 - obj2;
    console.log(result); // Output: 5
    
    ```
    
    In this example, `obj1` has a `valueOf()` method that returns the number `10`, and `obj2` has a `toString()` method that returns the string `"5"`. JavaScript converts them to primitive values (`10` and `"5"`, respectively) and performs the subtraction operation, resulting in `5`.
    
3. **Multiplication Operator** `*`, **Division Operator** `/`, and other arithmetic operators:
The behavior for the multiplication, division, and other arithmetic operators is similar to the addition and subtraction operators. JavaScript will convert the objects to primitive values and perform the arithmetic operation accordingly.

It's important to note that the specific behavior of how an object is converted to a primitive value depends on the object's implementation of the `valueOf()` and `toString()` methods. By default, the `valueOf()` method is preferred for numeric conversions, while the `toString()` method is preferred for string conversions.

If the object doesn’t have the `valueOf()` method but has the `toString()` method, the JavaScript engine will call the `toString()` method to get the value for calculation. For example:

```jsx
let energy = {
  toString() {
    return 50;
  },
};

let currentEnergy = energy - 10;
console.log(currentEnergy);

currentEnergy = energy + 100;
console.log(currentEnergy);

currentEnergy = energy / 2;
console.log(currentEnergy);

currentEnergy = energy * 1.5;
console.log(currentEnergy);
```

Output:

```jsx
40
150
25
75
```

Keep in mind that arithmetic operations with objects can be less common and may have varying behavior based on the specific object implementation. It's generally recommended to use arithmetic operators with primitive values rather than objects to ensure predictable and consistent results.

## Remainder operator

JavaScript uses the `%` to represent the remainder operator. The remainder operator returns the remainder left over when one value is divided by another value.

Here’s the syntax of the remainder operator:

```jsx
dividend % divisor
```

The following shows the equation for the remainder:

```jsx
dividend = divisor * quotient + remainder
where |remainder| < |divisor|
```

In this equation, the `dividend`, `divisor`, `quotient`, and `remainder` are all integers. The sign of the `remainder` is the same as the sign of the `dividend`.

The sign of the `remainder` is the same as the sign of the `dividend`.

## JavaScript remainder operator examples

Let’s take some examples of using the JavaScript remainder operator.

### 1) Using the remainder operator with `positive dividend` example

The following example shows how to use the remainder operator with a positive dividend:

```jsx
let remainder = 5 % -2;
console.log(remainder);// 1

remainder = 5 % 2;
console.log(remainder);// 1
```

### 2) Using the remainder operator with `negative dividend` example

The following example uses the remainder operator with a negative dividend:

```jsx
let remainder = -5 % 3;
console.log(remainder);// -2

remainder = -5 % -3;
console.log(remainder);// -2
```

### 3) Using the remainder operator `special values`

If a dividend is an `Infinity` and a divisor is a finite number, the remainder is `NaN`. For example:

```jsx
let remainder = Infinity % 2;
console.log(remainder);// NaN
```

If a dividend is a finite number and a divisor is zero, the remainder is `NaN`:

```jsx
let remainder = 10 % 0;
console.log(remainder);// NaN
Code language: JavaScript (javascript)
```

If both dividend and divisor are `Infinity`, the remainder is `NaN`:

```jsx
let remainder = Infinity % Infinity;
console.log(remainder);// NaN
Code language: JavaScript (javascript)
```

If a dividend is a finite number and the divisor is an `Infinity`, the remainder is the dividend. For example:

```jsx
let remainder = 10 % Infinity;
console.log(remainder);// 10
Code language: JavaScript (javascript)
```

If the dividend is zero and the divisor is non-zero, the remainder is zero:

```jsx
let remainder = 0 % 10;
console.log(remainder);// 0
Code language: JavaScript (javascript)
```

If either dividend or divisor is not a number, it’s converted to a number using the `Number()` function and applied the above rules. For example:

```jsx
let remainder = '10' % 3;
console.log(remainder);// 1
Code language: JavaScript (javascript)
```

## Using the remainder operator to check if a number is an odd number

To check if a number is an odd number, you use the remainder operator (`%`) like the following example:

```jsx
let num = 13;
let isOdd = num % 2;
Code language: JavaScript (javascript)
```

In this example, if the `num` is an odd number, the remainder is one. But if the `num` is an even number, the remainder is zero.

## Remainder vs Modulo operator

In JavaScript, the remainder operator (%) is not the modulo operator.

If you have been working with Python, you may find the `%` represents the modulo operator in this language. However, it is not the case in JavaScript.

To get a modulo in JavaScript, you use the following expression:

```jsx
((dividend % divisor) + divisor) % divisor
```

Or wrap it in a function:

```jsx
const mod = (dividend, divisor) => ((dividend % divisor) + divisor) % divisor;
Code language: JavaScript (javascript)
```

If the division and divisor have the same sign, the remainder and modulo operators return the same result. Otherwise, they return different results.

For example:

```jsx
const mod = (dividend, divisor) => ((dividend % divisor) + divisor) % divisor;

// dividen and divisor have the same sign
console.log('remainder:', 5 % 3);// 2
console.log('modulo:', mod(5, 3));// 2
// dividen and divisor have the different signs
console.log('remainder:', -5 % 3);// -2
console.log('modulo:', mod(-5, 3));// 1
```

Output:

```jsx
remainder: 2
modulo: 2
remainder: -2
modulo: 1
```

## Assignment operator

An assignment operator (`=`) assigns a value to a variable. The syntax of the assignment operator is as follows:

```jsx
let a = b;
```

In this syntax, JavaScript evaluates the expression `b` first and assigns the result to the variable `a`.

The following example declares the `counter` variable and initializes its value to zero:

```jsx
let counter = 0;
```

The following example increases the `counter` variable by one and assigns the result to the `counter` variable:

```jsx
let counter = 0;
counter = counter + 1;
```

When evaluating the second statement, JavaScript evaluates the expression on the right hand first (`counter + 1`) and assigns the result to the `counter` variable. After the second assignment, the `counter` variable is `1`.

To make the code more concise, you can use the `+=` operator like this:

```jsx
let counter = 0;
counter += 1;
```

In this syntax, you don’t have to repeat the `counter` variable twice in the assignment.

The following table illustrates assignment operators that are shorthand for another operator and the assignment:

| Operator | Meaning | Description |
| --- | --- | --- |
| a = b | a = b | Assigns the value of b to a. |
| a += b | a = a + b | Assigns the result of a plus b to a. |
| a -= b | a = a - b | Assigns the result of a minus b to a. |
| a *= b | a = a * b | Assigns the result of a times b to a. |
| a /= b | a = a / b | Assigns the result of a divided by b to a. |
| a %= b | a = a % b | Assigns the result of a modulo b to a. |
| a &=b | a = a & b | Assigns the result of a AND b to a. |
| a |=b | a = a | b | Assigns the result of a OR b to a. |
| a ^=b | a = a ^ b | Assigns the result of a XOR b to a. |
| a <<= b | a = a << b | Assigns the result of a shifted left by b to a. |
| a >>= b | a = a >> b | Assigns the result of a shifted right (sign preserved) by b to a. |
| a >>>= b | a = a >>> b | Assigns the result of a shifted right by b to a. |

## Chaining JavaScript assignment operators

If you want to assign a single value to multiple variables, you can chain the assignment operators. For example:

```jsx
let a = 10, b = 20, c = 30;
a = b = c;// all variables are 30
```

In this example, JavaScript evaluates from right to left. Therefore, it does the following:

```jsx
let a = 10, b = 20, c = 30;

b = c;// b is 30
a = b;// a is also 30
```

## Summary

- Use the assignment operator (`=`) to assign a value to a variable.
- Chain the assignment operators if you want to assign a single value to multiple variables.

## Unary operator

Unary operators work on one value. The following table shows the unary operators and their meanings :

| Unary Operators | Name | Meaning |
| --- | --- | --- |
| +x | Unary Plus | Convert a value into a number |
| -x | Unary Minus | Convert a value into a number and negate it |
| ++x | Increment Operator (Prefix) | Add one to the value |
| --x | Decrement Operator (Prefix) | Subtract one from the value |
| x++ | Increment Operator (Postfix) | Add one to the value |
| x-- | Decrement Operator (Postfix) | Subtract one from the value |

## Unary plus `+`

The unary plus operator is a simple plus sign (`+`). If you place the unary plus before a numeric value, it does nothing. For example

```jsx
let x = 10;
let y = +x;

console.log(y);// 10
```

When you apply the unary plus operator to a non-numeric value, it performs a number conversion using the `Number()` function wit the rules in the following table:

| Value | Result |
| --- | --- |
| boolean | false to 0, true to 1 |
| string | Convert the string value based on a set of specific rules |
| object | Call the valueOf() and/or toString() method to get the value to convert into a number |

For example, the following uses the unary plus operator to convert the string `'10'` to the number `10`:

```jsx
let s = '10';
console.log(+s);// 10
```

The following example uses the unary plus operator (`+`) converts a boolean value into a number, `false` to `0` and `true` to `1`.

```jsx
let f = false,
    t = true;

console.log(+f); // 0
console.log(+t); // 1
```

Output:

```jsx
0
1
```

Suppose you have a `product` object with the `toString()` method as follows:

```jsx
let person = {
  name: 'John',
  toString: function () {
    return '25';
  },
};

console.log(+person);
```

Output:

```jsx
25
```

In this example, we apply the unary plus operator (`+`) on the `person` object that has the `toString()` method, JavaScript engine calls `toString()` method to get the value (`'25'`) and convert it into a number. The following adds the `valueOf()` method to the `person` object:

```jsx
let person = {
  name: 'John',
  toString: function () {
    return '25';
  },
  valueOf: function () {
    return '30';
  },
};

console.log(+person);
```

Output:

```jsx
30
```

In this example, the `person` object has the `valueOf()` method, the JavaScript engine calls it instead of the `toString()` method to get the value to convert.

## Unary minus `-`

The unary minus operator is a single minus sign (`-`). If you apply the unary minus operator to a number, it negates the number. For example:

```jsx
let x = 10;
let y = -x;

console.log(y);// -10
```

If you apply the unary minus operator to a non-numeric value, it converts the value into a number using the same rules as the unary plus operator and then negates the value.

## Increment / Decrement operators

The increment operator has two plus signs (`++`) while the decrement operator has two minus signs (`--`).

- Both increment and decrement operators have two versions :

 `prefix` and `postfix`. 

- And you place the prefix and postfix versions of the increment or decrement operators before and after the variable to which they apply.

The following example uses the prefix increment operator to add one to a variable:

```jsx
let age = 25;
++age;

console.log(age);// 26
```

It’s equivalent to the following:

```jsx
let age = 25;
age = age + 1;
console.log(age);// 26
```

The following example uses the prefix decrement operator to subtract one from a variable:

```jsx
let weight = 90;
--weight;

console.log(weight);// 89
```

It is equivalent to the following:

```jsx
let weight = 90;
weight = weight - 1;

console.log(weight);// 89
```

`IMP NOTE`:  When you apply the prefix increment or decrement, JavaScript changes the variable before evaluating the statement. For example:

```jsx
let weight = 90;
weight = ++weight + 5;

console.log(weight);// 96
```

In this example:

- First, increase the weight on the right-hand side so ++weight is 91
- Second, add five to the ++weight that returns 96
- Third, assign the result to the weight on the left-hand side.

Likewise, the following example uses a prefix decrement operator:

```jsx
let weight = 90;
weight = --weight + 5;j

console.log(weight);// 94
```

In this example:

- First, subtract one from the weight, –weight returns 89
- Second, add five to the –weight that returns 94
- Third, assign the result to the weight on the left-hand side.

`IMP NOTE` : The postfix increment or decrement operator changes the value after the statement is evaluated. For example:

```jsx
let weight = 90;
let newWeight = weight++ + 5;

console.log(newWeight);// 95
console.log(weight);// 91
```

How it works.

- First, add five to `weight` (90) and assign the result to the `newWeight` (95)
- Second, add one to the `weight` variable after the second statement completes, the weight becomes 91.
- Third, output both `newWeight` and `weight` to the console.

When applying the increment/decrement operator to a non-numeric value, it performs the following steps :

- First, convert the value into a number using the same rules as the unary plus (+) operator.
- Then, add one to or subtract one from the value.

## Summary

- Unary operators work on one value.
- Unary plus (`+`) or minus (``) converts a non-numeric value into a number. The unary minus negates the value after the conversion.
- The prefix increment operator adds one to a value. The value is changed before the statement is evaluated.
- The postfix increment operator adds one to a value. The value is changed after the statement is evaluated.
- The prefix decrement operator subtracts one from a value. The value is changed before the statement is evaluated.
- The postfix decrement operator subtracts one from a value. The value is changed after the statement is evaluated.

## Comparison operators

To compare two values, you use a comparison operator. The following table shows the comparison operators in JavaScript:

| Operator | Meaning |
| --- | --- |
| < | less than |
| > | greater than |
| <= | less than or equal to |
| >= | greater than or equal to |
| == | equal to |
| != | not equal to |

A comparison operator returns a `Boolean` value indicating that the comparison is true or not. See the following example:

```jsx
let r1 = 20 > 10;// true
let r2 = 20 < 10;// false
let r3 = 10 == 10;// true
```

- A comparison operator takes two values.
- If the types of the values are not comparable, the comparison operator converts them into values of comparable types according to specific rules.

### Compare numbers

If values are numbers, the comparison operators perform a numeric comparison. For example:

```jsx
let a = 10,
    b = 20;

console.log(a >= b);// false
console.log(a == 10);// true
```

This example is straightforward. The variable `a` is `10`, `b` is `20`. The expression `a >= b` expression returns `false` and the expression `a == 10` expression returns `true`.

### **Compare strings**

If the operands are strings, JavaScript compares the character codes numerically one by one in the string.

```jsx
let name1 = 'alice',
    name2 = 'bob';

let result = name1 < name2;
console.log(result);// true
console.log(name1 == 'alice');// true
```

Because JavaScript compares the character codes in the strings numerically, you may receive an unexpected result, for example:

```jsx
let f1 = 'apple',
    f2 = 'Banana';
let result = f2 < f1;
console.log(result);// true
```

In this example, `f2` is less than `f1` because the letter `B` has the character code `66` while the letter `a` has the character code `97`.

To fix this, you need to:

- First, convert the strings into a common format, either lowercase or uppercase
- Second, compare the converted values

For example:

```jsx
let f1 = 'apple',
    f2 = 'Banana';

let result = f2.toLowerCase() < f1.toLowerCase();
console.log(result);// false
```

Note that the `toLowerCase()` is a method of the String object that converts the string to lowercase.

### Compare a number with a value of another type

If a value is a number and the other is not, the comparison operator will convert the non-numeric value into a number and compare them numerically. For example:

```jsx
console.log(10 < '20');// true
```

In this example, the comparison operator converts the string `'20'` into the number `20` and compares with the number 10. Here is an example:

```jsx
console.log(10 == '10');// true
```

In this example, the comparison operator converts the string `'10'` into the number `10` and compares them numerically.

### **Compare an object with a non-object**

If a value is an object, the `valueOf()` method of that object is called to return the value for comparison. If the object doesn’t have the `valueOf()` method, the `toString()` method is called instead. For example:

```jsx
let apple = {
  valueOf: function () {
    return 10;
  },
};

let orange = {
  toString: function () {
    return '20';
  },
};
console.log(apple > 10);// false
console.log(orange == 20);// true
```

In this first comparison, the `apple` object has the `valueOf()` method that returns `10`. Therefore, the comparison operator uses the number 10 for comparison.

In the second comparison, JavaScript first calls the `valueOf()` method. However, the `orange` object doesn’t have the `valueOf()` method. So JavaScript calls the `toString()` method to get the returned value of `20` for comparison.

### Compare a Boolean with another value

If a value is a Boolean value, JavaScript converts it to a number and compares the converted value with the other value; `true` is converted to `1` and `false` is converted to `0`. For example:

```jsx
console.log(true > 0);// true
console.log(false < 1);// true
console.log(true > false);// true
console.log(false > true);// false
console.log(true >= true);// true
console.log(true <= true);// true
console.log(false <= false);// true
console.log(false >= false);// true
```

In addition to the above rules, the equal (`==`) and not-equal(`!=`) operators also have the following rules.

### Compare `null` **and** `undefined`

In JavaScript, `null` equals `undefined`. It means that the following expression returns `true`.

```jsx
console.log(null == undefined);// true
```

### **Compare** `NaN` with other values

If either value is `NaN`, then the equal operator(`==`) returns `false`.

```jsx
console.log(NaN == 1);// false
```

Even

```jsx
console.log(NaN == NaN);// false
```

The not-equal (`!=`) operator returns `true` when comparing the `NaN` with another value:

```jsx
console.log(NaN != 1);// true
```

And also

```jsx
console.log(NaN != NaN);// true
```

## Strict equal (`===`) and not strict equal (`!==`)

Besides the comparison operators above, JavaScript provides the strict equal ( `===`) and not strict equal  ( `!==`) operators.

| Operator | Meaning |
| --- | --- |
| === | strict equal |
| !== | not strict equal |

The strict equal and not strict equal operators behave like the equal and not equal operators except that they don’t convert the operand before comparison. See the following example:

```jsx
console.log("10" == 10);// true
console.log("10" === 10);// false
```

In the first comparison, since we use the equality operator, JavaScript converts the string into the number and performs the comparison.

However, in the second comparison, we use the strict equal operator ( `===`), JavaScript doesn’t convert the string before comparison, therefore the result is `false`.

In this tutorial, you have learned how to use the JavaScript comparison operators to compare values.

## Logical operators

The logical operators are important in JavaScript because they allow you to compare [variables](https://www.javascripttutorial.net/javascript-variables/) and do something based on the result of that comparison.

For example, if the result of the comparison is `true`, you can run a block of code; if it’s `false`, you can execute another code block.

JavaScript provides three logical operators:

- `!` (Logical NOT)
- `||` (Logical OR)
- `&&` (Logical AND)

## 1) The Logical NOT operator `!`

JavaScript uses an exclamation point `!` to represent the logical NOT operator. The `!` operator can be applied to a single value of any type, not just a Boolean value.

When you apply the `!` operator to a boolean value, the `!` returns `true` if the value is `false` and vice versa. For example:

```jsx
let eligible = false,
    required = true;

console.log(!eligible);
console.log(!required);
```

Output:

```jsx
true
false
```

In this example, the `eligible` is `true` so `!eligible` returns `false`. And since the `required` is `true`, the `!required` returns `false`.

When you apply the `!` operator to a non-Boolean value. The `!` operator first converts the value to a [boolean](https://www.javascripttutorial.net/javascript-data-types/#boolean) value and then negates it.

The following example shows how to use the `!` operator:

```jsx
!a
```

The logical `!` operator works based on the following rules:

- If `a` is `[undefined](https://www.javascripttutorial.net/javascript-undefined/)`, the result is `true`.
- If `a` is `[null](https://www.javascripttutorial.net/object/javascript-null/)`, the result is `true`.
- If `a` is a number other than `0`, the result is `false`.
- If `a` is `[NaN](https://www.javascripttutorial.net/javascript-nan/)`, the result is `true`.
- If a is an object, the result is false.
- If a is an empty string, the result is true. In the case `a` is a non-empty string, the result is `false`

The following demonstrates the results of the logical `!` operator when applying to a non-boolean value:

```jsx
console.log(!undefined);// true
console.log(!null);// true
console.log(!20);//false
console.log(!0);//true
console.log(!NaN);//true
console.log(!{});// false
console.log(!'');//true
console.log(!'OK');//false
console.log(!false);//true
console.log(!true);//false
```

### Double-negation (`!!`)

Sometimes, you may see the double negation (`!!`) in the code. The `!!` uses the logical NOT operator (`!`) twice to convert a value to its real boolean value.

The result is the same as using the `Boolean()` function. For example:

```jsx
let counter = 10;
console.log(!!counter);// true
```

The first `!` operator negates the Boolean value of the `counter` variable. If the `counter` is `true`, then the `!` operator makes it false and vice versa.

The second `!` operator negates that result of the first `!` operator and returns the real boolean value of the `counter` variable.

## 2) The Logical AND operator (`&&`)

JavaScript uses the double ampersand (`&&`) to represent the logical AND operator. The following expression uses the `&&` operator:

```jsx
let result = a && b;
```

If `a` can be converted to `true`, the `&&` operator returns the `b`; otherwise, it returns the `a`. In fact, this rule is applied to all boolean values.

The following truth table illustrates the result of the `&&` operator when it is applied to two Boolean values:

| a | b | a && b |
| --- | --- | --- |
| true | true | true |
| true | false | false |
| false | true | false |
| false | false | false |

The result of the `&&` operator is true only if both values are `true`, otherwise, it is `false`. For example:

```jsx
let eligible = false,
    required = true;

console.log(eligible && required);// false
```

In this example, the `eligible` is `false`, therefore, the value of the expression `eligible && required` is `false`.

See the following example:

```jsx
let eligible = true,
    required = true;

console.log(eligible && required);// true
```

In this example, both `eligible` and `required` are `true`, therefore, the value of the expression `eligible && required` is `true`.

### Short-circuit evaluation

The `&&` operator is short-circuited. It means that the `&&` operator evaluates the second value only if the first one doesn’t suffice to determine the value of an expression. For example:

```jsx
let b = true;
let result = b && (1 / 0);
console.log(result);
```

Output:

```jsx
Infinity
```

In this example, `b` is `true` therefore the `&&` operator could not determine the result without further evaluating the second expression (`1/0`).

The result is `Infinity` which is the result of the expression (`1/0`). However:

```jsx
let b = false;
let result = b && (1 / 0);
console.log(result);
```

Output:

```jsx
false
```

In this case, `b` is `false`, the `&&` operator doesn’t need to evaluate the second expression because it can determine the final result as `false` based value of the first value.

### The chain of `&&` operators

The following expression uses multiple `&&` operators:

```jsx
let result = value1 && value2 && value3;
```

The `&&` operator carries the following:

- Evaluates values from left to right.
- For each value, converts it to a boolean. If the result is `false`, stops and returns the original value.
- If all values are truthy values, returns the last value.

In other words, The `&&` operator returns the first falsy value or the last value if none were found.

If a value can be converted to `true`, it is so-called a truthy value. If a value can be converted to `false`, it is a so-called falsy value.

## 3) The Logical OR operator (`||`)

JavaScript uses the double pipe `||` to represent the logical OR operator. You can apply the `||` operator to two values of any type:

```jsx
let result = a || b;
```

If `a` can be converted to `true`, returns `a`; else, returns `b`. This rule is also applied to boolean values.

The following truth table illustrates the result of the `||` operator based on the value of the operands:

| a | b | a || b |
| --- | --- | --- |
| true | true | true |
| true | false | true |
| false | true | true |
| false | false | false |

The `||` operator returns `false` if both values evaluate to `false`. In case either value is `true`, the `||` operator returns `true`. For example:

```jsx
let eligible = true,
    required = false;

console.log(eligible || required);// true

```

See another example:

```jsx
let eligible = false,
    required = false;

console.log(eligible || required);// false
```

In this example, the expression `eligible || required` returns `false` because both values are `false`.

### The `||` operator is also short-circuited

Similar to the `&&` operator, the `||` operator is short-circuited. It means that if the first value evaluates to `true`, the `&&` operator doesn’t evaluate the second one.

### The chain of `||` operators

The following example shows how to use multiple || operators in an expression:

```jsx
let result = value1 || value2 || value3;
```

The `||` operator does the following:

- Evaluates values from left to right.
- For each value, converts it to a boolean value. If the result of the conversion is `true`, stops and returns the value.
- If all values have been evaluated to `false`, returns the last value.

In other words, the chain of the `||` operators returns the first truthy value or the last one if no truthy value was found.

## Logical operator precedence

When you mix logical operators in an expression, the JavaScript engine evaluates the operators based on a specified order. And this order is called the *operator precedence*.

In other words, the operator precedence is the order of evaluation of logical operators in an expression.

The precedence of the logical operator is in the following order from the highest to the lowest:

1. Logical NOT (!)
2. Logical AND (&&)
3. Logical OR (||)

## Summary

- The NOT operator (`!`) negates a boolean value. The (`!!`) converts a value into its real boolean value.
- The AND operator (`&&`) is applied to two Boolean values and returns true if both values are true.
- The OR operator (`||`) is applied to two Boolean values and returns `true` if one of the operands is `true`.
- Both `&&` and `||` operator are short-circuited. They can be also applied to non-Boolean values.
- The logical operator precedence from the highest to the lowest is `!`, `&&` and `||`.

## Logical assignment operators

ES2021 introduces three logical assignment operators including:

- Logical OR assignment operator (`||=`)
- Logical AND assignment operator (`&&=`)
- Nullish coalescing assignment operator (`??=`)

The following table shows the equivalent of the logical assignments operator:

| Logical Assignment Operators | Logical Operators |
| --- | --- |
| x ||= y | x || (x = y) |
| x &&= y | x && (x = y) |
| x ??= y | x ?? (x = y); |

## The Logical `OR` assignment operator

The logical OR assignment operator (`||=`) accepts two operands and assigns the right operand to the left operand if the left operand is falsy:

```jsx
x ||= y
```

In this syntax, the `||=` operator only assigns `y` to `x` if `x` is falsy. For example:

```jsx
let title;
title ||= 'untitled';

console.log(title);
```

Output:

```jsx
untitled
```

In this example, the `title` variable is `undefined`, therefore, it’s falsy. Since the `title` is falsy, the operator `||=` assigns the `'untitled'` to the `title`. The output shows the `untitled` as expected.

See another example:

```jsx
let title = 'JavaScript Awesome';
title ||= 'untitled';

console.log(title);
```

Output:

```jsx
'JavaScript Awesome'
```

In this example, the `title` is `'JavaScript Awesome'` so it is truthy. Therefore, the logical OR assignment operator (`||=`) doesn’t assign the string `'untitled'` to the `title` variable.

The logical OR assignment operator:

```jsx
x ||= y
```

is equivalent to the following statement that uses the [logical OR operator](https://www.javascripttutorial.net/javascript-logical-operators/):

```jsx
x || (x = y)
```

Like the logical OR operator, the logical OR assignment also short-circuits. It means that the logical OR assignment operator only performs an assignment when the `x` is falsy.

The following example uses the logical assignment operator to display a default message if the search result element is empty:

```jsx
document.querySelector('.search-result').textContent ||= 'Sorry! No result found';
```

## The Logical `AND` assignment operator

The logical AND assignment operator only assigns `y` to `x` if `x` is truthy:

```jsx
x &&= y;
```

The logical AND assignment operator also short-circuits. It means that

```jsx
x &&= y;
```

is equivalent to:

```jsx
x && (x = y);
```

The following example uses the logical AND assignment operator to change the last name of a `person` object if the last name is truthy:

```jsx
let person = {
    firstName: 'Jane',
    lastName: 'Doe',
};

person.lastName &&= 'Smith';

console.log(person);
```

Output:

```jsx
{firstName: 'Jane', lastName: 'Smith'}
```

## The nullish coalescing assignment operator

The nullish coalescing assignment operator only assigns `y` to `x` if `x` is `null` or `undefined`:

```jsx
x ??= y;
```

It’s equivalent to the following statement that uses the [nullish coalescing operator](http://javascript%20nullish%20coalescing%20operahttps//www.javascripttutorial.net/es-next/javascript-nullish-coalescing-operator/tor):

```jsx
x ?? (x = y);
```

The following example uses the nullish coalescing assignment operator to add a missing property to an object:

```jsx
let user = {
    username: 'Satoshi'
};
user.nickname ??= 'anonymous';

console.log(user);
```

Output:

```jsx
{username: 'Satoshi', nickname:'anonymous'}
```

In this example, the `user.nickname` is `undefined`, therefore, it’s nullish. The nullish coalescing assignment operator assigns the string `'anonymous'` to the `user.nickname` property.

The following table illustrates how the logical assignment operators work:

## Summary

- The logical OR assignment (`x ||= y`) operator only assigns `y` to `x` if `x` is falsy.
- The logical AND assignment (`x &&= y`) operator only assigns `y` to `x` if `x` is truthy.
- The nullish coalescing assignment (`x ??= y`) operator only assigns `y` to `x` if `x` is nullish.

## Nullish coalescing operator

ES2020 introduced the nullish coalescing operator denoted by the double question marks (`??`). The nullish coalescing operator is a [logical operator](https://www.javascripttutorial.net/javascript-logical-operators/) that accepts two values:

```jsx
value1 ?? value2
```

The nullish coalescing operator returns the second value (`value2`) if the first value (`value2`) is `null` or `undefined`. Technically, the nullish coalescing operator is equivalent to the following block:

```jsx
const result = value1;
if(result === null || result === undefined) {
   result = value2;
}
```

A nullish value is a value that is either `null` or `undefined`.

The following example uses the nullish coalescing operator (`??`) to return the string `'John'` because the first value is `null`:

```jsx
const name = null ?? 'John';
console.log(name);// 'John'
```

And this example returns `28` because the first value is `undefined`:

```jsx
const age = undefined ?? 28;
console.log(age);
```

## Why nullish coalescing operator ?

When assigning a default value to a variable, you often use the logical OR operator (`||`). For example:

```jsx
let count;
let result = count || 1 ;
console.log(result);// 1
```

In this example, the `count` variable is `undefined`, it is coerced to `false`. Therefore, the `result` is `1`.

However, the logical `OR` operator (`||`) sometimes is confusing if you consider `0` or empty strings `''` as a valid value like this:

```jsx
let count = 0;
let result = count || 1;
```

The result is 1, not 0, which you may not expect.

The nullish coalescing operator helps you to avoid this pitfall. It only returns the second value when the first one is either `null` or `undefined`.

## The nullish coalescing operator is short-circuited

Similar to the logical OR and AND operators, the nullish coalescing operator does not evaluate the second value if the first operand is neither `undefined` nor `null`.

For example:

```jsx
let result = 1 ?? console.log('Hi');
```

In this example, the operator `??` does not evaluate the second expression that displays the “Hi” to the console because the first value is `1`, which is not `null` or `undefined`.

The following example evaluates the second expression because the first one is `undefined`:

```jsx
let result = undefined ?? console.log('Hi');j
```

Output:

```jsx
'Hi'
```

## Chaining with the AND or OR operator

A `SyntaxError` will occur if you combine the logical AND or OR operator directly with the nullish coalescing operator like this:

```jsx
const result = null || undefined ?? 'OK';// SyntaxError

```

However, you can avoid this error by wrapping the expression on the left of the `??` operator in parentheses to explicitly specify the operator precedences:

```jsx
const result = (null || undefined) ?? 'OK';
console.log(result);// 'OK'
```

## Summary

- The nullish coalescing operator (`??`) is a logical operator that accepts two values and returns the second value if the first one is `null` or `undefined`.
- The nullish coalescing operator is short-circuited and cannot directly combine with the logical AND or OR operator.

## Exponentiation operator

To raise a number to the power of an exponent, you often use the static method `Math.pow()` with the following syntax:

```jsx
Math.pow(base, exponent)
```

For example:

```jsx
let result = Math.pow(2,2);
console.log(result);// 4

result = Math.pow(2,3);
console.log(result);// 8

```

ECMAScript 2016 provided an alternative way to get a base to the exponent power by using the exponentiation operator ( `**`) with the following syntax:

```jsx
x**n
```

The operator `**` raises the `x` to the power of an exponent `n`.

Note that some languages use the caret symbol `^` for exponentiation. However, JavaScript already uses that symbol for the bitwise logical XOR operator.

The following example illustrates how to use the exponentiation operator (`**`):

```jsx
let result = 2 ** 2;
console.log(result);// 4

result = 2 ** 3;
console.log(result);// 8
```

The `Math.pow()` accepts a value and converts it to a value of the number type for calculation. Similarly, the operator `**` accept values of the `number` type. In addition, the operator `**` accepts a value of the `[bigint](https://www.javascripttutorial.net/es-next/javascript-bigint/)` type. For example:

```jsx
let result = 2n ** 3n;
console.log(result); j// 8n
```

Also, you can use the exponentiation operator  ( `**`) in the infix notation. For example:

```jsx
let x = 2;
x **= 4;
console.log(x);// 16
```

JavaScript does not allow you to put a unary operator immediately before the base number. If you attempt to do so, you’ll get a `SyntaxError`.

The following example causes a syntax error:

```jsx
let result = -2**3;j
```

Error:

```jsx
Uncaught SyntaxError: Unary operator used immediately before exponentiation expression. Parenthesis must be used to disambiguate operator precedenceja
```

To fix this, you use parentheses like this:

```jsx
let result = (-2)**3;
console.log(result);// -8
```

## Summary

- The exponentiation operator `*` raises a number to the power of an exponent.
- The exponentiation operator `*` accepts values of the type `number` or `bigint`

---

# Flow control Statemenets in JS

## `if` in JS

The `if` statement executes block if a condition is `true`. The following shows the syntax of the `if` statement:

```jsx
if( condition )
   statement;Code language: JavaScript (javascript)
```

The `condition` can be a value or an expression. Typically, the condition evaluates to a `Boolean()` value, which is `true` or `false`.

If the `condition` evaluates to `true`, the `if` statement executes the `statement`. Otherwise, the `if` statement passes the control to the next statement after it.

The following flowchart illustrates how the `if` statement works:

![https://www.javascripttutorial.net/wp-content/uploads/2022/01/javascript-if.svg](https://www.javascripttutorial.net/wp-content/uploads/2022/01/javascript-if.svg)

If the `condition` evaluates to a non-Boolean value, JavaScript implicitly converts its result to a Boolean value by calling the `[Boolean()](https://www.javascripttutorial.net/javascript-boolean/)` function.

If you have more than one statement to execute, you need to use wrap them in a block using a pair of curly braces as follows:

```jsx
if (condition) {
// statements to execute
}
```

However, it’s a good practice to always use curly braces with the `if` statement. By doing this, you make your code easier to maintain and avoid possible mistakes.

## JavaScript if statement examples

The following example uses the `if` statement to check if the age is equal to or greater than `18`:

```jsx
let age = 18;
if (age >= 18) {
  console.log('You can sign up');
}
```

Output:

```jsx
You can sign up
```

How it works.

First, declare and initialize the [variable](https://www.javascripttutorial.net/javascript-variables/) `age` to `18`:

```jsx
let age = 18;
```

Second, check if the age is greater or equal to `18` using the `if` statement. Because the expression `age >= 18` is `true`, the code inside the `if` statement executes that outputs a message to the console:

```jsx
if (age >= 18) {
  console.log('You can sign up');
}
```

The following example also uses the `if` statement. However, the `age` is `16` which causes the condition to evaluate to `false`. Therefore, you won’t see any message in the output:

```jsx
let age = 16;
if (age >= 18) {
  console.log('You can sign up');
}
```

## Nested if statement

It’s possible to use an `if` statement inside another `if` statement. For example:

```jsx
alet age = 16;
let state = 'CA';

if (state == 'CA') {
  if (age >= 16) {
    console.log('You can drive.');
  }
}
```

Output:

```jsx
You can drive.
```

How it works.

First, declare and initialize the `age` and `state` variables:

```jsx
let age = 16;
let state = 'CA';
```

Second, check if the `state` is `'CA'` using an `if` statement. If yes, check if the `age` is greater than `16` using a nested `if` statement and output a message to the console:

```jsx
aif (state == 'CA') {
  if (age == 16) {
    console.log('You can drive.');
  }
}j
```

In practice, you should avoid using nested `if` statements as much as possible. For example, you can use the `&&` operator to combine the conditions and use an `if` statements as follows:

```jsx
let age = 16;
let state = 'CA';

if (state == 'CA' && age == 16) {
  console.log('You can drive.');
}
```

## Summary

- Use the JavaScript `if` statement to execute a statement if a condition is `true`.
- Avoid using nested `if` statement as much as possible.

## `if..else` in JS

The `[if](https://www.javascripttutorial.net/javascript-if/)` statement executes a block if a condition is `true`. When the condition is `false`, it does nothing. But if you want to execute a statement if the condition is `false`, you can use an `if...else` statement.

The following shows the syntax of the `if...else` statement:

```jsx
if( condition ) {
// ...
} else {
// ...
}
```

In this syntax, the `condition` is a value or an expression that evaluates to `true` or `false`. If the condition is `true`, the `if...else` statement executes the block that follows the `if` branch.

If the condition is `false`, the `if...else` statement executes the block that follows the `else` branch.

Typically, the `condition` evaluates to a boolean value, which is `true` or `false`. However, if it evaluates to a non-boolean value, the `if...else` statement will convert it to the boolean value.

The following flowchart illustrates how the `if...else` statement works:

![https://www.javascripttutorial.net/wp-content/uploads/2022/01/javascript-if-else.svg](https://www.javascripttutorial.net/wp-content/uploads/2022/01/javascript-if-else.svg)

## JavaScript if…else statement examples

The following example uses the `if...else` statement to check if the age is greater than or equal to 18:

```jsx
let age = 18;

if (age >= 18) {
  console.log('You can sign up.');
} else {
  console.log('You must be at least 18 to sign up.');
}
```

In this example, the `age` is `18`. Therefore, the expression `age >= 18` is `true`. Hence, you’ll see the following message in the console:

```jsx
You can sign up.
```

The following example is the same as above except that the `age` is `18` instead of `16`:

```jsx
let age = 16;

if (age >= 18) {
  console.log('You can sign up.');
} else {
  console.log('You must be at least 18 to sign up.');
}
```

Output:

```jsx
You must be at least 18 to sign up.
```

In this example, the `age` is `16`. Therefore, the expression `age >= 18` evaluates to `false`. Hence, the statement in the `else` branch executes that output the message to the console.

The following example uses a logical operator AND (&&) as the condition in the if block:

```jsx
alet age = 16;
let country = 'USA';

if (age >= 16 && country === 'USA') {
  console.log('You can get a driving license.');
} else {
  console.log('You are not eligible to get a driving license.');
}
```

Because the age is 16 and the country is the USA, the following expression returns `true`.

```jsx
age >= 16 && country === 'USA'
```

And you see the following output:

```jsx
You can get a driving license.
```

## Summary

- Use the JavaScript `if...else` statement to execute a block if a condition is `true` and another block otherwise.

## `if..else..if`  in JS

The `if` an if…else statements accept a single condition and execute the `if` or `else` block accordingly based on the condition.

To check multiple conditions and execute the corresponding block if a condition is `true`, you use the `if...else...if` statement like this:

```jsx
if (condition1) {
// ...
} else if (condition2) {
// ...
} else if (condition3) {
//...
} else {
//...
}
```

In this syntax, the `if...else...if` statement has three conditions. In theory, you can have as many conditions as you want to, where each `else...if` branch has a condition.

The `if...else...if` statement checks the conditions from top to bottom and executes the corresponding block if the condition is `true`.

The `if...else...if` statement stops evaluating the remaining conditions as soon as a condition is `true`. For example, if the `condition2` is `true`, the `if...else...if` statement won’t evaluate the `condition3`.

If all the conditions are `false`, the `if...else...if` statement executes the block in the `else` branch.

The following flowchart illustrates how the `if...else...if` statement works:

![https://www.javascripttutorial.net/wp-content/uploads/2022/01/javascript-if-else-if.svg](https://www.javascripttutorial.net/wp-content/uploads/2022/01/javascript-if-else-if.svg)

## JavaScript if else if examples

Let’s take some examples of using the `if...else...if` statement.

### 1) A simple JavaScript if…else…if statement example

The following example uses the `if...else...if` statement to get the month name from a month number:

```jsx
let month = 6;
let monthName;

if (month == 1) {
  monthName = 'Jan';
} else if (month == 2) {
  monthName = 'Feb';
} else if (month == 3) {
  monthName = 'Mar';
} else if (month == 4) {
  monthName = 'Apr';
} else if (month == 5) {
  monthName = 'May';
} else if (month == 6) {
  monthName = 'Jun';
} else if (month == 7) {
  monthName = 'Jul';
} else if (month == 8) {
  monthName = 'Aug';
} else if (month == 9) {
  monthName = 'Sep';
} else if (month == 10) {
  monthName = 'Oct';
} else if (month == 11) {
  monthName = 'Nov';
} else if (month == 12) {
  monthName = 'Dec';
} else {
  monthName = 'Invalid month';
}
console.log(monthName);
```

Output:

```jsx
Jun
```

In this example, we compare the month with 12 numbers from 1 to 12 and assign the corresponding month name to the `monthName` variable.

Since the month is `6`, the expression `month==6` evaluates to `true`. Therefore, the `if...else...if` statement assigns the literal string `'Jun'` to the `monthName` variable. Therefore, you see `Jun` in the console.

If you change the month to a number that is not between 1 and 12, you’ll see the `Invalid Month` in the console because the `else` clause will execute.

### 2) Using JavaScript if…else…if statement to calculate the body mass index

The following example calculates a body mass index (BMI) of a person. It uses the `if...else...if` statement to determine the weight status based on the BMI:

```jsx
let weight = 70;// kg
let height = 1.72;// meter
// calculate the body mass index (BMI)
let bmi = weight / (height * height);

let weightStatus;

if (bmi < 18.5) {
  weightStatus = 'Underweight';
} else if (bmi >= 18.5 && bmi <= 24.9) {
  weightStatus = 'Healthy Weight';
} else if (bmi >= 25 && bmi <= 29.9) {
  weightStatus = 'Overweight';
} else {
  weightStatus = 'Obesity';
}

console.log(weightStatus);
```

Output:

```jsx
Healthy Weight
```

How it works.

- First, declare two variables that hold the weight in kilogram and height in meter. In a realworld application, you’ll get these values from a web form.
- Second, calculate the body mass index by dividing the weight by the square of the height.
- Third, determine the weight status based on the BMI using the `if...else..if` statement.
- Finally, output the weight status to the console.

## Summary

- Use the JavaScript `if...else...if` statement to check multiple conditions and execute the corresponding block if a condition is `true`.

## Ternary operator  `? :`

When you want to execute a block if a condition evaluates to `true`, you often use an 

`if…else` statement. For example:

```jsx
let age = 18;
let message;

if (age >= 16) {
  message = 'You can drive.';
} else {
  message = 'You cannot drive.';
}

console.log(message);
```

In this example, we show a message that a person can drive if the age is greater than or equal to 16. Alternatively, you can use a ternary operator instead of the if-else statement like this:

```jsx
let age = 18;
let message;

age >= 16 ? (message = 'You can drive.') : (message = 'You cannot drive.');

console.log(message);
```

Or `you can use the ternary operator` in an expression as follows:

```jsx
let age = 18;
let message;

message = age >= 16 ? 'You can drive.' : 'You cannot drive.';

console.log(message);
```

Here’s the syntax of the ternary operator:

```jsx
condition ? expressionIfTrue : expressionIfFalse;
```

In this syntax, the `condition` is an expression that evaluates to a Boolean value, either `true` or `false`.

If the condition is `true`, the first expression (`expresionIfTrue`) executes. If it is false, the second expression (`expressionIfFalse`) executes.

The following shows the syntax of the ternary operator used in an expression:

```jsx
let variableName = condition ? expressionIfTrue : expressionIfFalse;
```

In this syntax, if the `condition` is `true`, the `variableName` will take the result of the first expression (`expressionIfTrue`) or `expressionIfFalse` otherwise.

## JavaScript ternary operator examples

Let’s take some examples of using the ternary operator.

### 1) Using the JavaScript ternary operator to perform multiple statements

The following example uses the ternary operator to perform multiple operations, where each operation is separated by a comma. For example:

```jsx
let authenticated = true;
let nextURL = authenticated
  ? (alert('You will redirect to admin area'), '/admin')
  : (alert('Access denied'), '/403');

// redirect to nextURL here
console.log(nextURL); // '/admin'

```

In this example, the returned value of the ternary operator is the last value in the comma-separated list.

### 2) Simplifying ternary operator example

See the following example:

```jsx
let locked = 1;
let canChange = locked != 1 ? true : false;
```

If the `locked` is 1, then the `canChange` variable is set to `false`, otherwise, it is set to `true`. In this case, you can simplify it by using a Boolean expression as follows:

```jsx
let locked = 1;
let canChange = locked != 1;
```

### 3) Using multiple JavaScript ternary operators example

The following example shows how to use two ternary operators in the same expression:

```jsx
let speed = 90;
let message = speed >= 120 ? 'Too Fast' : speed >= 80 ? 'Fast' : 'OK';

console.log(message);
```

Output:

```jsx
Fast
```

It’s a good practice to use the ternary operator when it makes the code easier to read. If the logic contains many `if...else` statements, you should avoid using the ternary operators.

## Summary

- Use the JavaScript ternary operator (`?:`)to make the code more concise.

## Switch statement in JS `switch`

The `switch` statement evaluates an `expression`, compares its result with `case` values, and executes the statement associated with the matching `case` value.

The following illustrates the syntax of the `switch` statement:

```jsx
switch (expression) {
    case value1:
        statement1;
        break;
    case value2:
        statement2;
        break;
    case value3:
        statement3;
        break;
    default:
        statement;
}
```

How it works.

- First, evaluate the `expression` inside the parentheses after the `switch` keyword.
- Second, compare the result of the expression with the `value1`, `value2`, … in the `case` branches from top to bottom.
- `IMP` : The `switch` statement uses the strict comparison (`===`).
- Third, execute the statement in the `case` branch where the result of the `expression` equals the value that follows the `case` keyword. The `break` statement exits the `switch` statement.
- If `break` statements are not present, then the computer will continue through the `switch` statement even if a match is found.
- If none of the cases match the expression, then the `default` clause will be executed.
- If multiples cases match the `switch` statement, then the first `case` that matches the `expression` will be used.
- If `return` statements are present in the `switch`, then you don't need a `break` statement.

That the `switch` statement will stop comparing the `expression`‘s result with the remaining case values as long as it finds a match.

The `switch` statement is like the if…else…if statement. But it has more readable syntax.

The following flowchart illustrates the `switch` statement:

![https://www.javascripttutorial.net/wp-content/uploads/2022/01/javascript-switch.svg](https://www.javascripttutorial.net/wp-content/uploads/2022/01/javascript-switch.svg)

In practice, you often use a `switch` statement to replace a complex `if...else...if` statement to make the code more readable.

Technically, the `switch` statement is equivalent to the following  `if...else...if` statement:

```jsx
if (expression === value1) {
  statement1;
} else if (expression === value2) {
  statement2;
} else if (expression === value3) {
  statement3;
} else {
  statement;
}
```

## JavaScript switch case examples

Let’s take some examples of using the JavaScript `switch` statement.

### 1) Using JavaScript switch statement to get the day of the week

The following example uses the `switch` statement to get the day of the week based on a day number:

```jsx
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = 'Sunday';
    break;
  case 2:
    dayName = 'Monday';
    break;
  case 3:
    dayName = 'Tuesday';
    break;
  case 4:
    dayName = 'Wednesday';
    break;
  case 5:
    dayName = 'Thursday';
    break;
  case 6:
    dayName = 'Friday';
    break;
  case 7:
    dayName = 'Saturday';
    break;
  default:
    dayName = 'Invalid day';
}

console.log(dayName);// Tuesday

```

Output:

```jsx
Tuesday
```

How it works.

First, declare the day variable that holds the day number and the day name variable (dayName).

Second, get the day of the week based on the day number using the `switch` statement. If the day is `1`, the day of the week is `Sunday`. If the day is `2`, the day of the week is `Monday`, and so on.

Third, output the day of the week to the console.

### 2) Using the JavaScript switch statement to get the day count based of a month

The following example uses the `switch` statement to get the day count of a month:

```jsx
let year = 2016;
let month = 2;
let dayCount;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    dayCount = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    dayCount = 30;
    break;
  case 2:
// leap yearif ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
      dayCount = 29;
    } else {
      dayCount = 28;
    }
    break;
  default:
    dayCount = -1;// invalid month
}

console.log(dayCount);// 29
```

In this example, we have four cases:

- If the month is 1, 3,5, 7, 8, 10, or 12, the number of days in a month is 31.
- If the month is 4, 6, 9, or 11, the number of days in that month is 30.
- If the month is 2, and the year is not the leap year, the number of days is 28. If the year is the leap year, the number of days is 29.
- If the month is not in the valid range (1-12), the `default` branch executes and sets the `dayCount` variable to -1, which indicates the invalid month.

### ****Missing Break Statements****

- In this example, the match would be `case` 2. But without a `break` statement, the computer will continue onto `case` 3 and the `default` clause.
- You should see three `console.log` statements because a `break` statement was not included.
    
    ```jsx
    switch (2) {
      case 1:
        console.log("Number 1 was chosen");
      case 2:
        console.log("Number 2 was chosen");
      case 3:
        console.log("Number 3 was chosen");
      default:
        console.log("No number was chosen");
    }
    
    Output : 
    Number 2 was chosen
    Number 3 was chosen.
    No number was chosen
    ```
    

## `IMP` : ****Block Scope and Switch Statements****

- This example will produce an error message, because the `message` variable has already been declared and you cannot have the same variable name in the same block scope.
    
    ```jsx
    const errand = "Going Shopping";
    switch (errand) {
      case "Going to the Dentist":
        let message = "I hate going to the dentist";
        console.log(message);
        break;
      case "Going Shopping":
        let message = "I love to shop";
        console.log(message);
        break;
      default:
        console.log("No errands");
        break;
    }
    
    Ouput: 
    Uncaught SyntaxError: Identifier 'message' has already been declared 
    ```
    
- In order to get rid of that error message, the cases need to be wrapped in a set of curly braces.
    
    ```jsx
    const errand = "Going Shopping";
    switch (errand) {
      case "Going to the Dentist": {
        let message = "I hate going to the dentist";
        console.log(message);
        break;
      }
      case "Going Shopping": {
        let message = "I love to shop";
        console.log(message);
        break;
      }
      default: {
        console.log("No errand");
        break;
      }
    }
    
    Ouput:
    'I love to shop'
    ```
    

## Summary

- The `switch` statement evaluates an expression, compare its result with `case` values, and execute the statement associated with the matching case.
- Use the `switch` statement to rather than a complex `if...else...if` statement to make the code more redable.
- The `switch` statement uses the strict comparison (`===`) to compare the `expression` with the `case` values.

# Loops in JS

## while Loop

[JavaScript while Loop By Examples](https://www.javascripttutorial.net/javascript-while-loop/)

## do…while Loop

[JavaScript do...while Loop with Practical Examples](https://www.javascripttutorial.net/javascript-do-while/)

## for Loop

[JavaScript for Loop By Examples](https://www.javascripttutorial.net/javascript-for-loop/)

# `break` keyword in JS

[JavaScript break](https://www.javascripttutorial.net/javascript-break/)

# `continue` keyword in JS

[JavaScript continue](https://www.javascripttutorial.net/javascript-continue/)

# Comma operator in JS `,`

JavaScript uses a comma (`,`) to represent the comma operator. A comma operator takes two expressions, evaluates them from left to right, and returns the value of the right expression.

Here’s the syntax of the comma operator:

```jsx
leftExpression, rightExpression
```

For example:

```jsx
let result = (10, 10 + 20);
console.log(result);
```

Output:

```jsx
30
```

In this example, the 10, 10+20 returns the value of the right expression, which is 10+20. Therefore, the result value is 30.

See the following example:

```jsx
let x = 10;
let y = (x++, x + 1);

console.log(x, y);
```

Output:

```jsx
11 12
```

In this example, we increase the value of `x` by one (`x++`), add one to `x` (`x+1`) and assign `x` to `y`. Therefore, `x` is `11`, and `y` is `12` after the statement.

However, to make the code more explicit, you can use two statements rather than one statement with a comma operator like this:

```jsx
let x = 10;
x++;
let y = x + 1;

console.log(x, y);
```

This code is more explicit.

In practice, you might want to use the comma operator inside a `[for](https://www.javascripttutorial.net/javascript-for-loop/)` loop to update multiple variables each time through the loop.

The following example uses the comma operator in a for loop to display an array of nine elements as a matrix of 3 rows and three columns:

```jsx
let board = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let s = '';
for (let i = 0, j = 1; i < board.length; i++, j++) {
  s += board[i] + ' ';
  if (j % 3 == 0) {
    console.log(s);
    s = '';
  }
}
```

Output:

```jsx
1 2 3
4 5 6
7 8 9
```

## Summary

- A comma operator takes two expressions and evaluates them from left to right, and returns the value of the right expression.
- Use the comma operator (`,`) inside a `for` loop to update multiple variables once.
- Use two statements rather than the comma operator elsewhere to make the code more explicit and easier to understand.

# Javascript functions

JavaScript provides many built-in functions such as `parseInt()` and `parseFloat()`. In this tutorial, you will learn how to develop custom functions.

## Declare a function

To declare a function, you use the `function` keyword, followed by the function name, a list of parameters, and the function body as follows:

```jsx
function functionName(parameters) {
// function body// ...
}
```

The function name must be a valid JavaScript identifier. By convention, the function names are in camelCase and start with verbs like `getData()`, `fetchContents()`, and `isValid()`.

A function can accept zero, one, or multiple parameters. In the case of multiple parameters, you need to use a comma to separate two parameters.

The following declares a function `say()` that accepts no parameter:

```jsx
function say() {
}
```

The following declares a function named `square()` that accepts one parameter:

```
function square(a) {
}Code language: JavaScript (javascript)
```

And the following declares a function named `add()` that accepts two parameters:

```jsx
function add(a, b) {
}
```

Inside the function body, you can write the code to implement an action. For example, the following `say()` function simply shows a message to the console:

```jsx
function say(message) {
    console.log(message);
}
```

In the body of the `say()` function, we call the `console.log()` function to output a message to the console.

## Calling a function

To use a function, you need to call it. Calling a function is also known as invoking a function. To call a function, you use its name followed by arguments enclosing in parentheses like this:

```jsx
functionName(arguments);
```

When calling a function, JavaScript executes the code inside the function body. For example, the following shows how to call the `say()` function:

```jsx
say('Hello');
```

In this example, we call the `say()` function and pass a literal string `'Hello'` into it.

### Parameters vs. Arguments

The terms parameters and arguments are often used interchangeably. However, they are essentially different.

When declaring a function, you specify the parameters. However, when calling a function, you pass the arguments that are corresponding to the parameters.

For example, in the `say()` function, the `message` is the parameter and the `'Hello'` string is an argument that corresponds to the `message` parameter.

## Returning a value

Every function in JavaScript implicitly returns `undefined` unless you explicitly specify a return value. For example:

```jsx
function say(message) {
    console.log(message);
}
let result = say('Hello');
console.log('Result:', result)
```

Output:

```jsx
Hello
Result: undefined
```

To specify a return value for a function, you use the `return` statement followed by an expression or a value, like this:

```jsx
return expression;
```

For example, the following `add()` function returns the sum of the two arguments:

```jsx
function add(a, b) {
    return a + b;
}
```

The following shows how to call the `add()` function:

```jsx
let sum = add(10, 20);
console.log('Sum:', sum);
```

Output:

```jsx
Sum: 30
```

The following example uses multiple `return` statements in a function to return different values based on conditions:

```jsx
function compare(a, b) {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    }
    return 0;
}
```

The `compare()` function compares two values. It returns:

- 1 if the first argument is greater than the second one.
- 1 if the first argument is less than the second one.
- 0 if the first argument equals the second one.

The function immediately stops executing immediately when it reaches the `return` statement. Therefore, you can use the `return` statement without a value to exit the function prematurely, like this:

```jsx
function say(message) {
// show nothing if the message is emptyif (! message ) {
        return;
    }
    console.log(message);
}
```

In this example, if the `message` is blank (or `undefined`), the `say()` function will show nothing.

The function can return a single value. If you want to [return multiple values from a function](https://www.javascripttutorial.net/javascript-return-multiple-values/), you need to pack these values in an array or an object.

## The arguments object

Inside a function, you can access an object called `arguments` that represents the named arguments of the function.

The `arguments` object behaves like an [array](https://www.javascripttutorial.net/javascript-array/) though it is not an instance of the [Array](https://www.javascripttutorial.net/javascript-array/) type.

For example, you can use the square bracket `[]` to access the arguments: `arguments[0]` returns the first argument, `arguments[1]` returns the second one, and so on.

Also, you can use the `length` property of the `arguments` object to determine the number of arguments.

The following example implements a generic `add()` function that calculates the sum of any number of arguments.

```jsx
function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
```

Hence, you can pass any number of arguments to the `add()` function, like this:

```jsx
console.log(add(1, 2));// 3
console.log(add(1, 2, 3, 4, 5));// 15
```

## Functions are First class citizen in JS

In JavaScript, functions are considered first-class citizens, which means they are treated as regular values and have the same capabilities and characteristics as other data types. This enables functions to be assigned to variables, passed as arguments to other functions, returned as values from functions, and stored in data structures like arrays or objects. The concept of functions as first-class citizens allows for powerful functional programming techniques in JavaScript.

Here are some examples to illustrate the first-class nature of functions in JavaScript:

1. Assigning a function to a variable:

```jsx
const greet = function(name) {
  console.log("Hello, " + name + "!");
};

greet("John"); // Output: Hello, John!

```

In this example, we assign an anonymous function to the variable `greet`. Now, `greet` holds the function as its value, allowing us to call it later by invoking the `greet` variable.

1. Passing a function as an argument to another function:

```jsx
function executeFunction(func) {
  func();
}

function sayHello() {
  console.log("Hello!");
}

executeFunction(sayHello); // Output: Hello!

```

In this case, the `executeFunction` function takes a function as an argument (`func`), and when `executeFunction` is called with the `sayHello` function as the argument, it invokes the `sayHello` function inside its body.

1. Returning a function from another function:

```jsx
function createGreeter(greeting) {
  return function(name) {
    console.log(greeting + ", " + name + "!");
  };
}

const greetHello = createGreeter("Hello");
greetHello("John"); // Output: Hello, John!

const greetHi = createGreeter("Hi");
greetHi("Alice"); // Output: Hi, Alice!

```

Here, the `createGreeter` function returns another function. The returned function captures the `greeting` parameter from its outer scope and forms a closure. We assign the returned function to variables `greetHello` and `greetHi` and call them with different names, resulting in different greetings.

1. Storing functions in data structures:

```jsx
const operations = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  }
};

console.log(operations.add(3, 5)); // Output: 8
console.log(operations.subtract(10, 6)); // Output: 4

```

In this example, we store two functions (`add` and `subtract`) as properties of an object. These functions can be accessed and invoked using dot notation.

The ability to treat functions as first-class citizens in JavaScript allows for flexible and dynamic programming patterns. It enables higher-order functions, function composition, and other advanced techniques that make JavaScript a versatile and powerful language.

## Anonymous functions

In practice, you often pass anonymous functions as arguments to other functions. For example:

```jsx
setTimeout(function() {
    console.log('Execute later after 1 second')
}, 1000);
```

In this example, we pass an anonymous function into the `[setTimeout()](https://www.javascripttutorial.net/javascript-bom/javascript-settimeout/)` function. The `setTimeout()` function executes this anonymous function one second later.

Note that [functions are](https://www.javascripttutorial.net/javascript-functions-are-first-class-citizens/) first-class citizens in JavaScript. Therefore, you can pass a function to another function as an argument.

## Immediately invoked function execution

If you want to create a function and execute it immediately after the declaration, you can declare an anonymous function like this:

```jsx
(function() {
    console.log('IIFE');
})();
```

How it works.

First, define a function expression:

```jsx
(function () {
    console.log('Immediately invoked function execution');
})
```

This expression returns a function.

Second, call the function by adding the trailing parentheses `()`:

```jsx
(function () {
    console.log('Immediately invoked function execution');
})();
```

and sometimes, you may want to pass arguments into it, like this:

```jsx
let person = {
    firstName: 'John',
    lastName: 'Doe'
};

(function () {
    console.log(person.firstName} + ' ' + person.lastName);
})(person);
```

## Arrow functions

[A Gentle Introduction to JavaScript Arrow Function](https://www.javascripttutorial.net/es6/javascript-arrow-function/)

[When You Should Not Use The Arrow Functions](https://www.javascripttutorial.net/es6/when-you-should-not-use-arrow-functions/)

ES6 introduced [arrow function](https://www.javascripttutorial.net/es6/javascript-arrow-function/) expressions that provide a shorthand for declaring anonymous functions:

For example, this function:

```jsx
let show = function () {
    console.log('Anonymous function');
};
```

… can be shortened using the following arrow function:

```jsx
let show = () => console.log('Anonymous function');
```

Similarly, the following anonymous function:

```jsx
let add = function (a, b) {
    return a + b;
};
```

… is functionally equivalent to the following arrow function:

```jsx
let add = (a, b) => a + b;
```

## Default Parameter in functions

```jsx
function say(message='Hi') {
    console.log(message);
}

say();// 'Hi'
say('Hello')// 'Hello'
```

The default value of the `message` paramater in the `say()` function is `'Hi'`.

In JavaScript, default function parameters allow you to initialize named parameters with default values if no values or `undefined` are passed into the function.

## Arguments vs. Parameters

Sometimes, you can use the terms argument and parameter interchangeably. However, by definition, parameters are what you specify in the [function declaration](https://www.javascripttutorial.net/javascript-function/) whereas the arguments are what you pass into the function.

Consider the following `add()` function:

```jsx
function add(x, y) {
   return x + y;
}

add(100,200);
```

In this example, the `x` and `y` are the parameters of the `add()` function, and the values passed to the `add()` function `100` and `200` are the arguments.

## Setting JavaScript default parameters for a function

In JavaScript, a parameter has a default value of [undefined](https://www.javascripttutorial.net/javascript-data-types/#undefined). It means that if you don’t pass the arguments into the [function](https://www.javascripttutorial.net/javascript-function/), its parameters will have the default values of `undefined`.

See the following example:

```jsx
function say(message) {
    console.log(message);
}

say();// undefined
```

The `say()` function takes the `message` parameter. Because we didn’t pass any argument into the `say()` function, the value of the `message` parameter is `undefined`.

Suppose that you want to give the `message` parameter a default value 10.

A typical way for achieving this is to test parameter value and assign a default value if it is `undefined` using a [ternary operator](https://www.javascripttutorial.net/javascript-ternary-operator/):

```jsx
function say(message) {
    message = typeof message !== 'undefined' ? message : 'Hi';
    console.log(message);
}
say();// 'Hi'
```

In this example, we didn’t pass any value into the `say()` function. Therefore, the default value of the message argument is `undefined`. Inside the function, we reassigned the `message` variable the `Hi` string.

ES6 provides you with an easier way to set the default values for the function parameters like this:

```jsx
function fn(param1=default1, param2=default2,..) {
}
```

In the syntax above, you use the [assignment operator](https://www.javascripttutorial.net/javascript-assignment-operators/) (`=`) and the default value after the parameter name to set a default value for that parameter. For example:

```jsx
function say(message='Hi') {
    console.log(message);
}

say();// 'Hi'
say(undefined);// 'Hi'
say('Hello');// 'Hello'
```

How it works.

- In the first function call, we didn’t pass any argument into the `say()` function, therefore `message` parameter took the default value `'Hi'`.
- In the second function call, we passed the `undefined` into the `say()` function, hence the `message` parameter also took the default value `'Hi'`.
- In the third function call, we passed the `'Hello'` string into the `say()` function, therefore `message` parameter took the string `'Hello'` as the default value.

## More JavaScript default parameter examples

Let’s look at some more examples to learn some available options for setting default values of the function parameters.

### 1) Passing undefined arguments

The following `createDiv()` function creates a new `<div>` element in the document with a specific height, width, and border-style:

```jsx
function createDiv(height = '100px', width = '100px', border = 'solid 1px red') {
    let div = document.createElement('div');
    div.style.height = height;
    div.style.width = width;
    div.style.border = border;
    document.body.appendChild(div);
    return div;
}
```

The following doesn’t pass any arguments to the function so the `createDiv()` function uses the default values for the parameters.

```jsx
createDiv();
```

Suppose you want to use the default values for the height and width parameters and specific border style. In this case, you need to pass `undefined` values to the first two parameters as follows:

```
createDiv(undefined,undefined,'solid 5px blue');
```

### 2) Evaluating default parameters

JavaScript engine evaluates the default arguments at the time you call the function. See the following example:

```jsx
function put(toy, toyBox = []) {
    toyBox.push(toy);
    return toyBox;
}

console.log(put('Toy Car'));
// -> ['Toy Car']console.log(put('Teddy Bear'));
// -> ['Teddy Bear'], not ['Toy Car','Teddy Bear']
```

The parameter can take a default value which is a result of a function.

Consider the following example:

```jsx
function date(d = today()) {
    console.log(d);
}
function today() {
    return (new Date()).toLocaleDateString("en-US");
}
date();
```

The `date()` function takes one parameter whose default value is the returned value of the `today()` function. The `today()` function returns today’s date in a specified string format.

When we declared the `date()` function, the `today()` function has not yet evaluated until we called the `date()` function.

We can use this feature to make arguments mandatory. If the caller doesn’t pass any argument, we throw an error as follows:

```jsx
function requiredArg() {
   throw new Error('The argument is required');
}
function add(x = requiredArg(), y = requiredArg()){
   return x + y;
}

add(10);// error
add(10,20);// OK
```

### 3) Using other parameters in default values

You can assign a parameter a default value that references other default parameters as shown in the following example:

```jsx
function add(x = 1, y = x, z = x + y) {
    return x + y + z;
}

console.log(add());// 4
```

In the `add()` function:

- The default value of the `y` is set to `x` parameter.
- The default value of the `z` is the sum of `x` and `y`
- The `add()` function returns the sum of `x`, `y`, and `z`.

The parameter list seems to have its own [scope](https://www.javascripttutorial.net/javascript-variable-scope/). If you reference the parameter that has not been initialized yet, you will get an error. For example:

```jsx
function subtract( x = y, y = 1 ) {
    return x - y;
}
subtract(10);
```

Error message:

```jsx
Uncaught ReferenceError: Cannot access 'y' before initialization
```

### Using functions

You can use a return value of a function as a default value for a parameter. For example:

```jsx
let taxRate = () => 0.1;
let getPrice = function( price, tax = price * taxRate() ) {
    return price + tax;
}

let fullPrice = getPrice(100);
console.log(fullPrice);// 110
```

In the `getPrice()` function, we called the `taxRate()` function to get the tax rate and use this tax rate to calculate the tax amount from the price.

### The arguments object

The value of the `arguments` object inside the function is the number of actual arguments that you pass to the function. For example:

```jsx
function add(x, y = 1, z = 2) {
    console.log( arguments.length );
    return x + y + z;
}

add(10);// 1
add(10, 20);// 2
add(10, 20, 30);// 3
```

# Objects in JS

TODO

# Pass by Value and Pass by reference

[Understanding JavaScript Pass By Value](https://www.javascripttutorial.net/javascript-pass-by-value/)

# const, var, let

# const

ES6 provides a new way of declaring a constant by using the `const` keyword. The `const` keyword creates a read-only reference to a value.

```jsx
const CONSTANT_NAME = value;
```

By convention, the constant identifiers are in uppercase.

Like the [let](https://www.javascripttutorial.net/es6/javascript-let/) keyword, the `const` keyword declares blocked-scope variables. However, the block-scoped variables declared by the const keyword can’t be **reassigned**.

The variables declared by the `let` keyword are mutable. It means that you can change their values anytime you want as shown in the following example:

```jsx
let a = 10;
a = 20;
a = a + 5;
console.log(a);// 25
```

However, variables created by the `const` keyword are “immutable”. In other words, you can’t reassign them to different values.

If you attempt to reassign a variable declared by the `const` keyword, you’ll get a `TypeError` like this:

```jsx
const RATE = 0.1;
RATE = 0.2;// TypeError
```

Unlike the let keyword, you need to initialize the value to the variable declared by the const keyword.

The following example causes a `SyntaxError` due to missing the initializer in the `const` variable declaration:

```jsx
const RED;// SyntaxError
```

## JavaScript const and Objects

The `const` keyword ensures that the variable it creates is read-only. However, it doesn’t mean that the actual value to which the `const` variable reference is immutable. For example:

```jsx
const person = { age: 20 };
person.age = 30;// OKconsole.log(person.age);// 30
```

Even though the `person` variable is a constant, you can change the value of its property.

However, you cannot reassign a different value to the `person` constant like this:

```jsx
person = { age: 40 };// TypeError
```

If you want the value of the `person` object to be immutable, you have to freeze it by using the `Object.freeze()` method:

```jsx
const person = Object.freeze({age: 20});
person.age = 30;// TypeError
```

Note that `Object.freeze()` is shallow, meaning that it can freeze the properties of the object, not the objects referenced by the properties.

For example, the `company` object is constant and frozen.

```jsx
const company = Object.freeze({
    name: 'ABC corp',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        zipcode: 95134
    }
});
```

But the `company.address` object is not immutable, you can add a new property to the `company.address` object as follows:

```jsx
company.address.country = 'USA';// OK
```

## JavaScript const and Arrays

Consider the following example:

```jsx
const colors = ['red'];
colors.push('green');
console.log(colors);// ["red", "green"]

colors.pop();
colors.pop();
console.log(colors);// []

colors = [];// TypeError
```

In this example, we declare an array `colors` that has one element using the `const` keyword. Then, we can change the array’s elements by adding the `green` color. However, we cannot reassign the array `colors` to another array.

## JavaScript `const` in a `for` loop

ES6 provides a new construct called `[for...of](https://www.javascripttutorial.net/es6/javascript-for-of/)` that allows you to create a loop iterating over iterable objects such as [arrays](https://www.javascripttutorial.net/javascript-array/), [maps](https://www.javascripttutorial.net/es6/javascript-map/), and [sets](https://www.javascripttutorial.net/es6/javascript-set/).

```jsx
let scores = [75, 80, 95];

for (let score of scores) {
	console.log(score);
}
```

If you don’t intend to modify the `score` variable inside the loop, you can use the `const` keyword instead:

```jsx
let scores = [75, 80, 95];
for (const score of scores) {
    console.log(score);
}
```

In this example, the `for...of`   creates a new binding for the `const` keyword in each loop iteration. In other words, a new `score` constant is created in each iteration.

Notice that the `const` will not work in an imperative [for](https://www.javascripttutorial.net/javascript-for-loop/) loop. Trying to use the `const` keyword to declare a variable in the imperative `for` loop will result in a `TypeError`:

```jsx
for (const i = 0; i < scores.length; i++) {
// TypeError
console.log(scores[i]);
}
```

The reason is that the declaration is only evaluated once before the loop body starts.

# let

In ES5, when you [declare a variable](https://www.javascripttutorial.net/javascript-variables/) using the `var` keyword, the scope of the variable is either global or local. If you declare a variable outside of a function, the scope of the variable is global. When you declare a variable inside a function, the scope of the variable is local.

ES6 provides a new way of declaring a variable by using the `let` keyword. The `let` keyword is similar to the `var` keyword, except that these variables are blocked-scope. For example:

```jsx
let variable_name;Code language: JavaScript (javascript)
```

In JavaScript, blocks are denoted by curly braces `{}` , for example, the `[if else](https://www.javascripttutorial.net/javascript-if-else/)`, `[for](https://www.javascripttutorial.net/javascript-for-loop/)`, `[do while](https://www.javascripttutorial.net/javascript-do-while/)`, `[while](https://www.javascripttutorial.net/javascript-while-loop/)`, `[try catch](https://www.javascripttutorial.net/javascript-try-catch/)` and so on:

```jsx
if(condition) {
// inside a block
}
```

See the following example:

```jsx
let x = 10;
if (x == 10) {
    let x = 20;
    console.log(x);// 20:  reference x inside the block
}
console.log(x);// 10: reference at the begining of the script
```

How the script works:

- First, declare a variable `x` and initialize its value to 10.
- Second, declare a new variable with the same name `x` inside the `if` block but with an initial value of 20.
- Third, output the value of the variable `x` inside and after the `[if](https://www.javascripttutorial.net/javascript-if-else/)` block.

Because the `let` keyword declares a block-scoped variable, the `x` variable inside the `if` block is a **new variable** and it shadows the `x` variable declared at the top of the script. Therefore, the value of `x` in the console is `20`.

When the JavaScript engine completes executing the `if` block, the `x` variable inside the `if` block is out of scope. Therefore, the value of the `x` variable that following the `if` block is 10.

## JavaScript let and global object

When you declare a global variable using the `var` keyword, you add that variable to the property list of the [global object](https://www.javascripttutorial.net/es-next/javascript-globalthis/). In the case of the web browser, the global object is the `window`. For example:

```jsx
var a = 10;
console.log(window.a);// 10
```

However, when you use the `let` keyword to declare a variable, that variable is **not** attached to the global object as a property. For example:

```jsx
let b = 20;
console.log(window.b);// undefined
```

## JavaScript let and callback function in a for loop

See the following example.

```jsx
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
```

The intention of the code is to output numbers from 0 to 4 to the console every second. However, it outputs the number `5` five times:

```jsx
5
5
5
5
5
```

In this example, the variable `i` is a global variable. After the loop, its value is 5. When the callback functions are passed to the `[setTimeout()](https://www.javascripttutorial.net/javascript-bom/javascript-settimeout/)` function executes, they reference the same variable `i` with the value 5.

In ES5, you can fix this issue by creating another scope so that each callback function references a new variable. And to create a new scope, you need to create a function. Typically, you use the [IIFE](https://www.javascripttutorial.net/javascript-immediately-invoked-function-expression-iife/) pattern as follows:

```jsx
for (var i = 0; i < 5; i++) {
    (function (j) {
        setTimeout(function () {
            console.log(j);
        }, 1000);
    })(i);
}
```

Output:

```jsx
0
1
2
3
4
```

In ES6, the `let` keyword declares a new variable in each loop iteration. Therefore, you just need to replace the `var` keyword with the `let` keyword to fix the issue:

```jsx
for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
```

To make the code completely ES6 style, you can use an [arrow function](https://www.javascripttutorial.net/es6/javascript-arrow-function/) as follows:

```jsx
for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 1000);
}
```

Note that you’ll learn more about the [arrow functions in the later tutorial](https://www.javascripttutorial.net/es6/javascript-arrow-function/).

## Redeclaration

The `var` keyword allows you to redeclare a variable without any issue:

```jsx
var counter = 0;
var counter;
console.log(counter);// 0
```

However, redeclaring a variable using the `let` keyword will result in an error:

```jsx
let counter = 0;
let counter;
console.log(counter);
```

Here’s the error message:

```jsx
Uncaught SyntaxError: Identifier 'counter' has already been declared
```

## JavaScript let variables and hoisting

Let’s examine the following example:

```jsx
{
    console.log(counter);//let counter = 10;
}
```

This code causes an error:

```jsx
Uncaught ReferenceError: Cannot access 'counter' before initialization
```

In this example, accessing the `counter` variable before declaring it causes a `ReferenceError`. You may think that a variable declaration using the `let` keyword does not **hoist,** but it does**.**

In fact, the JavaScript engine will hoist a variable declared by the `let` keyword to the top of the block. However, the JavaScript engine does not initialize the variable. Therefore, when you reference an uninitialized variable, you’ll get a `ReferenceError`.

## Temporal death zone (TDZ)

A variable declared by the `let` keyword has a so-called temporal dead zone (TDZ). The TDZ is the time from the start of the block until the variable declaration is processed.

The following example illustrates that the temporal dead zone is time-based, not location-based*.*

```jsx
{ // enter new scope, TDZ starts
    let log = function () {
        console.log(message); // messagedeclared later
    };

    // This is the TDZ and accessing log
    // would cause a ReferenceError

    let message= 'Hello'; // TDZ ends
    log(); // called outside TDZ
}
```

In this example:

First, the curly brace starts a new block scope, therefore, the TDZ starts.

Second, the `log()` function expression accesses the `message` variable. However, the `log()` function has not been executed yet.

Third, declare the `message` variable and initialize its value to `'Hello'`. The time from the start of the block scope to the time that the `message` variable is accessed is called a *temporal death zone*. When the JavaScript engine processes the declaration, the TDZ ends.

Finally, call the `log()` function that accesses the `message` variable outside of the TDZ.

Note that if you access a variable declared by the `let` keyword in the TDZ, you’ll get a `ReferenceError` as illustrated in the following example.

```jsx
{// TDZ starts
console.log(typeof myVar);// undefined
console.log(typeof message);// ReferenceError
let message;// TDZ ends
}
```

Notice that `myVar` variable is a non-existing variable, therefore, its type is [undefined](https://www.javascripttutorial.net/javascript-data-types/#undefined).

The temporal death zone prevents you from accidentally referencing a variable before its declaration.

## **Differences Between var and let**

The `var` variables belong to the global scope when you define them outside a function. For example:

```jsx
var counter;
```

In this example, the `counter` is a global variable. It means that the `counter` variable is accessible by any functions.

When you declare a variable inside a function using the `var` keyword, the scope of the variable is local. For example:

```jsx
function increase() {
    var counter = 10;
}
// cannot access the counter variable here
```

In this example, the `counter` variable is local to the `increase()` function. It cannot be accessible outside of the function.

The following example displays four numbers from 0 to 4 inside the loop and the number 5 outside the loop.

```jsx
for (var i = 0; i < 5; i++) {
	console.log("Inside the loop:", i);
}

console.log("Outside the loop:", i);
```

Output:

```jsx
Inside the loop: 0
Inside the loop: 1
Inside the loop: 2
Inside the loop: 3
Inside the loop: 4
Outside the loop: 5
```

In this example, the `i` variable is a global variable. Therefore, it can be accessed from both inside and after the `[for](https://www.javascripttutorial.net/javascript-for-loop/)` loop.

The following example uses the `let` keyword instead of the `var` keyword:

```jsx
for (let i = 0; i < 5; i++) {
	console.log("Inside the loop:", i);
}

console.log("Outside the loop:", i);
```

In this case, the code shows four numbers from 0 to 4 inside a loop and a reference error:

```jsx
Inside the loop: 0
Inside the loop: 1
Inside the loop: 2
Inside the loop: 3
Inside the loop: 4
```

The error:

```jsx
Uncaught ReferenceError: i is not defined
```

Since this example uses the `let` keyword, the variable `i` is blocked scope. It means that the variable `i` only exists and can be accessible inside the `for` loop block.

In JavaScript, a block is delimited by a pair of curly braces `{}` like in the `if...else` and `for` statements:

```jsx
if(condition) {
// inside a block
}

for(...) {
// inside a block
}
```

## #2: Creating global properties

The global `var` variables are added to the [global object](https://www.javascripttutorial.net/es-next/javascript-globalthis/) as [properties](https://www.javascripttutorial.net/javascript-object-properties/). The global object is `window` on the web browser and `global` on Node.js:

```jsx
var counter = 0;
console.log(window.counter);//  0
```

However, the `let` variables are not added to the global object:

```jsx
let counter = 0;
console.log(window.counter);// undefined
```

## #3: Redeclaration

The `var` keyword allows you to redeclare a variable without any issue:

```jsx
var counter = 10;
var counter;
console.log(counter);// 10
```

However, if you redeclare a variable with the `let` keyword, you will get an error:

```jsx
let counter = 10;
let counter;// error
```

## #4: The Temporal dead zone

The `let` variables have temporal dead zones while the `var` variables don’t. To understand the temporal dead zone, let’s examine the life cycles of both `var` and `let` variables, which have two steps: creation and execution.

### The var variables

- In the creation phase, the JavaScript engine assigns storage spaces to `var` variables and immediately initializes them to `undefined`.
- In the execution phase, the JavaScript engine assigns the `var` variables the values specified by the assignments if there are ones. Otherwise, the `var` variables remain undefined.

See the [execution context](https://www.javascripttutorial.net/javascript-execution-context/) for more information.

### The let variables

- In the creation phase, the JavaScript engine assigns storage spaces to the `let` variables but does not initialize the variables. Referencing uninitialized variables will cause a `ReferenceError`.
- The `let` variables have the same execution phase as the `var` variables.

The temporal dead zone starts from the block until the `let` variable declaration is processed. In other words, it is the location where you cannot access the `let` variables before they are defined.

In this tutorial, you have learned about the differences between `var` and `let` keywords.

## Shadowing in JS

In JavaScript, shadowing refers to the situation where a variable declared in an inner scope has the same name as a variable declared in an outer scope. The inner variable "shadows" or overrides the outer variable, making it inaccessible within the inner scope. Shadowing can lead to unexpected behavior and confusion if not handled carefully. Here's an example to illustrate shadowing in JavaScript:

```jsx
let x = 10;

function foo() {
  let x = 20;
  console.log(x); // Output: 20
}

foo();
console.log(x); // Output: 10

```

In this example, there are two variables named `x`: one declared in the global scope and another declared within the `foo()` function. The inner variable `x` shadows the outer variable `x` within the `foo()` function. When `foo()` is called, it prints the value of the inner `x` variable, which is `20`. Outside of the function, the outer `x` variable retains its original value of `10`.

It's important to note that shadowing can occur with any variable declaration keyword (`var`, `let`, `const`) and is not limited to a specific keyword. Shadowing can happen within different scopes such as functions, blocks, or nested loops.

Shadowing can lead to confusion and bugs if variables are not named carefully or if developers are not aware of the potential shadowing effects. It is generally recommended to avoid shadowing variables within the same scope to maintain code readability and prevent unintended consequences.

# Rest and Spread Operator in JS

The rest operator (`...`) and the spread operator (`...`) are two distinct operators in JavaScript, although they share a similar syntax. Let's explore each of them in detail:

**Rest Operator** :
The rest operator is denoted by `...` and is used to represent an indefinite number of arguments as an array. It allows us to capture multiple arguments passed to a function or multiple elements of an array or iterable into a single array.

Function Parameter :

```jsx
function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

console.log(sum(1, 2, 3, 4)); // Output: 10

```

In this example, the rest operator `...numbers` allows the function `sum` to accept any number of arguments. The rest operator collects all the arguments passed to the function and stores them in an array called `numbers`. We can then perform operations on the array as needed.

Array Destructuring :

```jsx
const numbers = [1, 2, 3, 4];
const [first, second, ...rest] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4]

```

In this example, the rest operator `...rest` is used to capture the remaining elements of the `numbers` array after the first two elements have been assigned to the variables `first` and `second`.

**Spread Operator** :
The spread operator is also denoted by `...` and is used to expand or spread the elements of an array or iterable into individual elements. It is commonly used to create copies of arrays, merge arrays, or pass multiple arguments to a function.

Array Copy :

```jsx
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray); // Output: [1, 2, 3]

```

In this example, the spread operator `...originalArray` spreads the elements of the `originalArray` into a new array `copiedArray`. This creates a shallow copy of the original array.

Array Merge :

```jsx
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];

console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

```

Here, the spread operator is used to concatenate the elements of `array1` and `array2` into a new array `mergedArray`.

Function Invocation:

```jsx
function multiply(a, b, c) {
  return a * b * c;
}

const numbers = [2, 3, 4];
console.log(multiply(...numbers)); // Output: 24

```

In this example, the spread operator is used to pass the elements of the `numbers` array as individual arguments to the `multiply` function.

The rest and spread operators are powerful features in JavaScript that enhance the flexibility and expressiveness of working with arrays and function arguments. They provide concise and efficient ways to handle variable numbers of arguments and manipulate arrays in a more intuitive manner.

### More detailed :

[JavaScript Rest vs Spread Operator – What’s the Difference?](https://www.freecodecamp.org/news/javascript-rest-vs-spread-operators/)

# Currying in JS

Currying is a functional programming technique in JavaScript that involves transforming a function that takes multiple arguments into a sequence of functions, each taking a single argument. Instead of taking all arguments at once, it takes the first argument and returns a new function that expects the second argument. This process continues until all arguments are collected and the final result is obtained.

By currying a function, you create a chain of partially applied functions that can be invoked step by step, gradually building up to the final result. This technique allows for greater flexibility and reusability of functions, as you can create specialized functions by providing some arguments upfront and supplying the remaining arguments later.

```jsx
function add(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

console.log(add(2)(3)(4)); // Output: 9
```

In this example, the **`add`** function takes the first argument **`a`** and returns a new function that takes the second argument **`b`**. The inner function then returns another function that takes the third argument **`c`**. Finally, the three arguments **`a`**, **`b`**, and **`c`** are summed up and returned.

By invoking the function with three sets of parentheses **`add(2)(3)(4)`**, each argument is provided one at a time, resulting in the sum of **`2`**, **`3`**, and **`4`**, which is **`9`**.

Currying in JavaScript allows for :

1. Partial function application, creating specialized functions with some arguments pre-filled.
2. Function composition, easily combining functions together.
3. Flexibility and reusability, promoting modularity and composable functions.
4. Higher-order functions, generating specialized functions based on provided arguments.
5. Data transformation pipelines, creating readable and structured code.

In summary, currying enhances code flexibility, reusability, composition, and data transformation.

# Closure in JS

**Closure** = **function** + **lexical environment**

In JavaScript, a closure is a [function](https://www.javascripttutorial.net/javascript-function/) that references variables in the outer scope from its inner scope. The closure preserves the outer scope inside its inner scope.

To understand the closures, you need to know how the lexical scoping works first.

### Lexical scoping

Lexical scoping defines the [scope of a variable](https://www.javascripttutorial.net/javascript-variable-scope/) by the position of that variable declared in the source code. For example:

```jsx
let name = 'John';

function greeting() {
    let message = 'Hi';
    console.log(message + ' '+ name);
}
```

In this example:

- The variable `name` is a global variable. It is accessible from anywhere including within the `greeting()` function.
- The variable `message` is a local variable that is accessible only within the `greeting()` function.

If you try to access the `message` variable outside the `greeting()` function, you will get an error.

So the JavaScript engine uses the scope to manage the variable accessibility.

According to lexical scoping, the scopes can be nested and the inner function can access the variables declared in its outer scope. For example:

```jsx
function greeting() {
    let message = 'Hi';

    function sayHi() {
        console.log(message);
    }

    sayHi();
}

greeting();
```

The `greeting()` function creates a local variable named `message` and a function named `sayHi()`.

The `sayHi()` is the inner function that is available only within the body of the `greeting()` function.

The `sayHi()` function can access the variables of the outer function such as the `message` variable of the `greeting()` function.

Inside the `greeting()` function, we call the `sayHi()` function to display the message `Hi`.

### JavaScript closures

Let’s modify the `greeting()` function:

```jsx
function greeting() {
    let message = 'Hi';

    function sayHi() {
        console.log(message);
    }

    return sayHi;
}
let hi = greeting();
hi();// still can access the message variable

```

Now, instead of executing the `sayHi()` function inside the `greeting()` function, the `greeting()` function returns the `sayHi()` function object.

Note that functions are the [first-class citizens in JavaScript](https://www.javascripttutorial.net/javascript-functions-are-first-class-citizens/), therefore, you can return a function from another function.

Outside of the `greeting()` function, we assigned the `hi` variable the value returned by the `greeting()` function, which is a reference of the `sayHi()` function.

Then we executed the `sayHi()` function using the reference of that function: `hi()`. If you run the code, you will get the same effect as the one above.

However, the interesting point here is that, normally, a local variable only exists during the execution of the function.

It means that when the `greeting()` function has completed executing, the `message` variable is no longer accessible.

In this case, we execute the `hi()` function that references the `sayHi()` function, the `message` variable still exists.

The magic of this is closure. In other words, the `sayHi()` function is a closure.

A closure is a function that preserves the outer scope in its inner scope.

### More JavaScript Closure example

The following example illustrates a more practical example of closure.

```jsx
function greeting(message) {
   return function(name){
        return message + ' ' + name;
   }
}
let sayHi = greeting('Hi');
let sayHello = greeting('Hello');

console.log(sayHi('John'));// Hi John
console.log(sayHello('John'));// Hello John

```

The `greeting()` function takes one argument named `message` and returns a function that accepts a single argument called `name`.

The return function returns a greeting message that is the combination of the `message` and `name` variables.

The `greeting()` function behaves like a function factory. It creates `sayHi()` and `sayHello()` functions with the respective messages `Hi` and `Hello`.

The `sayHi()` and `sayHello()` are closures. They share the same function body but store different scopes.

In the `sayHi()` closure, the `message` is `Hi`, while in the `sayHello()` closure the `message` is `Hello`.

## JavaScript closures in a loop

Consider the following example:

```jsx
for (var index = 1; index <= 3; index++) {
    setTimeout(function () {
        console.log('after ' + index + ' second(s):' + index);
    }, index * 1000);
}
```

Output

```jsx
after 4 second(s):4
after 4 second(s):4
after 4 second(s):4
```

The code shows the same message.

What we wanted to do in the loop is to copy the value of  `i` in each iteration at the time of iteration to display a message after 1, 2, and 3 seconds.

The reason you see the same message after 4 seconds is that the callback passed to the `setTimeout()` a closure. It remembers the value of `i` from the last iteration of the loop, which is 4.

In addition, all three closures created by the [for-loop](https://www.javascripttutorial.net/javascript-for-loop/) share the same global scope access the same value of `i`.

To fix this issue, you need to create a new closure scope in each iteration of the loop.

There are two popular solutions: IIFE & `let` keyword.

### 1) Using the IIFE solution

In this solution, you use an [immediately invoked function expression](https://www.javascripttutorial.net/javascript-immediately-invoked-function-expression-iife/) (a.k.a IIFE) because an IIFE creates a new scope by declaring a function and immediately execute it.

```jsx
for (var index = 1; index <= 3; index++) {
    (function (index) {
        setTimeout(function () {
            console.log('after ' + index + ' second(s):' + index);
        }, index * 1000);
    })(index);
}
```

Output

```jsx
after 1 second(s):1
after 2 second(s):2
after 3 second(s):3
```

### 2) Using `let` keyword in ES6

In ES6, you can use the `[let](https://www.javascripttutorial.net/javascript-variables/#let)` keyword to declare a variable that is block-scoped.

If you use the `let` keyword in the [for-loop](https://www.javascripttutorial.net/javascript-for-loop/), it will create a new lexical scope in each iteration. In other words, you will have a new `index` variable in each iteration.

In addition, the new lexical scope is chained up to the previous scope so that the previous value of the `index` is copied from the previous scope to the new one.

```jsx
for (let index = 1; index <= 3; index++) {
    setTimeout(function () {
        console.log('after ' + index + ' second(s):' + index);
    }, index * 1000);
}
```

Output

```jsx
after 1 second(s):1
after 2 second(s):2
after 3 second(s):3Code language: CSS (css)
```

Closures in JavaScript are valuable because they :

1. Enable **encapsulation** and private variables.
2. Provide **data privacy** and prevent external access.
3. Maintain persistent state across function invocations.
4. Facilitate **callback handling** in asynchronous operations.
5. Allow for function factories and customized behavior.
6. Modular code design.
7. Currying.

In summary, closures enhance code modularity, data integrity, and flexibility in JavaScript.

# this in JS

In JavaScript, the `this` keyword is a special identifier that refers to the current execution context, specifically the object to which a function or method belongs. The value of `this` is not determined during the function's definition but rather at the time of its execution, and it varies depending on how the function is called.

The behavior of the `this` keyword can be categorized into several contexts:

1. Global Context:
When `this` is used in the global scope (outside any function or object), it refers to the global object. In a browser environment, the global object is `window`.
    
    ```jsx
    console.log(this === window); // Output: true (when running in a browser)
    ```
    
2. Function Context:
The value of `this` inside a regular function (not an arrow function) depends on how the function is called. If the function is called as a standalone function, `this` will point to the global object (or `undefined` in strict mode).
    
    ```jsx
    function sayHello() {
      console.log(this);
    }
    
    sayHello(); // Output: window (when not in strict mode)
    
    ```
    
3. Method Context:
When a function is a method of an object, `this` refers to the object that owns the method. This allows methods to access and operate on the object's properties.
    
    ```jsx
    const person = {
      name: 'John',
      greet: function() {
        console.log(`Hello, my name is ${this.name}.`);
      }
    };
    
    person.greet(); // Output: "Hello, my name is John."
    
    ```
    
4. Event Handlers:
In the context of event handlers, such as `onClick` or `addEventListener`, `this` refers to the element that triggered the event.
    
    ```jsx
    <button id="myButton">Click me</button>
    
    ```
    
    ```jsx
    const button = document.getElementById('myButton');
    button.addEventListener('click', function() {
      console.log(this); // Output: <button id="myButton">Click me</button>
    });
    
    ```
    
5. Constructor Context:
When a function is used as a constructor with the `new` keyword, `this` points to the newly created instance of the object.
    
    ```jsx
    function Person(name) {
      this.name = name;
    }
    
    const person = new Person('Alice');
    console.log(person.name); // Output: "Alice"
    
    ```
    

1. Arrow Functions:
    - Arrow functions do not bind their own **`this`** value. Instead, they inherit the **`this`** value from the surrounding scope.It means the arrow function does not create its own [execution context](https://www.javascripttutorial.net/javascript-execution-context/) but inherits the `this` from the outer function where the arrow function is defined.
    - Example:
        
        ```jsx
        javascriptCopy code
        const myObject = {
          myMethod() {
            const innerFunction = () => {
              console.log(this);
            };
            innerFunction();
          },
        };
        myObject.myMethod(); // Output: [object Object] (referring to myObject)
        
        ```
        

1. Call, Apply, and Bind :
The `call`, `apply`, and `bind` methods can be used to explicitly set the value of `this` inside a function. This is useful when you want to control the context in which the function is executed.
    
    ```jsx
    const person1 = { name: 'Alice' };
    const person2 = { name: 'Bob' };
    
    function greet() {
      console.log(`Hello, my name is ${this.name}.`);
    }
    
    greet.call(person1); // Output: "Hello, my name is Alice."
    greet.call(person2); // Output: "Hello, my name is Bob."
    
    ```
    

In summary, the value of `this` in JavaScript is dynamically determined at runtime and depends on the context in which a function is called. Understanding the different behaviors of `this` is essential for writing correct and maintainable JavaScript code, especially when working with object-oriented programming and event handling.

# call(), apply(), bind()

In JavaScript, the `call`, `apply`, and `bind` methods are used to manipulate the value of the `this` keyword within functions. They allow you to explicitly specify the context in which a function is executed. Here's a detailed explanation of each method:

1. `call` method:
    - The `call` method is used to invoke a function with a specified `this` value and individual arguments.
    - Syntax: `function.call(thisArg, arg1, arg2, ...)`
    - The `thisArg` parameter is the value that will be bound to `this` inside the function.
    - The subsequent arguments are the individual arguments passed to the function.
    - Example:
        
        ```jsx
        function greet(name) {
          console.log(`Hello, ${name}! I am ${this.title}`);
        }
        
        const person = { title: 'Mr.' };
        greet.call(person, 'John'); // Output: Hello, John! I am Mr.
        
        ```
        
2. `apply` method:
    - The `apply` method is similar to `call`, but it accepts arguments as an array or an array-like object.
    - Syntax: `function.apply(thisArg, [argsArray])`
    - The `thisArg` parameter is the value that will be bound to `this` inside the function.
    - The `argsArray` is an array or an array-like object containing the arguments passed to the function.
    - Example:
        
        ```jsx
        function greet(name) {
          console.log(`Hello, ${name}! I am ${this.title}`);
        }
        
        const person = { title: 'Mr.' };
        greet.apply(person, ['John']); // Output: Hello, John! I am Mr.
        
        ```
        
3. `bind` method:
    - The `bind` method returns a new function with a permanently bound `this` value.
    - Syntax: `function.bind(thisArg[, arg1[, arg2[, ...]]])`
    - The `thisArg` parameter is the value that will be bound to `this` inside the function.
    - Additional arguments can be passed, which will be prepended to the arguments provided when the bound function is called.
    - Example:
        
        ```jsx
        function greet(name) {
          console.log(`Hello, ${name}! I am ${this.title}`);
        }
        
        const person = { title: 'Mr.' };
        const boundFunction = greet.bind(person);
        boundFunction('John'); // Output: Hello, John! I am Mr.
        
        ```
        

The main difference between `call` and `apply` is the way arguments are passed. `call` accepts individual arguments, while `apply` takes an array or an array-like object. The `bind` method creates a new function with a bound `this` value but does not immediately execute it.

These methods are useful when you want to control the `this` value explicitly or when you need to borrow methods from one object and apply them to another object.

It's worth noting that arrow functions do not have their own `this` value and cannot be manipulated using `call`, `apply`, or `bind`. Instead, they inherit the `this` value from the surrounding lexical scope.

# Debouncing and Throttling

[Debouncing & Throttling in JavaScript](https://medium.com/nerd-for-tech/debouncing-throttling-in-javascript-d36ace200cea)

[Debouncing and Throttling in JavaScript](https://www.telerik.com/blogs/debouncing-and-throttling-in-javascript)

# Callbacks in JS

In JavaScript, a callback is a function that is passed as an argument to another function and is invoked inside that function at a specific time or upon the occurrence of a certain event. Callbacks are a fundamental concept in JavaScript, especially in asynchronous programming, and they allow you to control the flow of execution and handle results or errors.

Here's an example to illustrate the concept of callbacks:

```jsx
function fetchData(callback) {
  // Simulating an asynchronous operation
  setTimeout(() => {
    const data = 'This is the fetched data';
    callback(null, data); // Invoke the callback with the data
  }, 2000);
}

function processFetchedData(error, data) {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Fetched data:', data);
  }
}

// Call the fetchData function and provide the processFetchedData function as a callback
fetchData(processFetchedData);

```

In this example, the `fetchData` function simulates an asynchronous operation (e.g., making an HTTP request) with a delay of 2 seconds. It takes a callback function as an argument and invokes it when the asynchronous operation is complete.

The `processFetchedData` function is the callback function provided to `fetchData`. It expects two parameters: `error` and `data`. If an error occurs during the data fetching process, the callback is invoked with the error as the first argument. Otherwise, the callback is invoked with `null` as the error and the fetched data as the second argument.

By passing the `processFetchedData` function as a callback to `fetchData`, we can handle the fetched data or any potential errors once the data is available. This way, we decouple the asynchronous operation from the subsequent data processing logic.

Callbacks are widely used in JavaScript, especially in scenarios like event handling, AJAX requests, and asynchronous operations, where we need to wait for a response or an event to occur before executing further code. They provide a way to handle the result or error asynchronously and avoid blocking the execution of the program.

[An Essential Guide to JavaScript Callbacks](https://www.javascripttutorial.net/javascript-callback/)

# Promise in JS

In JavaScript, a Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises provide a more structured and readable way to handle asynchronous code compared to using callbacks.

A Promise can be in one of three states:

1. Pending: The initial state of a Promise. The asynchronous operation is still in progress, and the Promise is neither fulfilled nor rejected.
2. Fulfilled: The asynchronous operation completed successfully, and the Promise is fulfilled with a value.
3. Rejected: The asynchronous operation encountered an error, and the Promise is rejected with a reason or error message.

The basic syntax for creating a Promise is as follows:

```jsx
const promise = new Promise((resolve, reject) => {
  // Perform an asynchronous operation
  // If successful, call resolve(value)
  // If there's an error, call reject(error)
});

```

The `Promise` constructor takes a function (often called the "executor") as an argument. The executor function receives two parameters: `resolve` and `reject`. Within the executor, you perform your asynchronous operation, and when it is complete, you call `resolve` with the resulting value to fulfill the Promise, or `reject` with an error to reject the Promise.

You can then use Promise methods like `.then()` and `.catch()` to handle the fulfillment or rejection of the Promise and perform further actions. These methods allow you to chain asynchronous operations and handle their results in a more readable and structured manner.

Here's an example that demonstrates the usage of Promises:

```jsx
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = 'This is the fetched data';
    resolve(data); // Fulfill the Promise with the data
  }, 2000);
});

// Using the Promise
fetchData.then(data => {
  console.log('Fetched data:', data);
}).catch(error => {
  console.error('Error:', error);
});

```

In this example, the `fetchData` Promise represents an asynchronous operation that simulates fetching data after a delay of 2 seconds. The Promise is fulfilled with the fetched data by calling `resolve(data)` inside the executor function.

Using the `.then()` method, we attach a fulfillment handler that will be executed when the Promise is fulfilled. Inside the handler, we can access the fetched data and perform further actions, such as logging it to the console.

If an error occurs during the asynchronous operation, we can handle it using the `.catch()` method. Any error thrown within the Promise or during the execution of the fulfillment handler will be caught and passed to the `.catch()` method for error handling.

Promises provide a more elegant way to handle asynchronous operations, avoid callback hell, and enable better error handling and chaining of asynchronous actions. They are widely used in modern JavaScript for handling AJAX requests, file operations, and other asynchronous tasks.

[JavaScript Promises](https://www.javascripttutorial.net/es6/javascript-promises/)

# Async - Await

[JavaScript Async / Await: Asynchronous JavaScript](https://www.javascripttutorial.net/es-next/javascript-async-await/)

Async/await is a syntax feature introduced in ECMAScript 2017 (ES8) that provides a more concise and readable way to write asynchronous code in JavaScript. It allows you to write asynchronous operations in a synchronous-like manner, making asynchronous code easier to understand and maintain.

The `async` keyword is used to define an asynchronous function, which returns a Promise. Inside an async function, you can use the `await` keyword to pause the execution of the function until a Promise is fulfilled or rejected.

Here's an example that demonstrates the usage of `async` and `await`:

```jsx
function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      const data = 'This is the fetched data';
      resolve(data);
    }, 2000);
  });
}

async function fetchDataAsync() {
  try {
    const data = await fetchData(); // Wait until the Promise is fulfilled
    console.log('Fetched data:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchDataAsync();

```

In this example, the `fetchData` function returns a Promise that resolves with the fetched data after a delay of 2 seconds.

The `fetchDataAsync` function is defined as an `async` function. Within this function, we use the `await` keyword before calling the `fetchData` function. This pauses the execution of `fetchDataAsync` until the Promise returned by `fetchData` is fulfilled. Once the Promise is fulfilled, the value is assigned to the `data` variable, and we can proceed with further actions.

If an error occurs during the Promise execution, it will be caught by the `catch` block. In this example, we use a `try/catch` block to handle any potential errors that may occur during the asynchronous operation. If an error is thrown or the Promise is rejected, the execution will jump to the `catch` block, and the error will be caught and logged to the console.

By using `async/await`, we can write asynchronous code in a more sequential and readable way, similar to synchronous code. It simplifies error handling and allows for a more natural flow of control, making it easier to understand and maintain asynchronous code.

# Event Bubbling and Event Capturing

Event bubbling and event capturing are two mechanisms in JavaScript that describe the order in which events are handled when they occur on nested elements within the DOM hierarchy.

1. **Event Bubbling** :
Event bubbling is the default behavior in most modern browsers. When an event is triggered on an element, it will first be handled by the innermost element, and then the event will "bubble up" through its parent elements, propagating through the DOM tree until it reaches the root element (usually the `<html>` or `<body>` element). This is called event bubbling.
    
    To illustrate event bubbling, consider the following HTML structure:
    
    ```jsx
    <div id="outer">
      <div id="inner">
        <button id="button">Click me</button>
      </div>
    </div>
    ```
    
    If a click event occurs on the button element, the event will first be handled by the button, then by the inner div, and finally by the outer div.
    
    To listen for the event during the bubbling phase, you can use the `addEventListener` method without specifying the optional third parameter (useCapture). For example:
    
    ```jsx
    document.getElementById('outer').addEventListener('click', function(event) {
      console.log('Outer div clicked');
    });
    
    document.getElementById('inner').addEventListener('click', function(event) {
      console.log('Inner div clicked');
    });
    
    document.getElementById('button').addEventListener('click', function(event) {
      console.log('Button clicked');
    });
    
    ```
    
    In this example, clicking the button would result in the following output:
    
    ```jsx
    Button clicked
    Inner div clicked
    Outer div clicked
    ```
    
2. **Event Capturing** :
Event capturing is the reverse of event bubbling. With event capturing, the event is first captured by the outermost element and then propagates down the DOM tree until it reaches the target element. Event capturing is less commonly used than event bubbling.
    
    To listen for the event during the capturing phase, you can set the third parameter of the `addEventListener` method to `true`. For example:
    
    ```jsx
    document.getElementById('outer').addEventListener('click', function(event) {
      console.log('Outer div clicked');
    }, true);
    
    document.getElementById('inner').addEventListener('click', function(event) {
      console.log('Inner div clicked');
    }, true);
    
    document.getElementById('button').addEventListener('click', function(event) {
      console.log('Button clicked');
    }, true);
    
    ```
    
    In this case, clicking the button would result in the following output:
    
    ```jsx
    Outer div clicked
    Inner div clicked
    Button clicked
    
    ```
    
    Note that in both event bubbling and event capturing, the event is ultimately handled by all elements in the event propagation path unless the event propagation is explicitly stopped using methods like `event.stopPropagation()`.
    
    By understanding event bubbling and event capturing, you can leverage them to handle events efficiently and control the event flow within your web application.
    
    ## Both event bubbling and event capturing have their `uses` :
    
    Event bubbling simplifies event delegation by allowing a single event listener on a parent element to handle events for multiple child elements. It makes event handling more efficient and helps reduce the number of event listeners.
    
    Event capturing is useful when you want to intercept an event at a higher level in the DOM hierarchy before it reaches its target. It provides more fine-grained control over event handling but is less commonly used.
    
    In practice, you can specify the event propagation phase (bubbling or capturing) when attaching an event listener using the `addEventListener` method. By default, the third parameter of `addEventListener` is set to `false`, enabling event bubbling. If you want to use event capturing, you can pass `true` as the third parameter.
    

[Bubbling and capturing](https://javascript.info/bubbling-and-capturing)

# Event Loop

The event loop is a fundamental concept in JavaScript that governs how asynchronous operations are executed and how events are handled. It is responsible for managing the execution of code, handling events, and maintaining the responsiveness of the JavaScript runtime environment.

The event loop operates on a single thread and ensures that all JavaScript code, including asynchronous operations, runs in a non-blocking manner. This means that while an asynchronous operation is being processed, the event loop can continue handling other tasks, such as responding to user input or executing additional code.

Here's a high-level overview of how the event loop works:

1. Call Stack :
The event loop starts by maintaining a call stack, which keeps track of the currently executing functions. Whenever a `function` is called, it is added to the top of the call stack, and when a function completes, it is removed from the stack.
2. Task Queue :
In addition to the call stack, the event loop also maintains a task queue. This queue `holds tasks that are scheduled to be executed in the future`. These tasks can include asynchronous operations like `setTimeout`, DOM events, `AJAX`(APIs) `callbacks`, and more.
3. Event Loop :
The event loop continuously checks two main components: the call stack and the task queue. It first checks if the call stack is empty. If the call stack is empty, it looks for tasks in the task queue.
4. Execution of Tasks:
If there are tasks in the task queue, the event loop takes the first task and pushes it onto the call stack, where it starts executing. The task may involve executing a callback function or resolving a Promise. Once the task completes, it is removed from the call stack.
5. Event Handling:
If the call stack is not empty, the event loop does not execute any tasks from the task queue. Instead, it waits for the call stack to become empty. Meanwhile, if any events occur (e.g., user interactions, timers, network responses), they are added to the appropriate event queue.
6. Event Queue:
JavaScript maintains multiple event queues for different types of events, such as `mouse events`, `keyboard events`, and `network events`. Each event queue holds the events of its corresponding type, waiting to be processed by the event loop.
7. Event Handling :
Once the call stack is empty, the event loop starts processing events from the event queues one by one. It takes the first event from the appropriate queue and pushes the associated callback function onto the call stack for execution. The event is then processed, and the callback function completes.

This cycle of checking the call stack, executing tasks, and processing events continues as long as there are tasks in the task queue and events in the event queues.

The event loop ensures that JavaScript remains responsive by interleaving the execution of code and handling of events. It prevents blocking operations from freezing the entire program and allows for the execution of code in a non-blocking, asynchronous manner.

Understanding the event loop is crucial for writing efficient and responsive JavaScript code, especially when dealing with asynchronous operations and event-driven programming. It helps ensure that your code runs smoothly and handles events and tasks in the expected order.