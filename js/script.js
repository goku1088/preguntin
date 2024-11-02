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

let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;

document.getElementById('pregunta1').style.display = 'block';

function mostrarPregunta(numero) {
    const preguntas = document.querySelectorAll('.question');
    preguntas.forEach((pregunta) => {
        pregunta.style.display = 'none'; 
    });
    document.getElementById('pregunta' + numero).style.display = 'block'; 
}

function respuesta1(opcion) {
    const resultadoDiv = document.getElementById('resultado');
    if (opcion === 'Abner Doubleday') {
        respuestasCorrectas++;
        resultadoDiv.textContent = 'opcion correcta';
        mostrarPregunta(2);
    } else {
        respuestasIncorrectas++;
        resultadoDiv.textContent = 'opcion incorrecta'
    }
}

function respuesta2(opcion) {
    const resultadoDiv = document.getElementById('resultado');
    if (opcion === '1896') {
        respuestasCorrectas++;
        resultadoDiv.textContent = 'opcion correcta'
    } else {
        respuestasIncorrectas++;
        resultadoDiv.textContent = 'opcion incorrecta'
    }
    mostrarResultadosFinales();
}

function mostrarResultadosFinales() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent += `\n¡Cuestionario terminado! Respuestas correctas: ${respuestasCorrectas}, Respuestas incorrectas: ${respuestasIncorrectas}`;
}