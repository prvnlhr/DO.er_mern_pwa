## Abstract Classes:

An **abstract class** is a class that cannot be instantiated on its own but is meant to serve as a blueprint for other classes. It may contain abstract methods (methods without implementation) that must be overridden by derived classes. Abstract classes are used to define a common structure and behavior for a group of related classes while allowing specific implementations to be provided by derived classes.

**Example: Shape Hierarchy with Abstract Class:**

```cpp
#include <iostream>

class Shape {
public:
    virtual double area() const = 0; // Pure virtual method
    virtual void printInfo() const {
        std::cout << "This is a shape." << std::endl;
    }
};

class Circle : public Shape {
private:
    double radius;

public:
    Circle(double r) : radius(r) {}

    double area() const override {
        return 3.14159 * radius * radius;
    }

    void printInfo() const override {
        std::cout << "This is a circle." << std::endl;
    }
};

int main() {
    Circle circle(5.0);

    Shape* shapePtr = &circle;
    shapePtr->printInfo(); // Calls the overridden printInfo() in Circle class

    std::cout << "Area: " << shapePtr->area() << std::endl; // Calls the overridden area() in Circle class

    return 0;
}
```

In this example, the `Shape` class is an abstract class with a pure virtual method `area()`. The `Circle` class is derived from `Shape` and provides an implementation for the `area()` method. An abstract class provides a common interface (in this case, `area()`) that derived classes must implement.

## Interfaces:

An **interface** in C++ is a class containing only pure virtual methods. It defines a contract that other classes must follow by implementing all the methods declared in the interface. Interfaces provide a way to achieve multiple inheritance of behavior without inheriting implementation details.

**Example: Interface for Printable Objects:**

```cpp
#include <iostream>

class Printable {
public:
    virtual void print() const = 0; // Pure virtual method
};

class Book : public Printable {
private:
    std::string title;

public:
    Book(const std::string& t) : title(t) {}

    void print() const override {
        std::cout << "Book Title: " << title << std::endl;
    }
};

class Magazine : public Printable {
private:
    std::string name;

public:
    Magazine(const std::string& n) : name(n) {}

    void print() const override {
        std::cout << "Magazine Name: " << name << std::endl;
    }
};

int main() {
    Book book("The Great Gatsby");
    Magazine magazine("National Geographic");

    Printable* printable1 = &book;
    Printable* printable2 = &magazine;

    printable1->print(); // Calls the overridden print() in Book class
    printable2->print(); // Calls the overridden print() in Magazine class

    return 0;
}
```

In this example, the `Printable` class is an interface with a pure virtual method `print()`. Both `Book` and `Magazine` classes implement the `Printable` interface by providing their own implementations of the `print()` method. An interface defines a contract that ensures any class implementing it provides specific behavior.

## Abstract Classes vs. Interfaces:

1. **Abstract Classes:**
   - Can have both concrete and abstract methods.
   - Can have member variables.
   - Provide a partial implementation and allow code reuse.
   - Allow single inheritance.

2. **Interfaces:**
   - Have only pure virtual methods.
   - Cannot have member variables (prior to C++20).
   - Define a contract for behavior and ensure adherence.
   - Allow multiple inheritance of behavior.

In both cases, abstract classes and interfaces facilitate the creation of well-structured, maintainable, and extensible code by promoting the separation of concerns, code reusability, and adherence to predefined behavior contracts.