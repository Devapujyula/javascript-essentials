let original = {
  name: "Prakash",
  address: {
    city: "Hyderabad",
  },
};

// Shallow Copy
let shallowCopy = { ...original };
shallowCopy.address.city = "Amalapuram";

console.log(original.address.city);
