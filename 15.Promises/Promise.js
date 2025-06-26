// creating Your Own Promises
// Promises are the new style of async code that you'll see used in modern javaScript.

var myPromise = new Promise((resolveFunction, rejectedFunction) => {
  // myPromise => Async task
  // resolveFunction => A function called on promise resolve
  // rejectFunction => A function called on promise rejection
  // resolveFunction and rejectFunction both Executor functions
});

// creating a promise
// when resolve is called, callback inside then() will be executed  resolve() -----> then()
const myOwnPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("1 Second completed");
    }, 1000);
  });
};
console.log(myOwnPromise());
myOwnPromise().then((fromResolve) => {
  console.log(fromResolve);
});

// Accessing Arguments from resolve
var myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise Resolved");
    }, 1000);
  });
};

myPromise().then((fromResolve) => {
  console.log(fromResolve);
});

// Accessing Arguments from Reject
// When reject() is called, callback inside catch() will be executed reject() -----> catch()
var myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Promise Rejected");
    }, 2000);
  });
};
myPromise()
  .then((fromResolve) => {
    console.log(fromResolve);
  })
  .catch((fromReject) => {
    console.log(fromReject);
  });
