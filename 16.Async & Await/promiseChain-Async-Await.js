function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: 1, name: "Prakash" }), 1000);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Post 1", "Post 2"]), 1000);
  });
}

// fetchUser()
//   .then((user) => {
//     console.log("User:", user);
//     return fetchPosts(user.id);
//   })
//   .then((posts) => {
//     console.log("Posts:", posts);
//   });

async function showUserAndPosts() {
  try {
    const user = await fetchUser();
    console.log("User", user);

    const posts = await fetchPosts();
    console.log("Posts", posts);
  } catch (error) {
    console.log("Error:", error);
  }
}

showUserAndPosts();

/**
 * Promise.resolve(10)
  .then(num => num * 2)
  .then(num => num - 3)
  .then(num => console.log(num));

 */
