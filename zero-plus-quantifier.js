const text1 = 'From far I\'ve seen the fire and a person screaming: FIREEEEEE!'
const text2 = 'There is a big fir in NYC'

const regex = /fire*/gi

console.log(text1.match(regex))
console.log(text2.match(regex))