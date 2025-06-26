const url = "https://apis.ccbp.in/jokes/random";
const responsePromise = fetch(url);
responsePromise
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

responsePromise.catch((error) => {
  console.log(error);
});

//**
// Promise Example for review
// const url = "https://apis.ccbp.in/jokes/random";
// let responsePromise = fetch(url);

// responsePromise
// .then((response) => {
//    return response.json();
// })
// .then((data) => {
//     console.log(data)
// })
// .catch((error) => {
//     console.log(error)
// })

//  */
