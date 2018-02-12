'use strict';

const shopList = document.querySelector ('.shopList');
const buttonPrice = document.querySelector ('.buttonPrice');
const resultPrice = document.querySelector ('.resultPrice');

const shoppingList = [
	{
		product: "Cereales con chocolate",
		description: "Cereales rellenos de chocolate",
		quantity: 2,
		category: "Cereales",
		price: 4.5
	},
	{
		product:"Hamburguesa doble con queso y bacon",
		description: "Hamburguesa rica y saludable #no",
		quantity: 1,
		category: "Fast-food",
		price: 18.95
	},
	{
		product: "Agua mineral",
		description: "Agua de un charco del Himalaya",
		quantity: 2,
		category: "Bebida",
		price: 2.14
	},
	{
		product: "Flan de coco y piña",
		description: "No has probado nada igual en tu vida, o sí.",
		quantity: 2,
		category: "Postre",
		price: 3
	}
];

//PINTAR LOS PRODUCTOS Y SUS CARACTERÍSTICAS
let list = '';
const paintListHtml = () => {
	for (const products of shoppingList){
		list +=
		`<li class="elements">
		<label for="product">
			<input type="checkbox" id="product" name="product">
			Producto: ${products.product}
		</label>
		<p class="price">Precio unitario: ${products.price}</p>
		<p class="quantity-title">Cantidad:</p>
		<label for="quantity">
			<input type="number" value="1" class="quantity" id="quantity" name="quantity"></input>
		</label>
		<h3 class="totalprice">Total: </h3>
		<p class="textTotalPrice">${products.price * products.quantity}</p>
		</li>`
	};
	shopList.innerHTML = list;
};

paintListHtml();


//PRECIO TOTAL

const sumPrice = () => {
	let totalShopping = 0;
	for (const precioproductos of shoppingList){
		totalShopping += precioproductos.price * precioproductos.quantity;
	}
	resultPrice.innerHTML = totalShopping;
}

buttonPrice.addEventListener('click', sumPrice);
