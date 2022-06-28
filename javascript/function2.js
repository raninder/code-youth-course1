let x = 20;
function multiplication(a,b){
	let d= 11;
	console.log("d",d);
	let c = a*b;
	  // x= 14;
		console.log("x in func:", x);
	// console.log("product", c);
	return c; //200
}
console.log("x:",x);
// console.log("d",d);
multiplication(4,7);
console.log("x:",x);
console.log(multiplication(3,6));
let prod = multiplication(10,20);  // prod = 200
console.log(prod);