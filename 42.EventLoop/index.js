var a = 1000;
console.log(a); //1000

{
  var a = 2000;
}
console.log(a); //2000

// 2000

let b = a;
console.log(b); // 2000

// 2000
{
  let b = 3000;
}
console.log(b); // 2000
