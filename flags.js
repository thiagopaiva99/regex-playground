// g -> global
// i -> ignore case

const text = 'Thiago is a frontend engineer'

console.log(text.match(/T|fr/)) // match with the first letter because it's looking for the 'T'
console.log(text.match(/t|fr/i)) // also match with the first letter because the 'i' flag
console.log(text.match(/fr|t/gi)) // will match because the global and ignore case