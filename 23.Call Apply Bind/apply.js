let name1 = {
  firstName: "Prakash",
  lastName: "Dsp",
};
let name2 = {
  firstName: "Sachin",
  lastName: "Tendulkar",
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

getFullName.apply(name1, ["Amalapuram", "AndhraPradesh"]);
getFullName.apply(name2, ["NavMumbai", "Maharastra"]);
