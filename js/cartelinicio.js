function cartelinicio(){
    if(tiempo < 300){
        contexto.fillStyle = "white";
        contexto.textAlign = "center";
        contexto.font = "50px Monospace";
        contexto.fillText("Asteroids",anchura/2,altura/2)
        contexto.font = "20px Monospace";
        contexto.fillText("Arrows = direction / Space = Fire",anchura/2,altura/2+30)
        contexto.textAlign = "left";
    }
}