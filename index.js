

let a = new Number('123'); // a === 123 es false
let b = Number('123'); // b === 123 es true

// console.log(`"a" es igual === 123?  ${a === 123}`)
// console.log(`"b" es igual === 123?  ${b === 123}`)

// console.log(`"a" es una unstancia de Number? `, a instanceof Number) // es true
// console.log(`"b" es una instancia de Number? `, b  instanceof Number) // es false


// ******************************************************************************

let decimal = 7.19

// console.log(decimal.toFixed(1))
// console.log(decimal.toFixed(3))


// ******************************************************************************


let numberOne = 15.80
let numberText = '20.5'

let parteFlotante1 = parseFloat(numberOne)
let parteFlotante2 = parseFloat(numberText)

// solo nos devuelve  la parte entera
// console.log(parseInt(numberOne))
// console.log(parseInt(numberText))


// ******************************************************************************


const MasgrandeNum    = Number.MAX_VALUE;
const MaspequeNum     = Number.MIN_VALUE;
const infinitoNum     = Number.POSITIVE_INFINITY;
const notInfinitoNum  = Number.NEGATIVE_INFINITY;
const noEsNum         = Number.NaN;

console.log(MasgrandeNum)
console.log(MaspequeNum)
console.log(infinitoNum)
console.log(notInfinitoNum)
console.log(noEsNum)