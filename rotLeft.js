function rotLeft(d = 4, a = [1, 2, 3, 4, 5]) {
  let newArr = [];
  newArr.push(...a.slice(d));
  newArr.push(...a.slice(0, d));
  return newArr;
}

console.log(rotLeft());
