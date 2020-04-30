// extract the 'a' and 'b' chars from the text
const text = 'a   b'

console.log(text.match(/a   b/g))
console.log(text.match(/a...b/g))
console.log(text.match(/a\s\s\sb/g))