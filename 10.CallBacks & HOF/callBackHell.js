setTimeout(() => {
  console.log("1️⃣ First task");

  setTimeout(() => {
    console.log("2️⃣ Second task");

    setTimeout(() => {
      console.log("3️⃣ Third task");

      setTimeout(() => {
        console.log("4️⃣ Fourth task");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
