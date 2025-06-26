console.log("Start");

function drawMoney(orderPizza) {
  console.log("I went to ATM");

  setTimeout(() => {
    let money = 1000;
    console.log("I have withdrawn money", money);

    // If we have money we can order Pizza so, we created OrderPizza function
    orderPizza(money, function eat(food) {
      console.log("I am happly eating", food);
    }); // callback function
  }, 5000);
}

// calling function in the created function
drawMoney(function orderPizza(money, callMeForEat) {
  console.log("I just ordered Pizza");

  setTimeout(() => {
    if (money >= 500) {
      let foodItem = "Pizza";
      console.log("I got my food", foodItem);

      // we can call eat
      callMeForEat(foodItem);
    }
  }, 7000);
});

console.log("End");
