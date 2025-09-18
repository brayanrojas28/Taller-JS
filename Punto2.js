// 2. Template strings
// Crea una función que reciba un objeto usuario con nombre y rol, y retorne:
// El usuario Ana tiene el rol de administrador. usando template literals.

const user = { nombre: "Ana", rol: "administrador" };

function mensaje(usuario) {
    return `El usuario ${usuario.nombre} tiene el rol de ${usuario.rol}.`;
}

console.log(mensaje(user));

