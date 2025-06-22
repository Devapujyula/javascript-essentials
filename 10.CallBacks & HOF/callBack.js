// Callback functions, HOF, Functions as First Class Objects/Citizens

// Functions are first class objects - stored in variable (expression), passed as an argument to another function, return from the function (closure)

// HOF - accepts another functions as an argument or return another function as a result

// Callback Function - passed to another function as an argument and executed inside that function

// Function - 1
// function greetMorning(firstName) {
//   const myName = "Prakash";
//   console.log(`Good Morning ${firstName} My name is ${myName}`);
// }

// Function - 2
// function greetAfternoon(firstName) {
//   const myName = "Sowmya";
//   console.log(`Good Afternnon ${firstName} My name is ${myName}`);
// }

// Function - 1 called/ executed
// greetMorning("Satya");

// Function - 2 called/executed
// greetAfternoon("Chitti");

// Universal Function

function greet(firstName, callBack) {
  const myName = "Prakash";
  console.log(` ${firstName}, My name is ${myName}`);
  callBack(firstName);
}

function morning(firstName) {
  console.log(`Good Morning ${firstName}`);

  return `Good Morning ${firstName}`;
}

greet("Satya", morning);
greet("Chitti", morning);

console.log("Before callback...!");

function fetchDataWithCallback(callback) {
  setTimeout(() => {
    console.log("✅ Data from callback");
  }, 2000);
}

fetchDataWithCallback(function (result) {
  console.log(result);
});
