const names=require('./4-names')
const {sayHi}=require('./5-utils')
const {items, singlePerson}=require('./6-alternative-flavor')
const eddy = require('./7-mind-grenade')
// console.log(names);

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
sayHi(items[1])
sayHi(singlePerson.name)
sayHi(eddy)
