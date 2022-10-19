///////// DECLARACIONES ////////
var intro = 0;
var anchura = window.innerWidth
var altura = window.innerHeight

document.getElementById("lienzo").width = anchura
document.getElementById("lienzo").height = altura
var mueveangulo = 0;
var nivel = 1
var balas = new Array();


document.onkeyup = function(e) {
    switch(e.which) {
        case 37: // left
            mueveangulo = ''
        break;
                
        case 38: // up
            jugador.aceleracion = 0
        break;

        case 39: // right
                mueveangulo = ''
        break;

        case 40: // down
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
};
    var jugador = new Jugador();
    var rocas = new Array();
    for(var i = 0;i<5;i++){
        rocas[i] = new Roca()
    }

    var estrellas = new Array();
    for(var i = 0;i<500;i++){
        estrellas[i] = new Estrella()
    }

    var estelas = new Array();
    var cuentaestelas = 0;
    var contexto = document.getElementById("lienzo").getContext("2d");
    contexto.font = "20px Monospace";
    contexto.lineWidth = 2
    contexto.lineJoin = 'round'
    contexto.textAlign = "center";
    var temporizador;
    recogibles = new Array();
///////// DECLARACIONES ////////