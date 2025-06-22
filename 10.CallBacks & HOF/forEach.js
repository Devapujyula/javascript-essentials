// forEach
// Does not return new Array

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
    age: 24,
    position: "Windows",
  },
];

function showPerson(person) {
  // console.log(person);
  console.log(person.name);
  console.log(person.name.toUpperCase());
}

// people.forEach(showPerson);

people.forEach(function (item) {
  console.log(item);
  console.log(item.name);
});
