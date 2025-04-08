    document.body.appendChild(scrollTopButton);

    // Mostrar la flecha cuando el usuario hace scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollTopButton.classList.add("show");
        } else {
            scrollTopButton.classList.remove("show");
        }
    });

    // Evento para hacer scroll hacia arriba
    scrollTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

