let array = [1, 2, [3, 4], [5, [7, 6], [8, 9]], [10, [11, 12, [13, 14]]], 15];
console.log(array);

function flatten(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let item = array[i];

    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log(flatten(array));
