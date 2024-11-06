class Enemigo {
  constructor(posX, posY, imagen) {
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
      this.caer();
    }
  }

  matar() {
    this.vida = false;
  }

  haTocadoLaBala(bala) {
    if (this.vida && dist(this.posX, this.posY, bala.posX, bala.posY) < 15) {
      this.matar();
      bala.disparada = false; // Desactiva la bala al tocar
    }
  }
}
