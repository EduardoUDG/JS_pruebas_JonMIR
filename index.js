
const nuevoArreglo = new Array
// console.log(nuevoArreglo)


//************************************************


let frutas = ["Manzana", "Banana"]
// console.log(frutas.length) 
// 2


//************************************************


// Acceder a un elemento de Array mediante su indice
let primero = frutas[0]
// console.log(primero)
// Manzana

let ultimo = frutas[frutas.length - 1]
// console.log(ultimo)
// Banana


//************************************************


// Como recorrer un arreglo
frutas.forEach(function(elemento, indice, array) {
    // console.log(elemento, indice)
})
// Manzana 0
// Banana  1


//************************************************


// Como agregar un elemento al final de un arreglo
let nuevaLongitud = frutas.push('Naranja') // Añade "Naranja" al final
// console.log(frutas)
//TODO ["Manzana", "Banana", "Naranja"]


//************************************************


// Como eliminar el último elemento de un Array
ultimo = frutas.pop()
// console.log(frutas)
//TODO ["Manzana", "Banana"]


//************************************************


// Añadir un elemento al principio de nuestro Array
nuevaLongitud = frutas.unshift('Fresa')
// console.log(frutas)
//TODO ["Fresa", "Manzana", "Banana"]


//************************************************


// Eliminar el primer elemento de un Array
// El método shift() elimina el primer elemento del array
// y lo retorna. Este método modifica la longitud del array.
primero = frutas.shift()
// console.log(frutas)
//TODO ["Manzana", "Banana"]
console.log(primero)
//TODO "Fresa"


//************************************************


// Encontrar el indice de un elemento del Array
frutas.push('Fresa')
//TODO ["Manzana", "Banana", "Fresa"]
let pos = frutas.indexOf('Banana')
// console.log(pos) // 1


//************************************************


// Eliminar un único elemento mediante su posicion
let elementoEliminado = frutas.splice(pos, 1)
// console.log(elementoEliminado)
//TODO ["Banana"]
// console.log(frutas)
//TODO ["Manzana", "Fresa"]


//************************************************


let vegetales = ['Repollo', 'Nabo', 'Rábano', 'Zanahoria']
// console.log(vegetales)
//TODO ["Repollo", "Nabo", "Rábano", "Zanahoria"]

let posVeg = 1, numElemVeg = 2

let elementosVegEliminados = vegetales.splice(posVeg, numElemVeg)
//TODO ["Nabo", "Rábano"] ===> lo que se ha guardado en "elementosVegEliminados"

// console.log(vegetales)
//TODO ["Repollo", "Zanahoria"] ===> lo que actualmente tiene "vegetales


//************************************************


// copiar un arreglo
let juegos = ["Fortnite", "Paladins"]
let copiarArray = juegos.splice()
//TODO ["Fortnite", "Paladins"] ===> copiado en "copiarArray" 


//************************************************


//! ERRORES
let decadas = [1950, 1960, 1970, 1980, 1990, 2000, 2010]
// console.log(decadas.0)    //error de sintaxis 
// console.log(decadas[0])   // funciona correctamente
// console.log(decadas['2']) // funciona correctamente

// renderizador.3d.usarTextura(modelo, 'personaje.png') // error
// renderizador['3d'].usarTextura(modelo, 'personaje.png')


//************************************************







