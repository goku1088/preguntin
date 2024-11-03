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

let ordenPreguntas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function obtenerPreguntasAleatorias(preguntas, cantidad) {
    return preguntas.sort(() => Math.random() - 0.5).slice(0, cantidad);
}

ordenPreguntas = obtenerPreguntasAleatorias(ordenPreguntas, 5);
let posicionActual = 0;
let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;
let intentosRestantes = 5;
const maxVidas = 5;

function mostrarPregunta(numero) {
    const preguntas = document.querySelectorAll('.question');
    preguntas.forEach((pregunta) => {
        pregunta.style.display = 'none'; 
    });
    document.getElementById('pregunta' + numero).style.display = 'block'; 
}

function siguientePregunta() {
    posicionActual++;
    if (posicionActual < ordenPreguntas.length) {
        mostrarPregunta(ordenPreguntas[posicionActual]);
    } else {
        mostrarResultadoFinal();
    }
}

function actualizarVidas() {
    const vidasDiv = document.getElementById('vidas');
    vidasDiv.innerHTML = ''; 
    for (let i = 0; i < maxVidas; i++) {
        const heart = document.createElement('img');
        heart.src = '../img/heart-solid.svg';
        heart.alt = 'icono de un corazón';
        if (i >= intentosRestantes) {
            heart.src = '../img/heart-regular.svg'; 
        }
        vidasDiv.appendChild(heart);
    }
}

function verificarRespuesta(correcta, opcion) {
    if (opcion === correcta) {
        respuestasCorrectas++;
        return true;
    } else {
        respuestasIncorrectas++;
        intentosRestantes--;
        actualizarVidas(); 
        if (intentosRestantes === 0) {
            mostrarResultadoFinal(); 
            return false;
        }
        return false;
    }
}

function respuesta1(opcion) {
    verificarRespuesta('Abner Doubleday', opcion);
    siguientePregunta();
}

function respuesta2(opcion) {
    verificarRespuesta('1896', opcion);
    siguientePregunta();
}

function respuesta3(opcion) {
    verificarRespuesta('Uruguay', opcion);
    siguientePregunta();
}

function respuesta4(opcion) {
    verificarRespuesta('LeBron James', opcion);
    siguientePregunta();
}

function respuesta5(opcion) {
    verificarRespuesta('Peñarol', opcion);
    siguientePregunta();
}

function respuesta6(opcion) {
    verificarRespuesta('Independiente', opcion);
    siguientePregunta();
}

function respuesta7(opcion) {
    verificarRespuesta('Uruguay', opcion);
    siguientePregunta();
}

function respuesta8(opcion) {
    verificarRespuesta('Novak Djokovic', opcion);
    siguientePregunta();
}

function respuesta9(opcion) {
    verificarRespuesta('1877', opcion);
    siguientePregunta();
}

function respuesta10(opcion) {
    verificarRespuesta('1950', opcion);
    siguientePregunta();
}

function mostrarResultadoFinal() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p>Juego terminado</p>
        <p>Respuestas correctas: ${respuestasCorrectas}</p>
        <p>Respuestas incorrectas: ${respuestasIncorrectas}</p>
        <p>Intentos restantes: ${intentosRestantes}</p>
    `;

    if (intentosRestantes === 0) {
        const icono = document.createElement('img');
        icono.src = '../img/no-intents.svg';
        icono.alt = 'No quedan intentos';
        icono.style.width = '50px';
        icono.style.display = 'block';
        resultadoDiv.appendChild(icono);
    }
}

mostrarPregunta(ordenPreguntas[posicionActual]);
actualizarVidas(); 
