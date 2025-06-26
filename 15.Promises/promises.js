/**
 *A Promise is an object that represents the future result of an asynchronous operation.
 It promises to give you a value:
✅ Resolved (success)

❌ Rejected (failure)

⏳ Or still pending

| Feature        | Callbacks | Promises            |
| -------------- | --------- | ------------------- |
| Nesting        | Messy     | Cleaner `.then()`   |
| Error handling | Scattered | Central `.catch()`  |
| Chaining       | Complex   | Easy with `.then()` |
| Debugging      | Difficult | Easier              |

 */

// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = false;
    if (success) {
      resolve("✅ Success!");
    } else {
      reject("❌ Error occurred!");
    }
  }, 1000);
});

// Consuming a Promise
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received!");
    }, 2000);
  });
}

getData().then((result) => {
  console.log(result);
});

// function fetchDataWithCallback(callback) {
//   setTimeout(() => {
//     console.log("✅ Data from callback");
//   }, 2000);
// }

// fetchDataWithCallback(function (result) {
//   console.log(result);
// });
