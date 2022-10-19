class Roca{
    constructor(radio) {
        this.x = Math.random()*anchura;
        this.y = Math.random()*altura;
        this.angulo = Math.PI*2*Math.random();
        this.angulo2 = Math.PI*2*Math.random();
        this.vel = Math.random()*3;
        this.radio = Math.random()*20+20
        this.visible = true;
        this.vertices = new Array();
        this.velangular = (Math.random()-0.5)*0.1;
        this.numvertices = Math.round(Math.random()*24)+3;
        for(var i = 0;i<this.numvertices;i++){
            this.vertices[i] = (Math.random()+0.5)*1;
        }
        console.log(this.vertices)

  }
    dibuja(){
        if(this.visible == true){
            contexto.strokeStyle = "white"
            contexto.beginPath()
            this.angulo2 += this.velangular
            contexto.moveTo(
                this.x+Math.cos(Math.PI*2*(1/this.numvertices)+this.angulo2)*this.radio*this.vertices[1],
                this.y+Math.sin(Math.PI*2*(1/this.numvertices)+this.angulo2)*this.radio*this.vertices[1]
            )
            for(var i = 2;i<this.numvertices;i++){
                contexto.lineTo(
                    this.x+Math.cos(Math.PI*2*(i/this.numvertices)+this.angulo2)*this.radio*this.vertices[i],
                    this.y+Math.sin(Math.PI*2*(i/this.numvertices)+this.angulo2)*this.radio*this.vertices[i]
                )
            }
            contexto.fillStyle = "black"
            contexto.fill()
            contexto.closePath()
            contexto.stroke()
        }
    }
    mueve(){
        this.x += Math.cos(this.angulo)*this.vel
        this.y += Math.sin(this.angulo)*this.vel
        if(this.x < 0){this.x = anchura}
        if(this.y < 0){this.y = altura}
        if(this.x > anchura){this.x = 0}
        if(this.y > altura){this.y = 0}
    }
}