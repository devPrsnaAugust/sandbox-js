'use strict'
class Robot {
  constructor(name){
    this.name = name
  }

  speak() {
    console.log('My name is ' + `${this.name}`)
  }
}

class CleaningRobot extends Robot{
  constructor(name) {
    super(name)
  }

  clean() {
    console.log(`${this.name} Start Cleaning Now..`)
  }
}

const r = new Robot('R2D2')
console.log(r)
r.speak()

const c = new CleaningRobot('C2D2')
c.speak()
c.clean()
