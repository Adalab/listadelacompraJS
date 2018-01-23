# La lista de la compra JS
Mi primera lista de la compra, ¡Chispas!

## Error en la aplicación
Hoy nos toca comprar y nuestra aplicación favorita nos ha enviado la lista de la compra, por error, en un array. ¿No podían mandarla en un mail, como todo el mundo?

Pero no pasa nada porque sabemos JavaScript y ya lo ponemos en condiciones nosotras. ¡Claro que sí!

```js
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
```

Nos hemos venido un poco arriba y vamos a hacernos dos funciones:
- `printMyShoppingList` que nos sacará en nuestro `index.html` un listado con los siguientes campos por producto:
	- Nombre
	- Precio/unidad
	- Cantidad
	- Precio total
- `calculateTotalPrice` que, al hacer clic en el botón "Calcular precio total", nos mostrará cuánto dinero debemos llevar para poder pagar nuestra compra.

## FAQ
1. **¿Tenemos que darle estilos para que quede bonito?** No, a lo espartano.
2. **¿Podemos usar las cosas que sabemos de ES2015 (ES6)?** Venga, si queremos, sí.
3. **¿Cuánto tiempo tenemos?** Una horita como un sol.
4. **¿Hay que subirlo a GitHub?** Excelente idea, nos bajamos este repo y cada oveja en su rama.
5. **¿Y una vez que terminemos?** Durante media hora lo revisamos.
