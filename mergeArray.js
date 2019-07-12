const mergeArray = (arr1, arr2) => {
  let newArr = [];
  let n = arr1.length > arr2.length ? arr1.length : arr2.length;

  for (let i = 0; i < n; i++) {
    arr1.length > i ? newArr.push(arr1[i]) : null;
    arr2.length > i ? newArr.push(arr2[i]) : null;
  }
  return newArr;
};

console.log(mergeArray([1, 2, 3, 3, 8, 4], [7, 8, 1, 3, 3, 4, 6, 7]));
