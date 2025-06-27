/**
 * call method in JavaScript
 * The call() method is a predefined JS method.
 * It can be used to invoke (call) a method with an owner object as an argument (parameter)
 * with call(), an object can use a method belonging to another object
 * - function call
 * - Object method call
 */

function sum(a, b) {
  return a + b;
}

console.log(sum(2, 4));
console.log(sum.call(this, 10, 20));

const Animal = {
  name: "Animal",
  display: function () {
    return `this is animal`;
  },
};

const Dog = {
  name: "dog",
};

console.log(Animal.display());
