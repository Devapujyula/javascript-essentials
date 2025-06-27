/**
 *& 📌 When to use which:
 *^ Use call if you know the exact number of arguments.
 *^ Use apply if your arguments are already in an array or dynamically determined
 */

const getFullName = function () {
  console.log(`Person FullName is ${this.firstName} ${this.lastName}`);
};

const getFullDetails = function (age, location) {
  console.log(
    `Person ${this.firstName} ${this.lastName} with age ${age} and located at ${location}`
  );
};
const emp = {
  firstName: "Prakash",
  lastName: "Devapujyula",
};

const student = {
  firstName: "SaiKiran",
  lastName: "Yadla",
};
getFullName.call(emp);
getFullDetails.apply(student, [26, "Hyderabad"]);

//& Bind
// ee bind ane function em chesthadhi antey oka function varaibale ki whole object ni bundle ga bind cheesi unchuthundhi dheeni valla use enti antey manam appudu kavali antey appudu ekkada kavali antey akkada aa function ni call cheyacchu.
const myFunction = getFullDetails.bind(emp, 25, "Mumbai");
console.log(myFunction);

//* kindha direct ga bind method ni call chesukunnam dheeni use
// we use this bind topic for
// 1. Polifill
// 2. currying
myFunction();
