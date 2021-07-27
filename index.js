

try {

    //* En el try se agrega el código a evaluar
    console.log('Hola soy un try');
    noExisto;
} catch( err ) {

    //! Si hay un error catch captura cualquier error por try
    console.log( err );    
} finally {

    //? Finally se ejecutara siempre la final de un bloque try...catch
    console.log('Hola soy un finally');
}

//* Usualemnte podemos usar este tema para funciónes async-await