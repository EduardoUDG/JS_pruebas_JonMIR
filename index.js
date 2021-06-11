

// Como definir objetos en JS
 
const Obj = {
	
};
console.log(Obj)


const o = new Object();
console.log(o)




const Person = {
	name:'Eduardo',
	lastName: 'Chavez',
	age:20,
	hobbies:['Ejercicio', 'Musica', 'Video Juegos', 'Aprender'],
	status: false,
	contact:{
		email:'eduardo@gmail.com',
		twitter:'@LaloEnchilado',
		movil: 522212345678
	},
	saludar:function(){
		console.log('Hola :D');
	},
	sayMyName:function(){
		console.log(`Hi my name is ${this.name} ${this.lastName} and I'm twenty years old`);
	}
}
// console.log(Person)
console.log(Person.name)
console.log(Person['lastName'])
console.log(Person['age'])
console.log(Person.contact.twitter)
Person.saludar()
Person.sayMyName()
console.log(Object.keys(Person))
console.log(Object.values(Person))
console.log(Object.hasOwnProperty("name"))
console.log(Object.hasOwnProperty("Edad"))















