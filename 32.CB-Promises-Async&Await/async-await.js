function withdrawMoney() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        console.log("💸 Money withdrawn from ATM");
        resolve("Money Withdrawn");
      } else {
        reject("ATM Error: Failed to withdraw money");
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
        reject("Pizza fell on the floor");
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
        reject("Lost on the way home");
      }
    }, 5000);
  });
}

// ✅ Main flow using async/await
async function fullDayPlan() {
  try {
    const step1 = await withdrawMoney();
    console.log("✅", step1);

    const step2 = await orderPizza();
    console.log("✅", step2);

    const step3 = await eatPizza();
    console.log("✅", step3);

    const step4 = await goToCinema();
    console.log("✅", step4);

    const step5 = await wentHome();
    console.log("✅", step5);

    console.log("🌙 Finally went to sleep!");
  } catch (err) {
    console.log("❌ ERROR:", err);
  }
}

// 🚀 Start the journey
fullDayPlan();
