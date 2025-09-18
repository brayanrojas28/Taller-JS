// 6. Array methods encadenados
// Dado el arreglo:
// let numeros = [3, 8, 12, 5, 20, 7];
// Obtén el doble de los números mayores que 6 usando .filter() y .map() encadenados.

let numeros = [9, 4, 20, 1, 16, 5];
let resultado = numeros
    .filter(n => n > 6)
    .map(n => n * 2);
    
console.log(resultado);