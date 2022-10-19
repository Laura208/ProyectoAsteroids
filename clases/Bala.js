class Bala{
    constructor(alto, ancho) {
        this.x = jugador.x;
        this.y = jugador.y;
        this.angulo = jugador.angulo;
        this.visible = true
         
          this.velx = jugador.velx+Math.cos(this.angulo)*5;
          this.vely = jugador.vely+Math.sin(this.angulo)*5;
  }
    dibuja(){
        if(this.visible){
                contexto.beginPath();
                contexto.moveTo(this.x,this.y)
                contexto.lineTo(this.x+Math.cos(this.angulo)*5,this.y+Math.sin(this.angulo)*5)
                contexto.closePath();
                contexto.stroke();
            //contexto.fillRect(this.x,this.y,5,5)
        }
    }
    mueve(){
        this.x += this.velx
        this.y += this.vely   
    }
}