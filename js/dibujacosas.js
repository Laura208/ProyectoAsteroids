function dibujacosas(){
    contexto.fillStyle="rgba(0,0,0,0.2)"
    contexto.fillRect(0,0,anchura,altura)
    contexto.fillStyle = "white"
    contexto.strokeStyle = "white"
    //contexto.clearRect(0,0,anchura,anchura);
    for(var i = 0;i<estrellas.length;i++){
        estrellas[i].dibuja()
    }
    for(var i = 0;i<balas.length;i++){
        balas[i].mueve()
        balas[i].dibuja()
        if(balas[i].x > anchura || balas[i].y > altura || balas[i].x < 0 || balas[i].y < 0){
            balas.splice(i,1)
        }
    }
    for(var i = 0;i<estelas.length;i++){
        estelas[i].mueve()
        estelas[i].dibuja()
        estelas[i].edad+=4;
        if(estelas[i].edad > 255){
                estelas.splice(i,1)
        }
    }
    for(var i = 0;i<rocas.length;i++){
        rocas[i].mueve()
        rocas[i].dibuja()
    }   
}