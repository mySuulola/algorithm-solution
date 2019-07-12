// i really dont understand what the eventually output is so i couldnt come up with my solution

// i will however post their solution

function threeVowels(string) {
  // split string into array of words
  let arr = string.split(' ');
  let count = 0;
  // this is the pattern we will be searching for
  // more on regex patterns here: https://mzl.la/1bMbpXP
  const pattern = /[aeiou]{3,}/gi;
  // loop through array of words
  for (let word of arr) {
  if (word.match(pattern) !== null) {
  count += 1;
  }
  }
  return count;
  }


  // my proposed solution
const threeVowels = (str) => {

}

// console.log(threeVowels([]))