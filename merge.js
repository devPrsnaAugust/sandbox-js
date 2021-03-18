const idVenInfo = {

  id: "0000000022",
  nm: "스타벅스",
  frg: "N",
  loc: {
    nat: "kor",
    city: "sel"
  }
}

const fncVenInfo = {
  salesAmt: "3000000",
  infloFee: "1000"
}

const finVenInfoAssign = Object.assign({}, idVenInfo, fncVenInfo)
const finVenInfoSpread = {...idVenInfo, ...fncVenInfo}

console.log(finVenInfoAssign);
console.log(finVenInfoSpread);

//=====

const a = { name: '하균' }
const b = { ...a, age: 31 };

console.log(a === b) //=> false

const c = { name: '하균' }
const d = Object.assign(c, { age: 31 });

console.log(c === d) //=> true
