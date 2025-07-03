/**
 * What is a Unary Operator?
A unary operator is an operator that operates on only one operand.


| Operator | Name                    | Description                      | Example                 |
| -------- | ----------------------- | -------------------------------- | ----------------------- |
| `+`      | Unary plus              | Converts operand to a number     | `+"5"` ➝ `5`            |
| `-`      | Unary minus             | Negates the operand              | `-5` ➝ `-5`             |
| `++`     | Increment               | Increases value by 1             | `x++` or `++x`          |
| `--`     | Decrement               | Decreases value by 1             | `x--` or `--x`          |
| `!`      | Logical NOT             | Inverts boolean value            | `!true` ➝ `false`       |
| `typeof` | Type operator           | Returns type as string           | `typeof 5` ➝ `"number"` |
| `void`   | Returns `undefined`     | Ignores the result of expression | `void 0` ➝ `undefined`  |
| `delete` | Deletes object property | Removes key from object          | `delete obj.key`        |

 */

let string = "10";
let num = +string;
console.log(num);
console.log(typeof num);

let val = "5";
console.log(-val); // -5

let a = 1;
console.log(++a); // 2 (prefix: adds first, then returns)
console.log(a++); // 2 (postfix: returns first, then adds)
console.log(a); // 3

let isLoggedIn = false;
console.log(!isLoggedIn); // true

console.log(typeof "hello"); // "string"
console.log(typeof 123); // "number"
console.log(typeof true); // "boolean"

const user = { name: "Ram", age: 25 };
delete user.age;
console.log(user); // { name: "Ram" }

console.log(void 0); // undefined
