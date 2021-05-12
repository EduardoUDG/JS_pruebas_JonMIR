/* 
let miNombre = new String("Lalo")
let miDia = new Date(2021, 12, 8)

if(miNombre instanceof String){
    console.log("miNombre si es una instancia del Objeto String",miNombre instanceof Object);
}

if(miDia instanceof Date){
    console.log("miDia si es una instancia del Objeto Date",miDia instanceof Object);
}
*/

function Coche(fabricante, modelo, ejercicio) {
    this.fabricante = fabricante
    this.modelo = modelo
    this.ejercicio= ejercicio
 }

 miCoche = new Coche("Honda", "Accord", 1998)
 a = miCoche instanceof Coche // devuelve verdadero (true)
 b = miCoche instanceof Object // devuelve verdadero (true)

 console.log(a);
 console.log(b);

