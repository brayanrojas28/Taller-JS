// 8. Buscar en arrays
// Dado un arreglo de usuarios con id, encuentra al usuario con id 2 usando .find().
// Si no existe, devuelve un objeto vacío {}.

let usersId = [
    { id: 1, nombre: "Brayan Rojas" },
    { id: 2, nombre: "Wudeison Tovar" },
];

let user = usersId.find(final => final.id === 2) || {}

console.log(user.id ? `Usuario encontrado: ${user.nombre}` : "{}");
