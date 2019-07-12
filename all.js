// const identity = {
//   abc: {
//     email: "test@test.com",
//     firstName: "Oluwaseyi",
//     initials: "OS",
//     lastName: "Suulola"
//   },

//   okay: {
//     email: "ugly@test.com",
//     firstName: "nameless",
//     initials: "OS",
//     lastName: "Suulola"
//   },

//   good: {
//     email: "good@test.com",
//     firstName: "me",
//     initials: "OS",
//     lastName: "Suulola"
//   }
// };

// const n = Object.entries(identity).find(item =>
//   item.find(each => each.email === "test@test.com")
// );

// console.log(n);

// var multiple = (num = 10) => {
//   let childNum = [];
//   for (let i = 1; i < num; i++) {
//     if (i % 5 === 0 || i % 3 === 0) {
//       childNum.push(i);
//     }
//   }
//   const result = childNum.reduce((acc, v) => acc + v);
//   return result;
// };

// console.log(multiple());

// const gradeApprox = arr => {
//   return arr.map(grade => {
//     if (grade < 38) {
//       return grade;
//     } else if (grade % 5 !== 0) {
//       let module = grade % 5;
//       let standard = grade - module + 5;
//       return standard - grade < 3 ? standard : grade;
//     } else {
//       return grade;
//     }
//   });
// };

// console.log(gradeApprox([73, 67, 38, 33]));

// // function longest(s1, s2) {
// //   // your code
// //   let s1arr = s1.split('')
// //   let s2arr = s2.split('')
// //   let n = s1arr.length
// //   let newArr = []
// //   // > s2.length ? s1arr.length : s2arr.length
// //   for (let i = 0; i < n; i++) {
// //     if (s2arr.includes(s1arr[i]) && !( newArr.includes(s1arr[i]) ) ) {
// //       newArr.push(s1arr[i])
// //     }
// //   }

// //   return newArr.sort().join('')

// // }
// function longest(s1, s2) {
//   // your code
//   let s1arr = s1.split("");
//   let s2arr = s2.split("");
//   let n = s1arr.length > s2.length ? s1arr.length : s2arr.length;
//   let newArr = [];
//   let newArr4 = [];
//   for (let i = 0; i < n; i++) {
//     newArr.includes(s1arr[i]) ? null : newArr.push(s1arr[i]);
//     newArr.includes(s2arr[i]) ? null : newArr.push(s2arr[i]);
//   }
//   // for (let i = 0; i < s2arr.length; i++) {
//   //   newArr.includes(s1arr[i]) ? null : newArr.push(s1arr[i]);
//   //   newArr.includes(s2arr[i]) ? null : newArr.push(s1arr[i]);
//   // }

//   return newArr.sort().join("");
// }

// //   Test.assertEquals(longest("aretheyhere", "yestheyarehere"), "aehrsty")
// console.log(longest("aretheyhere", "yestheyarehere"));

// var reverseIn = num => {
//   return Number(num[0]) < Number(num[1])
//     ? parseInt(
//         String(num)
//           .split("")
//           .sort((a, b) => a - b)
//           .join("")
//       )
//     : parseInt(
//         String(num)
//           .split("")
//           .sort((a, b) => b - a)
//           .join("")
//       );
// };

// console.log(reverseIn(15));
// console.log(reverseIn(981));
// console.log(reverseIn(09800));
// console.log(reverseIn(-15));
// console.log(reverseIn(3432));

// console.log("abc");
// var abc = [
//   { id: 1, text: "jdj" },
//   { id: 2, text: "jadjksbf" },
//   { id: 3, text: "i am copngi" }
// ];
// const indexToBeRemoved = abc.map(item => item.id).indexOf(2);
// console.log(indexToBeRemoved);

// const removeIndex = abc.filter(item => item.id === indexToBeRemoved);
// console.log(removeIndex);

// let w = ["a", "b", "c"];
// w = w.filter(a => a === "b");
// console.log(w);
