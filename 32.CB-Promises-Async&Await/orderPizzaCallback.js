function withdrawMoney() {
  setTimeout(() => {
    console.log("💸 Money withdrawn from ATM");
    orderPizza();
  }, 1000);
}

function orderPizza() {
  setTimeout(() => {
    console.log("🍕 Pizza ordered");
    eatPizza();
  }, 2000);
}

function eatPizza() {
  setTimeout(() => {
    console.log("😋 Pizza eaten");
    goToCinema();
  }, 3000);
}

function goToCinema() {
  setTimeout(() => {
    console.log("🎬 Went to the cinema");
    wentHome();
  }, 4000);
}

function wentHome() {
  setTimeout(() => {
    console.log("🏡 Went to Home");
  }, 5000);
}

withdrawMoney(() => {
  orderPizza(() => {
    eatPizza(() => {
      goToCinema(() => {
        wentHome(() => {
          console.log("🌙 Finally went to sleep!");
        }, 6000);
      });
    });
  });
});
