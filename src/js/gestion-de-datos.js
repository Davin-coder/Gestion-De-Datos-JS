//Gestion de Datos con Objetos, Sets y Maps

// Declaración del objeto "productos"
productos = {
    1: {id: 1, nombre: "Iphone-XS", precio: 1500},
    2: {id: 2, nombre: "Barbie", precio: 500},
    3: {id: 3, nombre: "Camisa-Adidas", precio: 800},
    4: {id: 4, nombre: "Monitor", precio: 500},
    5: {id: 5, nombre: "Barbie", precio: 800},
    6: {id: 6, nombre: "Monitor", precio: 1200}
};

// Creación de un set apartir del objeto "productos" eliminando sus duplicados
const setProductos = new Set(Object.values(productos).map(producto => producto.nombre));

// Creación del Map
const mapProductos = new Map([
    ["Celulares", "Iphone-XS"],
    ["Juguetes", "Barbie"],
    ["Ropa", "Camisa-Adidas"],
    ["Electrónica", "Monitor"]
]);

console.log(`\nObjeto productos:`)
// Recorre el objeto productos
for (const id in productos){
    console.log(`Producto ID: ${id}, Detalles: `, productos[id]);
};

console.log(`\nSet de productos únicos:`)
//Recorre e Imprime los valores en nuestro Set
for (const producto of setProductos){
    console.log(`Producto único: ${producto}`)
};

console.log(`\nMap de productos y categorías`)
// Recorre e Imprime los elementos en nuestro Map
mapProductos.forEach((producto, categoria) => {
    console.log(`categoria: ${categoria}, producto: ${producto}`)
});