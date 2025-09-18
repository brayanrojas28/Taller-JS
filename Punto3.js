// 3. Operador ternario anidado
// Crea una función que reciba un número y devuelva:
// •	"Negativo" si es menor que 0.
// •	"Cero" si es igual a 0.
// •	"Positivo" si es mayor que 0.

const num = 0;

function Numero(num) {
    return num > 0 ? "Positivo" : num < 0 ? "Negativo" : "El numero es cero";
}

console.log(Numero(num));
