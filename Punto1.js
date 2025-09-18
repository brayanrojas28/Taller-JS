// 1. Tipos de variables y scope
// Explica y demuestra con código cómo se comportan var, let y const en diferentes bloques { }.

function empleados() {
  // Aqui declaramos las variables fuera del bloque y le ponemos valores iniciales.
  var mensajero = "Llega a la oficina";
  let secretria = "Esta en recepcion";
  const gerente = "Llega a su oficina";

  if (true) {
    // Aqui declaramos las variables dentro del bloque y le ponemos nuevos valores.
    var mensajero = "Sale a repartir documentos";
    let secretria = "Sale a almorzar";
    const gerente = "Sale a una reunión";

    console.log("- Lo que imprime dentro del bloque: ");
    console.log(mensajero);
    console.log(secretria);
    console.log(gerente);
  }
  // Aqui imprimimos las variables fuera del bloque y notamos que var imprime el valor cambiado y los otros no.
  console.log("\n- Lo que imprime fuera del bloque:");
  console.log(mensajero);
  console.log(secretria);
  console.log(gerente);
}

empleados(); 