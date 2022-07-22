let products = [];
		function addtocart(name,price){
			let item = {name:"watch", price:"50"};
			item.name=name;
			item.price=price;
			products.push(item);
			console.log("products", products);
			dispCart();
		}
		console.log("products", products);
		function dispCart(){
			const cart = document.querySelector('.cart');
			const div = document.createElement("div");
			for(let i=0; i<products.length;i++){

			
			// products.map((ele)=> {	
				
			const html = `
			<div class="cart-item">

			<span class="title">${products[i].name}</span>
			<span class="price">${products[i].price}</span>
			<button class="button" onclick="removeItem()">Remove item</button>
			</div>`;
			div.innerHTML=html;
			document.querySelector(".cart").appendChild(div);
			
			// })
			}
		}
		function removeItem() {
			const item = document.querySelector('.cart-item');
    	item.remove();
	}
	
	