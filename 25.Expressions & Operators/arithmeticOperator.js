/**
 * ✅ What Are Arithmetic Operators?
Arithmetic operators are used to perform mathematical operations like:
Addition
Subtraction
Multiplication
Division
Modulus (remainder)
Exponentiation
Increment / Decrement
They work with numbers, but JavaScript may also do type coercion if needed.

✅ List of Arithmetic Operators in JavaScript

| Operator | Name           | Example        | Result          |
| -------- | -------------- | -------------- | --------------- |
| `+`      | Addition       | `5 + 3`        | `8`             |
| `-`      | Subtraction    | `7 - 2`        | `5`             |
| `*`      | Multiplication | `4 * 2`        | `8`             |
| `/`      | Division       | `10 / 2`       | `5`             |
| `%`      | Modulus        | `9 % 2`        | `1` (remainder) |
| `**`     | Exponentiation | `2 ** 3`       | `8` (2^3)       |
| `++`     | Increment      | `x++` or `++x` | Increases by 1  |
| `--`     | Decrement      | `x--` or `--x` | Decreases by 1  |


| Expression | Result | Description    |
| ---------- | ------ | -------------- |
| `10 + 5`   | 15     | Add            |
| `9 - 4`    | 5      | Subtract       |
| `3 * 3`    | 9      | Multiply       |
| `20 / 4`   | 5      | Divide         |
| `7 % 3`    | 1      | Remainder      |
| `2 ** 3`   | 8      | Exponent       |
| `x++`      | x+1    | Post-increment |
| `--y`      | y-1    | Pre-decrement  |

 */

let x = 5;
console.log(++x); // 6 (adds first)
console.log(x++); // 6 (shows before add)
console.log(x); // 7

let y = 8;
--y;
console.log(y); // 7

x = 5;
x++; // or ++x
console.log(x); // 6
