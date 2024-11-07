class Juego {
  constructor(cantidadEnemigos, mike, imagenesEnemigos) {
    this.cantidadEnemigos = cantidadEnemigos;
    this.imagenesEnemigos = imagenesEnemigos;
    this.boton = new Boton(width / 2, 300, 200, 50, "Jugar");
    this.breiniciar = new Boton(width / 2, height / 2 + 100, 200, 50, "Reiniciar");
    this.crearPersonaje(mike);
    this.enemigos = []; // Inicializa el arreglo de enemigos vacío
    this.estado = 1; // Estado inicial del juego
    this.intervaloEnemigos = 100; // Cada cuantos cuadros se agrega un enemigo
    this.contadorCuadros = 0; // Contador para manejar el intervalo
  }

  mostrar(fondo, fondoganaste, fondoperdiste) {
    if (this.estado === 1) {
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
    } else if (this.estado === 2) {
     background(fondo);
      this.dibujar();
      this.controlarColisiones();
      this.crearEnemigosContinuamente();
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
      enemigo.caer(); // Hace que los enemigos caigan constantemente
      if (enemigo.posY > height) { // Si el enemigo sale de la pantalla
        enemigo.reiniciar(); // Reinicia el enemigo en una nueva posición en la parte superior
      }
    }
    this.controlarDisparosAEnemigos();
  }

  crearEnemigosContinuamente() {
    this.contadorCuadros++;
    if (this.contadorCuadros >= this.intervaloEnemigos) {
      let posX = random(0, width - 50); // Genera una posición X aleatoria
      let imagenEnemigo = random(this.imagenesEnemigos); // Selecciona una imagen aleatoria
      this.enemigos.push(new Enemigo(posX, 0, imagenEnemigo)); // Agrega un nuevo enemigo en la parte superior
      this.contadorCuadros = 0; // Resetea el contador
    }
  }

  controlarColisiones() {
    for (let enemigo of this.enemigos) {
      if (enemigo.vida && this.colisionaConPersonaje(enemigo)) {
        this.personaje.reducirVida();
        enemigo.matar(); // El enemigo desaparece después de la colisión
        if (this.personaje.vidas <= 0) {
          this.estado = 3; // Cambia el estado al de "fin del juego" si las vidas llegan a 0
        }
      }
    }
  }

  colisionaConPersonaje(enemigo) {
    return (
      enemigo.posX < this.personaje.posX + 50 &&
      enemigo.posX + 50 > this.personaje.posX &&
      enemigo.posY < this.personaje.posY + 50 &&
      enemigo.posY + 50 > this.personaje.posY
    );
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
    this.enemigos = []; // Vacía el arreglo de enemigos
    this.contadorCuadros = 0; // Resetea el contador de cuadros
    this.personaje.vidas = 3; // Restablece las vidas del personaje
    this.personaje = new Personaje(width / 2, 300, this.personaje.imagen);
  }

  crearPersonaje(imagen) {
    this.personaje = new Personaje(width / 2, 300, imagen);
  }

  teclaPresionada(keyCode) {
    if (this.estado === 2) {
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
