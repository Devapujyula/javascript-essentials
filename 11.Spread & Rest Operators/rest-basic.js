// Rest parameters
function getTotal(a, b, c) {
  var total = a + b + c;
  console.log(total);
}
getTotal(4, 5, 7);

// rest operator
function getMarks(...marks) {
  var total = 0;
  for (let i = 0; i < marks.length; i++) {
    total = total + marks[i];
  }
  console.log(total);
}
getMarks(2, 6, 9, 3, 6, 12);
