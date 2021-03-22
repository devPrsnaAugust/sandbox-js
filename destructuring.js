'use strict'

const obj = {
  title: 'bo',
  value: 'back office'
}

const {title, value} = obj

console.log(title, value)

//const title = obj.title 예전 방식
//const value = obj.value

const arr = [0,1,2]
const [,a,b] = arr
console.log(a, b)
