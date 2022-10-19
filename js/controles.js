document.onkeydown = function(e) {
    switch(e.which) {
        case 37: // left
            mueveangulo = 'izquierda'
            
        break;
                
        case 38: // up
            jugador.aceleracion = 0.1
            
        break;

        case 39: // right
            mueveangulo = 'derecha'
           
        break;

        case 32: // espacio
                if(jugador.municion > 0){
                    
                    balas.push(new Bala())
                    if(jugador.mododisparo >= 3){
                        balas[balas.length] = new Bala()
                        balas[balas.length-1].angulo += 0.1
                        balas[balas.length-1].velx = jugador.velx+Math.cos(balas[balas.length-1].angulo)*5;
                      balas[balas.length-1].vely = jugador.vely+Math.sin(balas[balas.length-1].angulo)*5;
                        balas[balas.length] = new Bala()
                        balas[balas.length-1].angulo -= 0.1
                        balas[balas.length-1].velx = jugador.velx+Math.cos(balas[balas.length-1].angulo)*5;
                      balas[balas.length-1].vely = jugador.vely+Math.sin(balas[balas.length-1].angulo)*5;
                    }
                    if(jugador.mododisparo >= 5){
                        
                      
                      balas[balas.length] = new Bala()
                        balas[balas.length-1].angulo += 0.2
                        balas[balas.length-1].velx = jugador.velx+Math.cos(balas[balas.length-1].angulo)*5;
                      balas[balas.length-1].vely = jugador.vely+Math.sin(balas[balas.length-1].angulo)*5;
                        balas[balas.length] = new Bala()
                        balas[balas.length-1].angulo -= 0.2
                        balas[balas.length-1].velx = jugador.velx+Math.cos(balas[balas.length-1].angulo)*5;
                      balas[balas.length-1].vely = jugador.vely+Math.sin(balas[balas.length-1].angulo)*5;
                    }
                    if(jugador.mododisparo >= 7){
                        
                      
                      balas[balas.length] = new Bala()
                        balas[balas.length-1].angulo += 0.3
                        balas[balas.length-1].velx = jugador.velx+Math.cos(balas[balas.length-1].angulo)*5;
                      balas[balas.length-1].vely = jugador.vely+Math.sin(balas[balas.length-1].angulo)*5;
                        balas[balas.length] = new Bala()
                        balas[balas.length-1].angulo -= 0.3
                        balas[balas.length-1].velx = jugador.velx+Math.cos(balas[balas.length-1].angulo)*5;
                      balas[balas.length-1].vely = jugador.vely+Math.sin(balas[balas.length-1].angulo)*5;
                    }
                    
                    if(jugador.mododisparo >= 9){
                        
                      
                      balas[balas.length] = new Bala()
                        balas[balas.length-1].angulo += 0.4
                        balas[balas.length-1].velx = jugador.velx+Math.cos(balas[balas.length-1].angulo)*5;
                      balas[balas.length-1].vely = jugador.vely+Math.sin(balas[balas.length-1].angulo)*5;
                        balas[balas.length] = new Bala()
                        balas[balas.length-1].angulo -= 0.4
                        balas[balas.length-1].velx = jugador.velx+Math.cos(balas[balas.length-1].angulo)*5;
                      balas[balas.length-1].vely = jugador.vely+Math.sin(balas[balas.length-1].angulo)*5;
                    }
                    if(jugador.mododisparo >= 11){
                        
                      
                      balas[balas.length] = new Bala()
                        balas[balas.length-1].angulo += 0.5
                        balas[balas.length-1].velx = jugador.velx+Math.cos(balas[balas.length-1].angulo)*5;
                      balas[balas.length-1].vely = jugador.vely+Math.sin(balas[balas.length-1].angulo)*5;
                        balas[balas.length] = new Bala()
                        balas[balas.length-1].angulo -= 0.5
                        balas[balas.length-1].velx = jugador.velx+Math.cos(balas[balas.length-1].angulo)*5;
                      balas[balas.length-1].vely = jugador.vely+Math.sin(balas[balas.length-1].angulo)*5;
                    }
                    jugador.municion--;
           }
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
};