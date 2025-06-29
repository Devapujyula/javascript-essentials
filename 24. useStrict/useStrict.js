/**
 *What is "use strict"?
"use strict" is a directive (not a statement) that activates Strict Mode in JavaScript.

"use strict";
It must be at the top of the file or function.


Why was Strict Mode Introduced?
Strict Mode was introduced in ES5 (ECMAScript 5) for these reasons:

✅ Make JavaScript safer by throwing errors for bad practices
✅ Prevent accidental bugs (like undeclared variables)
✅ Secure JS code in large applications
✅ Prepare code for future versions of JavaScript

| Rule Change                             | Without Strict               | With Strict        |
| --------------------------------------- | ---------------------------- | ------------------ |
| ❌ Undeclared vars                       | Allowed (creates global var) | ❌ Error            |
| ❌ Assign to read-only/global properties | Allowed                      | ❌ Error            |
| ❌ Duplicate params                      | Allowed                      | ❌ Error            |
| ❌ Deleting undeletables                 | Allowed                      | ❌ Error            |
| ❌ `this` in functions                   | `this = window`              | `this = undefined` |




| Benefit            | Explanation                                 |
| ------------------ | ------------------------------------------- |
| 🧠 Easier to Debug | Bugs throw errors early                     |
| 🔒 Safer Code      | Prevents accidental globals or misuse       |
| ✅ Better Practice  | Makes you write cleaner, future-proof code  |
| 📦 Compatibility   | Many JS tools/frameworks assume strict mode |


Strict Mode in Modern JavaScript & Frameworks
Modules (import/export) are strict by default — no need to add "use strict" manually.

React, Vue, Angular, TypeScript all assume or enforce strict-like behavior.

In Node.js, strict mode is also increasingly the default in many setups.

🔸 Q1: What is "use strict" and why is it used?
"use strict" is a directive that enables strict mode in JS to catch silent errors and prevent bad practices. It helps developers write cleaner, safer, more intentional code.

🔸 Q2: What's the difference between this in strict vs non-strict?
In non-strict mode, this in a standalone function is the global object (window in browsers). In strict mode, it becomes undefined.

🔸 Q3: Is "use strict" needed in modern JS?
It's useful for old-style scripts, but modern JavaScript modules (import, export) are strict by default.


 */

"use strict";

x = 10; // ❌ Error: x is not defined
