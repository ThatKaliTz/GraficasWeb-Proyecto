$(document).ready(function() {
    window.Modo = localStorage.getItem('Modo');

    if (window.Modo == 1) {
        alert('MODO COMPETITIVO');
    }else{
        if(window.Modo == 0){
            alert('MODO COOPERATIVO');
        }
    }


    $('#Continuar').click(function() {
        if (window.Modo == 1) {
            consumirWS();
        } else if (window.Modo == 0) {
            consumirWS2();
        }
    });

    $('#reiniciar').click(function() {
        if (window.Modo == 1) {
            consumirWS();
        } else if (window.Modo == 0) {
            consumirWS2();
        }
    });

    function consumirWS() {
        let prueba = 4;
        prueba = window.miVariable;

        var nombre = sessionStorage.getItem("nombre");
        var score = prueba; 
        localStorage.setItem('puntuacionJugador1', score); // Puntuación del Jugador 1
        alert('Nombre: ' + nombre + ', Score: ' + score);

        var data = {
            nombre: nombre,
            score: score
        };

        $.get("http://localhost/WebServices/WebServices.php", data, function(data) {
            if (data != '') {
                alert(data);
            }
        });

        
    }

    function consumirWS2() {
        let prueba = 4;
        prueba = window.miVariable;

        let prueba2 = 7;
        prueba2 = window.miVariable2;

        var nombre = sessionStorage.getItem("nombre");
        var score = prueba + prueba2; 
     // Tiempo del Jugador 1
        localStorage.setItem('puntuacionJugador2', score); // Puntuación del Jugador 2
        alert('Nombre: ' + nombre + ', Score: ' + score);

        var data = {
            nombre: nombre,
            score: score
        };

        $.get("http://localhost/WebServices/WebServices.php", data, function(data) {
            if (data != '') {
                alert(data);
            }
        });
    }

    // Asegúrate de que consumirWS y consumirWS2 estén disponibles globalmente
    window.consumirWS = consumirWS;
    window.consumirWS2 = consumirWS2;
});