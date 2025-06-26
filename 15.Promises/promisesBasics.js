/*
❌ The Problem (Before Promises): Callback Hell
In JavaScript, asynchronous operations (like fetching data or waiting for a file) don’t finish right away. Before Promises, developers used nested callbacks, which quickly became messy and hard to maintain — this is known as callback hell.

✅ The Solution: Promises
Promises make it easier to handle asynchronous code in a cleaner, more readable way.
 * Promise ia an Object and its a constructor function
 * Promise object takes a callback function
 * This object returns some data either sucess data or error informaion
 * A Promise is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
 * 🔸 States of a Promise
A Promise has three states:
Pending – initial state, neither fulfilled nor rejected.
Fulfilled – the operation completed successfully.
Rejected – the operation failed.


 */

// weather Example
function getWeather(location) {
  return new Promise((resolve, reject) => {
    if (location === "Delhi") {
      resolve("🌤️ Weather in Delhi: 32°C, Sunny");
    } else {
      reject("❌ Location not supported.");
    }
  }, 4000);
}

console.log("Fetching weather...");

getWeather("Noida")
  .then((data) => {
    console.log("✅ Success:", data);
  })
  .catch((err) => {
    console.log("❌ Error:", err);
  })
  .finally(() => {
    console.log("Done.");
  });
