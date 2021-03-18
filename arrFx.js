const data = [1, 2, 3, 4, 5];
const isAllBiggerThanTwo = data.every(val => { return val > 2 != 0 });
console.log(isAllBiggerThanTwo); // false
const isSomeBiggerThanTwo = data.some(val => { return val > 2 != 0 });
console.log(isSomeBiggerThanTwo); // true

const venSales= [
  {ven:001,sales:20000},
  {ven:002,sales:30000},
  {ven:003,sales:500},
  {ven:004,sales:100},
  {ven:005,sales:7000}
]

let bdnTgt = venSales.some( i => {
  return i.sales > 25000
});

console.log(bdnTgt);
