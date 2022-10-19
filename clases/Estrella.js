class Estrella{
    constructor(radio) {
        this.x = Math.random()*anchura;
        this.y = Math.random()*altura;
        this.z = Math.random();
    }
    dibuja(){
        contexto.fillStyle = "grey"
        contexto.fillRect(this.x-((jugador.x-anchura/2)/10)*this.z,this.y-((jugador.y-altura/2)/10)*this.z,2,2)
    }
}

