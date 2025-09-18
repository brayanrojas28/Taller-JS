// 13. JSON en práctica
// Crea un objeto, conviértelo a JSON con JSON.stringify, guárdalo en localStorage y 
// luego recupéralo con JSON.parse.

const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./datos');

const prenda = {
  id: 1,
  nombre: "camisilla",
  descripcion: "Prenda deportiva"
};

const prendaJSON = JSON.stringify(prenda);

localStorage.setItem("prendaGuardada", prendaJSON);

const recuperado = localStorage.getItem("prendaGuardada");
const prendaObjeto = JSON.parse(recuperado);

console.log("Objeto original:", prenda);
console.log("JSON guardado:", prendaJSON);
console.log("Objeto recuperado:", prendaObjeto);

// para que este punto funcione, debes tener instalada la librería node-localstorage
// npm install node-localstorage
