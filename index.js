let wordLength = 'Este es un pequeño parrafo para saber cuantos caracteres tiene'
// console.log(wordLength.length)


// ***************************************************


let words = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Commodi veniam ab exercitationem expedita distinctio numquam
facilis eos placeat ullam deleniti possimus ea quo, saepe sunt?
Necessitatibus itaque cumque praesentium sed`

let word = 'Eduardo'
// console.log(`The word "${word}" ${ words.includes(word) ? 'is' : 'is not'  } in the sentence`);


// ***************************************************


let userName = 'Eduardo Chavez Dorado'
// console.log(userName.toLowerCase())
// console.log(userName.toUpperCase())


// ***************************************************

let password = `   password    `
// console.log(password)
// console.log(password.trim())


// ***************************************************


const namesList = 'Lalo Hector Juan Juanca' 
let separador = " "
let arrayList = namesList.split(separador)

// console.log(arrayList instanceof Array)
arrayList.forEach(element => console.log(`Printing element: ${element}`))



