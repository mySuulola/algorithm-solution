const atmCash = (amount, denominationArr) => {
  let leftOver = amount;
  let result = "";
  const currencyArr = denominationArr.sort((a, b) => b - a);
  for (let i = 0; i < currencyArr.length; i++) {
    if (leftOver % currencyArr[i] === 0) {
      result += `${currencyArr[i]} - ${Math.floor(
        leftOver / currencyArr[i]
      )}  `;
      break;
    } else {
      result += `${currencyArr[i]} - ${Math.floor(
        leftOver / currencyArr[i]
      )}, `;
    }
    leftOver = leftOver % currencyArr[i];
  }
  return { result: result, change: leftOver };
};

console.log(atmCash(1530, [1000, 500, 20]));