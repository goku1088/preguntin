/*const opcionesRespuesta = document.querySelectorAll(".contenedor-opciones>.contenedor-pregunta")
opcionesRespuesta.forEach((opcion, indice) => {
    opcion.addEventListener("click", () => {
        const div = document.createElement("div")
        div.style.backgroundColor = "orangered";
        // opcion.style.background = "orangered";
        const elemento = document.querySelector(".cambiar-color");
        if (!elemento) opcion.classList.add("cambiar-color");

    });
});*/

let ordenPreguntas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
ordenPreguntas = ordenPreguntas.sort(() => Math.random() - 0.5);
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
            heart.style.display = "none";
        }
        vidasDiv.appendChild(heart);
    }
}

function verificarRespuesta(correcta, opcion) {
    if (intentosRestantes > 0) {
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
            alert(`Respuesta incorrecta. Intentos restantes: ${intentosRestantes}`);
            return false;
        }
    }
}

function respuesta1(opcion) {
    if (verificarRespuesta('Abner Doubleday', opcion)) {
        siguientePregunta();
    }
}

function respuesta2(opcion) {
    if (verificarRespuesta('1896', opcion)) {
        siguientePregunta();
    }
}

function respuesta3(opcion) {
    if (verificarRespuesta('Uruguay', opcion)) {
        siguientePregunta();
    }
}

function respuesta4(opcion) {
    if (verificarRespuesta('LeBron James', opcion)) {
        siguientePregunta();
    }
}

function respuesta5(opcion) {
    if (verificarRespuesta('Peñarol', opcion)) {
        siguientePregunta();
    }
}

function respuesta6(opcion) {
    if (verificarRespuesta('Independiente', opcion)) {
        siguientePregunta();
    }
}

function respuesta7(opcion) {
    if (verificarRespuesta('Uruguay', opcion)) {
        siguientePregunta();
    }
}

function respuesta8(opcion) {
    if (verificarRespuesta('Novak Djokovic', opcion)) {
        siguientePregunta();
    }
}

function respuesta9(opcion) {
    if (verificarRespuesta('1877', opcion)) {
        siguientePregunta();
    }
}

function respuesta10(opcion) {
    if (verificarRespuesta('1950', opcion)) {
        siguientePregunta();
    }
}

function mostrarResultadoFinal() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p>Juego terminado</p>
        <p>Respuestas correctas: ${respuestasCorrectas}</p>
        <p>Respuestas incorrectas: ${respuestasIncorrectas}</p>
        <p>Intentos restantes: ${intentosRestantes}</p>
    `;
    const volverAJugar = document.querySelector(".contenido-fijo>:last-child");
    volverAJugar.style.display = "block";

    volverAJugar.onclick = function () {
        window.location.href = "../menu.html";
    };
}

mostrarPregunta(ordenPreguntas[posicionActual]);
actualizarVidas();




