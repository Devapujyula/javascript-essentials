function withdrawMoney() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        console.log("💸 Money withdrawn from ATM");
        resolve("Money withdrawn");
      } else {
        reject("ATM Error : Failet to withdraw money");
      }
    }, 1000);
  });
}

function orderPizza() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        console.log("🍕 Pizza ordered");
        resolve("Pizza Ordered");
      } else {
        reject("Restaurant closed");
      }
    }, 2000);
  });
}

function eatPizza() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        console.log("😋 Pizza eaten");
        resolve("Pizza Eaten");
      } else {
        reject("Pizza fell on the floor 😢");
      }
    }, 3000);
  });
}

function goToCinema() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        console.log("🎬 Went to the cinema");
        resolve("Movie Watched");
      } else {
        reject("Missed the movie");
      }
    }, 4000);
  });
}

function wentHome() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        console.log("🏡 Went to Home");
        resolve("Reached Home");
      } else {
        reject("Got lost on the way home");
      }
    }, 5000);
  });
}

// 🧠 Chaining with .then() and handling errors with .catch()
withdrawMoney()
  .then((res) => {
    console.log("✅", res);
    return orderPizza();
  })
  .then((res) => {
    console.log("✅", res);
    return eatPizza();
  })
  .then((res) => {
    console.log("✅", res);
    return goToCinema();
  })
  .then((res) => {
    console.log("✅", res);
    return wentHome();
  })
  .then((res) => {
    console.log("✅", res);
    console.log("🌙 Finally went to sleep!");
  })
  .catch((err) => {
    console.log("❌ ERROR:", err);
  });
