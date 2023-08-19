# Polymorphism in standard libraries

Certainly, let's explore how polymorphism is used in C++ standard libraries, particularly in polymorphic containers, `std::function` and function objects, and using polymorphism in algorithms.

## Polymorphic Containers (e.g., `std::vector<base*>`):

Polymorphic containers in C++ standard libraries are typically used to store objects of different derived classes under a common base class interface. This allows you to work with a collection of objects in a unified manner, even though they have different types.

**Example: Using `std::vector` of Pointers:**

```cpp
#include <iostream>
#include <vector>

class Shape {
public:
    virtual void draw() const {
        std::cout << "Drawing a shape." << std::endl;
    }
};

class Circle : public Shape {
public:
    void draw() const override {
        std::cout << "Drawing a circle." << std::endl;
    }
};

class Triangle : public Shape {
public:
    void draw() const override {
        std::cout << "Drawing a triangle." << std::endl;
    }
};

int main() {
    std::vector<Shape*> shapes;
    shapes.push_back(new Circle());
    shapes.push_back(new Triangle());

    for (const auto& shape : shapes) {
        shape->draw(); // Calls the appropriate draw() based on the object type
    }

    // Clean up dynamically allocated objects
    for (auto shape : shapes) {
        delete shape;
    }

    return 0;
}
```

In this example, a `std::vector` of pointers to `Shape` objects is used to store instances of different derived classes (`Circle` and `Triangle`). The objects are accessed through their base class pointer, demonstrating polymorphic behavior.

## `std::function` and Function Objects:

The `std::function` template class in the C++ standard library allows you to store and manipulate functions, function pointers, and function-like objects in a type-safe manner. This is particularly useful when you want to achieve polymorphic behavior with callable entities.

**Example: Using `std::function` with Lambdas:**

```cpp
#include <iostream>
#include <functional>

void printHello() {
    std::cout << "Hello, ";
}

void printWorld() {
    std::cout << "world!" << std::endl;
}

int main() {
    std::function<void()> func1 = printHello;
    std::function<void()> func2 = printWorld;

    func1(); // Calls printHello()
    func2(); // Calls printWorld()

    return 0;
}
```

In this example, `std::function` is used to store function pointers and achieve polymorphic behavior. The code demonstrates how you can store and call different functions using the same `std::function` interface.

## Using Polymorphism in Algorithms (e.g., `std::sort`):

C++ standard algorithms often use polymorphism to operate on user-defined types in a generic way. These algorithms work seamlessly with different types through polymorphism and operator overloads.

**Example: Using `std::sort` with Custom Comparators:**

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

class Person {
public:
    Person(std::string n, int a) : name(n), age(a) {}
    std::string getName() const { return name; }
    int getAge() const { return age; }

private:
    std::string name;
    int age;
};

bool ageComparator(const Person& p1, const Person& p2) {
    return p1.getAge() < p2.getAge();
}

int main() {
    std::vector<Person> people = { {"Alice", 30}, {"Bob", 25}, {"Charlie", 40} };

    std::sort(people.begin(), people.end(), ageComparator);

    for (const auto& person : people) {
        std::cout << person.getName() << " - " << person.getAge() << std::endl;
    }

    return 0;
}
```

In this example, `std::sort` is used to sort a vector of `Person` objects based on their ages. The `ageComparator` function is used as a custom comparator, demonstrating polymorphic behavior in the context of the `std::sort` algorithm.

In summary, C++ standard libraries make extensive use of polymorphism to provide generic and flexible functionality. Polymorphic containers, `std::function`, function objects, and algorithms such as `std::sort` allow you to work with objects of different types in a unified manner, promoting code reusability and maintainability.