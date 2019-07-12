const removeCharacter = (arr, str) => {
  // initialize an empty stringabc
  // loop through the  string and see if the curr string INCLUDES the element of the array
  // if false, add the element to the initialized empty string
  // return the initialized string
  let initial = "";
  for (let i = 0; i < str.length; i++) {
    if (arr.includes(str[i])) {
      // return nothing but i dont know why return; is throwing error so i decided to leave it blank
   } else {
      initial += str[i];
    }
  }
  return initial;
};


// function removeCharacter(arr, string) {
//   // store characters of arr in a hash table
//   var hashTable = {};
//   for (let c of arr) {
//   hashTable[c] = true;
//   }
//   // loop through the string and check if the character exists in
//   // the hash table, if so, do not add it to the result string
//   let result = '';
//   for (let c of string) {
//   if (hashTable[c] === undefined) {
//   result += c;
//   }
//   }
//   return result;
//   }


console.log(removeCharacter(["h", "e", "w", "o"], "hello world"));

console.log(["a", "e", "i"].includes("ab"));
