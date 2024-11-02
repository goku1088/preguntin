function randomCategory() {
    const categories = [
        '../categorias/cienciadedatos.html',
        '../categorias/astronomia.html',
        '../categorias/historia.html',
        '../categorias/deportes.html'
    ];
    const randomIndex = Math.floor(Math.random() * categories.length);
    const categoria = document.querySelectorAll(".categorias")[randomIndex];
    categoria.classList.add("seleccionada");
    setTimeout(() => window.location.href = categories[randomIndex], 1000);
}

const opcionesRespuesta = document.querySelectorAll(".contenedor-opciones>.contenedor-pregunta")
console.log(opcionesRespuesta)
opcionesRespuesta.forEach((opcion, indice)=>{
    opcion.addEventListener("click", ()=>{
        opcion.classList.add("cambiar-color")
    });
});

