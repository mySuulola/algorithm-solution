const matchingParenthesis = paren => {
  let counter = 0;
  for (let c of paren) {
    if (c === "(") counter++;
    if (c === ")") counter--;
  }
 return counter === 0 ? true : false;
};

console.log(matchingParenthesis("(())"));
