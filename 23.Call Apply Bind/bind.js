let name1 = {
  firstName: "Prakash",
  lastName: "Dsp",
};

let getFullName = function (homeTown, state) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " from " +
      homeTown +
      " from " +
      state
  );
};

getFullName.call(name1, "Amalapuram", "AndhraPradesh");

// bind method
// It give a copy which can be invoked later
let printMyName = getFullName.bind(name1, "Amalapuram", "AndhraPradesh");
console.log(printMyName);
printMyName();
