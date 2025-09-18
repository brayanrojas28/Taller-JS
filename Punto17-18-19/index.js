const tareas = [
    "Realizar trabajo de Ética    ",
    "Resolver actividad de Química",
    "Leer apuntes de Matemáticas",
    "Resumen de Historia",
    "Dibujar alguna cosa Arte",
    "Practicar inglés",
    "Hacer el taller de Programación",
];

const root = document.getElementById("root");
const listaUl = document.createElement("ul");               //PUNTO 17 junto al html que tiene el script
root.appendChild(listaUl);

tareas.forEach(tarea => {
    const li = document.createElement("li");
    li.textContent = tarea + " ";

    const btn = document.createElement("button");
    btn.textContent = "Eliminar";

    // boton.addEventListener("click", () => {              //PUNTO 18
    //     li.remove();
    // });

    li.appendChild(btn);
    listaUl.appendChild(li);

});

listaUl.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        const li = e.target.parentElement;                   //Punto 19
        li.remove();
    }
});
