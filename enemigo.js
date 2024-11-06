class Enemigo {
  constructor(posX, posY, imagen, nombre) {
    this.posX = posX;
    this.posY = posY;
    this.vida = true;
    this.velocidad = 2;
    this.imagen = imagen;  // Asignar la imagen pasada en el constructor
  
  }

  caer() {
    this.posY += this.velocidad; // Mueve al enemigo hacia abajo
  }

  dibujar() {
    if (this.vida) {
      image(this.imagen, this.posX, this.posY, 50, 50); // Dibujar la imagen del enemigo
      textSize(12);
      fill(255);
      text(this.nombre, this.posX, this.posY - 10); // Mostrar el nombre del enemigo encima
      this.caer();
    }
  }

  matar() {
    this.vida = false;
  }

  haTocadoLaBala(bala) {
    if (this.vida && dist(this.posX, this.posY, bala.posX, bala.posY) < 25) { // Aumentamos el rango de colisión
      this.matar();
      bala.reset(); // Reseteamos la bala después de la colisión
    }
  }
   fueraDePantalla() {
    return this.x + this.width < 0;
  }
}
