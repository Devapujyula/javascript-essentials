// Array Properties

let fruitNames = ["Banana", "Apple", "Mango", "Strawberry", "Orange"];
console.log(fruitNames);

// length
console.log(fruitNames.length);
console.log(fruitNames.length - 1);
console.log(fruitNames[fruitNames.length - 1]);

let firstName = ["Prakash", "Sagar", "Lucky"];
let allNames = fruitNames.concat(firstName);
console.log(allNames);

console.log(allNames.reverse());

allNames.push("Grapes");
console.log(allNames);

allNames.unshift("Kanna");
console.log(allNames);

allNames.shift();
console.log(allNames);

allNames.pop();
console.log(allNames);
