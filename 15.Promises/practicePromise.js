console.log("Start");

const myPromise = fetch("https://jsonplaceholder.typicode.com/users").then(
  (response) => {
    console.log(response);
  }
);
console.log(myPromise);

console.log("End");
