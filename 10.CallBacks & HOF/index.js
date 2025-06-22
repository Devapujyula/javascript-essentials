function displayGreeting(displayName) {
  console.log("Hello");
  displayName();
  console.log("Good Morning!");
}

displayGreeting(function () {
  console.log("Prakash");
});

function Greeting(greet) {
  console.log("Hello");
  greet();
  console.log("Welcome to JP Morgan Onboarding");
}

Greeting(function () {
  console.log("Sowmya");
});

let displayRam = function () {
  console.log("Ram");
};
displayGreeting(displayRam);
