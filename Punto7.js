// 7. Ordenamiento avanzado
// Dado un arreglo de objetos con productos:
// [
//   { nombre: "Mouse", precio: 25 },
//   { nombre: "Teclado", precio: 60 },
//   { nombre: "Monitor", precio: 200 }
// ]
// Ordénalos de menor a mayor precio con .sort().

const productos = [
    { nombre: "Mouse", precio: 25 },
    { nombre: "Monitor", precio: 200 },
    { nombre: "Teclado", precio: 60 }]
    .sort((a, b) => a.precio - b.precio);
    
console.log(productos);

