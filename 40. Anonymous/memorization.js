let previousResult = {};

function sumOfN(n) {
  if (n in previousResult) {
    return previousResult[n];
  } else {
    let res = 0;
    for (i = 0; i <= n; i++) {
      res += i;
    }
    previousResult[n] = res;
    return res;
  }
}

console.time();

console.log(sumOfN(100));

console.timeEnd();
