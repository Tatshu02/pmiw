class Enemigo {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.miColor = color(0, 255, 0);
    this.vida = true;
  }

  dibujar() {
    if (this.vida) {
      fill(this.miColor);
      ellipse(this.posX, this.posY, 30, 30);
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
