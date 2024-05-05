window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');

    // Verifica se a página está rolada além da altura da navbar
    if (window.scrollY > navbar.offsetHeight) {
        navbar.classList.add('scroll'); // Adiciona a classe 'scroll' à navbar
    } else {
        navbar.classList.remove('scroll'); // Remove a classe 'scroll' da navbar
    }
});