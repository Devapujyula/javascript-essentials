/**
 * Promise chaining means using multiple .then() calls, where the result of one .then() is passed to the next.
 * 
 * | Concept               | Explanation                                       |
| --------------------- | ------------------------------------------------- |
| `.then()` chaining    | Used to run tasks **in order**, one after another |
| `return` is important | Passes value to next `.then()`                    |
| `.catch()`            | Catches any error in the whole chain              |

 */

new Promise((resolve, reject) => {
  resolve(2);
})
  .then((num) => {
    console.log("Step 1:", num);
    return num * 2; // 2 * 2 = 4
  })
  .then((num) => {
    console.log("Step 2:", num);
    return num + 3; // 4 + 3 = 7
  })
  .then((num) => {
    console.log("Step 3:", num);
  });

// Real world style example
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Prakash" });
    }, 1000);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Post 1", "Post 2"]);
    }, 1000);
  });
}

fetchUser()
  .then((user) => {
    console.log("User:", user);
    return fetchPosts(user.id);
  })
  .then((posts) => {
    console.log("Posts:", posts);
  })
  .catch((err) => {
    console.log("Error:", err);
  });
