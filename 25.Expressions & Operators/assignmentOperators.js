/**
 * Assignment operators are used to assign values to variables.
 * 
 * | Operator | Meaning             | Example   | Equivalent To |
| -------- | ------------------- | --------- | ------------- |
| `=`      | Assign value        | `x = 10`  | —             |
| `+=`     | Add and assign      | `x += 5`  | `x = x + 5`   |
| `-=`     | Subtract and assign | `x -= 3`  | `x = x - 3`   |
| `*=`     | Multiply and assign | `x *= 2`  | `x = x * 2`   |
| `/=`     | Divide and assign   | `x /= 4`  | `x = x / 4`   |
| `%=`     | Modulus and assign  | `x %= 3`  | `x = x % 3`   |
| `**=`    | Exponent and assign | `x **= 2` | `x = x ** 2`  |



SUMMARY TABLE
| Operator | Description            | Example   | Result       |
| -------- | ---------------------- | --------- | ------------ |
| `=`      | Assigns value          | `x = 5`   | 5            |
| `+=`     | Adds and assigns       | `x += 3`  | `x = x + 3`  |
| `-=`     | Subtracts and assigns  | `x -= 2`  | `x = x - 2`  |
| `*=`     | Multiplies and assigns | `x *= 2`  | `x = x * 2`  |
| `/=`     | Divides and assigns    | `x /= 4`  | `x = x / 4`  |
| `%=`     | Remainder and assigns  | `x %= 3`  | `x = x % 3`  |
| `**=`    | Power and assigns      | `x **= 2` | `x = x ** 2` |

 */

let a = 10;
console.log(a); // 10

let b = 5;
b += 3; // b = b + 3
console.log(b); // 8

let c = 10;
c -= 4; // c = c - 4
console.log(c); // 6

let d = 6;
d *= 2; // d = d * 2
console.log(d); // 12

let e = 20;
e /= 4; // e = e / 4
console.log(e); // 5

let f = 13;
f %= 5; // f = f % 5
console.log(f); // 3

let g = 3;
g **= 2; // g = g ** 2 → 3^2
console.log(g); // 9
