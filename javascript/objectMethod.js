const person = {
	firstname: "John",
	lastname: "smith",
	age:23,
	function1: function(){
		return "Hello";
	},
	display: function(){
		return this.firstname + " " +this.lastname +" has age "+this.age;
	}, 
	show: function(id){
		return this.firstname+" with id:"+id;
	} 
};
let a=5;
console.log(a);
let b=a;
console.log(b);
b=7;
console.log(b);
console.log(a);

delete person.age;

// console.log(person.firstname,person.age,person.function1());
// console.log("name:", person.display());
// console.log("id:", person.show(1));
console.log(person);
// const student = person;
// person.age=30;
// console.log(student);
