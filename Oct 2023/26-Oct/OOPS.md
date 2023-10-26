Object-Oriented Programming Concepts

Object:
    Real world object: Car, Bike...
    In programming: Collection of data
    Eg. let human = {
        "name": "John",     // property
        "age": 25,
        "gender": "Male",
        "height": "178cm",
        "weight": "75kg"
    }           // object

Classes: template for methods/function & variables.

Function/method:
function sum(a, b) {
    // some code
}

Class members:  1. Member functions (method/function)
                2. Members/Property          (variables)


-----------------------------------

How to define a class?

// class name should be written in Pascal format
Class Human {
    // first declare members/properties
    let name;
    let age;
    let gender;

    // member functions/method

    // constructor is mandatory
    constructor(name, age, gender) {
        // mainly used for initialization of its members
        this.name = name;
        this.age = age;
        this.gender = gender;

        // "this" => instance of the class itself
    }

    // user defined functions
    print() {
        console.log("Name is: " + this.name);
        console.log("Age is: " + this.age);
        console.log("Gender is: " + this.gender);
    }
}

// Object declaration. Use "new" keyword followed by the Class name
// As soon as the object of a class is created, the constructor of the class gets called
let person1 = new Human("John", 35, "Male");

// method of a class must be called using the object of the class using the dot (.) operator

person2.print();

let person2 = new Human("Riya", 27, "Female");
