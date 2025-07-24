//* Higher Order Function
// Register ->success: ----> Login ->success: ---->Thank you

// callback function
// const Register = (apple) => {
//   setTimeout(() => {
//     console.log("Please Register");
//     apple();
//   }, 5000);
// };

// const Login = (mango) => {
//   setTimeout(() => {
//     console.log("Please Login");
//     mango();
//   }, 3000);
// };

// const Thankyou = () => {
//   setTimeout(() => {
//     console.log("Thank You");
//   });
// };

// Register(function () {
//   Login(function () {
//     Thankyou();
//   });
// });

const Register = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Please Register");
      resolve("Successfull");
    }, 3000);
  });
};

Register().then((data) => {
  console.log(data);
});
