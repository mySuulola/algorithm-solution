// const anagram = (firstWord, secondWord) => {
//   let a = convertToObj(firstWord);
//   let b = convertToObj(secondWord);

//   for (let each in a) {
//     if (a[each] !== b[each]) {
//       return false;
//     }
//   }
//   return true;
// };

// const convertToObj = word => {
//   const obj = {};
//   for (let key of word.toLowerCase()) {
//     if (!obj[key]) {
//       if (key === " ") {
//       } else {
//         obj[key] = 1;
//       }
//     } else {
//       obj[key]++;
//     }
//   }
//   return obj;
// };

const anagram = (str1, str2) => {
  return cleanString(str1) === cleanString(str2);
};
const cleanString = str => {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
};

console.log(anagram("rail safety", "fairy tales"));
