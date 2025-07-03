function withdrawMoney() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("💸 Money withdrawn from ATM");
      resolve();
    }, 1000);
  });
}

function orderPizza() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("🍕 Pizza ordered");
      resolve();
    }, 2000);
  });
}

function eatPizza() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("😋 Pizza eaten");
      resolve();
    }, 3000);
  });
}

function goToCinema() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("🎬 Went to the cinema");
      resolve();
    }, 4000);
  });
}

function wentHome() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("🏡 Went to Home");
      resolve();
    }, 5000);
  });
}

// Cahining Promises
withdrawMoney()
  .then(orderPizza)
  .then(eatPizza)
  .then(goToCinema)
  .then(wentHome)
  .then(() => {
    console.log("🌙 Finally went to sleep!");
  });
