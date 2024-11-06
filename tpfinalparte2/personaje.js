class Personaje {
  constructor(posX, posY, imagen) {
    this.posX = posX;
    this.posY = posY;
    this.imagen = imagen;
    this.bala = new Bala(this.posX, this.posY);
  }

  dibujar() {
    this.bala.dibujar();

    if (this.imagen) {
      image(this.imagen, this.posX, this.posY, 50, 50);
    }
  }

  teclaPresionada(keyCode) {
    if (keyCode == LEFT_ARROW) {
      this.moverIzquierda();
    } else if (keyCode == RIGHT_ARROW) {
      this.moverDerecha();
    } else if (keyCode == ENTER) {
      this.dispararBala();
    }
  }

  moverDerecha() {
    this.posX += 10;
  }

  moverIzquierda() {
    this.posX -= 10;
  }

  dispararBala() {
    if (!this.bala.disparada) {
      this.bala = new Bala(this.posX + 25, this.posY);
      this.bala.disparar();
    }
  }

  haDisparadoBala() {
    return this.bala.disparada;
  }
}
