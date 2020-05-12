const text = 'market supermarket hipermarket minimarket'

console.log(text.match(/(super|hiper|mini)?market/g))
console.log(text.match(/((su|hi)per|mini)?market/g))