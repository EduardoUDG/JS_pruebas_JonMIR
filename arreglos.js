//? Relacion entre length y las propiedades numericas

const frutas = []
frutas.push('Banana', 'Manzana', 'Pera')
// console.log(frutas.length)


//*****************************


//? length
// Agregando un elemento a una posicion inexistente 
frutas[5] = 'Fresa'
// console.log(frutas)
// Imprimiendo los indices NO VACIOS del arreglo
// console.log(Object.keys(frutas))

// Imprime 6, porque cuenta el numero de elementos del arreglo
// contando los elementos vacios intermedios
// console.log(frutas.length) // 6




// Si se aumenta el valor de length 
frutas.length = 10
// console.log(frutas)
// console.log(frutas.length);
// console.log(frutas[8]); // undefined


//? Si se disminuye la propiedad length pueden eliminarse elementos
frutas.length = 2
// console.log(frutas)
//TODO ["Banana", "Manzana"]



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

//? isArray()
// Apara saber si es un arreglo 
// console.log(Array.isArray(arr))


//*****************************

//? express operator
// Concatenar un arreglo con otro
let arr1 = ['a', 'b', 'c']
let arr2 = ['d', 'e', 'f']

let arr3 = [...arr1, ...arr2]
// console.log(arr3)


//*****************************


//? find()
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



//? find()
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



//*****************************



//? includes()
// arr.includes(searchElement[, fromIndex])
let arrIncludes = ['a', 'b', 'c']
// arrIncludes.includes('c', 2) // ture
// [1, 2, 3].includes(2);       // true



//*****************************



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
// El método push() añade uno o más elementos al final
// de un array y devuelve la nueva longitud del array.
// arr.push(element1[, ...[, elementN]])

//*  Uniendo dos arrays
let vegetables2 = ['parsnip', 'potato'];
let moreVegs = ['celery', 'beetroot'];

// Merge the second array into the first one
// Equivalent to vegetables2.push('celery', 'beetroot');
Array.prototype.push.apply(vegetables2, moreVegs);
// console.log(vegetables2); // ['parsnip', 'potato', 'celery', 'beetroot']



//*****************************



//? reduce()
// El método reduce() ejecuta una función reductora sobre cada
// elemento de un array, devolviendo como resultado un único valor.
// arr.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial])
const array2 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
// console.log(array2.reduce(reducer));
//TODO expected output: 10

// 5 + 1 + 2 + 3 + 4
// console.log(array2.reduce(reducer, 5));
//TODO expected output: 15

[0,1,2,3,4].reduce(function(valorAnterior, valorActual, indice, vector) {
    // console.log('ValorAnterior: ' + valorAnterior + ' valorActual: ' + valorActual + ' Indice: ' + indice)
    return valorAnterior + valorActual;
});



// Si proporcionamos un valor inicial:
const arrayReduce = [0,1,2,3,4].reduce(function(valorAnterior, valorActual, indice, vector) {
    // console.log('ValorAnterior: ' + valorAnterior + ' valorActual: ' + valorActual + ' Indice: ' + indice)
    return valorAnterior + valorActual;
}, 10);
// console.log(arrayReduce)



const integrado = [[0,1], [2,3], [4,5]].reduce(function (a,b) {
    return a.concat(b);
}) 
// console.log(integrado)


//*****************************

//? reduceRight()
// Aplica una función simultáneamente contra un acumulador y cada
// elemento de un array (de derecha a izquierda) para reducirlo
// a un único valor.
// .reduceRight(function(valorPrevio, valorActual, indice, array)

// La primera vez que se llama a la función, el valorPrevio y el
// valorActual puede ser uno de los dos valores. Si se incluye un
// valorInicial en la llamada a reduceRight, entonces el valorPrevio
// será igual al valorInicial y el valorActual será igual al último
// valor del array. Si no se incluye ningún valorInicial, entonces
// el valorPrevio será igual al último valor del array y el valorActual
// será igual al penúltimo valor.

const reduceR = [0,1,2,3,4].reduceRight(function(valorPrevio, valorActual, indice, array){
    // console.log('ValorAnterior: ' + valorPrevio + ' valorActual: ' + valorActual + ' Indice: ' + indice)
    return valorPrevio + valorActual;
});
// console.log(reduceR)



//*****************************


//? reverse()
// El método reverse() invierte el orden de los elementos
// de un array in place. El primer elemento pasa a ser el
// último y el último pasa a ser el primero.

// El método reverse cruza los elementos del objeto matriz
// invocados en su lugar, mutando la matriz, y retornando
// una referencia a la misma.
// array.reverse()
const array8 = ['one', 'two', 'three'];
// console.log('array8:', array8);
//TODO expected output: "array8:" Array ["one", "two", "three"]

const reversed = array8.reverse();
// console.log('reversed:', reversed);
//TODO expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
// console.log('array8:', array8);
//TODO expected output: "array8:" Array ["three", "two", "one"]



//*****************************



//? slice()
// El método slice() devuelve una copia de una parte del
// array dentro de un nuevo array empezando por inicio
// hasta fin (fin no incluido). El array original no se modificará.
//? arr.slice([inicio [, fin]])
//* Parametros
//TODO [inicio]
//TODO Índice donde empieza la extracción. El primer elemento corresponde con el índice  0.
//TODO Si el índice especificado es negativo, indica un desplazamiento desde el final del array. slice(-2)extrae los dos últimos elementos del array
//TODO Si inicio es omitido el valor por defecto es 0.
//TODO Si inicio es mayor a la longitud del array, se devuelve un array vacío.

//TODO [fin]
//TODO Índice  que marca el final de la extracción. slice extrae hasta, pero sin incluir el final.
//TODO slice(1,4) extrae desde el segundo elemento hasta el cuarto  (los elementos con índices 1, 2,  y 3).
//TODO Con un índice negativo, fin indica un desplazamiento desde el final de la secuencia. slice(2,-1) extrae desde el tercer hasta el penúltimo elemento en la secuencia.
//TODO Si fin es omitido, slice extrae hasta el final de la secuencia (arr.length).
//TODO Si fin es mayor a la longitud del array, slice extrae hasta el final de la secuencia (arr.length).
//? [Retorno]Un nuevo array con los valores extraídos.

//! RECORDEMOS QUE en los parametros reciben los indices
const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']
let masculinos = nombres.slice(0,2)
// console.log(masculinos)
// ['Pedro', ''Miguel]



//*****************************


//? some()
// El método some() comprueba si al menos un elemento
// del array cumple con la condición implementada por
// la función proporcionada.
// los elementos borrados no son visitados.
// arr.some(callback(element[, index[, array]])[, thisArg])
const array9 = [1, 2, 3, 4, 5]
const even = (element) => element%2 === 0

// console.log(array9.some(even))
// true

function isBiggerThan10(element, index, array) {
    return element > 10;
 }
 [2, 5, 8, 1, 4].some(isBiggerThan10);  // false
 [12, 5, 8, 1, 4].some(isBiggerThan10); // true
 [2, 5, 8, 1, 4].some(elem => elem > 10);  // false
 [12, 5, 8, 1, 4].some(elem => elem > 10); // true



var fruits = ['apple', 'banana', 'mango', 'guava'];
function checkAvailability(arr, val) {
  return arr.some(function(arrVal) {
    return val === arrVal;
  });
  checkAvailability(fruits, 'kela');   // false
}
checkAvailability(fruits, 'banana'); // true



//*****************************

//? sort()
// El método sort() ordena los elementos de un arreglo
// (array) localmente y devuelve el arreglo ordenado. 
// La ordenación no es necesariamente estable. El modo 
// de ordenación por defecto responde a la posición del 
// valor del string de acuerdo a su valor Unicode.
// arr.sort([compareFunction])

// Si no se provee compareFunction, los elementos son
// ordenados convirtiéndolos a strings y comparando la 
// posición del valor Unicode de dichos strings. 
// Por ejemplo, "Cherry" viene antes que "banana"  
// (porque las mayúsculas van antes que las minúsculas en
// la codificación Unicode) . En un ordenamiento numérico,
// 9 está antes que 80, pero dado que los números son
// convertidos a strings y ordenados según el valor Unicode,
// el resultado será "80" antes que "9".


const frutas2 = ['guindas', 'manzanas', 'bananas']
frutas2.sort() // ['bananas', 'guindas', 'manzanas']

const puntos = [1, 10, 2, 21]
puntos.sort() // [1, 10, 2, 21]
// Tenga en cuenta que 10 viene antes que 2
// porque '10' viene antes que '2' según la posición del valor Unicode.

const cosas = ['word', 'Word', '1 Word', '2 Words'];
cosas.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// En Unicode, los números vienen antes que las letras mayúsculas
// y estas vienen antes que las letras minúsculas.

// Si se provee compareFunction, los elementos del array son ordenados
// de acuerdo al valor que retorna dicha función de comparación. Siendo
// a y b dos elementos comparados, entonces:

//TODO Si compareFunction(a, b) es menor que 0, se sitúa a en un indice
//TODO menor que b. Es decir, a viene primero.

//TODO Si compareFunction(a, b) retorna 0, se deja a y b sin cambios
//TODO entre ellos, pero ordenados con respecto a todos los elementos
//TODO diferentes. Nota: el estandar ECMAscript no garantiza este
//TODO comportamiento, por esto no todos los navegadores (p.ej.  
//TODO Mozilla en versiones que datan hasta el 2003) respetan esto.

//TODO Si compareFunction(a, b) es mayor que 0, se sitúa b en un indice
//TODO menor que a.

//TODO compareFunction(a, b) siempre debe retornar el mismo valor dado
//TODO un par especifico de elementos a y b como sus argumentos. 
//TODO Si se retornan resultados inconsistentes entonces el orden de 
//TODOordenamiento es indefinido.


//* Entonces, la función de comparación tiene la siguiente forma:

function compare(a, b) {
    if ('a es menor que b según criterio de ordenamiento') {
      return -1;
    }
    if ('a es mayor que b según criterio de ordenamiento') {
      return 1;
    }
    // a debe ser igual b
    return 0;
 }


//* Para comparar números en lugar de strings, la función de comparación
//* puede simplemente restar b de a. La siguiente función ordena el array 
//* de modo ascendente:

const arregloNumeros = [100, 200, 21, 324, 454, 7, 3, 5,1]
// console.log(arregloNumeros)
function compareNumbers(a, b) {
    return a - b;
}
// console.log(arregloNumeros.sort(compareNumbers))



//* El metodo sort puede ser usado convenientemente con function
//* expressions (y closures):

const numbers2 = [4, 2, 5, 1, 3]
// console.log(numbers2)
numbers2.sort(function(a, b) {
    return a -b 
})
// console.log(numbers2)


//* Los objectos pueden ser ordenados por el valor de una de sus
//* propiedades.

const items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
  ];
// console.log(items)
items.sort(function (a, b) {
if (a.name > b.name) {
    return 1;
}
if (a.name < b.name) {
    return -1;
}
// a must be equal to b
return 0;
});
// console.log(items)

//! Ejemplo mio propuesto sort()

const celulares = [
    { modelo: 'iphone', precio:12000 },
    { modelo: 'samsung', precio:8000 },
    { modelo: 'xiaomi', precio:5000 },
    { modelo: 'MotoG', precio:7000 },
    { modelo: 'Honor', precio:13000 },
]
// console.log(celulares)
function ordenarPrecios(a, b){
    if(a.precio > b.precio) {
        return 1
    }
    if(a.precio < b.precio) {
        return -1
    }
    return 0
}
// console.log(celulares.sort(ordenarPrecios))





//* un array de elementos string, sin especificar
//* una funcion de comparación

const arr9 = ['a', 'b', 'Z', 'Aa', 'AA']
//           [ 'AA', 'Aa', 'Z', 'a', 'b' ]
arr9.sort()
// console.log(arr9)



//* un array de elementos numericos, sin la funcion 
//* de comparacion

const arr10 = [40, 1, 5, 200]
//            [ 1, 200, 40, 5 ]
// console.log(arr10.sort())



//* Un array de elementos numéricos, usando una función
//* de comparación:
const arr11 = [40, 1, 5, 200]
function comparar2(a, b){ return a - b }
// console.log(arr11.sort(comparar2))



//* Creando, mostrando y ordenando un array
const arr12 = ['80', '9', '700', 40, 1, 5, 200];
function comparar(a, b) {
  return a - b;
}
// console.log('original:', arr12.join());
// console.log('ordenado sin función:', arr12.sort());
// console.log('ordenado con función:', arr12.sort(comparar));



//* Ordenando caracteres no ASCII
// Para ordenar strings con characters no ASCII
// , i.e. strings con caracteres con acento 
// (e, é, è, a, ä, etc.), strings de lenguajes diferentes
//  al inglés: use String.localeCompare. Esta función puede
// comparar esos caracteres para que aparezcan en el orden correcto.
const items3 = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu'];
items3.sort(function (a, b) {
  return a.localeCompare(b);
});

// items3 is ['adieu', 'café', 'cliché', 'communiqué', 'premier', 'réservé']


//* Ordenando con map
// el array a ordenar
var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

// array temporal contiene objetos con posición y valor de ordenamiento
var mapped = list.map(function(el, i) {
  return { index: i, value: el.toLowerCase() };
})
// console.log('Imprimiendo lista mapped: ', mapped)
// ordenando el array mapeado que contiene los valores reducidos
mapped.sort(function(a, b) {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});
// console.log('Imprimiendo lista mapped con sort: ', mapped)
// contenedor para el orden resultante
var result = mapped.map(function(el){
  return list[el.index];
});

// console.log('Imprimiendo lista result con map: ', result)



//*****************************



//? spliece()
// El método splice() cambia el contenido de un array
// eliminando elementos existentes y/o agregando nuevos elementos.
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
//! item1, item2 ...
// Los elementos que se agregarán al array, empezando en
// el índice start. Si no se especifica ningún elemento,
// splice() solamente eliminará elementos del array.
const months = ['Jan', 'March', 'Abril', 'June']
// indicePosicionado/ NelementosAEliminar / Remplaza por
months.splice(1, 0, 'Feb')
//TODO ['Jan', 'Feb', 'March', 'Abril', 'June']

months.splice(4, 1, 'May')
//TODO ['Jan', 'Feb', 'March', 'Abril', 'May']



//* Eliminando 1 elemento desde le indice 3
const myFish = ['Angel', 'Clown', 'Drum', 'Mandarin', 'Sturgeon']
let remove = myFish.splice(3, 1)
//TODO ['Angel', 'Clown', 'Drum', 'Sturgeon']


//* Elimina 1 elemento desde indice 2 e inserta "Halo"
const videoGames = ['Free fire', 'Fortnite', 'Mario', 'FIFA']
let removeVideoGame = videoGames.splice(2, 1, 'Halo')
//TODO ['Free fire', 'Fortnite', 'Mario', 'FIFA']


//* Eliminando 1 elemento desde el indice -2
const fruitsBag = ['Manzana', 'Uva', 'Mango', 'Pera']
let removeFruits = fruitsBag.splice(0, 2, 'Durazno', 'Fresa')
//TODO ['Manzana', 'Uva', 'Mango', 'Pera']



//* Elimnando 2 elemento desde el indice 2 
const myDrinks = ['Sprite', 'Fanta','Mazanita', 'squart', 'Red']
let removeDrinks = myDrinks.splice(myDrinks.length - 3, 2)
//TODO ['Sprite', 'Fanta','Red']


//* Eliminando 1 elemento desde el indice -2
const myNumbers = [0, 1, 2, 3, 4, 5 ,6]
let removeNumber = myNumbers.splice(-2, 1)
//TODO removeNumber = [5]


//* Eliminando todos los elementos tras el indice 2
const arrayPets = ['Dog', 'Fish', 'Cat', 'Bird']
let removePets = arrayPets.splice(2)
//TODO arrayPets = ['Dog', 'Fish']
//TODO removePets = ['cat', 'Bird']



//*****************************


//? toString()
// El método toString() devuelve una cadena de caracteres
// representando el array especificado y sus elementos.

const array10 = [1, 2, 'a', 'la']
// console.log(array10.toString())
//TODO "1,2,a,la"



//*****************************


//? unshift()
// El método unshift() agrega uno o más elementos al inicio
// del array, y devuelve la nueva longitud del array.

const arrayNumbers = [1, 2, 3]
// console.log(arrayNumbers.unshift(4, 5))
// 5, el metodo unshift retorna el lenght del array

arrayNumbers.unshift(-2, -1)
arrayNumbers.unshift([-3])
// console.log(arrayNumbers)

