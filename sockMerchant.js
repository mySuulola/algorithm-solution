function sockMerchant(n = 9, ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]) {
  let obj = {};
  let totalNum = 0;
  // loop through the array to determine the quantity of each
  for (let each of ar) {
    !obj[each] ? (obj[each] = 1) : obj[each]++;
  }
  for (let each in obj) {
    totalNum += Math.floor(obj[each] / 2);
  }
  return totalNum;
}

console.log(sockMerchant());


const matchingSock = arr => {
  const sortedArr = arr.sort((a, b) => a - b);
  let uniqueNum = [];
  let prevNum = 0;
  sortedArr.map(num => {
    if (num !== prevNum) {
      uniqueNum.push(num);
      prevNum = num;
    }
  });
  uniqueNum.map(unique => {
    for (let i = 0; i < arr.length; i++) {
      if (sortedArr[i] === unique) unique += 1;
    }
  });
  return uniqueNum;
};

console.log(matchingSock([1, 1, 2, 3, 4, 6, 1, 1]));