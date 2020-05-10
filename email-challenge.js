const text = `
Email list:
    - thiagopaiva99@gmail.com
    - fulano@cod3r.com.br
    - tal@company.info.br
    - fulano_tal@gmail.com
    - alguem.email@gmail.com.br
`

console.log(text.match(/[a-z0-9\._]+@[a-z0-9\._]+\.\w{2,4}\.?\w*?/gi))
console.log(text.match(/[\w\.]+@[\w\.]+\.\w{2,4}\.?\w*?/gi))