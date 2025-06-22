/**
 * map
 * does retrn new Array
 * does not change the size of original array
 * use values from original array when making new one
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
    age: 24,
    position: "Windows",
  },
];

const ages = people.map(function (person) {
  // console.log(person);
  return person.age;
});

const newPeopleArray = people.map(function (person) {
  return {
    firstName: person.name,
    Age: person.age,
  };
});

const renderNewArray = people.map((person) => {
  return `
  <h2>${person.name}</h2> 
  <h3>${person.age}</h3>
  `;
});

// document.body.innerHTML = renderNewArray.join("");

console.log(renderNewArray);

console.log(newPeopleArray);

console.log(ages);
