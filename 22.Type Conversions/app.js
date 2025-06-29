let str = "123";
let num = Number(str); // Explicit conversion string -> number
console.log(num);
console.log(typeof num);

// 🔹 Type Coercion:
// 👉 When JavaScript automatically converts types for you during operations.

// This is also called Implicit Conversion.
let result = "5" * 2; // JS coerces "5" to number
console.log(result);

// 🧠 Coercion Happens In:
// Arithmetic operations (+, -, *, /)
// Comparisons (==)
// Template literals (`${value}`)

//  Q1: What’s the difference between == and ===?
// == does type coercion (converts types before comparing), while === checks both value and type directly.

//  Best Practices
// Always use === instead of ==

// Be careful when mixing types (especially in arithmetic)

// Know the falsy values (important for conditions)

// Use Number(), Boolean(), String() for clear conversions

// Avoid relying on implicit coercion in production code

// Data types in JavaScript are flexible due to which the type of the variables can be changed when the program runs. Type Conversion and Type Coercion are the two ways through which we can change the data type of the variables from one type to the other.

// Type Conversion
// Type Conversion is the process in JavaScript in which the data type of the variables is converted from one type to another type manually. This is also known as explicit type casting.

// Performed manually by the programmer.
// Uses built-in JavaScript methods like Number(), String(), and Boolean().
// Ensures control over data types in code.

// Type Coercion
// Type coercion is the automatic conversion of one data type to another by JavaScript during operations. This is also known as implicit type casting.

// Performed automatically by JavaScript.
// Happens mostly in comparison and arithmetic operations.
// Can lead to unexpected results if not handled properly.
