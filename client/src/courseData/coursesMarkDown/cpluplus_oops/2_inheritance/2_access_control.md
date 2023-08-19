# Access control

In C++, inheritance allows you to create new classes (derived classes) based on existing classes (base classes). During inheritance, you can control the accessibility of base class members in the derived class using three access specifiers: `public`, `private`, and `protected`. These access specifiers determine how the derived class can access the members inherited from the base class. Let's delve into each type of inheritance and its implications:

1. **Public Inheritance:**
   - When you inherit publicly, all public members of the base class become public members of the derived class.
   - Protected members of the base class become protected members of the derived class.
   - Private members of the base class are inaccessible in the derived class.
   - Public inheritance represents an "is-a" relationship, where the derived class is a specialized version of the base class.

```cpp
class Base {
public:
    int publicData;
    void publicFunction() {}
    
protected:
    int protectedData;
    void protectedFunction() {}
    
private:
    int privateData;
    void privateFunction() {}
};

class Derived : public Base {
    // Accessible:
    // publicData
    // publicFunction
    // protectedData
    // protectedFunction
    
    // Not accessible:
    // privateData
    // privateFunction
};
```

2. **Private Inheritance:**
   - All members of the base class become private members of the derived class.
   - Private inheritance represents an "implemented-in-terms-of" relationship, where the derived class uses the functionality of the base class but does not expose it.

```cpp
class Derived : private Base {
    // Accessible:
    // publicData (private in Derived)
    // publicFunction (private in Derived)
    // protectedData (private in Derived)
    // protectedFunction (private in Derived)
    
    // Not accessible:
    // privateData
    // privateFunction
};
```

3. **Protected Inheritance:**
   - All members of the base class become protected members of the derived class.
   - Protected inheritance is rarely used and is often less intuitive than public inheritance.

```cpp
class Derived : protected Base {
    // Accessible:
    // publicData (protected in Derived)
    // publicFunction (protected in Derived)
    // protectedData (protected in Derived)
    // protectedFunction (protected in Derived)
    
    // Not accessible:
    // privateData
    // privateFunction
};
```


- Public inheritance allows the derived class to access public and protected members of the base class as if they were its own.
- Private inheritance restricts access to all members of the base class to be private in the derived class.
- Protected inheritance gives the derived class access to protected and public members of the base class as protected members.

Choose the appropriate access specifier based on the desired relationship between the base and derived classes. Public inheritance is the most common and represents an "is-a" relationship, while private and protected inheritance are used in specific scenarios.

# Access Modifiers

In C++, access modifiers play a crucial role in controlling the visibility and accessibility of members (variables and functions) of a base class in its derived classes. Access modifiers determine how these members can be accessed by the derived class and outside the class hierarchy. There are three main access modifiers: `public`, `protected`, and `private`. Let's explore how each access modifier behaves in the context of derived classes:

1. **Public Inheritance:**
   - When a class is inherited publicly, the public members of the base class become public members of the derived class.
   - The protected members of the base class become protected members of the derived class.
   - The private members of the base class are inaccessible in the derived class.
   - Outside the class hierarchy, public members of the base class remain public, and protected members become inaccessible.

```cpp
class Base {
public:
    int publicData;
    void publicFunction() {}
    
protected:
    int protectedData;
    void protectedFunction() {}
    
private:
    int privateData;
    void privateFunction() {}
};

class Derived : public Base {
public:
    void accessBaseMembers() {
        publicData = 1;         // Accessible
        protectedData = 2;     // Accessible
        // privateData = 3;     // Not accessible
        
        publicFunction();      // Accessible
        protectedFunction();  // Accessible
        // privateFunction();  // Not accessible
    }
};

int main() {
    Derived d;
    d.publicData = 10;         // Accessible
    // d.protectedData = 20;   // Not accessible
    // d.privateData = 30;     // Not accessible
    d.publicFunction();        // Accessible
    // d.protectedFunction();  // Not accessible
    // d.privateFunction();    // Not accessible
}
```

2. **Protected Inheritance:**
   - Protected inheritance behaves similarly to public inheritance, but with a difference in access levels.
   - The public members of the base class become protected members of the derived class.
   - The protected members of the base class also become protected members of the derived class.
   - Private members of the base class are inaccessible in the derived class.
   - Outside the class hierarchy, public and protected members of the base class become protected.

```cpp
class Derived : protected Base {
public:
    void accessBaseMembers() {
        publicData = 1;         // Accessible (as protected)
        protectedData = 2;     // Accessible (as protected)
        // privateData = 3;     // Not accessible
        
        publicFunction();      // Accessible (as protected)
        protectedFunction();  // Accessible (as protected)
        // privateFunction();  // Not accessible
    }
};

int main() {
    Derived d;
    // d.publicData = 10;     // Not accessible
    // d.protectedData = 20; // Not accessible
    // d.privateData = 30;   // Not accessible
    // d.publicFunction();    // Not accessible
    // d.protectedFunction(); // Not accessible
    // d.privateFunction();   // Not accessible
}
```

3. **Private Inheritance:**
   - Private inheritance makes all members of the base class private members of the derived class.
   - This means that derived classes can still access base class members, but they are treated as private members within the derived class itself.
   - Outside the class hierarchy, base class members become inaccessible.

```cpp
class Derived : private Base {
public:
    void accessBaseMembers() {
        publicData = 1;         // Accessible (as private)
        protectedData = 2;     // Accessible (as private)
        // privateData = 3;     // Not accessible
        
        publicFunction();      // Accessible (as private)
        protectedFunction();  // Accessible (as private)
        // privateFunction();  // Not accessible
    }
};

int main() {
    Derived d;
    // d.publicData = 10;     // Not accessible
    // d.protectedData = 20; // Not accessible
    // d.privateData = 30;   // Not accessible
    // d.publicFunction();    // Not accessible
    // d.protectedFunction(); // Not accessible
    // d.privateFunction();   // Not accessible
}
```

In conclusion, access modifiers in derived classes determine how the members of the base class are accessed within the derived class and outside the class hierarchy. The choice of access modifier depends on the desired relationship between the base and derived classes and the intended visibility of the inherited members.


# Friend Classes and Inheritance

In C++, a `friend` class is a class that is granted access to the private and protected members of another class. This feature can be used to establish a special relationship between two classes, allowing them to access each other's private and protected members. Friend classes can be particularly useful in situations involving inheritance, as they provide a way for base and derived classes to share certain members that would not normally be accessible.

Let's explore how friend classes and inheritance interact:

```cpp
class FriendClass {
public:
    void accessOtherClass(BaseClass& obj) {
        // Access private and protected members of BaseClass
        obj.privateMember = 42;
        obj.protectedMember = 100;
    }
};

class BaseClass {
private:
    int privateMember;
    
protected:
    int protectedMember;

    friend class FriendClass;  // Friend declaration
};

class DerivedClass : public BaseClass {
public:
    void modifyBaseMembers() {
        protectedMember = 200;  // Accessible from derived class
    }
};

int main() {
    BaseClass baseObj;
    DerivedClass derivedObj;

    FriendClass friendObj;
    friendObj.accessOtherClass(baseObj);  // Friend class accesses private and protected members

    derivedObj.modifyBaseMembers();  // Accesses protected member from the derived class
}
```

In the example above:

1. `FriendClass` is a class that is declared as a `friend` of `BaseClass`. This means that `FriendClass` has access to the private and protected members of `BaseClass`.

2. `BaseClass` has a private member `privateMember` and a protected member `protectedMember`.

3. `DerivedClass` is derived from `BaseClass` using public inheritance.

4. In the `main()` function, an object of `BaseClass` and `DerivedClass` is created, along with an object of `FriendClass`.

5. The `FriendClass` object `friendObj` accesses the private and protected members of the `BaseClass` object `baseObj` using the `accessOtherClass()` function.

6. The `DerivedClass` object `derivedObj` accesses the protected member `protectedMember` inherited from the `BaseClass` and modifies its value using the `modifyBaseMembers()` function.

Using friend classes in inheritance scenarios can provide controlled access to base class members in a derived class or other related classes. However, it's important to use friend classes carefully to avoid compromising the encapsulation and design principles of your classes.