const text = '0,1,2,3,4,5,6,a.b c!d?e[f'

const regexEven = /[02468]/g
console.log(text.match(regexEven))

const text2 = 'João will not take a tour arount the city'

const regexAccentuation = /o[aã]/gi
console.log(text2.match(regexAccentuation))