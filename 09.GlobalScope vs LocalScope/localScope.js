// local Scope
// Cannot be access from outside code blocks
// if {} - NOT VAR

let firstName = "Prakash";
console.log(firstName);

function nameChange() {
  let firstName = "Satya";
  let lastName = "Sai";
  console.log(`Hey this is ${firstName} ${lastName}`);
  fullName = "I'm global variable";
}
nameChange();

console.log(firstName);

console.log(fullName);

if (true) {
}

console.log(`Hey this is ${firstName}`);
