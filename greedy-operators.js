const text = '<div>Conteúdo 01</div><div>Conteúdo 02</div>'

console.log(text.match(/<div>.*<\/div>/g))
console.log(text.match(/<div>.+<\/div>/g))
console.log(text.match(/<div>.{0,100}<\/div>/g))

console.log(text.match(/<div>.*?<\/div>/g))
console.log(text.match(/<div>.+?<\/div>/g))
console.log(text.match(/<div>.{0,100}?<\/div>/g))

const text2 = '<div class="class-1">Conteúdo 01</div><div class="class-2">Conteúdo 02</div>'

console.log(text2.match(/class=".+?"/g))