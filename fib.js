const fib = (num = 4) => {
  let arr = [0, 1];
  for (let i = 0; i <= num - 2; i++) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  return arr[arr.length - 1]
};

// memoized recusive function
// const fib = (num = 4) => {
//   if (num <= 2) return 1;
//   return fib(num - 1) + fib(num - 2);
// };
console.log(fib(9)); 