// const removeDup = (arr) => {
//   let newArr = [], num
//   for(num of arr) {
//     !newArr.includes(num) && newArr.push(num)
//   }
//   return newArr.sort( (a, b) => a - b )
// }

// OR

const removeDup = (arr) => {
  return [...new Set(arr)].sort( (a,b) => b- a )
}



console.log(removeDup([5,5,3,1,1111,2,3,52434,5,5,5,5]))