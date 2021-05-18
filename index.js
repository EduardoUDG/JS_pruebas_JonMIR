var x = 10;

function createFunction1() {
    var x = 20;
    return new Function('return x;'); // esta |x| se refiere a la |x| global
}

function createFunction2() {
    var x = 20;
    function f() {
        return x; // esta |x| se refiere a la |x| local
    }
    return f;
}

// var f1 = createFunction1();
// var f2 = createFunction2();
// console.log(f1());          // 10
// console.log(f2());          // 20


// *********************************************

// Funcion declarada
function thisIsAFunction(){
    console.log("One")
}
// Invocacion de funcion
// thisIsAFunction()


function suma(a, b){
    return a+b
}
// console.log(suma(5, 5))


// Valores por defecto a los parametros
function saludo(nombre = "usuario", edad = 0){
    return "Bienvenido " + nombre + " tienes " + edad
}
// console.log(saludo())


//! Funciones declaradas VS Expresadas
//* La funcion declarada puede invocarse
//* en cualquier parte de nuetro código
//* incluso antes de que la funcion sea declarda


//? funcion declarada
funcionDeclarada()

function funcionDeclarada(){
    console.log('Esta es una funcion declarada')
}

funcionDeclarada()


//? funcion expresada o Anonima
const funcionExpresada = function (){
    console.log('Esta es una funcion expresada')
}

funcionExpresada()
