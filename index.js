//* Tipo de Operadores


//? Operadores de asignacipón

let a = 2
let b = 3


//* Asignación

// let ambos = a = c = b
// console.log(ambos) // 3


//* Asignación de adición 
// a += b // a = a + b
// console.log(a) // 2 + 3 = 5


//* Asignación de resta
// a -= b // a = a - b
// console.log(a) // 2 - 3 = -1


//* Asignación de multiplocación
// a *= b // a = a * b
// console.log(a) // 2 * 3 = 6


//* Asignación de division 
// a /= b // a = a / b
// console.log(a) // 2 / 3 = 0.666


//* Asignación de MOD o residuo 
// a %= b // a = a % b
// console.log(a) // 2 residuo 3 = 2 


//* Asignación de elvación
// a **= b // a = a ** b
// console.log(a); // 2 ** 3 = 8



//? Operadores de comparación


//* Comprar si es igual el tipo de valor
// let result = a == b // 2 == 3
// console.log(result); // false


//* Comprar si son diferentes tipos de valor
// let result = a != b // 2 != 3
// console.log(result); // true


//* Comprar si son estrictamente el mismo tipo de valor y de dato (string, number, boolean etc.)
// let result = a === 2 // 2 == 2
// console.log(result); // true


//* Comprar si son diferentes el mismo tipo de valor y de dato (string, number, boolean etc.)
// let result = a !== 2 // 2 == 2
// console.log(result); // false


//* MAYOR que
// let result = a > b  // 2 > 3
// console.log(result); // false


//* MAYOR o igual que
// let result = a >= b  // 2 > 3
// console.log(result); // false


//* MENOR que
// let result = a < b  // 2 < 3
// console.log(result); // true


//* MENOR o igual que
// let result = a <= b  // 2 <= 3
// console.log(result); // true



//? Operadores aritmeticos

//* Resudio
// let result = a % b // 2 % 3 
// console.log(result); // 2


//* Incremento
// let result = a++  // 2 + 1 
// console.log(result);  // 2
// console.log(a);       // 3


//* Decremento
// let result = a--  // 2 - 1 
// console.log(result);  // 2
// console.log(a);       // 1


//* Elevación 
// let result = a ** b  // 2 elevado 3 
// console.log(result);  // 8



//? Operadores logicos


//* Operador AND &
// let comparacion = true && true
// console.log(comparacion); // true


// let comparacion = true && false
// console.log(comparacion); // false


//* Operador OR ||
// let result = a || b // Eligue el primero en ser true de izquierda a derecha
// console.log(result);

// result = false || b
// console.log(result);


//* Operador logico NOT !

// let comparacion = a != b // 2 es diferente de 3?
// console.log(comparacion); // true



//? Operador de cadena

// let firstWord = 'Hola'
// let secondWord= 'mundo'
// let join = firstWord + ' ' +secondWord
// console.log(join); // Hola mundo


// let name = 'Eduardo '
// let lastName1 = 'Chavez '
// let lastName2 = 'Dorado '
// name += lastName1 + lastName2; 
// console.log(name) // Eduardo Chavez Dorado


//? Operador ternario

// let result = 10 > 5 ? 'El primer numero SÍ es mayor' : 'El primer numero NO es mayor';
// console.log(result) // El primer numero SÍ es mayor


// let age = 17
// let ageValidate = 18
// let comparision = (age >= ageValidate) ? true : false;
// console.log(comparision); // false




//? Operadores Unarios

//* Delete
// Elimina propiedades y metodos de un objeto
// const User = {
//     name: 'Eduardo',
//     age: 20,
//     country: 'México',
//     sayName(){
//         return this.name;
//     }
// };
// console.log(User)
// delete User.name;
// delete User.sayName;
// console.log(User)


// const array = [1, 2, 3, 4, 5]
// console.log(array)
// delete array[array.length - 1]
// console.log(array)


//* Typeof

// let number = 1
// let boolean = true
// let isString = 'Hellow world'
// let array = []
// let object = {}

// console.log(typeof number)
// console.log(typeof boolean)
// console.log(typeof isString)
// console.log(array instanceof Array )
// console.log(typeof object)



//? operadores relacionales


//* instanceof 

// let objeto = {}
// let array = []
// let IAmString = "I'm a string"
// console.log(`Objeto es una instancia de Object? ${objeto instanceof Object}`);
// console.log(`array es una instancia de Array? ${array instanceof Array}`);


//* in
// const User = {
//     name: 'Eduardo',
//     age: 20,
//     email: 'eduardo@gmail.com'
// }
// console.log( 'age' in User)
// for (let pro in User) {
//     console.log(pro)
// }


// const array = ['Juan', 'Pepe', 'Carlos', 'David', 'Angel']
// for (let ele of array) {
//     console.log(ele)
// }



