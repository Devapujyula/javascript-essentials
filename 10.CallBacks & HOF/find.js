/**
 * find
 * return single instance - (in this case object)
 * returns first match, if no match undefined
 * great for getting unique value
 */

const people = [
  {
    id: 1,
    name: "Prakash",
    age: 27,
    position: "Developer",
  },
  {
    id: 2,
    name: "Prasanna",
    age: 23,
    position: "SharePoint",
  },
  {
    id: 3,
    name: "Kishore",
    age: 24,
    position: "Windows",
  },
];

const findingUnique = people.find((person) => {
  return person.id === 2;
});

const newNames = ["Sagar", "Lucky", "Raju"];
const findNewNames = newNames.find((firstName) => {
  return firstName == "Sagar";
});
console.log(findNewNames);

console.log(findingUnique);
