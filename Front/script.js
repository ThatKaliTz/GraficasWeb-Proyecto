document.addEventListener('DOMContentLoaded', () => {


    // Recuperar puntuaciones y tiempos del localStorage
    const puntuacionJugador1 = localStorage.getItem('puntuacionJugador1');
    const nombre1 = localStorage.getItem('nombre')
    const tiempoJugador1 = localStorage.getItem('tiempoJugador1');
    const puntuacionJugador2 = localStorage.getItem('puntuacionJugador2');
    const tiempoJugador2 = localStorage.getItem('tiempoJugador2');

    // Mostrar los valores en los campos correspondientes
    if (puntuacionJugador1) {
        document.getElementById('Puntos_Jugador1').value = `${puntuacionJugador1} pts`;
    }

    if (nombre1) {
        document.getElementById('Nombre_Jugador1').value = `${nombre1}`;
    }else{
        document.getElementById('Nombre_Jugador1').value = `Invitado`;

    }

    if (tiempoJugador1) {
        document.getElementById('Tiempo_Jugador1').value = tiempoJugador1;
    }

    if (puntuacionJugador2) {
        document.getElementById('Puntos_Jugador2').value = `${puntuacionJugador2} pts`;
    }

    if (tiempoJugador2) {
        document.getElementById('Tiempo_Jugador2').value = tiempoJugador2;
    }
});