let objJuego;
let mike;
let freddy, chica, bonnie, foxy;
let fGanas, fPerdes, bg;
let sonido 

function preload() {
  // Cargar las imágenes antes de que el sketch comience
  mike = loadImage("libraries/personaje.jpg");  // Imagen del personaje
  freddy = loadImage("libraries/freddy.jpg");  // Imagen de Feddy
  chica = loadImage("libraries/chica.jpg");  // Imagen de Chica
  bonnie = loadImage("libraries/bonnie.jpg");  // Imagen de Bonnie
  foxy = loadImage("libraries/foxy.jpg");  // Imagen de Foxi
  fGanas = loadImage('libraries/fondoganaste.jpg');
  fPerdes = loadImage('libraries/fondoperdiste.jpg');
  bg = loadImage('libraries/fondo.jpg');
   sonido = loadSound("libraries/sonido.mp3");  
}

function setup() {
  createCanvas(400, 400);
  objJuego = new Juego(4, mike, [freddy, chica, bonnie, foxy]);
}

function draw() {
  objJuego.mostrar(bg, fGanas, fPerdes);
}

function keyPressed() {
  objJuego.teclaPresionada(keyCode);
}

function mousePressed() {
  objJuego.mousePresionado();
}
