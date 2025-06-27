const cart = ["shoes", "Pants", "kurtha"];

const promise = createOrder(cart); //OrderId

promise.then(function () {
  proceedToPayment(orderId);
});

////////////////////////////
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // create order
    //validate cart
    // orderId

    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid!");
      reject(err);
    }
    // logic for create order
    const orderId = "1234";
    if (orderId) {
      resolve(orderId);
    }
  });

  return pr;
}
