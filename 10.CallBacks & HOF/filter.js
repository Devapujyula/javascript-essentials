/**
 * filter
 * does not return new array
 * can manipulate the size of new array
 * return based on condition
 */

const people = [
  {
    name: "Prakash",
    age: 27,
    position: "Developer",
  },
  {
    name: "Prasanna",
    age: 23,
    position: "SharePoint",
  },
  {
    name: "Kishore",
    age: 26,
    position: "Windows",
  },
];

const youngPeople = people.filter((person) => {
  return person.age <= 25;
});

const newArray = people.filter((person) => {
  return person.position === "Developer";
});

console.log(newArray);

console.log(youngPeople);
