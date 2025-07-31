/**
 * The fetch() function accepts two parameters:
 * 1. The URL to send the request to (this is a required parameter).
 * 2. The options to set in the request. You can set the request method here (this is an optional parameter).
 * Under the hood, the fetch() function returns a Promise, so you need to add the .then() and .catch() methods.
 * When the request returns a response, the then() method will be called. If the request returns an error, then the catch() method will be executed:
 */

//^ GET Request Using the fecth API
// fetch("https://jsonplaceholder.typicode.com/users/1").then((response) =>
//   console.log(response).catch((error) => console.log(error))
// );

// Here, you can see that the body property contains a ReadableStream. To use the ReadableStream in our JavaScript application, we need to convert it to call the json() method:

fetch("https://jsonplaceholder.typicode.com/users/1").then((response) =>
  response.json().then((data) => {
    document.querySelector("#user-name").textContent = data.name;
    document.querySelector("#user-email").textContent = data.email;
  })
);

// The json() method converts the ReadableStream into a JavaScript object. The data variable above will be printed as follows

//^ POST Request using the fetch API
fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application.json",
  },
  body: JSON.stringify({
    name: "Prakash Dsp",
    email: "prakash@gmail.com",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));

//^ PUT Request using fecth API
fetch("https://jsonplaceholder.typicode.com/users/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Prakash Devapujyula",
    email: "prakashdsp@gmail.com",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));

//^ PATCH Request using API
fetch("https://jsonplaceholder.typicode.com/users/1", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Nathan Sebhastian",
    username: "nsebhastian",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));

//^ DELETE Request using API
fetch("https://jsonplaceholder.typicode.com/users/1", {
  method: "DELETE",
})
  .then((response) => response.json())
  .then((data) => console.log(data));
