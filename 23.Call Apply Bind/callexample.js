function sayHello() {
  console.log("Hello, " + this.name);
}

const person1 = { name: "Prakash" };
const person2 = { name: "Satya" };

sayHello.call(person1);
sayHello.call(person2);

function say(greeting, punctuation) {
  console.log(greeting + " ," + this.name + punctuation);
}

say.call(person1, "Hi", "!");
say.call(person2, "Hello", ".");

say.apply(person1, ["Hi", "!"]);
say.apply(person1, ["Hello", "."]);

const sayToAlice = say.bind(person1);
sayToAlice("Hello", "!");

const user1 = { name: "Prasanna" };

function showInfo(role) {
  console.log(`${this.name} is a ${role}`);
}

showInfo.call(user1, "Designer");
