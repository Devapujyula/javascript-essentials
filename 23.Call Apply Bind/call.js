/**
 * | Method    | Purpose                                  | When it runs | Example                       |
| --------- | ---------------------------------------- | ------------ | ----------------------------- |
| `call()`  | Call the function with custom `this`     | Immediately  | `fn.call(obj, arg1, arg2)`    |
| `apply()` | Same as call, but pass args as array     | Immediately  | `fn.apply(obj, [arg1, arg2])` |
| `bind()`  | Returns a new function with fixed `this` | Later        | `const bound = fn.bind(obj)`  |

 */

let name1 = {
  firstName: "Prakash",
  lastName: "Dsp",
};

let getFullName = function (homeTown, state) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " from " +
      homeTown +
      " from " +
      state
  );
};

getFullName.call(name1, "Amalapuram", "AndhraPradesh");
