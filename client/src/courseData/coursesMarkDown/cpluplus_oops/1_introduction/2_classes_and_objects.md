# Defining Classes and Objects in C++

In the realm of object-oriented programming (OOP), classes and objects form the cornerstone of modeling real-world concepts within software. A class acts as a blueprint, outlining the structure and behavior that objects of that class will possess. Let's explore in depth how to define classes and create objects in C++.




# Defining Classes and Objects in C++

In object-oriented programming, classes and objects are used to model and structure code based on real-world entities. Let's break down the key concepts:

## Class
A class is a blueprint or template that defines the structure and behavior of objects. It encapsulates attributes (data members) and behaviors (member functions) that objects of the class will possess.

Example:
```cpp
class Car {
public:
    std::string make;
    std::string model;
    int year;
    double price;

    void displayInfo() {
        std::cout << "Make: " << make << std::endl;
        std::cout << "Model: " << model << std::endl;
        std::cout << "Year: " << year << std::endl;
        std::cout << "Price: $" << price << std::endl;
    }
};
```

**Object:** An object is an instance of a class. It is a concrete entity created based on the class blueprint. Objects encapsulate data and provide a way to access and manipulate that data through member functions.

Example:
```cpp
int main() {
    Car myCar;  // Creating an object of the Car class

    // Assigning values to object attributes
    myCar.make = "Toyota";
    myCar.model = "Camry";
    myCar.year = 2022;
    myCar.price = 25000.0;

    // Accessing a member function to display car information
    myCar.displayInfo();

    return 0;
}
```

**Attributes (Data Members):** Attributes, also known as data members or instance variables, represent the properties or characteristics of an object. They store data that describes the object's state.

Example:
```cpp
class Student {
public:
    std::string name;   // Attribute to store student's name
    int age;            // Attribute to store student's age
};
```

**Methods (Member Functions):** Methods are member functions defined within a class that specify the behavior of objects. They operate on the object's data members and can perform various tasks.

Example:
```cpp
class Circle {
public:
    double radius;

    // Member function to calculate the area of the circle
    double calculateArea() {
        return 3.14 * radius * radius;
    }
};
```

**Constructor:** A constructor is a special member function that is automatically called when an object is created. It initializes the object's attributes and prepares it for use.

Example:
```cpp
class Book {
public:
    std::string title;
    std::string author;
    int year;

    // Constructor to initialize attributes
    Book(const std::string& t, const std::string& a, int y) : title(t), author(a), year(y) {}
};
```

By understanding these fundamental concepts, you can effectively define classes and create objects in C++. These concepts serve as the foundation for building organized and modular code that accurately represents real-world entities.
