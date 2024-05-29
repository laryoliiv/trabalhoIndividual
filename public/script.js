// Adiciona a classe de animação quando o elemento está na janela visível
window.addEventListener('scroll', function() {
    var timelineItems = document.querySelectorAll('.animate');

    timelineItems.forEach(function(item) {
        var itemTop = item.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;
        var revealPoint = 100; // Altura em pixels antes de aparecer

        if (itemTop < windowHeight - revealPoint) {
            item.classList.add('show');
        }
    });
});

