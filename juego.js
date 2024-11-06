class Juego {
  constructor(cantidadEnemigos, mike, freddy) {
    this.cantidadEnemigos = cantidadEnemigos;
    this.crearPersonaje(mike);
    this.crearEnemigos(freddy); // Pasar la imagen del enemigo aquí
  }

  dibujar() {
    this.personaje.dibujar();

    for (let i = 0; i < this.cantidadEnemigos; i++) {
      this.enemigos[i].dibujar();
    }

    this.controlarDisparosAEnemigos();
  }

  crearEnemigos(imagen) {
    this.enemigos = [];
    for (let i = 0; i < this.cantidadEnemigos; i++) {
      // Asignar la imagen del enemigo a cada uno
      this.enemigos.push(new Enemigo(i * 80 + 20, 0, imagen));  
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
