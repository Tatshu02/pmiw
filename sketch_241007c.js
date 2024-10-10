let pantalla = 0;
let textos = [];
let fondos = [];
let spacing = 50;
let diameter = -20;

function preload() {
  fondos[1] = loadImage("libraries/inicio.jpg");
  fondos[2] = loadImage("libraries/pantalla2.jpeg");
  fondos[3] = loadImage("libraries/pantalla3.jpeg");
  fondos[4] = loadImage("libraries/pantalla4.jpeg");
  fondos[5] = loadImage("libraries/pantalla5.jpeg");
  fondos[6] = loadImage("libraries/pantalla6.jpeg");
  fondos[7] = loadImage("libraries/pantalla7.jpeg");
  fondos[8] = loadImage("libraries/pantalla8.jpeg");
  fondos[9] = loadImage("libraries/pantalla9.jpeg");

}

function setup() {
  createCanvas(640, 480);
  // Textos para las diferentes pantallas
  textos[1] = "pantalla 1.";
  textos[2] = "Se escuchan ruidos fuera de la sala de seguridad.";
  textos[3] = "Mike sale al pasillo a revisar.";
  textos[4] = "Mike descubre que en el pasillo hay un animatrónico.";
  textos[5] = "Mike descubre que en el pasillo hay un animatrónico.";
  textos[6]= "Mike se encuentra con dos puertas de lados opuestos";
  textos[7]= "Mike queda a salvo por un tiempo";
  textos[8]= "Mike se encuentra con dos puertas de lados opuestos";
  textos[10]= "Se escuchan ruidos más fuertes. Rápido entra en alguna";
  textos[11]= "Final bueno: Mike sale de la pizzería";
  textos[12]= "Final malo: Chica se encuentra dentro de la derecha y mata a Mike";
  textos[13]= "Mike ve un animatrónico mirando a la cámara con ojos rojos";
  textos[14]= "El animatrónico está corriendo hacia la cabina de seguridad";
  textos[15]= "Mike rápidamente destapa y entra al conducto de ventilación";
  textos[16]= "Mike decide esconderse debajo del escritorio";
  textos[17]= "Final malo: Freddy entra a la sala de seguridad y mata a Mike";
  textos[18]= "Mike se encuentra con dos salidas en lados opuestos";
  textos[19]= "Final bueno: Mike sale de la pizzería";
  textos[20]= "Mike se encuentra con el comedor";
  textos[21]= "Mike se dirige a la cocina en busca de algún arma";
  textos[22]= "Mike encuentra un encendedor";
  textos[23]= "El humo ahuyenta a los animatrónicos y sale por la ventana";
  textos[24]= "Final bueno: Mike sale con quemaduras de primer grado y denuncia a William Afton por daño y perjuicio";
  textos[25]= "Final malo: Bonny entra en la cocina y mata a Mike";
  textos[26]= "Se escuchan ruidos afuera";
}

function draw() {
  // Selección de pantalla a mostrar
  if (pantalla == 0) {
    pantallaInicio()
  } else if (pantalla == 1) {
    pantalla1()
  } else if (pantalla == 3) {
    pantallaCreditos()
  } else if (pantalla == 4) {
    pantallaCamara()
  } else if (pantalla == 5) {
    pantallaPasillo()
  } else if (pantalla == 6) {
    pantallaRuido()
  } else if (pantalla == 7) {
    pantallaDosPuertas()
  } else if (pantalla == 8) {
    pantallaOtraPuerta()
  } else if (pantalla == 9) {
    pantallaDecisionPuerta()
  } else if (pantalla == 10) {
    pantallaFinalBueno()
  } else if (pantalla == 11) {
    pantallaFinalMalo()
  } else if (pantalla == 12) {
    pantallaAnimatronico()
  } else if (pantalla == 13) {
    pantallaVentilacion()
  } else if (pantalla == 14) {
    pantallaEsconder()
  } else if (pantalla == 15) {
    pantallaMuerte()
  } else if (pantalla == 16) {
    pantallaSalidas()
  } else if (pantalla == 17) {
    pantallaComedor()
  } else if (pantalla == 18) {
    pantallaSalida()
  } else if (pantalla == 19) {
    pantallaCocina()
  } else if (pantalla == 20) {
    pantallaArma()
  } else if (pantalla == 21) {
    pantallaIncendio()
  } else if (pantalla == 22) {
    pantallaBonny()
  } else if (pantalla == 23) {
    pantallaVentana()
  } else if (pantalla == 24) {
    pantallaFinalDenuncia()
  }
}

// Funciones de pantallas
function pantallaInicio() {
  image(fondos[1], 0, 0, width, height);
  botonRectangular("Comienzo", 50, 400, 200, 60);
  botonRectangular("Creditos", 400, 400, 200, 60);
}

function pantalla1() {
 
  image(fondos[2], 0, 0, width, height);
  mostrarTexto(textos[2], 30);
  botonRectangular("Cámara", 50, 400, 200, 60);
  botonRectangular("Pasillo", 400, 400, 200, 60);
}

function pantallaCreditos() {
  background(243);
  botonRectangular("Inicio", 400, 400, 200, 60);
}

function pantallaCamara() {
  image(fondos[3], 0, 0, width, height);
  mostrarTexto(textos[13], 30);
  botonRectangular("Seguir", 400, 400, 200, 60);
}

function pantallaPasillo() {
  image(fondos[4], 0, 0, width, height);
  mostrarTexto(textos[3], 30);
  botonRectangular("Seguir", 400, 400, 200, 60);
}

function pantallaRuido() {
  image(fondos[4], 0, 0, width, height);
  mostrarTexto(textos[5], 30);
  botonRectangular("Volver", 50, 400, 200, 60);
  botonRectangular("Seguir", 400, 400, 200, 60);
}

function pantallaDosPuertas() {
  
  mostrarTexto(textos[7], 30);
  botonRectangular("Seguir", 400, 400, 200, 60);
}

function pantallaOtraPuerta() {
 image(fondos[7], 0, 0, width, height);
  mostrarTexto(textos[8], 30);
  botonRectangular("Seguir", 400, 400, 200, 60);
}

function pantallaDecisionPuerta() {
  image(fondos[7], 0, 0, width, height);
  mostrarTexto(textos[10], 30);
  botonRectangular("Izquierda", 50, 400, 200, 60);
  botonRectangular("Derecha", 400, 400, 200, 60);
}

function pantallaFinalBueno() {
  image(fondos[9], 0, 0, width, height);
  mostrarTexto(textos[11], 30);
  botonRectangular("Inicio", 400, 400, 200, 60);
}

function pantallaFinalMalo() {
image(fondos[8], 0, 0, width, height);
  mostrarTexto(textos[12], 30);
  botonRectangular("Inicio", 400, 400, 200, 60);
}

function pantallaAnimatronico() {
  background(30);
  mostrarTexto(textos[14], 30);
  botonRectangular("Cerrar la puerta", 50, 400, 200, 60);
  botonRectangular("Esconderse", 400, 400, 200, 60);
}

function pantallaVentilacion() {
  background(30);
  mostrarTexto(textos[15], 30);
  botonRectangular("Seguir", 400, 400, 200, 60);
}

function pantallaEsconder() {

  image(fondos[5], 0, 0, width, height);
  mostrarTexto(textos[16], 30);
  botonRectangular("Seguir", 400, 400, 200, 60);
}

function pantallaMuerte() {
  image(fondos[6], 0, 0, width, height);
  mostrarTexto(textos[17], 30);
 botonRectangular("Inicio", 400, 400, 200, 60);
}

function pantallaSalidas() {
  background(30);
  mostrarTexto(textos[18], 30);
  botonRectangular("Izquierda", 50, 400, 200, 60);
  botonRectangular("Derecha", 400, 400, 200, 60);
}

function pantallaComedor() {
  background(30);
  mostrarTexto(textos[20], 30);
  botonRectangular("Seguir", 400, 400, 200, 60);
}

function pantallaSalida() {
  background(30);
  mostrarTexto(textos[19], 30);
  botonRectangular("Inicio", 400, 400, 200, 60);
}

function pantallaCocina() {
  background(30);
  mostrarTexto(textos[21], 30);
  botonRectangular("Seguir", 400, 400, 200, 60);
}

function pantallaArma() {
  background(30);
  mostrarTexto(textos[22], 30);
  botonRectangular("Seguir", 400, 400, 200, 60);
}

function pantallaIncendio() {
  background(30);
  mostrarTexto(textos[26], 30);
  botonRectangular("Empezar un incendio", 50, 400, 200, 60);
  botonRectangular("Buscar otra salida", 400, 400, 200, 60);
}

function pantallaBonny() {
  background(30);
  mostrarTexto(textos[25], 30);
  botonRectangular("Inicio", 400, 400, 200, 60);
}

function pantallaVentana() {
  background(30);
  mostrarTexto(textos[23], 30);
  botonRectangular("Seguir", 400, 400, 200, 60);
}

function pantallaFinalDenuncia() {
  background(30);
  mostrarTexto(textos[24], 30);
  botonRectangular("Inicio", 400, 400, 200, 60);
}

// Función para mostrar textos en pantalla
function mostrarTexto(texto, tamano) {
  textSize(tamano);
  textAlign(CENTER);
  text(texto, 0, 100, width, height);
}

// Función para crear botones rectangulares




// Función para manejar eventos de clic del mouse
function mousePressed() {
  if (pantalla == 0) {
    if (superficie(mouseX, mouseY, 50, 400, 200, 60)) pantalla = 1;
    if (superficie(mouseX, mouseY, 400, 400, 200, 60)) pantalla = 3;
  } else if (pantalla == 1) {
    if (superficie(mouseX, mouseY, 50, 400, 200, 60)) pantalla = 4;  // Va a la cámara
    if (superficie(mouseX, mouseY, 400, 400, 200, 60)) pantalla = 5;  // Va al pasillo
  } else if (pantalla == 3) {
    if (superficie(mouseX, mouseY, 400, 400, 200, 60)) pantalla = 0;  // Vuelve al inicio
  } else if (pantalla == 4) {
    if (superficie(mouseX, mouseY, 400, 400, 200, 60)) pantalla = 12;  // Continúa con el animatrónico
  } else if (pantalla == 5) {
    if (superficie(mouseX, mouseY, 400, 400, 200, 60)) pantalla = 6;  // Continua desde el pasillo
  } else if (pantalla == 6) {
    if (superficie(mouseX, mouseY, 50, 400, 200, 60)) pantalla = 7;  // Volver o tomar acción
    if (superficie(mouseX, mouseY, 400, 400, 200, 60)) pantalla = 8;  // Sigue al siguiente paso
  } else if (pantalla == 7) {
    if (superficie(mouseX, mouseY, 400, 400, 200, 60)) pantalla = 13;  // Sigue a la decisión de puertas
  } else if (pantalla == 8) {
    if (superficie(mouseX, mouseY, 400, 400, 200, 60)) pantalla = 9;  // Llega a la decisión
  } else if (pantalla == 9) {
    if (superficie(mouseX, mouseY, 50, 400, 200, 60)) pantalla = 10;  // Final bueno: sale de la pizzería
    if (superficie(mouseX, mouseY, 400, 400, 200, 60)) pantalla = 11;  // Final malo: Chica mata a Mike
  } else if (pantalla == 10 ) {
    if (superficie(mouseX, mouseY, 400, 400, 200, 60)) pantalla = 0;
  } else if (pantalla == 11 ) {
    if (superficie(mouseX, mouseY, 400, 400, 200, 60)) pantalla = 0// Vuelve al inicio después de un final
  } else if (pantalla == 12) {
    if (superficie(mouseX, mouseY, 50, 400, 200, 60)) pantalla = 13;  // Cierra la puerta
    if (superficie(mouseX, mouseY, 400, 400, 200, 60)) pantalla = 14;  // Se esconde
  } else if (pantalla == 13 ) {
    if (superficie(mouseX, mouseY, 400, 400, 200, 60)) pantalla = 16;  // Sigue al siguiente paso
  } else if (pantalla == 14) {
    if (superficie(mouseX, mouseY, 400, 400, 200, 60)) pantalla = 15;  // Freddy mata a Mike
  } else if (pantalla == 15) {
    if (superficie(mouseX, mouseY, 400, 400, 200, 60)) pantalla = 0;  // Freddy mata a Mike
  } else if (pantalla == 16) {
    if (superficie(mouseX, mouseY, 50, 400, 200, 60)) pantalla = 17;  // Final bueno: Mike sale
    if (superficie(mouseX, mouseY, 400, 400, 200, 60)) pantalla = 18;  // Va al comedor
  } else if (pantalla == 19) {
    if (superficie(mouseX, mouseY, 400, 400, 200, 60)) pantalla = 20;
  } else if (pantalla == 17) {
    if (superficie(mouseX, mouseY, 400, 400, 200, 60)) pantalla = 19;// Busca un arma en la cocina
  } else if (pantalla == 21) {
    if (superficie(mouseX, mouseY, 50, 400, 200, 60)) pantalla = 23;
    if (superficie(mouseX, mouseY, 400, 400, 200, 60)) pantalla = 22;  // Encuentra el encendedor
  } else if (pantalla == 23) {
    if (superficie(mouseX, mouseY, 400, 400, 200, 60)) pantalla = 24;  // Final malo: Bonny mata a Mike
  } else if (pantalla == 22) {
    if (superficie(mouseX, mouseY, 400, 400, 200, 60)) pantalla = 0;
  } else if (pantalla == 18) {
    if (superficie(mouseX, mouseY, 400, 400, 200, 60)) pantalla = 0;
  } else if (pantalla == 20) {
    if (superficie(mouseX, mouseY, 400, 400, 200, 60)) pantalla = 21;
  } else if (pantalla == 24) {
    if (superficie(mouseX, mouseY, 400, 400, 200, 60)) pantalla = 0;
  }
}
