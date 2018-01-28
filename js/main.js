'use strict';

var buttonShop = document.querySelector('.calculator');
var productsList = document.querySelector('.list');
var result = document.querySelector('.result');



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

var menuLi = '';
var listShop = shoppingList.map(function(shop) {

	menuLi += '<li class="menu"><ul class="listDetails"><li class="name">' + shop.product + '</li>' + '<li class="menu">Precio:  ' +  shop.price + ' €</li>' + '<li class="menu">Cantidad: ' + shop.quantity + '</li>' + '<li class="menu">Total: '+ shop.price * shop.quantity + ' €</ul></li>';

});

productsList.innerHTML = menuLi;

// function shopList(){
//   var menuLi = '';
//
//   for (var i = 0; i < shoppingList.length; i++) {
//
//     menuLi += '<li class="menu"><ul class="listDetails"><li class="name">' + shoppingList[i].product + '</li>' + '<li class="menu">Precio:  ' +  shoppingList[i].price + ' €</li>' + '<li class="menu">Cantidad: ' + shoppingList[i].quantity + '</li>' + '<li class="menu">Total: '+ shoppingList[i].price * shoppingList[i].quantity + ' €</ul></li>';
//
//   };
//
// productsList.innerHTML = menuLi;
// }
//
// shopList();


//  for (var i = 0; i < shoppingList.length; i++) {
//
// 	menuLi += '<li class="menu>Nombre: ' + shoppingList[i].product + '</li>';
// 	menuLi += '<li class="menu">Precio: ' + shoppingList[i].price + ' €</li>';
// 	menuLi += '<li class="menu">Cantidad: ' + shoppingList[i].quantity + '</li>';
// 	menuLi += '<li class="menu">Total: ' + shoppingList[i].price * shoppingList[i].quantity + ' €</li>';
//
//   }
//
// productsList.innerHTML = menuLi;


//CALCULAR EL TOTAL
function totalPrice(){
    var total = 0;
    for(var i = 0; i < shoppingList.length; i++){
        total += shoppingList[i].price * shoppingList[i].quantity;
    }

		result.innerHTML = total;
  };


buttonShop.addEventListener('click', totalPrice);
