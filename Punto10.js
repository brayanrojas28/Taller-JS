// 10. Promesas
// Crea una función getProducto(id) que devuelva una promesa:
// •	Resuelta si el producto existe en un arreglo.
// •	Rechazada con un error si no existe.

const articulos = [
  { id: 1, nombre: "camisilla" },
  { id: 2, nombre: "pantaloneta" },
  { id: 3, nombre: "gorra" }
];

function getarticulo(id) {
  return new Promise((resolve, reject) => {
    const articulo = articulos.find(p => p.id === id);

    if (articulo) {
      resolve(articulo);
    } else {
      reject(`articulo con ID ${id} no encontrado.`);
    }
  });
}

const resultado = getarticulo(1);
console.log(resultado);
