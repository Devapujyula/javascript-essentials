// higher order functions  => there are functions which take another function as arguments

function f(x, fn) {
  //  x -> Number
  //  fn -> functions
  console.log(x);
  console.log(fn);
  fn();
}

f(10, function exec() {
  console.log("I am expression passed to HOF");
});

let arr = [1, 23, 100, 56, 78, 95, 34, 43, 65];
arr.sort(); // it sorts the given array // [expectation] -> his migh arrange elements in inc order
// edefault implemenation is going to sort lexicographical order
/**
 * 0 -> A
 * 1 -> B
 * 2 -> C
 * 3 -> D
 * 4 -> E
 * 5 -> F
 * 6 -> G
 * 7 -> H
 * 8 -> I
 * 9 -> J
 * [A, CD, BAA, .....] -> THIS IS SAID TO BE LEXICO GRAPHICAL ORDER THAT IS DICTIONARY ORDER
 */
console.log(arr);

let b = [1, 23, 100, 56, 78, 95, 34, 43, 65];
// if a < b -> a -b will be negative -> if cmp function gives negative then s is placed before b (a<b)
// if a > b -> a -b will be positive -> if cmp function gives positive then b is placed before a (a>b)
b.sort(function (a, b) {
  return a - b;
}); // sort is HOF, the sort function takes a comparator function
console.log(b);
