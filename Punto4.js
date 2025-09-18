// 4. Desestructuración de objetos y arreglos
// Dado el objeto:
// const curso = {
//   titulo: "JavaScript",
//   duracion: 40,
//   temas: ["Funciones", "Objetos", "Asincronía"]
// };
// Obtén con desestructuración: titulo, duracion y el primer tema.

const curso = {
  titulo: "JavaScript",
  duracion: 40,
  temas: ["Funciones", "Objetos", "Asincronía"]
};

const { titulo, duracion, temas } = curso;
const {temas: [tema1, tema2, tema3]} = curso;

console.log(`\nCurso: ${titulo}.\nDuración ${duracion}.\nTema: ${tema1}.`);