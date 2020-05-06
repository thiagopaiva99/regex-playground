const text = '0,1,2,3,4,5,6,a.b c!d?e[f		-f_g'

console.log(text.match(/\d/g)) // numbers
console.log(text.match(/\D/g)) // no numbers

console.log(text.match(/\w/g)) // characters [a-ZA-Z0-9_]
console.log(text.match(/\W/g)) // non characters

console.log(text.match(/\s/g)) // spaces