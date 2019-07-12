const arrToObjConverter = arr => {
  let obj = {};
  for (let item of arr) {
    obj[item.id] = item;
  }
  return obj;
};

const arrExample = [{ b: "c", id: "1" }, { a: "d", id: "2" }];
console.log(arrToObjConverter(arrExample));

const firstNonrepChar = string => {
  // initialize an object
  // loop thru the string and convert it to a key pair object
  let obj = {};
  let final = "";
  for (let each of string) {
    if (!obj[each]) {
      obj[each] = 1;
    } else {
      obj[each]++;
    }
  }
  for (let each in obj) {
    if (obj[each] === 1 && each != " ") {
      return (final = each);
    }
  }
  return final;
};

// function firstNonrepChar(string) {
//   let hashTable = {};
//   // store each character in the hash table with
//   // the frequency of times it occurs
//   for (let c of string) {
//   if (hashTable[c] === undefined) {
//   hashTable[c] = 1;
//   } else {
//   hashTable[c] += 1;
//   }
//   }
//   // loop through string and return the first character
//   // with a count of 1 in the hash table
//   for (let c of string) {
//   if (hashTable[c] === 1) {
//   return c;
//   }
//   }
//   // return -1 if no unique character exists
//   return -1;
//   }

console.log(firstNonrepChar("hello henry"));
