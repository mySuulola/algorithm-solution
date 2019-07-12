function maxProfit(arr) {
let lastVal = arr[0]
let low = arr[0]
let high = 0

for(let i = 1; i < arr.length; i++) {
if(arr[i] < low) {

low = arr[i]
lastVal = arr[i]
}
if(arr[i] > high) {
high = arr[i]
lastVal = arr[i]
}
}
return `${low} and ${high} = ${high - low} ` 


}

console.log(maxProfit([32,46,26,38,40,48,42]))
console.log(maxProfit([10,4,5,9,6,16,12])
)