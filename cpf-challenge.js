const text = `
CPF list:
    - 260.345.690-36
    - 999.845.480-82
    - 386.137.650-41
    - 386.137.650-41
    - 596.695.260-43
`

console.log(text.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/gi))

const text2 = `
CPF list:
    - 260.345.690-36
    - 999.845.480-82
    - 386.137.650-41
    - 386.137.650-41
    - 596.695.260-43
    - 35333584028
`

console.log(text2.match(/\d{3}\.?\d{3}\.?\d{3}-?\d{2}/gi))