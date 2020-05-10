const text = 'Thiago won 120 millions playing with the 6 9 21 23 45 46 numbers'

console.log(text.match(/\d{1,2}/gi))
console.log(text.match(/[0-9]{2}/gi))
console.log(text.match(/[0-9]{1}/gi))
console.log(text.match(/[0-9]{1,}/gi))

console.log(text.match(/\w{7}/gi))