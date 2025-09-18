// 20. Mini proyecto integrador
// Crea una simulación de carrito de compras con:
// •	Arreglo de productos { id, nombre, precio }.
// •	Función agregarAlCarrito(id) que añada productos.
// •	Función mostrarCarrito() que liste productos y calcule el total.
// •	Validar que no se repitan productos en el carrito.

const productos = [
    { id: 1, nombre: "Tomate", precio: 2500 },
    { id: 2, nombre: "Queso", precio: 4000 },
    { id: 3, nombre: "Cebolla", precio: 3000 },
    { id: 4, nombre: "Lechuga", precio: 5500 },
    { id: 5, nombre: "Huevos", precio: 8000 }
];

const carrito = [];

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);

    if (!producto) {
        console.log("Error, producto no encontrado");
        return;
    }

    if (carrito.some(item => item.id === id)) {
        console.log(`${producto.nombre} ya se había agregado:(`);
        return;
    }

    carrito.push(producto);
    console.log(`${producto.nombre} se agregó al carrito:)`);
}

function mostrarCarrito() {
    let total = 0;
    console.log("\n\nCarrito:");
    carrito.forEach(item => {
        console.log(`${item.nombre} - $${item.precio}`);
        total += item.precio;
    });
    console.log("-------------------");
    console.log("Total: $" + total);
}

agregarAlCarrito(2);
agregarAlCarrito(3);
agregarAlCarrito(2);
mostrarCarrito();