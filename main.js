'use strict';

var shopList = document.querySelector ('.shopList');
var list = '';
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

for (var i = 0; i < shoppingList.length; i++) {
	list += '<li class="elements">' + shoppingList[i].product + '</li>';
	list += '<li class="elements">' + shoppingList[i].price + '</li>';
	list += '<li class="elements">' + shoppingList[i].quantity + '</li>';
	list += '<li class="elements">' + shoppingList[i].price * shoppingList[i].quantity + '</li>';
};

shopList.innerHTML = list;

buttonPrice.addEventListener('click', totalPrice);


shoppingList = function totalPrice(){
	var totalprecio = 0;
	for (var i = 0; i < shoppingList.length; i++) {
			totalprecio += shoppinList[i].price;
	}
	return totalprecio;
};


// function totalPrice(){
 // for (var i = 0; i < shoppingList.length; i++) {
 //  var subtotal = shoppingList[i].price * shoppingList[i].quantity;
 //  var total =
 //  console.log('sale el precio?');
 // };
// };

totalPrice.innerHTML = resultPrice;
