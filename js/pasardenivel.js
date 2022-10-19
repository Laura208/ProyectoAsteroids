  // Repaso las rocas
  function pasardenivel(){
  siguientenivel = 'si'
  for(var i = 0;i<rocas.length;i++){
      if(rocas[i].visible == true){siguientenivel = 'no'}
  }
  if(siguientenivel == 'si'){
      nivel++;
      tiempo = 0;
      for(var k = 0;k<nivel*5;k++){
          rocas[rocas.length] = new Roca()
      }
      //$("#nivel").text("nivel "+nivel)
      //$("#nivel").fadeIn("1000")
      //setTimeout(function(){$("#nivel").fadeOut("1000")},5000)
  }
}