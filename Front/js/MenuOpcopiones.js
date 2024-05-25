// Manejar clic en botones de mutear juego (izquierda)
const btnsMutearJuego = document.querySelectorAll('.Container_izquierda button');

btnsMutearJuego.forEach(btn => {
    
    btn.addEventListener('click', function() {

        // Remover la clase 'selected' de todos los botones en el contenedor izquierdo
        btnsMutearJuego.forEach(btn => btn.classList.remove('selected'));
        
        // Agregar la clase 'selected' al botón seleccionado
        this.classList.add('selected');
    });

});


// Manejar clic en botones de modo de juego (derecha)
const btnsModoJuego = document.querySelectorAll('.Container_derecha button');

btnsModoJuego.forEach(btn => {

    btn.addEventListener('click', function() {

        // Remover la clase 'selected' de todos los botones en el contenedor derecho
        btnsModoJuego.forEach(btn => btn.classList.remove('selected'));

        // Agregar la clase 'selected' al botón seleccionado
        this.classList.add('selected');
    });

});