const text = 'João é calmo, mas no transito fica nervoso.'

console.log(text.match(/[\wÀ-ú]+/g))
console.log(text.match(/[\wÀ-ú]+(?=,)/g))
console.log(text.match(/[\wÀ-ú]+(?=, mas)/g))