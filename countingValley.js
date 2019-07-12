function countingValleys(n = 8, s = "DDUUDDUDUUUD") {
  let highest = 0;
  let lowest = 0;
  let seaLevel = 0;
  // for (let step of s) {
  //   if (step === "U") {
  //     curr++;
  //     if (curr > highest) {
  //       highest = curr;
  //     }
  //   } else {
  //     curr--;
  //     if (curr < lowest) {
  //       lowest = curr;
  //     }
  //   }
  // }
 for (let i = 0; i < s.length; i++ ) {
   let c = s.charAt(i)
   if(c == 'D' ) {
     seaLevel  -=1
   }else {
     seaLevel += 1
   }
  
 }
 return seaLevel

}

console.log(countingValleys());
