// A prime number is a number that is divisible only by 1 and itself. The first few prime numbers are: 2, 3, 5, 7, 11, 17, ...


const isPrime = num => {
  if (num < 2) return false;
  for (let n = 2; n < num; n++) {
    if (num % n === 0) return false;
  }
  return true;
};

console.log(isPrime(15));
