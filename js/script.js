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

// script.js
fetch('../controladores/conexion.php')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Aquí puedes manipular los datos como desees
        const container = document.getElementById('preguntas-container');
        data.forEach(item => {
            const preguntaElement = document.createElement('div');
            preguntaElement.innerHTML = `<strong>${item.pregunta}</strong>: ${item.respuesta || 'Sin respuesta'}`;
            container.appendChild(preguntaElement);
        });
    })
    .catch(error => console.error('Error:', error));
