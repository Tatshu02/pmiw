let objJuego;
let mike;

function preload() {
  // Cargar la imagen antes de que el sketch comience
  mike = loadImage("libraries/personaje.JPG");
}

function setup() {
  createCanvas(400, 400);
  objJuego = new Juego(10, mike); // Cambiamos imgPersonaje por mike
}

function draw() {
  background(200);
  objJuego.dibujar();
}

function keyPressed() {
  objJuego.teclaPresionada(keyCode);
}
