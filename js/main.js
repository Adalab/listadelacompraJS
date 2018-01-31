'use strict';

const buttonShop = document.querySelector('.calculator');
const productsList = document.querySelector('.list');
const result = document.querySelector('.result');
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

//LISTA DE LA COMPRA
let menuLi = '';
const shopList = () => {
	for (const list of shoppingList) {
		menuLi += `<li class="menu"><ul class="listDetails"><li class="name"> ${list.product}</li><li class="menu">Precio: ${list.price} €</li><li class="menu">Cantidad: ${list.quantity}</li><li class="menu">Total: ${list.price} * ${list.quantity} €</ul></li>`
	};
	productsList.innerHTML = menuLi;
}
shopList();

// CALCULAR EL PRECIO TOTAL
let total = 0;
const totalPrice = () => {
	for (const prices of shoppingList) {
		total += `${prices.price} * ${prices.price}`;
	}
	result.innerHTML = total;
}
buttonShop.addEventListener('click', totalPrice);


// let total = 0;
// buttonShop.addEventListener('click',(){
//
// 	for (const totalPrice of shoppingList) {
// 		total += `${totalPrice.price} * ${totalPrice.quantity}`;
// 	}
// 	result.innerHTML = total;
// });
