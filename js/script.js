function randomCategory() {
    const categories = [
        '/preguntin/categorias/cat1.html',
        '/preguntin/categorias/cat2.html',
        '/preguntin/categorias/cat3.html',
        '/preguntin/categorias/cat4.html'
    ];
    const randomIndex = Math.floor(Math.random() * categories.length);
    console.log(randomIndex)
    window.location.href = categories[randomIndex] 
}