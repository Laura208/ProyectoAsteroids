class Jugador {
    constructor(alto, ancho) {
        this.x = anchura/2;
        this.y = altura/2;
        this.angulo = 0;
        this.velocidad = 0;
        this.aceleracion = 0;
        this.velx = 0;
        this.vely = 0;
        this.vida = 100
        this.municion = 100;
        this.puntos = 0;
        this.fuel = 100;
        this.mododisparo = 1;
    }
    mueve(){
        if(this.fuel > 0){
        jugador.velx += Math.cos(jugador.angulo)*jugador.aceleracion
        jugador.vely += Math.sin(jugador.angulo)*jugador.aceleracion
        }
        jugador.x += jugador.velx
        jugador.y += jugador.vely
        if(jugador.x < 0 ){jugador.x = anchura}
        if(jugador.x > anchura ){jugador.x = 0}
        if(jugador.y < 0 ){jugador.y = altura}
        if(jugador.y > altura ){jugador.y = 0}
    }  
    dibuja(){
        if(this.aceleracion > 0 && this.fuel > 0){
            contexto.fillStyle = "white"
            contexto.beginPath()
            contexto.arc(
                jugador.x+10*Math.cos(jugador.angulo+Math.PI),
                jugador.y+10*Math.sin(jugador.angulo+Math.PI),
                10,
                0,
                Math.PI*2,
                true
            )
            contexto.closePath();
            contexto.stroke();
            contexto.fill()
            for(var i = 0;i<10;i++){
                    estelas[estelas.length] = new Estela();
                    
            }
            this.fuel-=0.1;
        }
        // Dibujo personaje
        contexto.lineWidth = 5
        contexto.beginPath()
        contexto.moveTo(
            jugador.x+30*Math.cos(jugador.angulo),
            jugador.y+30*Math.sin(jugador.angulo)
        )
        contexto.lineTo(
            jugador.x+20*Math.cos(jugador.angulo+Math.PI*0.7),
            jugador.y+20*Math.sin(jugador.angulo+Math.PI*0.7)
        )
        contexto.lineTo(
            jugador.x+10*Math.cos(jugador.angulo+Math.PI),
            jugador.y+10*Math.sin(jugador.angulo+Math.PI)
        )
        contexto.lineTo(
            jugador.x+20*Math.cos(jugador.angulo+Math.PI*1.3),
            jugador.y+20*Math.sin(jugador.angulo+Math.PI*1.3)
        )
        contexto.lineTo(
            jugador.x+30*Math.cos(jugador.angulo),
            jugador.y+30*Math.sin(jugador.angulo)
        )
        contexto.closePath()
        contexto.strokeStyle = "black"
        contexto.stroke();
        contexto.fillStyle = "white"
        contexto.fill();
        contexto.lineWidth = 2
        
        contexto.beginPath()
        contexto.moveTo(this.x,this.y)
        contexto.arc(this.x,this.y,5,0,Math.PI*2,false)
        contexto.lineTo(this.x,this.y)
        contexto.closePath()
        
        contexto.fillStyle ="green"
        if(this.vida < 75){contexto.fillStyle ="orange"}
        if(this.vida < 50){contexto.fillStyle ="yellow"}
        if(this.vida < 25){contexto.fillStyle ="red"}
        contexto.fillStyle = "black"
        contexto.fill();
    }
}