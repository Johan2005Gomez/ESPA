document.addEventListener("DOMContentLoaded", function () {
    console.log("Página cargada correctamente");

    // Función para hacer scroll hacia arriba
    window.scrollToTop = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Obtener el botón existente
    const scrollButton = document.querySelector('.back-to-top');
    
    // Mostrar/ocultar el botón según el scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollButton.classList.add('visible');
        } else {
            scrollButton.classList.remove('visible');
        }
    });
});
