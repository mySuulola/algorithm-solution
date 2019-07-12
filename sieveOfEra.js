const sieveOfEratosthenes = num => {
  let arr = [];
  for (let a = 2; a <= num; a++) {
    if (a % 2) {
      arr.push(a);
    }
  }
  return arr;
};

console.log(sieveOfEratosthenes(20));
