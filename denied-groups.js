const text = '0,1,2,3,4,5,6,a.b c!d?e[f'

console.log(text.match(/\D/g))
console.log(text.match(/[^0-9]/g))