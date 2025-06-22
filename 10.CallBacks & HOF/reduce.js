/**
 * reduce
 * iterates, callback function
 * reduce to a single value - number, array, object
 * 1 parameter ('acc') - total of all calculations
 * 2 parameter ('curr') - current iterations/value
 */

const people = [
  {
    id: 1,
    name: "Prakash",
    age: 27,
    position: "Developer",
    salary: 500,
  },
  {
    id: 2,
    name: "Prasanna",
    age: 23,
    position: "SharePoint",
    salary: 650,
  },
  {
    id: 3,
    name: "Kishore",
    age: 24,
    position: "Windows",
    salary: 750,
  },
];

const newArray = people.reduce((acc, currPerson) => {
  console.log(`Total Salary : ${acc}`);
  console.log(`Current Salary : ${currPerson.salary}`);
  acc += currPerson.salary;
  return acc;
}, 1000);

console.log(newArray);
