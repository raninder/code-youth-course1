function addtocart(name, price){
	// function addtocart(){
	// const name = document.querySelector("#n1").innerText;
	// const price= document.querySelector("#p1").innerText;
	const cart = document.querySelector(".cart");
	console.log(name);
	// template literal
	// const html = `
	// <p>${name}</p>
	// <p>${price}</p> 
	// `;
	const html = "<div>" + name + "</div>" + "<div>" + price +"</div>"
	cart.innerHTML = html;
}


// function add(a,b){
// 	return a+b;
// }
// add(3,5)
// add(20,45)
// add(5,6)