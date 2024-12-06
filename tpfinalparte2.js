//Sofía Pogliesi - Florencia Morán 
// TPFINALPARTE2 COM5
// https://youtu.be/qGEG-mPi_RM

// código del videojuego fnaf = uso de variables globales y locales - clases con objetos dentro 

// declara variables 
let principal; // clase 
let willder , willizq , thebeast , candyverde , candyvioleta , candyamarillo , fondo , inicio , win , lose ,instrucciones , creditos;
let sonido; // sonido 

// carga imagenes y sonido 
function preload() { 
 
//carga de imagen de JUGADOR Y ENEMIGO------------------------
  willder = loadImage("data/willright.png");
  willizq = loadImage("data/willleft.png");
  thebeast = loadImage("data/thebeast.png");
  
//carga de imagen de MUNICIONES-------------------------------
  candyvioleta = loadImage("data/candyvioleta.png");
  candyverde = loadImage("data/candyverde.png");
  candyamarillo = loadImage("data/candyamarillo.png");
  
//carga de imagen de FONDOS-----------------------------------
  fondo = loadImage("data/fondo.png");
  inicio = loadImage("data/inicio.png");
  win = loadImage("data/win.png");
  lose = loadImage("data/lose.png");
  creditos = loadImage("data/creditos.png");
  instrucciones = loadImage("data/instrucciones.png");

  
}

// configura 
function setup() {
  // tamaño del videojuego y personajes 
  createCanvas(640, 480);
  principal = new Principal();
}

// ejecuta 
function draw() { 
  // clase principal como punto de partida 
  principal.dibujar();
}

// mueve personaje principal 
function keyPressed() {
  if (principal.estado === 2) { // si está en la pantalla del juego
    principal.Juego.mover(keyCode); 
  }
}

// pasa pantallas
function mousePressed() {
    if (principal) {
        principal.mousePresionado(); // Llama al método mousePresionado
    }
}
