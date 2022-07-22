function hello(name){
	console.log("hello");
}

const hi = () => {console.log("hi"); }

const disp_name = (name) => console.log(name);

// const square = (x) =>  x*x;
const square = (x) => {return x*x; } 

// - create an arrow function area that will find area of a rectangle
// area1(4,5) use return stat


function add(a,b){
	let c= a+b;
	console.log("c",c);
}
const add = (a,b) => {
	let c= a+b;
	console.log("c",c);
	
}
	// return c;

// let/const funcName = (args) => //body

hello();
hi();

disp_name("dhillon");
console.log("square", square(5));