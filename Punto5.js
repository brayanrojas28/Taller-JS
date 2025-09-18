// 5. Spread y Rest operator
// •	Usa spread para clonar y extender un objeto de configuración.
// •	Usa rest para crear una función que reciba números infinitos y devuelva su promedio.

// SPREAD 
let estudiante = { nombre: "Brayan", edad: 19 };
let estudianteCopia = { ...estudiante, codigoEstu: 202310325, carrera: "Tec. Sistemas" };

console.log(estudianteCopia);

// REST
function promedio(...numeros) {
    let total = numeros.reduce((acumulador, valor) => acumulador + valor);
    let promedio = total / numeros.length;
    return promedio;
}

console.log("\nPromedio: " + promedio(15, 28, 3, 64));
