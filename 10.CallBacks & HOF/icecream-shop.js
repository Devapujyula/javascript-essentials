let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts", "cashew"],
};

// Function 1
let order = (fruit_name, call_production) => {
  setTimeout(function () {
    console.log(`${stocks.Fruits[fruit_name]} was selected`);

    // Order placed. Call production to start
    call_production();
  }, 2000);
};

// Function 2
let production = () => {
  console.log("Production has started");
};

// To run the test, we'll call the order function. And we'll add the second function named production as its argument.
// name 👇 of our second function
// order(production);

// Trigger 👇
order(0, production);
