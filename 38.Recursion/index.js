// If we call a same function inside a same function then it is said to be recursion
function test(n) {
  if (n > 0) {
    console.log(n);
    test(n - 1);
  }
}
test(10);
