const text = 'Funny text! hehehe'

console.log(text.match(/(he)+/g))

const text2 = 'http://www.site.info www.escola.ninja.br google.com.ag https://github.com'
console.log(text2.match(/(http:\/\/|https:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2,})?/g))