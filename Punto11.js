// 11. Async/Await
// Reescribe el ejercicio anterior con async/await y manejo de errores usando try/catch.

const articulos = [
  { id: 1, nombre: "camisilla" },
  { id: 2, nombre: "pantaloneta" },
  { id: 3, nombre: "gorra" }
];

function getArticulo(id) {
  return new Promise((resolve, reject) => {
    const articulo = articulos.find(p => p.id === id);

    if (articulo) {
      resolve(articulo);
    } else {
      reject(`Artículo con ID ${id} no encontrado.`);
    }
  });
}

async function mostrarArticulo(id) {
  try {
    const resultado = await getArticulo(id);
    console.log("\nArtículo encontrado:", resultado);
  } catch (error) {
    console.error("\nError:", error);
  }
}

mostrarArticulo(3);
mostrarArticulo(6); 
