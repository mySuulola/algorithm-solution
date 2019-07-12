const ObjToArrConverter = obj => {
  let arr = [];
  for (let key in obj) {
    arr.push({ ...obj[key], id: key });
  }
  return arr;
};


const objExample = { 1: { b: "c" }, 2: { a: "d" } };
console.log(ObjToArrConverter(objExample));