//* Ciclos ( Loops )

//! while
let contador = 0;
// while( contador < 10 ) {
//     console.log(`While ${contador}`);
//     contador++;
// }


//! do...while
// do {
//     console.log(`do while ${contador}`);
//     contador++;
// } while ( contador < 10 );



//! for
// for( let i=0; i<10; i++ ) {
//     console.log(`for ${i}`);
// }



//! for in
// const user = {
//     nombre: 'Lalo',
//     edad: 20,
//     apellido: 'Chavez'
// }
// for( const pro in user) {
//     console.log(`Propiedad: ${pro} de user`);
// }


//! for of
// let numeros = [1, 2, 3, 4, 5, 6];
// for( const ele of numeros) {
//     console.log(`Elemento: ${ele} del areglo`)
// }

// let cadena = 'Hola mundo';
// for( const caracter of cadena) {
//     console.log(`${caracter}`);
// }


//! Curiosidades con objetos
let obj = {};

let id = 2654984;
//* La propiedad "id" si tiene comillas
obj[id] = {
    user: 'Lalo',
    country: 'Mexico'
};

//* La propiedad "age" no tiene comillas 
obj['age'] = 10;

console.log( obj );