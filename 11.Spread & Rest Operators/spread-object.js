var student1 = {
  firstName: "Prakash",
  lastName: "Devapujyula",
  age: 27,
};

// var student2 = student1; // this is wrong copy in non primitives
var student2 = { ...student1 };

console.log(student1);
console.log(student2);

student2.firstName = "Satwik";
console.log("*****************");

console.log(student1);
console.log(student2);
