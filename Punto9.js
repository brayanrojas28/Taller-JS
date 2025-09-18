// 9. Funciones como callbacks
// Crea una función operar(a, b, callback) que pueda recibir distintas funciones (sumar, restar, multiplicar) 
// y ejecute la operación.

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function operar(a, b, callback) {
    return callback(a, b);
}

console.log("\nSuma: " + operar(35, 22, sumar));
console.log("Restar: " + operar(45, 13, restar));
console.log("Multiplicar: " + operar(5, 10, multiplicar));       
