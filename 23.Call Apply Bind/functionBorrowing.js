/**
 * Function borrowing is borrowing the function from an object rather than redefining it; but why should I do it. We can have a generic function and objects can use them further
 */

class Dog {
  constructor(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }
  tellUsAboutYourSelf() {
    return `My name is ${this.name}. I am a ${this.breed} and I am ${this.age} years old.`;
  }

  woof() {
    return "WOOF!!!";
  }
}

let fido = new Dog("Fido", 3, "dachshund");
fido.tellUsAboutYourSelf(); // calling the function
console.log(fido.tellUsAboutYourSelf());

//=> 'My name is Fido. I am a dachshund and I am 3 years old.'

class Cat {
  constructor(name, age, breed) {
    (this.name = name), (this.age = age), (this.breed = breed);
  }

  meow() {
    return " MEOW!!!";
  }
}

let sparkles = new Cat("Sparkles", 5, "Siamese");

// console.log(sparkles.tellUsAboutYourSelf());
//=>TypeError: sparkles.tellUsAboutYourSelf is not a function

// We’ve created a Cat object with the same properties as our Dog object, but our instance of Cat, which is saved into the variable sparkles, isn’t able to tell us about itself. We could refactor our code so that the class Cat inherits from the class Dog, but in that scenario, all of our Cat objects would be able to “woof,” which doesn’t seem appropriate or necessary. Enter: function borrowing.

/**
 * Function borrowing allows us to use the methods of one object on a different object without having to make a copy of that method and maintain it in two separate places. It is accomplished through the use of .call(), .apply(), or .bind(), all of which exist to explicitly set this on the method we are borrowing.
 * 
 * 
 * 
 * 
 * 
 * What’s the point?
The central benefit of function borrowing is that it allows you to forego inheritance. There’s no reason for you to force a class to inherit from another if you’re only doing so in order to grant instances of the child class access to a single method. And as I mentioned above, function borrowing keeps you from having to write the same function twice and maintain it in two places, which reduces the risk of bugs.

The most important practical application of function borrowing pertains to native methods, and specifically, to Array.prototype.slice. There are several list-like data structures that aren’t arrays, and it’s useful to be able to treat them as arrays and operate on them as such. One of the most prevalent list-like data structures that isn’t an array is arguments. The arguments object represents all the parameters passed in to a given (non-arrow) function.
 */
