/**
 * map
 * does return new Array
 * does not change the size of original array
 * use values from original array when making new one
 */

var people = [
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

var ages = people.map(function (person) {
  // console.log(person);
  return person.age;
});

var newPeopleArray = people.map(function (person) {
  return {
    firstName: person.name,
    Age: person.age,
  };
});

var renderNewArray = people.map((person) => {
  return `
  <h2>${person.name}</h2> 
  <h3>${person.age}</h3>
  `;
});

// document.body.innerHTML = renderNewArray.join("");

console.log(renderNewArray);

console.log(newPeopleArray);

console.log(ages);

var birthYear = [2000, 2002, 1998, 1999, 2020];

var ages = birthYear.map((ele, index, array) => {
  let age = 2025 - ele;

  return age;
});
