class Personaje {
  //inicializa objetos 
  // posiciones - personaje principal - bala - vidas
  constructor(posX, posY, imagen) { 
    this.posX = posX;
    this.posY = posY;
    this.imagen = imagen;
       this.imagenDerecha = willder;
    this.imagenIzquierda = willizq;
    this.balasImagenes = [ candyvioleta, candyverde, candyamarillo ];
    this.bala = new Bala( this.posX, this.posY , imagen );
    this.vidas = 3; 
  }

// crea bala - personaje principal - vidas 
  dibujar() { // dibuja la bala
    this.bala.dibujar(); 

   if ( this.imagen ) {
      image( this.imagen , this.posX , this.posY , 60 , 160 );
     this.bala.dibujar();

    // dibuja un réctangulo con la cantidad de vidas dentro 
    textSize(18);
         rectMode(CENTER);
    fill(0);
    push();
    strokeWeight(3);
    stroke(255);
    rect(50, 30, 80, 30);
    pop();
    fill(255);
     text("Vidas: " + this.vidas, 50, 30); 
  }}

// mueve personaje principal 
  movizq(){
    this.posX -= 20;
}
  
  movderch(){
    this.posX += 20;
}
  
  Mover( keyCode ){
    if( keyCode === LEFT_ARROW ){
    this.movizq();
    this.imagen = this.imagenIzquierda;
    }
    else if( keyCode === RIGHT_ARROW ){
     this.imagen = this.imagenDerecha;
     this.movderch();
    }
    else if ( keyCode === ENTER ){
     this.seDisparaBala();
    }
}

  vidaPerdida(){
    this.vidas--;
}
  
  seDisparaBala() {
    if( !this.bala.enDisparo ){
     let balaAleatoria = random( this.balasImagenes );
     this.bala.imagen = balaAleatoria;
     this.bala.disparar( this.posX + 20 , this.posY );
    } 
}

  
  haDisparadoBala() {
    return this.bala.enDisparo;
}

}
