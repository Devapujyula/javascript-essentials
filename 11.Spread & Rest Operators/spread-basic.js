let batsmans = ["Sachin", "Shewag", "Gautam", "Yuvaraj", "Kohili"];
let bowlers = ["Haribjan", "Zahir", "Nehra", "Sreekanth", "Bhuvi"];

let teamIndia = [...batsmans, ...bowlers, "Jadeja", "Hardik"];

console.log(teamIndia);

function addition(a, b, c) {
  let sum = a + b + c;
  console.log(sum);
}
addition(1, 2, 3);

let x = 5;
let y = 6;
let z = 7;
addition(x, y, z);

let nums = [8, 7, 5];
addition(nums[0], nums[1], nums[2]);

addition(...nums);
