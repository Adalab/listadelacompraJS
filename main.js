'use strict';

var shopList = document.querySelector ('.shopList');
var buttonPrice = document.querySelector ('.buttonPrice');
var resultPrice = document.querySelector ('.resultPrice');

var shoppingList = [
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
function paintListHtml(){
	var list = '';
	for (var i = 0; i < shoppingList.length; i++) {
		list += '<li class="elements"><h3 class="product">Producto: ' + shoppingList[i].product + '</h3><p class="price">Precio unitario: ' + shoppingList[i].price + '</p><p class="quantity">Cantidad: ' + shoppingList[i].quantity + '</p><p class="totalprice">Total: <p class="textTotalPrice">' + shoppingList[i].price * shoppingList[i].quantity + '</p></p></li>';
	};
	shopList.innerHTML = list;
};

paintListHtml();



buttonPrice.addEventListener('click', sumPrice);


function sumPrice(){
	var totalShopping = 0;
	for (var i = 0; i < shoppingList.length; i++) {
			totalShopping += shoppingList[i].price * shoppingList[i].quantity;
	}
	resultPrice.innerHTML = totalShopping;
};
