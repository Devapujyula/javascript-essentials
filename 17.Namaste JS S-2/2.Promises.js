const cart = ["shoes", "pants", "kurthi"];

// createOrder(cart); //orderId

// createOrder(cart, function () {
//  proceedToPayment(OrderId);
// });

// So ow to handle the 2 problems with callbacks
// 1. Callback Hell
// 2. Inversion of control

const promise = createOrder(cart);
// promise is simply an object
// {data: undefined}

// api.createOrder(cart, function () {
//   api.proceedToPayment(function () {
//     api.showOrderSummary(function () {
//       api.udateWallet();
//     });
//   });
// });

createOrder(cart)
  .then(function (OrderId) {
    return proceedToPayment(OrderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (paymentInfo) {
    return updateWalletBalance(paymentInfo);
  });

// Another way of writing the Promises using Arrow function

createOrder(cart)
  .then((OrderId) => proceedToPayment(OrderId))
  .then((paymentInfo) => showOrderSummary(paymentInfo))
  .then((paymentInfo) => updateWalletBalance(paymentInfo));

// const GITHUB_API = "https://github.com/Devapujyula";

// const user = fetch(GITHUB_API);

// console.log(user);
