/**
 * 2 Rules :
 * Rule 1 : Use async keyword before the function only if it is performing async operations
 * Rule 2 : should use await inside async function only
 */

// Fetch with Async and Await
const URL = "https://jsonplaceholder.typicode.com/users";

var doNetworkCall = async () => {
  const response = await fetch(URL);
  const jsonData = await response.json();
  console.log(jsonData);
};
doNetworkCall();

// Error handling with async and Await
var doNetworkCall = async () => {
  try {
    const response = await fetch(URL);
    const jsonData = await response.json();
    console.log(jsonData);
  } catch (err) {
    console.log(err);
  }
};
doNetworkCall();

// Async function always returns promise
const asyncPromise = doNetworkCall();
console.log(asyncPromise);
