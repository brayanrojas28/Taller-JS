// 15. Clases
// Crea una clase Tarea con titulo, estado (pendiente/completada) y un método toggleEstado().

class Tarea {
  constructor(titulo, estado = 'pendiente') {
    this.titulo = titulo;
    this.estado = estado;
  }

  toggleEstado() {
    this.estado = this.estado === "pendiente" ? "completada" : "pendiente";
  }
}

let tarea1 = new Tarea("Realizar practica");
console.log(tarea1);

tarea1.toggleEstado();
console.log(tarea1);
