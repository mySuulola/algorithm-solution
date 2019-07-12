const nestedArr = arr => {
  let total = 0;
  for (let item in arr) {
    if (typeof arr[item] === "number") {
      total += arr[item];
    } else {
      total += nestedArr(arr[item]);
    }
  }
  return total;
};

console.log(nestedArr([1, 1, 1, [3, 4, [8]], [5]]));
