// . ? * + - ^ $ | [ ] { } ( ) \ :

const text = '1,2,3,4,5,6,a.b c!d?e'

const dotRegex = /\./g
console.log(text.split(dotRegex))

const regexSymbols = /,|\.|\?|!| /g
console.log(text.split(regexSymbols))