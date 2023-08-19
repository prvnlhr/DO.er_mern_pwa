
# Compile-Time Polymorphism and Function Overloading:

**Compile-Time Polymorphism**, also known as **Static Polymorphism**, occurs when you have multiple functions with the same name in the same scope, but they have different parameter lists. The appropriate function to be called is determined at compile time based on the arguments passed to the function. This allows you to have multiple implementations of a function for different data types or argument combinations.

**Function Overloading** is a mechanism in C++ that enables you to define multiple functions with the same name but different parameter lists. The compiler selects the appropriate function to call based on the number and types of arguments provided.

Here's an example of function overloading:

```cpp
#include <iostream>

class Math {
public:
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }
};

int main() {
    Math math;
    std::cout << math.add(3, 4) << std::endl;       // Calls the int version
    std::cout << math.add(2.5, 3.7) << std::endl;   // Calls the double version
    return 0;
}
```

In this example, the `Math` class defines two `add` functions with different parameter types. The appropriate function is called based on the arguments provided.

## Template Functions and Template Specialization:

**Template Functions** allow you to write a single function that can work with different data types. Templates provide a mechanism for code reuse by allowing you to write generic functions that can operate on various types.

**Template Specialization** is a feature that allows you to provide specific implementations for template functions when working with certain types. This specialization provides more control over the behavior of the template function for specific cases.

Here's an example of template functions and template specialization:

```cpp
#include <iostream>

template <typename T>
T add(T a, T b) {
    return a + b;
}

template <>
const char* add(const char* a, const char* b) {
    std::string result = a;
    result += b;
    return result.c_str();
}

int main() {
    int intSum = add(3, 4);
    double doubleSum = add(2.5, 3.7);
    const char* strConcat = add("Hello, ", "world!");

    std::cout << "intSum: " << intSum << std::endl;
    std::cout << "doubleSum: " << doubleSum << std::endl;
    std::cout << "strConcat: " << strConcat << std::endl;

    return 0;
}
```

In this example, the `add` template function is defined to work with various data types. The template specialization for `const char*` provides a specialized implementation that concatenates strings. This demonstrates how you can create flexible and versatile functions using templates and specialize them for specific cases.

Compile-time polymorphism through function overloading, and template functions and template specialization, allow you to create versatile and reusable code that can adapt to various data types and argument combinations without runtime overhead.