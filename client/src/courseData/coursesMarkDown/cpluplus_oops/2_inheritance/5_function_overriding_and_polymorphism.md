# Virtual Functions and Dynamic Polymorphism

Virtual functions and dynamic polymorphism are important concepts in C++ that enable runtime method binding and allow for more flexible and extensible code structures. These concepts are central to achieving polymorphism in object-oriented programming. Let's explore each concept in detail:

1. **Virtual Functions:**
   A virtual function is a member function in a base class that is marked as "virtual." When a function is declared as virtual in a base class, it indicates to the compiler that this function can be overridden by derived classes. Virtual functions enable late binding, which means that the appropriate function to be executed is determined at runtime based on the actual type of the object, not just its declared type.

   **Syntax:**
   ```cpp
   class Base {
   public:
       virtual void virtualFunction() {
           // Base class implementation
       }
   };

   class Derived : public Base {
   public:
       void virtualFunction() override {
           // Derived class implementation
       }
   };
   ```

2. **Dynamic Polymorphism:**
   Dynamic polymorphism allows different classes to be treated as instances of their common base class. It enables the ability to call overridden functions based on the actual type of the object. This is achieved using pointers or references to the base class type. During runtime, the appropriate function implementation from the derived class is invoked, which is known as "runtime polymorphism."

   **Example:**
   ```cpp
   Base* ptr; // Base class pointer
   Derived derivedObj; // Object of derived class
   ptr = &derivedObj; // Assigning address of derived class object to base class pointer
   ptr->virtualFunction(); // Calls the overridden function from Derived class
   ```

3. **Using `virtual` Keyword:**
   To declare a function as virtual, use the `virtual` keyword in the base class. When the same function is overridden in a derived class, you should also use the `override` keyword to explicitly indicate that this function is intended to override a base class function. This helps catch potential errors during compilation.

4. **Virtual Destructor:**
   It's a good practice to define a virtual destructor in the base class when using polymorphism. This ensures that the appropriate destructor of the derived class is called when an object is deleted through a base class pointer. This is particularly important to prevent memory leaks in dynamic memory allocation scenarios.

   ```cpp
   class Base {
   public:
       virtual ~Base() {
           // Base class destructor
       }
   };
   ```

Using virtual functions and dynamic polymorphism, you can write code that is more flexible and extensible. This allows you to define a common interface in the base class while allowing derived classes to provide their specific implementations. When working with polymorphism, remember to use pointers or references to base class types to take full advantage of dynamic method binding and enable runtime decision-making on which function to call based on the object's actual type.


## 1. Overriding Base Class Functions:

**Function Overriding** occurs when a derived class provides a specific implementation for a function that is already defined in its base class. This allows the derived class to customize or extend the behavior of the base class function while preserving the common interface. To enable function overriding, the base class function should be declared as `virtual`, and the derived class should override it using the `override` keyword.

Here's how function overriding works:

```cpp
class Base {
public:
    virtual void print() {
        cout << "Printing from Base class." << endl;
    }
};

class Derived : public Base {
public:
    void print() override {
        cout << "Printing from Derived class." << endl;
    }
};
```

In this example, when you call the `print` function using a pointer to the base class type pointing to an object of the derived class, the derived class's `print` function will be invoked, even though the pointer's type is of the base class.

## 2. Abstract Base Classes and Pure Virtual Functions:

**Abstract Base Classes** are classes that are meant to serve as a common interface for their derived classes. They often contain one or more pure virtual functions. A **pure virtual function** is a function that is declared in the base class but has no implementation there. It serves as a contract that derived classes must fulfill by providing their own implementation.

Here's an example:

```cpp
class Shape {
public:
    virtual double area() = 0; // Pure virtual function
};

class Circle : public Shape {
private:
    double radius;

public:
    Circle(double r) : radius(r) {}

    double area() override {
        return 3.14159 * radius * radius;
    }
};
```

In this example, the `Shape` class is an abstract base class with a pure virtual function `area`. The `Circle` class inherits from `Shape` and provides its own implementation of the `area` function. You cannot create an object of an abstract base class, but you can create objects of derived classes and call their overridden functions.

## 3. Function Binding and Late Binding:

**Function Binding** refers to the process of associating a function call with its implementation. There are two types of binding: **early binding** and **late binding**.

- **Early Binding (Static Binding):** Also known as compile-time binding, early binding occurs when the function call is resolved at compile time based on the type of the object. It happens when the function is not virtual or if the object is of the same type as the function call.

- **Late Binding (Dynamic Binding):** Also known as runtime binding, late binding occurs when the function call is resolved at runtime based on the actual type of the object. It happens when the function is declared as virtual in the base class and overridden in the derived class. This is essential for achieving polymorphism.

Late binding allows dynamic polymorphism and is a key feature of virtual functions. It enables a derived class object to be treated as an instance of its base class while still invoking the appropriate derived class's overridden function at runtime.

```cpp
Base* ptr; // Base class pointer
Derived derivedObj; // Object of derived class
ptr = &derivedObj; // Assigning address of derived class object to base class pointer
ptr->print(); // Calls the overridden function from Derived class
```

In this example, the `print` function will be determined at runtime based on the actual type of the object pointed to by `ptr`. This demonstrates the concept of late binding and dynamic polymorphism.

In summary, overriding base class functions allows derived classes to provide their own implementations while maintaining a common interface. Abstract base classes and pure virtual functions define a contract that derived classes must fulfill. Function binding involves resolving function calls to their implementations, and late binding is a key mechanism that enables dynamic polymorphism in C++.