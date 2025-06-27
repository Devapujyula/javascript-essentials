console.log("Namaste");

setTimeout(function () {
  console.log("JavaScript");
}, 3000);

console.log("Season 2");

const cart = ["TV", "Shoes", "Shirts", "Pants"];

// craete an order
// proceed to payments
// orders summary
// update the wallet

// This is pyramid of DOM Example

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.udateWallet();
    });
  });
});

// Inversion of Control

api.createOrder(cart, function () {
  api.proceedToPayment();
});
