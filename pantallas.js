class Pantalla{
constructor(pantalla, textos) {
this.imagen = fondo
this.boton = new Boton( 100, 350, 100, 50, "Jugar");
this.botoncreditos = new Boton(400, 350, 100, 50, "credito");
this.botoninicio = new Boton(width / 2, height / 2 + 100, 200, 50, "inicio");

}
pantallaInicio(){
  
 background(fondo);
      textAlign(CENTER, CENTER);
      textSize(20);
             rectMode(CENTER);
    fill(0);
    push();
    strokeWeight(3);
    stroke(255);
    rect(200, 70, 150, 40);
    pop();
             rectMode(CENTER);
    fill(0);
    push();
    strokeWeight(3);
    stroke(255);
    rect(200, 200, 320, 40);
    pop();
      fill(255);
      text("Instrucciones:", width / 2, 70);
      text("- Presiona ENTER para disparar", width / 2, 200);
      this.boton.mostrar();
      this.botoncreditos.mostrar();

}
pantallaGanar(){
 background(fondo);
      textAlign(CENTER, CENTER);
      textSize(30);
       rectMode(CENTER);
    fill(0);
    push();
    strokeWeight(3);
    stroke(255);
    rect(200, 150, 150, 50);
    pop();
      fill(255);
      text("¡Ganaste!", width / 2, 150); 
      this.botoninicio.mostrar();

}
pantallaPerdiste(){
  background(fondo);
      textAlign(CENTER, CENTER);
      textSize(30);
       rectMode(CENTER);
    fill(0);
    push();
    strokeWeight(3);
    stroke(255);
    rect(200, 150, 150, 50);
    pop();
      fill(255);
      text("¡Perdiste!", width / 2, 150);
      this.botoninicio.mostrar();
}
pantallaCredito(){
  background(fondo); 
       textAlign(CENTER, CENTER);
      textSize(20);
       rectMode(CENTER);
    fill(0);
    push();
    strokeWeight(3);
    stroke(255);
    rect(200, 173, 320, 50);
    pop();
      fill(255);
      text("Florencia Moran y Sofia Pogliesi", 200, 173); 
      this.botoninicio.mostrar();

}

}
