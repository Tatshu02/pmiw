//Florencia Morán
let img;
let movimiento = 0;


function preload() {
  img = loadImage("data/img.jpg"); // Asegúrate de que la imagen esté en la carpeta "data"
}
function setup() {
  createCanvas(800, 400); 
 
}

function draw() {
  background(255);
   image(img, 0, 0, 400, 450);
  invertirColores();
  translate(600, 200);
  dibujoArte();
  
  if (mouseX > 400) {
    movimiento += 0.1;
  }
}

function dibujoArte() {
  for (let i = 0; i < 50; i++) {
    rotate(radians(movimiento));
    rectMode(CENTER);
    let tamaño = map(i, 0, 29, 400, 30);
    fill(i % 2 * 250);
    rect(0, 0, tamaño, tamaño);
    scale(0.9);
  }
}

function invertirColores() {
  blendMode(DIFFERENCE);
  triangle(600, 200, 400, 400, 400, 0);
  triangle(600, 200, 800, 400, 800, 0);
   blendMode(BLEND);
}

function mouseClicked() {
  movimiento = 0;
}

function calcularPromedio(a, b, c) {
  let promedio = (a + b + c) / 3;
  return promedio;
}
