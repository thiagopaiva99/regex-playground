// dot '.' it's a magic character, because it can replace a character

const text = '1,2,3,4,5,6,7,8,9,0'
console.log(text.match(/1.2/g))
console.log(text.match(/1..,/g))
console.log(text.match(/1...3/g))

const grades = '8.3,8.2,6.4,7.5'
console.log(grades.match(/8../g))
console.log(grades.match(/.\../g))