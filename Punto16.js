// 16. CRUD de tareas en memoria
// Usando un arreglo, implementa funciones para crear, leer, actualizar y eliminar tareas.

const tareas = [
  { asignatura: "Matematicas", docente: "Brayan Rojas" },
  { asignatura: "Fisica", docente: "Wudeison Tovar" },
];

function crearTarea(asignatura, docente) {
  let nuevaTarea = { asignatura, docente };
  tareas.push(nuevaTarea);
  return nuevaTarea;
}

function leerTareas() {
  return tareas;
}

function actualizarTarea(asignatura, nuevoDocente) {
  let tarea = tareas.find(t => t.asignatura === asignatura);
  if (tarea) {
    tarea.docente = nuevoDocente;
    return nuevoDocente;
  }
}

function eliminarTarea() {
  return tareas.shift();
}

console.log("\nTareas iniciales:", leerTareas());

let tareaCreada = crearTarea("Quimica", "Ana Suarez");
console.log("\nTarea creada:", tareaCreada);
console.log("\nTareas actuales:", leerTareas());

let tareaActualizada = actualizarTarea("Matematicas", "Carlos Perez");
console.log("\nNuevo docente de Matematicas:", tareaActualizada);
console.log("\nTareas actuales:", leerTareas());

console.log("\nTarea eliminada:", eliminarTarea());
console.log("\nTareas actuales:", leerTareas());