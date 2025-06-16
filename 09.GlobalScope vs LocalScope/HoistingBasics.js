/**
 * Hoisting in JavaScript
 * Hoisting is JavaScript's default behaviour of moving declarations to the top
 * JavaScript only hoists declarations, not initilizations
 * Note: Best practice is to declare all variables at top before using them
 * 
 * | Feature                   | `var`       | `let` / `const`          |
| ------------------------- | ----------- | ------------------------ |
| Hoisted                   | ✅ Yes       | ✅ Yes                    |
| Initialized               | ✅ At hoist  | ❌ After declaration line |
| TDZ Exists?               | ❌ No        | ✅ Yes                    |
| Access before declaration | ✅ undefined | ❌ ReferenceError         |


✅ What is the Temporal Dead Zone (TDZ)?
The Temporal Dead Zone is the time between when a variable is hoisted and when it is initialized, during which you cannot access the variable — doing so will throw a ReferenceError.

This happens with variables declared using let and const.

 */

console.log(a); // undefined
var a = 10;

var a; // Declaration is hoisted
console.log(a); // undefined (default value)
a = 10; // Assignment stays in place

console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 20;

greet();
function greet() {
  console.log("Good Morning.!");
}

{
  // TDZ starts
  // TDZ means time between the begining of the scope and the declaration, during whuch accessing the variable causes an error
  console.log(x); // ❌ ReferenceError
  // TDZ ends
}

/**
✅ var is hoisted and initialized as undefined

⚠️ let and const are hoisted but uninitialized (TDZ)

✅ Function declarations are hoisted fully

⚠️ Function expressions are not callable before definition

🧠 Variable shadowing inside functions is a very common bug source
 */
