const text = '1,2,3,4,5,6,a.b c!d?e'
const commaRegex = /,/

console.log(text.split(commaRegex)) // will split the string on commas
console.log(text.match(commaRegex)) // will match the first occurence of comma on text

console.log(text.match(/,/g)) // will match with all commas on string
console.log(text.match(/A/g)) // will not match with any string and return null
console.log(text.match(/A/gi)) // will match with the lower 'a' after the 6
console.log(text.match(/2/g)) // will match with the number 2
console.log(text.match(/a.b c!d/)) // will match with the specified string