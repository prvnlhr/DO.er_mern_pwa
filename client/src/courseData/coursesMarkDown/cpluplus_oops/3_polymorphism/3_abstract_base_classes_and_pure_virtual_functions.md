# Abstract Base Classes

## Creating Abstract Base Classes:

An **Abstract Base Class** is a class that is designed to be used solely as an interface for its derived classes. It contains at least one pure virtual function, which makes the class abstract and prevents it from being instantiated directly. Abstract base classes define a contract that derived classes must fulfill by providing implementations for the pure virtual functions.

**Example:**

```cpp
class Shape {
public:
    virtual double area() = 0; // Pure virtual function
};
```

In this example, the `Shape` class is an abstract base class with a pure virtual function `area()`. You cannot create objects of an abstract base class, but you can create objects of derived classes that provide implementations for the pure virtual function.

## Declaring Pure Virtual Functions:

A **Pure Virtual Function** is a virtual function that is declared in a base class but has no implementation there. It is marked with `= 0` at the end of its declaration. Pure virtual functions serve as placeholders for derived classes to provide their specific implementations. Any class that has at least one pure virtual function becomes an abstract base class, and objects of such classes cannot be instantiated directly.

**Example:**

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

## Implementing Derived Classes:

Derived classes that inherit from an abstract base class must provide implementations for all the pure virtual functions declared in the base class. Otherwise, they also become abstract classes, and objects of these derived classes cannot be instantiated directly.

**Example:**

```cpp
class Triangle : public Shape {
private:
    double base;
    double height;

public:
    Triangle(double b, double h) : base(b), height(h) {}

    double area() override {
        return 0.5 * base * height;
    }
};
```

In this example, the `Triangle` class is derived from the `Shape` abstract base class and provides an implementation for the `area()` function.

In summary, abstract base classes with pure virtual functions are used to define a common interface that derived classes must adhere to. Derived classes provide specific implementations for the pure virtual functions, allowing you to work with a variety of objects through a unified interface. This approach enhances code flexibility, reusability, and maintainability.


# Pure virtual functions

A **pure virtual function** in C++ is a virtual function declared in a base class without providing any implementation in that base class. It is indicated by appending `= 0` to the end of the function declaration. A class containing at least one pure virtual function becomes an **abstract class**, and objects of abstract classes cannot be instantiated directly. Instead, they serve as blueprints for derived classes to provide their specific implementations of the pure virtual functions.

Here's a detailed explanation of pure virtual functions:

1. **Declaring a Pure Virtual Function:**
   To declare a pure virtual function, you use the `virtual` keyword followed by the function's return type, function name, and parameters. You then add `= 0` at the end of the function declaration to indicate that the function is pure virtual and doesn't have an implementation in the base class.

   ```cpp
   class AbstractBase {
   public:
       virtual void pureVirtualFunction() = 0; // Pure virtual function
   };
   ```

2. **Abstract Base Class:**
   When a class contains at least one pure virtual function, it becomes an abstract base class. Objects of abstract classes cannot be created directly because the class lacks implementations for some of its functions. Abstract base classes serve as interfaces, defining a contract that derived classes must fulfill by providing implementations for the pure virtual functions.

3. **Derived Class Implementations:**
   Derived classes that inherit from an abstract base class must provide implementations for all the pure virtual functions defined in the base class. This ensures that objects of derived classes can be instantiated and used. The syntax for overriding a pure virtual function is the same as overriding a regular virtual function.

   ```cpp
   class ConcreteDerived : public AbstractBase {
   public:
       void pureVirtualFunction() override {
           // Implementation for the pure virtual function
       }
   };
   ```

4. **Creating Objects:**
   You cannot create objects of abstract classes directly because they have incomplete implementations due to the presence of pure virtual functions. However, you can create objects of derived classes that provide implementations for all the pure virtual functions.

   ```cpp
   AbstractBase* ptr; // OK, pointer to abstract base class
   ConcreteDerived concreteObj; // OK, object of derived class
   ptr = &concreteObj; // Assigning derived class object to abstract base class pointer
   ptr->pureVirtualFunction(); // Calls the overridden function in the derived class
   ```

Using pure virtual functions and abstract base classes, you can define common interfaces and enforce specific behavior that derived classes must adhere to. This enables you to write more generic code that can work with a variety of objects through a unified interface, promoting code reusability and maintainability.