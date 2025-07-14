/**
 * ✅ What Is a Deep Copy?
A deep copy:
-Copies everything, including nested objects/arrays.
-The copy is completely independent of the original.
🧠 It’s like cloning all levels of the structure.
 */

// ✅ Deep Copy Example (using structuredClone)
const original = {
  name: "Ram",
  address: {
    city: "Ayodhya",
  },
};

const deep = structuredClone(original); // Deep copy

deep.name = "Lakshman"; // ✅ safe
deep.address.city = "Hasthinapur"; // ✅ doesn't affect original

console.log(original.address.city); // Ayodhya

// structuredClone() is built-in and recommended for deep cloning most types of data.

var x = { a: 10, b: 20, address: { area: "Hyderabad" } };

var y = JSON.parse(JSON.stringify(x));

console.log("X :", x);
console.log("Y :", y);

y.b = 9000;
y.address.area = "Tirupathi";
console.log("**************");

console.log("X :", x);
console.log("Y :", y);
