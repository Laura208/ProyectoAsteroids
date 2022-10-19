class Recogible{
    constructor(radio) {
        this.x = Math.random()*anchura;
        this.y = Math.random()*altura;
        this.tipo = Math.floor(Math.random()*8)
        this.edad = 0;
    }
    dibuja(){
        contexto.fillStyle = "white"
        
        
        var letra
        if(this.tipo == 0){letra = 'a';contexto.fillStyle = "red"}
        if(this.tipo == 1){letra = 'e';contexto.fillStyle = "green"}
        if(this.tipo == 2){letra = 'f';contexto.fillStyle = "blue"}
        if(this.tipo == 3){letra = '3';contexto.fillStyle = "yellow"}
        if(this.tipo == 4){letra = '5';contexto.fillStyle = "magenta"}
        if(this.tipo == 5){letra = '7';contexto.fillStyle = "cyan"}
        if(this.tipo == 6){letra = '9';contexto.fillStyle = "orange"}
        if(this.tipo == 7){letra = '11';contexto.fillStyle = "cyan"}
        //contexto.fillRect(this.x,this.y,30,30)
        contexto.beginPath()
        contexto.arc(this.x+15,this.y+15,20,0,Math.PI*2,true)
        contexto.closePath();
        contexto.fill()
        contexto.fillStyle = "black"
        contexto.fillText(letra,this.x+8,this.y+25)
    }
}