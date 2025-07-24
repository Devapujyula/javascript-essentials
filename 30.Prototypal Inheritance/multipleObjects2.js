/**  
 * & 3. Using JS Classes
 *^ class is a specialtype of function used for creating multiple objects
 synatx:
 class MyClass {
 constructor(property1, property2) {
 this.property1 = property1;
 this.property2 = property2;
 }
 method1() {....}
 method2() {....}
 }
 let myObject = new MyClass(property1, property2)
 * * The constructor method is a special method of a class for creating and initializing an object of that class
 */

//& creating a single object
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  displayFullName() {
    return this.firstName + " " + this.lastName;
  }
}
var person1 = new Person("Rohith", "Sharma");
console.log(person1);

// created another object for practice
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  displayFullName() {
    return this.firstName + " " + this.lastName;
  }
}

let student1 = new Student("Prakash", "Dsp");
console.log(student1);
console.log(student1.displayFullName());

//~ once check after knowing the difference between the constructor function and class with example and then proceed to the next section as ususal

//& class prototype
var person1 = new Person("Sachin", "Tendulkar");
console.log(person1);
console.log(Person.prototype);
console.log(Object.getPrototypeOf(person1));

// Inheritance in JS classes
//& Creating Animal Class
class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    return `${this.name} is eating!`;
  }

  makeSound() {
    return `${this.name} is shouting!`;
  }
}

let animal = new Animal("Gorilla");
console.log(animal);
console.log(animal.eat());
console.log(animal.makeSound());

// Inheritance is a mechanism by which a class inherits methods and properties from another class
//^ calling super() makes sure that SuperClass constructor() gets called and initilaizes the instance

//& creating Dog class
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  sniff() {
    return `${this.name} is sniffing`;
  }
}

let dog = new Dog("dog", "German Shepherd");
console.log(dog);
console.log(dog.sniff());
console.log(dog.eat());
console.log(dog.makeSound());

let someDog = new Dog("someDog", "German Shepherd");
console.log(someDog.eat());

//& creating Cat class
class Cat extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  knead() {
    return `${this.name} is kneading!`;
  }
}

let cat = new Cat("cat", "Persian Cat");
console.log(cat);
console.log(cat.knead());
console.log(cat.makeSound());

//* In class, this refers to the instance object
//& this sub Class
