//? Relacion entre length y las propiedades numericas

const frutas = []
frutas.push('Banana', 'Manzana', 'Pera')
// console.log(frutas.length)


//*****************************


// Agregando un elemento a una posicion inexistente 
frutas[5] = 'Fresa'
// console.log(frutas)
// Imprimiendo los indices NO VACIOS del arreglo
// console.log(Object.keys(frutas))

// Imprime 6, porque cuenta el numero de elementos del arreglo
// contando los elementos vacios intermedios
// console.log(frutas.length) // 6


//*****************************


// Si se aumenta el valor de length 
frutas.length = 10
// console.log(frutas)
// console.log(frutas.length);
// console.log(frutas[8]); // undefined


//*****************************


//? Si se disminuye la propiedad length pueden eliminarse elementos
frutas.length = 2
// console.log(frutas)
//TODO ["Banana", "Manzana"]


//*****************************


function printEntries(arr){
    let length = arr.length
    for(let i=0; i<length; i++){
        console.log(arr[i])
    }
    console.log("=== printed ===")
}


let arr = [1, 2, 3]
// printEntries(arr)

// establece el numero de la matriz en 5 mientras que
// actualmente es de 3
arr.length = 5
// printEntries(arr)


//*****************************


// Apara saber si es un arreglo 
// console.log(Array.isArray(arr))


//*****************************


// Concatenar un arreglo con otro
let arr1 = ['a', 'b', 'c']
let arr2 = ['d', 'e', 'f']

let arr3 = [...arr1, ...arr2]
// console.log(arr3)


//*****************************


// El método find() devuelve el valor 
// del primer elemento del array que 
// cumple la función de prueba proporcionada.
// arr.find(callback(element[, index[, array]])[, thisArg])

let arrFind = [5, 12, 8, 130, 44]
let found = arrFind.find(element => element === 44)
// console.log(found)
//TODO 44


// Si necesitas el índice del elemento encontrado 
// en el array, utiliza findIndex().
// arr.findIndex(callback( element[, index[, array]] )[, thisArg])
let indiceConFind = arrFind.findIndex( elemn => elemn == 44)
// console.log(indiceConFind) //TODO 4 indice
// console.log(arrFind[indiceConFind]) //TODO 44 valor



// El método includes() determina si una matriz 
// incluye un determinado elemento, devuelve true
// o false según corresponda.
let pets = ["Perro", "Gato", "Pez", "Cotorro"]
let petsFind = pets.includes('Cotorro')
// console.log(petsFind) //TODO true


//*****************************


//? Encontrar un objeto en un array por una
//? de sus propiedades
// arr.find(callback(element[, index[, array]])[, thisArg])

const inventario = [
    {nombre: 'manzanas', cantidad: 2},
    {nombre: 'bananas', cantidad: 0},
    {nombre: 'cerezas', cantidad: 5}
];

// recordemos que el metodo find() recibe
// arr.findIndex(callback( element[, index[, array]] )[, thisArg])
function esCereza(fruta) { // fruta es el elemento
    return fruta.nombre === 'cerezas';
}
// console.log(inventario.find(esCereza)); //TODO al metodo find(), le pasamos como parametro una "funcion"
// { nombre: 'cerezas', cantidad: 5 }






//? otra forma de hacer lo anterior 
//? de buscar en inventario un objeto

// Utilizando funciones flecha y destructuring
const inventario2 = [
    {nombre: 'manzanas', cantidad: 2},
    {nombre: 'bananas', cantidad: 0},
    {nombre: 'cerezas', cantidad: 5}
];

const resultado = inventario2.find( fruta => fruta.nombre === 'cerezas' );
// console.log(resultado); // { nombre: 'cerezas', cantidad: 5 }



//? Encontrar un numero primo en un array
function isPrime(element, index, array) {
    let start = 2;
    while (start <= Math.sqrt(element)) {
      if (element % start++ < 1) {
        return false;
      }
    }
    return element > 1;
 }
  
//   console.log([4, 6, 8, 12].find(isPrime)); // undefined, no encontrado
//   console.log([4, 5, 8, 12].find(isPrime)); // 5


//? Visitando elementos eliminados o no existentes 
//? siendo visitados por un collback en su valor
//? cuando son visitados

let array1 = [0, 1, , , , 5, 6]

// Mostrando todos los indices , no solo squellos que tienen
// valores asignados
array1.find(function(value, index) {
    // console.log('Indice visitado: ' + index + ' con valor: ' + value)
})

// Mostrando todos los indices, incluyendo los eliminados
array1.find(function(value, index) {
    // Elimina el elemento 5 en la primera itreacióm
    if(index == 0) { 
        // console.log('Deleting array[5] with value ' + array1[5])
        delete array1[5]
    }
    // El elemento 5 se visita aun habiendo sido eliminado
    // console.log('Visited index: ' + index + ' with value: ' + value)
})


//*****************************


//? findIndex()
// arr.findIndex(callback( element[, index[, array]] )[, thisArg])
let arr4 = [5, 12, 8, 130, 100, 55]
const listLargeNumber = (element) => element > 13
// console.log(arr4.findIndex(listLargeNumber))


//*****************************


//? forEach()
// arr.forEach(function callback(currentValue, index, array) {
        // tu iterador
// }[, thisArg]);

// forEach() ejecuta la función callback una vez
//por cada elemento presente en el array en orden
//  ascendente. No es invocada para índices que han 
//sido eliminados o que no hayan sido inicializados (Ej. sobre arrays sparse)

function logArrayElements(element, index, array) {
    // console.log("a[" + index + "] = " + element);
}
// Nótese que se evita el 2° índice ya que no hay ningún elemento en esa posición del array
[2, 5, , 9].forEach(logArrayElements);
// salida:
// a[0] = 2
// a[1] = 5
// a[3] = 9


//? si el array se modifica durante la iteracion
//? otros elementos pueden ser omitidos
// callback(currentValue, index, array)
let words = ['Uno', 'Dos', 'Tres', 'Cuatro']
words.forEach(function (word) {
    // console.log(word);
    if (word === 'Dos') {
        words.shift()
    }
});
//TODO Uno, Dos, Cuatro




//? includes()
// arr.includes(searchElement[, fromIndex])
let arrIncludes = ['a', 'b', 'c']
// arrIncludes.includes('c', 2) // ture
// [1, 2, 3].includes(2);       // true



//? indexOf()
// array.indexOf(searchElement[, fromIndex])
// Encontrar todas las apariciones de un elemento
let indices = [];
let array = ['a', 'b', 'a', 'c', 'a', 'd'];
let element = 'a';
let indice = array.indexOf(element);
// el segundo parametro del metodo indexOf()
// nos ayuda a indicar, apartir de que indice buscar
// dentro del arreglo
//           0    1    2    3    4    5 
// array = ['a', ''a'b', , 'c', 'a', 'd'];
while (indice != -1) {
  indices.push(indice);
  indice = array.indexOf(element, indice + 1)
}
// console.log(indices);
// [0, 2, 4]



// Encontrar si un elemento existe en la matriz o no 
// y actualizar la matriz
const vegetales = ['Patata', 'Tomate', 'Chiles', 'PimientoVerde']

const actualizaColeccionVegetales = (vegetales, vegetal) => {
    if (vegetales.indexOf(vegetal) === -1) {
        vegetales.push(vegetal)
        console.log('Agregando el vegetal ' + vegetal + ' a la coleccion');
    } else if (vegetales.indexOf(vegetal) > -1) {
        console.log('El vegetal ' + vegetal + ' ya existe en la coleccion');
    }
}

// console.log(actualizaColeccionVegetales(vegetales, 'Espinaca'))
// console.log(actualizaColeccionVegetales(vegetales, 'Zanahoria'))
// console.log(actualizaColeccionVegetales(vegetales, 'Zanahoria'))


//*****************************


//? join()
// El método join() une todos los elementos
// de una matriz (o un objeto similar a una matriz)
// en una cadena y devuelve esta cadena.
// arr.join([separator])
const elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join());
// expected output: "Fire,Air,Water"

// console.log(elements.join(''));
// expected output: "FireAirWater"

// console.log(elements.join('-'));
// expected output: "Fire-Air-Water"


//*****************************


//? keys()
// El método keys() devuelve un nuevo objeto
// Array Iterator que contiene las claves de
// índice con las que acceder a cada elemento
// en el array.

let arr5 = ['a', 'b', 'c']
let iterator = arr5.keys()
// console.log(iterator)
//TODO Array Iterator {}

// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
for (const key of iterator) {
    // console.log(key);
}



let arr6 = ['a', ,'c']
let sparseKeys = Object.keys(arr6)
let denseKeys = [...arr6.keys()]
// console.log(sparseKeys)
// console.log(denseKeys)


//*****************************



//? lastIndexOf()
// El método lastIndexOf() devuelve el último índice
// en el que un cierto elemento puede encontrarse en
// el arreglo, ó -1 si el elemento no se encontrara.
// El arreglo es recorrido en sentido contrario, empezando
// por el índice fromIndex.
// arr.lastIndexOf(searchElement) arr.lastIndexOf(searchElement, fromIndex)

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo', 'Fox'];
// console.log(animals.lastIndexOf('Dodo'));
// expected output: 3
// console.log(animals.lastIndexOf('Tiger'));
// expected output: 1


//! El segundo parametro nos ayuda a indicar
//! apartir de que indice buscar de 
//! DERECHA a IZQUIERDA, si son numeros negaticos
//! empezaran desde el ultimo elemento del arreglo -1 === ultima indice del arreglo
//! -2 === penultimo indidce del arreglo
//          0  1  2  3
let arr7 = [2, 5, 9, 2];
arr7.lastIndexOf(2);     // 3
arr7.lastIndexOf(7);     // -1
arr7.lastIndexOf(2, 3);  // 3
arr7.lastIndexOf(2, 2);  // 0
arr7.lastIndexOf(2, -2); // 0
arr7.lastIndexOf(2, -1); // 3




//! El segundo parametro indica apartir de que indice
//! comenzara a buscar hacia atras, NO desde la posicion
//! del ultimo elemento, PRIMERO busca el indice y luego
//! busca el primer elemento que coincida

let indc = [];
let arr8 = ['a', 'b', 'a', 'c', 'a', 'd'];
let findElem = 'a';
let idxEle = arr8.lastIndexOf(findElem);
while (idxEle != -1) {
  indc.push(idxEle);
  idxEle = (idxEle > 0 ? arr8.lastIndexOf(findElem, idxEle - 1) : -1);
}

// console.log(indc);
//TODO [4, 2, 0]


//*****************************


//? map()
// El método map() crea un nuevo array con
// los resultados de la llamada a la función indicada
// aplicados a cada uno de sus elementos.
// var nuevo_array = arr.map(function callback(currentValue, index, array) {
//     Elemento devuelto de nuevo_array
// }[, thisArg])
let numbers = [1, 5, 10, 15]
let doubles = numbers.map(function(x) {
    return  x * 2
})
// console.log(doubles)
//TODO doubles [2, 10, 20, 30]
//TODO numbers [1, 5, 10, 15]




numbers = [1, 4 ,9]
let roots = numbers.map(function(num) {
    return Math.sqrt(num)
})
// console.log(roots)
//TODO roots [1, 2, 3]
//TODO numbers [1, 4, 9]




const kvArray = [
    { clave:1, valor:10 },
    { clave:2, valor:20 },
    { clave:3, valor:30 }
];

const reformattedArray = kvArray.map(function (obj){
    const rObj = {}
    rObj[obj.clave] = obj.valor
    return rObj 
})
// console.log(reformattedArray)
//TODO [{1:10}, {2:20}, {3:30}]
// kvArray sigue siendo:
// [{clave:1, valor:10},
//  {clave:2, valor:20},
//  {clave:3, valor: 30}]


let map = Array.prototype.map;
let valores = map.call('Hello World', function(char) { return char.charCodeAt(0); });
// console.log(valores)
// valores ahora tiene [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]



// Usando map() para invertir una cadena
let str = '12345';
let reverseString = [].map.call(str, function(x) {
  return x;
}).reverse().join('');
// console.log(reverseString)
// Salida: '54321'
// Bonus: usa'===' para probar si la cadena original era un palindromo



// Considera:
let arrayParseInt =['1', '2', '3'].map(parseInt);
// Mientras uno esperaría [1, 2, 3]
// en realidad se obtiene [1, NaN, NaN]

// parseInt se usa comúnmente con un argumento, pero toma dos.
// El primero es una expresión y el segundo el radix.
// a la función callback, Array.prototype.map pasa 3 argumentos:
// el elemento, el índice y el array.
// El tercer argumento es ignorado por parseInt, pero no el segundo,
// de ahí la posible confusión. Véase el artículo del blog para más detalles

function returnInt(element) {
  return parseInt(element, 10);
}

['1', '2', '3'].map(returnInt); // [1, 2, 3]
// El resultado es un arreglo de números (como se esperaba)

// Un modo más simple de lograr lo de arriba, mientras de evita el "gotcha":
['1', '2', '3'].map(Number); // [1, 2, 3]



//*****************************



//? pop()
// El método pop() elimina el último elemento de
// un array y lo devuelve. Este método cambia la
// longitud del array.
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
// console.log(plants.pop());
// expected output: "tomato"
// console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
plants.pop();
// console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]


//*****************************


//? push()