class Juego {
  constructor(cantidadEnemigos, mike) { // Cambiamos imgPersonaje por mike
    this.cantidadEnemigos = cantidadEnemigos;
    this.crearPersonaje(mike);
    this.crearEnemigos();
  }

  dibujar() {
    this.personaje.dibujar();

    for (let i = 0; i < this.cantidadEnemigos; i++) {
      this.enemigos[i].dibujar();
    }

    this.controlarDisparosAEnemigos();
  }

  crearEnemigos() {
    this.enemigos = [];
    for (let i = 0; i < this.cantidadEnemigos; i++) {
      this.enemigos.push(new Enemigo(i * 40 + 20, 100));
    }
  }

  crearPersonaje(imagen) {
    this.personaje = new Personaje(width / 2, 300, imagen);
  }

  teclaPresionada(keyCode) {
    this.personaje.teclaPresionada(keyCode);
  }

  controlarDisparosAEnemigos() {
    if (this.personaje.haDisparadoBala()) {
      for (let i = 0; i < this.cantidadEnemigos; i++) {
        this.enemigos[i].haTocadoLaBala(this.personaje.bala);
      }
    }
  }
}
