function randomCategory() {
    const categories = [
<<<<<<< HEAD
        '../categorias/cat1.html',
        '../categorias/cat2.html',
        '../categorias/cat3.html',
        '../categorias/cat4.html'
    ];
    const randomIndex = Math.floor(Math.random() * categories.length);
    window.location.href = categories[randomIndex] 
}
=======
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
>>>>>>> oscar
