# Intro to Inheritance

Inheritance is a fundamental concept in object-oriented programming (OOP) that allows a new class to inherit properties and behaviors (data members and member functions) from an existing class. The existing class is known as the base class, parent class, or superclass, while the new class is referred to as the derived class or subclass. Inheritance promotes code reusability, hierarchy creation, and the organization of related classes.

# Benefits of Inheritance:

1. **Code Reusability:** Inheritance enables the reuse of code from an existing class. The derived class inherits data members and member functions from the base class, reducing the need to duplicate code.

2. **Extensibility:** Derived classes can extend or modify the behavior of the base class. New attributes and methods can be added to the derived class without affecting the base class.

3. **Hierarchy Creation:** Inheritance allows the creation of a hierarchy of classes, where more specialized classes (derived classes) inherit from more general classes (base classes). This hierarchical structure reflects real-world relationships.

4. **Modularity:** By dividing classes into base and derived classes, the code becomes more modular and easier to manage. Changes made in the base class can be automatically propagated to derived classes.

5. **Polymorphism:** Inheritance facilitates polymorphism, where objects of different derived classes can be treated as objects of the base class. This promotes flexibility in function calls and enhances code extensibility.

# Reusing Code with Inheritance:

Consider a simple example involving the concept of inheritance: a vehicle hierarchy consisting of a base class `Vehicle` and two derived classes `Car` and `Bicycle`.

```cpp
class Vehicle {
protected:
    int wheels;

public:
    Vehicle(int w) : wheels(w) {}

    void displayWheels() {
        std::cout << "Number of wheels: " << wheels << std::endl;
    }
};

class Car : public Vehicle {
public:
    Car() : Vehicle(4) {}

    void drive() {
        std::cout << "Driving the car." << std::endl;
    }
};

class Bicycle : public Vehicle {
public:
    Bicycle() : Vehicle(2) {}

    void pedal() {
        std::cout << "Pedaling the bicycle." << std::endl;
    }
};
```

In this example, the `Vehicle` class is the base class with a data member `wheels` and a member function `displayWheels()`. The derived classes `Car` and `Bicycle` inherit from the `Vehicle` class.

Now, let's see how code reusability and hierarchy creation are achieved:

```cpp
int main() {
    Car myCar;
    Bicycle myBicycle;

    myCar.displayWheels();   // Output: Number of wheels: 4
    myCar.drive();           // Output: Driving the car.

    myBicycle.displayWheels();// Output: Number of wheels: 2
    myBicycle.pedal();       // Output: Pedaling the bicycle.

    return 0;
}
```

In this example, the `Car` and `Bicycle` classes inherit the `displayWheels()` method from the `Vehicle` class. This demonstrates code reusability, as the same method is used in both derived classes without duplication.

Additionally, the hierarchy created by inheritance allows us to treat `myCar` and `myBicycle` objects as instances of the base class `Vehicle`. This demonstrates the benefits of hierarchy creation and polymorphism.

In conclusion, inheritance is a powerful concept in OOP that fosters code reusability, hierarchy creation, and the organization of classes. It enables the creation of more specialized classes while maintaining a relationship with their general counterparts.