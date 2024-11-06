class Juego {
  constructor(cantidadEnemigos, mike, imagenesEnemigos) {
    this.cantidadEnemigos = cantidadEnemigos;
    this.imagenesEnemigos = imagenesEnemigos;
    this.boton = new Boton(width / 2, 300, 200, 50, "Jugar");
    this.breiniciar = new Boton(width / 2, height / 2 + 100, 200, 50, "Reiniciar");
    this.crearPersonaje(mike);
    this.crearEnemigos();
    this.estado = 1; // Inicializa el juego en el estado del menú
  }

  mostrar(fondo, fondoganaste, fondoperdiste) {
    if (this.estado === 1) {
      background(fondo);
      textAlign(CENTER, CENTER);
      textSize(20);
      fill(0);
      text("Instrucciones:", width / 2, 70);
      text("- Presiona ENTER para disparar", width / 2, 200);
      this.boton.mostrar();
    } else if (this.estado === 2) {
      background(fondo);
      this.dibujar();
    } else if (this.estado === 3) {
      background(fondoganaste);
      textAlign(CENTER, CENTER);
      textSize(40);
      fill(0);
      text("¡Ganaste!", width / 2, 250);
      this.breiniciar.mostrar();
    }
  }

  dibujar() {
    this.personaje.dibujar();
    for (let enemigo of this.enemigos) {
      enemigo.dibujar();
    }
    this.controlarDisparosAEnemigos();
  }

  mousePresionado() {
    if (this.estado === 1 && this.boton.clicEnBoton()) {
      this.estado = 2; // Cambia al estado de juego
    } else if (this.estado === 3 && this.breiniciar.clicEnBoton()) {
      this.reiniciarJuego(); // Reinicia el juego
    }
  }

  reiniciarJuego() {
    this.estado = 1;
    this.crearEnemigos();
    this.personaje = new Personaje(width / 2, 300, this.personaje.imagen);
  }

  crearEnemigos() {
    this.enemigos = [];
    for (let i = 0; i < this.cantidadEnemigos; i++) {
      // Asigna la imagen correspondiente a cada enemigo
      this.enemigos.push(new Enemigo(i * 80 + 20, 0, this.imagenesEnemigos[i]));
    }
  }

  crearPersonaje(imagen) {
    this.personaje = new Personaje(width / 2, 300, imagen);
  }

  teclaPresionada(keyCode) {
    if (this.estado === 2) {
      // Permitir que el personaje solo reciba teclas en el estado de juego
      this.personaje.teclaPresionada(keyCode);
    }
  }

  controlarDisparosAEnemigos() {
    if (this.personaje.haDisparadoBala()) {
      for (let enemigo of this.enemigos) {
        enemigo.haTocadoLaBala(this.personaje.bala);
      }
    }
  }
}
