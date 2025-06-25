// This is Synchronous Code
console.log("Start");
console.log("Middle");
console.log("End");

// Asynchronous Code
console.log("Start");
setTimeout(() => {
  console.log("Inside timeout");
}, 1000);

console.log("End");

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("✅ Data from async/await");
    }, 1000);
  });
}

async function fetchDataWithAsyncAwait() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error("Error :", error);
  }
}

fetchDataWithAsyncAwait();
