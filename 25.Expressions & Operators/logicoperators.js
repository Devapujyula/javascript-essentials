/**
 * Logical operators are used to combine or manipulate Boolean (true/false) values.

These are mostly used in:

if conditions

while/for loops

complex decision-making

authentication logic

filtering arrays (React, JS apps)

| Operator | Name | Meaning                                  |    |                                       |
| -------- | ---- | ---------------------------------------- | -- | ------------------------------------- |
| `&&`     | AND  | Returns `true` **only if both** are true |    |                                       |
| \`       |      | \`                                       | OR | Returns `true` **if any one** is true |
| `!`      | NOT  | Reverses the Boolean value               |    |                                       |


🔹 Q: What is the difference between && and ||?
&& returns true only if all conditions are true.
|| returns true if at least one condition is true.
 */

let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("You can enter");
} else {
  console.log("Access denied");
}
// Output: You can enter

let isAdmin = false;
let isSuperUser = true;

if (isAdmin || isSuperUser) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}
// Output: Access granted

let isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Please login");
}
// Output: Please login

let email = "user@example.com";
let password = "";

if (email && password) {
  console.log("Login successful");
} else {
  console.log("Please fill all fields");
}
