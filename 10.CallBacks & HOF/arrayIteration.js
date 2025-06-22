/*
Advanced Array Methods
forEach, map, filter, find, reduce
Iteration over array - no loop required
Accept CALLBACK function as an argument, calls callback against each item in a array. Reference Item in the callback parameter
*/
const numbers = [1, 2, 3, 4, 5];

// show all the numbers & this below methos is th old method to access array
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
