/**
 * ✅ What Is a Copy in JavaScript?
-When you copy a variable, you're either:
-Copying the reference (same memory — ❌ dangerous)
-Copying the values (new memory — ✅ safe)

✅ What Is a Shallow Copy?
A shallow copy:
-Copies only the top-level properties.
-If any property is an object or array, the reference is shared, not deeply copied.
🧠 It’s like: copying just the surface, not the inner layers.


 */

// Shallow copy example

const original = {
  name: "Ram",
  address: {
    city: "Ayodhya",
  },
};

const shallow = { ...original }; // spread operator

shallow.name = "Lakshman"; //✅ only shallow copy
shallow.address.city = "Hasthinapur"; // ❌ affects original too

console.log(original.name);

console.log(original.address.city); // Hasthinapur

// Why
// Because address is an object. The spread {...original} copied its reference, not the value.
