# Runtime polymorphism

**Runtime Polymorphism**, also known as **Dynamic Polymorphism**, is a key feature of object-oriented programming that allows different classes to be treated as instances of their common base class, enabling the selection of appropriate methods to be executed based on the actual type of the object at runtime. This is achieved through the use of **virtual functions** and is central to the concept of polymorphism in C++.

Let's explore how runtime polymorphism works and its significance:

1. **Virtual Functions and Dynamic Binding:**
   In C++, when you declare a function as `virtual` in a base class, you indicate that the function can be overridden in derived classes. This enables dynamic method binding, where the actual function implementation to be executed is determined at runtime based on the object's actual type.

   ```cpp
   class Shape {
   public:
       virtual void draw() {
           // Base class implementation
       }
   };
   class Circle : public Shape {
   public:
       void draw() override {
           // Derived class implementation
       }
   };
   ```

2. **Polymorphic Behavior:**
   With runtime polymorphism, you can use pointers or references of the base class type to refer to objects of derived classes. When you call a virtual function using such a pointer or reference, the appropriate function implementation from the derived class is invoked at runtime.

   ```cpp
   Shape* shapePtr; // Base class pointer
   Circle circleObj; // Object of derived class
   shapePtr = &circleObj; // Assigning address of derived class object to base class pointer
   shapePtr->draw(); // Calls the overridden draw() in Circle class
   ```

3. **Late Binding:**
   Late binding is a key characteristic of runtime polymorphism. It means that the decision about which function to call is made at runtime, not compile time. The appropriate function to call is determined based on the actual type of the object, allowing for dynamic and context-specific behavior.

4. **Advantages of Runtime Polymorphism:**
   - Enables code to work with objects of different types in a uniform way, enhancing code flexibility and reusability.
   - Supports the creation of general-purpose functions that can operate on a variety of objects without needing specific knowledge of their implementations.
   - Allows for seamless extension of code with new derived classes that adhere to the same interface.

5. **Virtual Tables (vtables):**
   Compilers use virtual tables (vtables) to implement runtime polymorphism. Each class with at least one virtual function has its own vtable, which contains pointers to the virtual functions. When a virtual function is called, the vtable is consulted to find the appropriate function to execute.

In summary, runtime polymorphism in C++ is achieved through virtual functions and enables dynamic binding of methods based on the actual type of the object. This fundamental concept allows for more flexible and maintainable code by treating objects of different derived classes as instances of their common base class, leading to the selection of appropriate methods at runtime.


## Using Pointers and References:

In C++, pointers and references play a crucial role in achieving polymorphism and dynamic behavior. Pointers and references of the base class type allow you to work with objects of different derived classes using a common interface. This is a key component of runtime polymorphism.

**Example using Pointers:**

```cpp
class Shape {
public:
    virtual void draw() {
        // Base class implementation
    }
};

class Circle : public Shape {
public:
    void draw() override {
        // Derived class implementation
    }
};

int main() {
    Shape* shapePtr; // Pointer of base class type
    Circle circleObj; // Object of derived class
    shapePtr = &circleObj; // Assign derived class object to base class pointer
    shapePtr->draw(); // Calls the overridden draw() in Circle class
    return 0;
}
```

**Example using References:**

```cpp
void drawShape(const Shape& shape) {
    shape.draw(); // Calls the appropriate draw() based on object type
}

int main() {
    Circle circleObj;
    drawShape(circleObj); // Calls the overridden draw() in Circle class
    return 0;
}
```

## Dynamic Cast and Type Safety:

The `dynamic_cast` operator is used for safe downcasting (converting a base class pointer or reference to a derived class pointer or reference). It is typically used in scenarios where you have polymorphic classes and need to ensure type safety during downcasting.

**Example using dynamic_cast:**

```cpp
class Animal {
public:
    virtual void makeSound() {
        // Base class implementation
    }
};

class Dog : public Animal {
public:
    void makeSound() override {
        // Derived class implementation
    }
};

int main() {
    Animal* animalPtr = new Dog;
    Dog* dogPtr = dynamic_cast<Dog*>(animalPtr);
    
    if (dogPtr) {
        // Successfully casted, it's safe to use dogPtr
        dogPtr->makeSound(); // Calls the overridden makeSound() in Dog class
    } else {
        // Casting failed, dogPtr is nullptr
        // Handle the case where the cast is not possible
    }

    delete animalPtr;
    return 0;
}
```

The `dynamic_cast` operator performs a runtime type check to ensure that the downcast is valid. If the conversion is possible, it returns a valid pointer; otherwise, it returns a `nullptr`.

Using pointers and references with proper type casting through `dynamic_cast` helps ensure type safety and proper polymorphic behavior when working with object hierarchies. It's important to note that `dynamic_cast` should be used only when dealing with polymorphic classes (classes with at least one virtual function).