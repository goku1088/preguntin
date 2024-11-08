

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

    const idCategoria = categoria.dataset.idCategoria;
    sessionStorage.setItem("infoCategoria", JSON.stringify({ nombre: categoria.textContent, id: idCategoria}));
    setTimeout(() => window.location.href = categories[randomIndex], 1000);
}

function obtenerCategorias() {
    fetch("../controladores/read_categorias.php")
        .then(respuesta => respuesta.json())
        .then(data => {
            mostrarCategorias(data);
        })
        .catch(error => {
            console.error(error);
        });
}

const mostrarCategorias = (datos) => {

    const divDatos = document.querySelector("#datos");

    if (datos) {

        let nombreArchivo = "";
        let datosAMostrar = `
            <h1 class="mb-4">¡Selecciona una Categoría!</h1>
            <p><strong>Elige un tema que te apasione y sumérgete en el conocimiento.</strong></p>
            <div class="row">
        `;

        datos.forEach(categoria => {

            if (categoria.nombre.toLowerCase() == "astronomía") {
                nombreArchivo = "astronomia";
            } else {
                nombreArchivo = categoria.nombre.toLowerCase().split(" ").join("");
            }
            datosAMostrar += `
                <div class="col-md-6">
                    <a href="/categorias/${nombreArchivo}.html" class="categorias" data-id-categoria="${categoria.id}">
                        <h3>${categoria.nombre}</h3>
                    </a>
                </div>
            `;
        });

        datosAMostrar += `
            </div>
            <button type="button" class="btn mt-4" onclick="randomCategory()">¡Seleccionar Aleatoriamente!</button>
        `;

        divDatos.innerHTML = datosAMostrar;

    } else {

        divDatos.innerHTML = "<h2>No se encontró categorias en la base de datos</h2>";

    }
};

window.addEventListener("load", obtenerCategorias());