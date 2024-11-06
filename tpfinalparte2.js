let objJuego;
let mike;
let freddy;

function preload() {
  // Cargar las imágenes antes de que el sketch comience
  mike = loadImage("libraries/personaje.JPG");  // Imagen del personaje
  freddy = loadImage("libraries/enemigo1.JPG"); // Imagen para los enemigos
}

function setup() {
  createCanvas(400, 400);
  objJuego = new Juego(4, mike, freddy); // Cambié la cantidad de enemigos a 4
}

function draw() {
  background(200);
  objJuego.dibujar();
}

function keyPressed() {
  objJuego.teclaPresionada(keyCode);
}
