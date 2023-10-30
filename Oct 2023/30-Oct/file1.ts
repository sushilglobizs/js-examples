let n: number;

let stuName: string;
stuName = "John";

let isHappy: boolean;

isHappy = false;

let x: number[];

x = [10];

let animal = "Zebra";
let age = 20;

let z: any;

z = 10;
z = "pp";
z=  [1,2,3];

let teacherNames: string[];
teacherNames = ['John', 'Paes', '12'];

let person = {
    "name": "John",
    "age": 20
}
console.log(person.name);   // inference

class Person {
    private name: string;
  
    public constructor(name: string, age: number, subjects: string[]) {
      this.name = name;
    }
  
    getName(): string {
      return this.name;
    }
}

let p = new Person('John', 23, ['23', 'll']);
console.log(p.getName());

// Functions
function myAge(): number {
    return 20;
}

// Arrow functions
// Just another way of writing functions

// arow function
let myAge2 = () => {
    return 20;
}
let myAge3 = () => 20 * 10;      // arrow function

let k = myAge2;

function sum(a: number, b: number): number {
    return a+b;
}
let total: number;
total = sum(10, 20);

let sum2 = (a:number,b:number):number => a+b;
