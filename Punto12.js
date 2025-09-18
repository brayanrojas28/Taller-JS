// 12. Simulación de API
// Crea un arreglo posts. Implementa funciones con promesas que simulen:
// •	Obtener todos los posts.
// •	Obtener un post por id.
// •	Agregar un nuevo post.

const prendas = [
  { id: 1, nombre: "camisilla", descripcion: "Prenda ligera para clima cálido." },
  { id: 2, nombre: "pantaloneta", descripcion: "Ideal para deporte o descanso." }
];

function conseguirPrendas() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(prendas);
    }, 2000);
  });
}

function conseguirPrendaPorId(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const prenda = prendas.find(p => p.id === id);
      if (prenda) {
        resolve(prenda);
      } else {
        reject(`\nPrenda con ID ${id} no encontrada.`);
      }
    }, 1000);
  });
}

function añadirPrenda(nuevaPrenda) {
  return new Promise((resolve) => {
    setTimeout(() => {
      prendas.push(nuevaPrenda);
      resolve(`\nPrenda agregada con ID ${nuevaPrenda.id}`);
    }, 1000);
  });
}

conseguirPrendas().then(data => console.log("\nTodas las prendas:", data));   //
conseguirPrendaPorId(1).then(data => console.log("Prenda encontrada:", data)).catch(err => console.error(err));
añadirPrenda({ id: 3, nombre: "gorra", descripcion: "Protege del sol y complementa el estilo." })
  .then(msg => console.log(msg));
