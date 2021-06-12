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
