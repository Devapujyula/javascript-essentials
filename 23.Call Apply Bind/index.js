let name1 = {
  firstName: "Prakash",
  lastName: "Dsp",
};
let printFullName = function () {
  console.log(this.firstName + " " + this.lastName);
};

printFullName.call(name1);

let name2 = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};

// function borrowing
printFullName.call(name2);
