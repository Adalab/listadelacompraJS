function paintListHtml(){
	var list = '';
	for (var i = 0; i < shoppingList.length; i++) {
		list += '<li class="elements"><h3 class="product">Producto: ' + shoppingList[i].product + '</h3><p class="price">Precio unitario: ' + shoppingList[i].price + '</p><p class="quantity">Cantidad: ' + shoppingList[i].quantity + '</p><h3 class="totalprice">Total: </h3><p class="textTotalPrice">' + shoppingList[i].price * shoppingList[i].quantity + '</p></li>';
	};
	shopList.innerHTML = list;
};

paintListHtml();

//PINTAR EL ARRAY
function paintListHtml(){
	const list = '';
	let newArray = shoppingList.map(function(products){
		return list += `<li class="elements"><h3 class="product">Producto: ${products.product}</h3><p class="price">Precio unitario: ${products.price}</p><p class="quantity">Cantidad: ${products.quantity}</p><h3 class="totalprice">Total: </h3><p class="textTotalPrice">${products.price * products.quantity}</p></li>`
	});
	shopList.innerHTML = list;
};

paintListHtml();

//EVENTO PRECIO TOTAL
function sumPrice(){
	const totalShopping = 0;
	for (let i = 0; i < shoppingList.length; i++) {
		totalShopping += shoppingList[i].price * shoppingList[i].quantity;
	}
	resultPrice.innerHTML = totalShopping;
};

buttonPrice.addEventListener('click', sumPrice);
