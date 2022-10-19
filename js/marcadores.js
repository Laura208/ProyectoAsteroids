function marcadores() {
    contexto.strokeStyle ="white"
    contexto.fillStyle = "white"
    contexto.fillStyle = "yellow"
    contexto.strokeRect(10,34,104,-20)
    contexto.fillRect(12,32,nivel,-16)
    contexto.fillStyle = "white"
    contexto.fillText("level  ",14,30)
    
    contexto.strokeRect(10,58,104,-20)
    contexto.fillStyle = "magenta"
    contexto.fillRect(12,56,Math.round(jugador.puntos)/1000,-16)
    contexto.fillStyle = "white"
    contexto.fillText(jugador.puntos,10,54)
    
    
    contexto.strokeRect(10,82,104,-20)
    contexto.fillStyle = "red"
    contexto.fillRect(12,80,jugador.municion,-16)
    contexto.fillStyle = "white"
    contexto.fillText("ammo   ",14,78)
    
    
    contexto.strokeRect(10,106,104,-20)
    contexto.fillStyle = "green"
    contexto.fillRect(12,104,jugador.vida,-16)
    contexto.fillStyle = "white"
    contexto.fillText("energy ",14,102)
    
    
    contexto.strokeRect(10,130,104,-20)
    contexto.fillStyle = "blue"
    contexto.fillRect(12,128,jugador.fuel,-16)
    contexto.fillStyle = "white"
    contexto.fillStyle = "white"
    contexto.fillText("fuel   ",14,126)
    
    contexto.strokeRect(10,154,104,-20)
    contexto.fillStyle = "orange"
    contexto.fillRect(12,152,100-(tiempo/10000)*100,-16)
    contexto.fillStyle = "white"
    contexto.fillStyle = "white"
    contexto.fillText("time   ",14,150)     
}