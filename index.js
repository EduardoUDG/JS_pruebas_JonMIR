// const object1 = {
// 	a:'foo',
// 	b:42,
// 	c:{}
// };
// object1.a = "KFC"
// console.log(object1.a)


// const a = 'foo'
// const b = 42
// const c = {}
// const object2 = { 
// 	a:a,
// 	b:b,
// 	c:c
// };
// object2.b = 20
// console.log(object2)


// const object3 = {
// 	a,
// 	b,
// 	c
// };
// object3.a = 'Hamburguesa'

// console.log(object3)




//* Nuevas notaciones en ECMAScript 2015

// ///? para declarar propiedades/valor
// let a = 'foo', b = 42, c = {};
// let Object1 = {
// 	a,
// 	b,
// 	c
// };
// console.log(Object1);



// //? para declara metodos/funciones
// const object2 = {
// 	name:'Eduardo',
// 	metodoSaludar(){
// 		console.log(`Hi ${this.name}`)
// 	},
// };
// object2.metodoSaludar()



// //? declara nombre de propiedades
// let food = 'banana'

// const object3 = {
// 	[food]:"I'm a banana",
// 	['b' + 'ar']:'there'
// };
// console.log(object3)




//* Accediendo a propiedades
// let name = 'Eduardo' 
// const Objeto = {
// 	name,
// 	age:20,
// 	saludar(){
// 		console.log(`Hi ${this.name}`)
// 	}
// };

// console.log(Objeto['name']);
// console.log(Objeto.age);
// Objeto.saludar()

// console.log(Objeto.name === {name}.name)
// const Objeto = { x:1, x:2 }
// console.log(Objeto.x)





//* Funcion generadora

// async function* request(){
// 	let i = 1;
// 	let url = "http://jsonplaceholder.typicode.com/photos/";

// 	while(true){
// 		let resp = await fetch(url+i);
// 		let json = await resp.json();
		
// 		yield json;
// 		i++;
// 	}
// }

// let r  = request()
// async function get(){
// 	let content = await r.next()
// 	let imageUrl = content.value.url;
// 	let template = `
// 	<li>
// 		<img src="${imageUrl}" width="200px"></img>
// 	</li>`;
// 	document.getElementById('miDiv').innerHTML += template; 
// }



// function* serie() {
// 	yield 1;
// 	yield 10;
// 	yield 100;
// 	yield 1000;
// 	yield 10000;
// }


// const iterationFuncion = serie(); // Funcion iteradora / Array iteration
// console.log(iterationFuncion.next())

// function* subSerie(){
// 	yield 'Hola';
// 	yield 'Soy otra funcion generadora';
// }

// function* serie(i){
// 	yield i;
// 	yield i + 5;
// 	yield* subSerie();
// 	yield i + 10;
// 	yield i + 20;
// }
// const iteration = serie(50);
// console.log(iteration.next());
// console.log(iteration.next());
// console.log(iteration.next());
// console.log(iteration.next());
// console.log(iteration.next());
// console.log(iteration.next());



// const items = ['A', 'B', 'C'];
// const Obj = {
// 	[items]:'Hello'
// };

// console.log(Obj);



// let param = 'size'
// let config = {
//   [param]: 12,
//   ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4
// }
// console.log(config)




// let obj1 = { foo: 'bar', x: 42 }
// let obj2 = { foo: 'baz', y: 13 }

// let clonedObj = { ...obj1 };
// clonedObj.meal = 'Hamburguesa';

// console.log(obj1);
// console.log(clonedObj);


//******************* METODOS  ************************

//? Object.assign()

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);

// console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }



// const a = { name:'Eduardo' }
// const copyObj = Object.assign({}, a)
// copyObj.age = 20
// console.log('copyObj es igual a: ',copyObj)
// console.log('a es igual a: ',a)




//?  Object.create()

// const person = {
//     isHuman: false,
//     printIntroduction: function() {
//       console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//     }
// };  
// const me = Object.create(person);
// me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
// me.isHuman = true; // inherited properties can be overwritten

// me.printIntroduction();
// person.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"
// expected output: "My name is undefined. Am I human? false"



//*
// Shape - superclase
// function Shape() {
//     this.x += 0;
//     this.y += 0;
// }

// // método de la superclase
// // move es el nombre del metodo definido en el prototipo
// Shape.prototype.move = function(x, y) {
//     this.x += x;
//     this.y += y;
//     console.info("Shape moved")
// };

// // Rectangle - subclase

// function Rectangle() {
//     Shape.call(this); // llama al constructor de la superclase
// }

// // subclase exitende superclase
// Rectangle.prototype = Object.create(Shape.prototype);
// Rectangle.prototype.constructor = Rectangle;

// var rect = new Rectangle

// console.log('¿Es rect una instancia de Rectangle?', rect instanceof Rectangle); // true
// console.log('¿Es rect una instancia de Shape?', rect instanceof Shape); // true
// rect.move(1, 1); // Imprime, 'Shape moved.'






//*
// crear un nuevo objeto cuyo prototipo es un nuevo, objeto vacío
// y agregar una única propiedad 'p', con el valor 42
// o = Object.create({}, { p: { value: 42 } })

// // por defecto las propiedades NO SON editables, enumerables o configurables:
// o.p = 24
// o.p
// 42



//*
// const User = {
//     a:1,
//     b:2,
//     c:3
// }

// for(let pro in User) {
//     console.log(`Proiedades del objeto: ${pro}:${User[pro]}`)
// }


//*
// let ocn = Object.create( null ); // create "null" object (same as before)

// ocn.toString = toString; // since new object lacks method then assign it directly from generic version

// console.log(ocn.toString()) // shows "[object Object]"
// console.log("ocn is: " + ocn) // shows "ocn is: [object Object]"





//? Object.defineProperties()
// const configuracion = {};

// const Configuracion = Object.defineProperties(configuracion, {
//     usuario: {
//         value:'admin',
//         writable: false,
//         enumerable: true,    
//     },
//     runing: {
//         value:'dev',
//         writable: false,
//         enumerable: true,    
//     }
// });

// configuracion.usuario["value"] = 'user'
// console.log(Configuracion)

// for (let pro in Configuracion) {
//     console.log(`${pro}:${Configuracion[pro]}`)
// }






//? Object.defineProperty()

// const person = {
//     name: 'Lalo',
//     age: 20
// }

// Object.defineProperty(person, "gender", {
//     value: 'Male',
//     writable: true,
//     enumerable: true,
//     configurable: true
// });

// // is not writable
// person.gender = 'Female'

// // is not enumerable
// for (let key in person) {
//     console.log(key)
// }

// // is not configurable
// delete person.gender;
// console.log(person)

//*

// const person = {
//     name: 'Eduardo',
//     age: 20 
// };

// let value = 'Male'
// Object.defineProperty(person, 'gender', {
//     get:()=>value,
//     set:(newValue)=> value = newValue
// });

// console.log(person.gender)
// person.gender = 'Female'  
// console.log(person.gender)



//? Object.entries()
// var obj = { foo: 'bar', baz: 42 };
// let iteratio = Object.entries(obj) 

// iteratio.forEach(([key, val]) => {
//     console.log(`${key}:${val}`)
// });

// iterate through key-value gracefully
// var obj = {a: 5, b: 7, c: 9};
// for (var [key, value] of Object.entries(obj)) {
//     console.log(key + ' ' + value); // "a 5", "b 7", "c 9"
// }

// // Or, using array extras
// Object.entries(obj).forEach(([key, value]) => {
//     console.log(key + ' ' + value); // "a 5", "b 7", "c 9"
// });


// const Obj = {
//     name: 'Lalo',
//     age: 20,
//     country: 'México'
// }

// for (let pro in Obj) {
//     console.log(Obj[pro])
// }




//? Object.freeze()

var obj = {
    prop: function() {},
    foo: 'bar'
};

// Nuevas propiedades pueden ser agregadas,
// propiedades existentes pueden cambiar o removerse
// obj.foo = 'baz';
// obj.lumpy = 'woof';
// delete obj.prop;

// console.log(obj)

// const o = Object.freeze(obj)

// let test = (Object.isFrozen(obj) === true);
// console.log(test)

// obj.foo = 'quux'; // No hace nada de manera silenciosa
// obj.quaxxor = 'the friendly duck'; // No agrega una nueva propiedad, de manera silenciosa
// console.log(obj)


// function fail(){
//     'use strict';
//     obj.foo = 'sparky'; // arroja un TypeError
//     delete obj.quaxxor; // arroja un TypeError
//     obj.sparky = 'arf'; // arroja un TypeError
// }

// fail()


//? Object.fromEntries()

// const User = {
//     name: 'Lalo',
//     age: 20
// };

// const objecEnt = Object.entries(User)
// console.log(`Convirtiendo propiedades de un objeto a un arreglo clave/valor = `, objecEnt)

// const arrToObj = Object.fromEntries(objecEnt)
// console.log(arrToObj)


//? Object.getOwnPropertyDescriptor()

// const Car = {
//     color: "Red",
//     model: "BMW",
//     pressure: 500000
// };

// const describeProperty = Object.getOwnPropertyDescriptor(Car, 'color')
// console.log(describeProperty)


// var o, d;

// o = { get foo() { return 17; } };
// d = Object.getOwnPropertyDescriptor(o, 'foo');
// // d is { configurable: true, enumerable: true, get: /* la función de acceso */, set: undefined }

// o = { bar: 42 };
// d = Object.getOwnPropertyDescriptor(o, 'bar');
// // d is { configurable: true, enumerable: true, value: 42, writable: true }

// o = {};
// Object.defineProperty(o, 'baz', { value: 8675309, writable: false, enumerable: false });
// d = Object.getOwnPropertyDescriptor(o, 'baz');
// d es { value: 8675309, writable: false, enumerable: false, configurable: false }




//? Object.getOwnPropertyDescriptors()

// const user = {
//     name: 'Lalo',
//     age:20,
//     status: true,
// }

// const descPro = Object.getOwnPropertyDescriptors(user)
// console.log(descPro)




//? Object.getOwnPropertyNames()

// const user = {
//     name: 'Lalo',
//     age:20,
//     status: true,
// }

// const descPro = Object.getOwnPropertyNames(user)
// console.log(descPro)

// descPro.forEach((ele, idx, arr) => {
//     console.log(ele)
// });



//? Object.getOwnPropertySymbols()


// var obj = {};
// var a = Symbol('a');
// var b = Symbol.for('b');

// obj[a] = 'localSymbol';
// obj[b] = 'globalSymbol';

// var objectSymbols = Object.getOwnPropertySymbols(obj);

// console.log(objectSymbols.length); // 2
// console.log(objectSymbols);        // [Symbol(a), Symbol(b)]
// console.log(objectSymbols[0]);     // Symbol(a)





//? Object.getPrototypeOf()

// var proto = {};
// var obj= Object.create(proto);
// Object.getPrototypeOf(obj) === proto; // true



//? Object.prototype.hasOwnProperty()
// o = new Object();
// o.prop = 'exists';

// function changeO() {
//   o.newprop = o.prop;
//   delete o.prop;
// }

// o.hasOwnProperty('prop');   // returns true
// changeO();
// o.hasOwnProperty('prop');   // returns false


// const buz = {
//     fog: 'stack'
// };

// for (let name in buz) {
//     if (buz.hasOwnProperty(name)) {
//         alert(`La propiedad encontrada es: ${name}
//         con valor ${buz[name]}
//         `);
//     }
// }



//? Object.is()

// Object.is('foo', 'foo');     // true
// Object.is(window, window);   // true

// Object.is('foo', 'bar');     // false
// Object.is([], []);           // false

// var test = { a: 1 };
// Object.is(test, test);       // true

// Object.is(null, null);       // true

// // Special Cases
// Object.is(0, -0);            // false
// Object.is(-0, -0);           // true
// Object.is(NaN, 0/0);         // true



//? OBject.isExtensible()

// const Obj = {}
// console.log(Obj)
// console.log(Object.isExtensible(Obj))




//? Objecto.prototype.isPrtotypeOf()


// function Fee() {
//     // ...
// }

// function Fi() {
// // ...
// }
// Fi.prototype = new Fee();

// function Fo() {
// // ...
// }
// Fo.prototype = new Fi();

// function Fum() {
// // ...
// }


// Fum.prototype = new Fo();

// const fum = new Fum()

// if (Fi.prototype.isPrototypeOf(fum)) {
//     console.log('Si es prototipo');
// }


//? Object.isSealed()

// const object1 = {
//     property1: 42
// };

// console.log(Object.isSealed(object1));
// // expected output: false

// Object.seal(object1);

// console.log(Object.isSealed(object1));
// expected output: true



//? Object.keys()


// var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
// console.log(Object.keys(an_obj).map(Number)); // console: ['2', '7', '100']



//? Object.preventExtensions()

// var obj = {};
// var obj2 = Object.preventExtensions(obj);
// obj === obj2; // true

// // Los Objetos son extendibles por defecto.
// var empty = {};
// Object.isExtensible(empty); // === true

// // ...pero pueden ser cambiados.
// Object.preventExtensions(empty);
// Object.isExtensible(empty); // === false

// // Object.defineProperty arroja una excepción cuando se agrega
// // una propiedad nueva a un objeto no-extendible.
// var nonExtensible = { removable: true };
// Object.preventExtensions(nonExtensible);
// Object.defineProperty(nonExtensible, 'new', { value: 8675309 }); // arroja TypeError

// // En modo estricto, tratar de agregar propiedades nuevas
// // a un objeto no-extensible arroja una excepción TypeError.
// function fail() {
//   'use strict';
//   nonExtensible.newProperty = 'FAIL'; // arroja TypeError
// }



//? object.propertyIsEnumerable()

// const Obj = {}
// Object.defineProperty(Obj, "age", {
//     value: 20,
//     enumerable: false
// })

// Object.defineProperty(Obj, "country", {
//     value: 'Mexico',
//     enumerable: true
// })

// console.log(Obj)
// let resultAge = Obj.propertyIsEnumerable('age')
// let resultCou = Obj.propertyIsEnumerable('country')
// console.log(`Es enumerable age?`, resultAge)
// console.log(`Es enumerable country?`, resultCou)





//? Object.seal()

// var obj = {
//     prop: function() {},
//     foo: 'bar'
// };

// // Pueden añadirse nuevas propiedades, propiedades existentes pueden cambiarse o eliminarse.
// obj.foo = 'baz';
// obj.lumpy = 'woof';
// delete obj.prop;

// var o = Object.seal(obj);

// o === obj; // true
// Object.isSealed(obj); // === true

// // Sigue permitido modificar valores de propiedades en un objeto sellado.
// obj.foo = 'quux';

// // Pero no puedes convertir propiedades de datos en propiedades de acceso, ni viveversa
// Object.defineProperty(obj, 'foo', { get: function() { return 'g'; } }); // produce un TypeError

// // Ahora, cualquier cambio que no sea modificar valores de propiedades fallará
// obj.quaxxor = 'the friendly duck'; // silenciosamente, no añadirá la propiedad
// delete obj.foo; // silenciosamente, no eliminará la propiedad

// // ...y en modo estricto esos intentos producirán TypeErrors.
// function fail() {
// 'use strict';
// delete obj.foo; // genera un TypeError
// obj.sparky = 'arf'; // genera un TypeError
// }
// fail();

// // Intentar añadir propiedades mediante Object.defineProperty también fallará.
// Object.defineProperty(obj, 'ohai', { value: 17 }); // genera un TypeError
// Object.defineProperty(obj, 'foo', { value: 'eit' }); // cambia el valor exisitente


//? __proto__

// const Animal = {
//     type: 'Pug',
//     name: 'puka',
//     color: 'Gold',
//     age: 2,
//     // sayHello() {
//     //     return this.name;
//     // }
// };
// Animal.__proto__.sayHello = function() {
//     return this.name;
// }
// Animal.sayAge = function () {
//     return this.age;
// }

// console.log(Animal);


//* other example

// const myObjectNumber = {
//     getNumber: function() {
//         return this.number;
//     }
// }

// a = {
//     number: 20,
//     // sobre-escribimos el proto
//     // de este objeto al de myObjectNumber 
//     __proto__: myObjectNumber
// }

// b = {
//     number: 50,
//     __proto__: myObjectNumber
// }


// const unNumero = 2901234564;
// // "2901234564"

// let numeroAleman = unNumero.toLocaleString('de');
// // "2.901.234.564"

// let numeroFrances = unNumero.toLocaleString('fr');
// // "2 901 234 564"

// let numeroMexico = unNumero.toLocaleString('mx')
// console.log(numeroMexico)


//? object.prototype.toString()


// function Perro(nombre,criadero,color,sexo) {
//     this.nombre=nombre;
//     this.criadero=criadero;
//     this.color=color;
//     this.sexo=sexo;
//  }
 
//  elPerro = new Perro("Gabby","Laboratorio","chocolate","femenino")
 
//  elPerro.toString() //devuelve [object Object]
 
//  Perro.prototype.toString = function perroToString() {
//    var retorno = "Perro " + this.nombre + " es " + this.sexo + " " + this.color + " " + this.criadero;
//    return retorno;
//  }
 

//? Object.prototype.valueOf()
// function MyNumberType(n) {
//     this.number = n;
// }

// MyNumberType.prototype.valueOf = function() {
//     return this.number;
// };

// const object1 = new MyNumberType(4);

// console.log(object1 + 3);
// expected output: 7



//? Object.values()

// var obj = { foo: 'bar', baz: 42 };
// console.log(Object.values(obj)); // ['bar', 42]

// // array como objeto
// var obj = { 0: 'a', 1: 'b', 2: 'c' };
// console.log(Object.values(obj)); // ['a', 'b', 'c']

// // array como objeto con una ordenación aleatoria de las claves
// var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
// console.log(Object.values(an_obj)); // ['b', 'c', 'a']

// // getFoo no es una propiedade enumerable, por lo que como se observa, no se devuelve
// var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
// my_obj.foo = 'bar';
// console.log(Object.values(my_obj)); // ['bar']

// // parámetros que no son Objetos se fuerzan a que se comporten como tal
// console.log(Object.values('foo')); // ['f', 'o', 'o']






