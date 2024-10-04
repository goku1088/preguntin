function randomCategory() {
    const categories = [
        '../categorias/cat1.html',
        '../categorias/cat2.html',
        '../categorias/cat3.html',
        '../categorias/cat4.html'
    ];
    const randomIndex = Math.floor(Math.random() * categories.length);
    window.location.href = categories[randomIndex] 
}