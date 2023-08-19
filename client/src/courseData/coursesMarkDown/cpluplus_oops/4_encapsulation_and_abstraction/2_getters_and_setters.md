# Getters and setters 

**Getters and setters** are methods used in object-oriented programming to provide controlled access to the private data members of a class. They allow external code to retrieve (get) or modify (set) the values of private data members, while encapsulating the implementation details of the class's internal data. Getters and setters play a crucial role in implementing data hiding and encapsulation principles.

Let's dive deeper into the purpose and benefits of using getters and setters:

## Getters:

**Getters** are methods that provide read-only access to private data members. They allow external code to retrieve the values of data members without directly accessing them. Getters are usually defined with the `const` modifier to indicate that they do not modify the state of the object.

Benefits of using getters:
- Controlled Access: Getters enable controlled access to private data, preventing external code from directly modifying the data.
- Data Validation: Getters can enforce validation and constraints before returning the data, ensuring that valid values are accessed.
- Abstraction: Getters abstract the details of data storage and implementation, allowing you to change the internal representation without affecting external code.

Example of a getter:
```cpp
class Student {
private:
    std::string name;

public:
    // ...

    std::string getName() const {
        return name;
    }
};
```

## Setters:

**Setters** are methods that provide write access to private data members. They allow external code to modify the values of data members with controlled behavior. Setters are responsible for validating the input data and maintaining the integrity of the object's state.

Benefits of using setters:
- Controlled Modification: Setters enable controlled modification of private data, ensuring that modifications adhere to specific rules and validation criteria.
- Data Validation: Setters can validate incoming data and prevent invalid or inconsistent values from being set.
- Abstraction: Setters abstract the details of data storage and validation, providing a unified interface for modifying data.

Example of a setter:
```cpp
class Student {
private:
    int age;

public:
    // ...

    void setAge(int a) {
        if (a >= 0) {
            age = a;
        }
    }
};
```

By using getters and setters, you ensure that direct access to private data is limited, and all interactions with the data are mediated through controlled methods. This enhances data integrity, security, and maintainability in your code. It's important to note that not all data members need getters and setters; they are most useful for data that requires validation, data transformation, or abstraction of implementation details.