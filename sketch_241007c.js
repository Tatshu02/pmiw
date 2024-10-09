let pantalla = 0;
let textos = [];
let fondos = [];
//aca se pone todas las imagenes
function preload() {
  fondos[1] = loadImage("libraries/inicio.jpg");
}
function setup() {
  createCanvas(640, 480);
  //aca se ponen todos los textos
  textos[1] = "pantalla 1.";
  textos[2] = "Se escuchan ruidos fuera de la sala de seguridad.";
  textos[3] = "Mike sale al pasillo a revisar.";
  textos[4] = "Mike descubre que en el pasillo hay un animatrónico.";
  textos[5] = "Mike descubre que en el pasillo hay un animatrónico.";
  textos[6]= "Mike se encuentra con dos puertas de lados opuestos";
  textos[7]= "Mike queda a salvo por un tiempo";
  textos[8]= "Mike se encuentra con dos puertas de lados opuestos";

  textos[10]= "se escucha ruidos mas fuerte. rapido entra en alguna";
  textos[11]= "final bueno: Mike sale de la pizzería";
  textos[12]= "final malo: Chica se encuentra dentro de la derecha y mata a Mike";
  textos[13]= "mike ve un animatronico mirando a la camara con ojos rojos";
  textos[14]= "el animatronico esta corriendo hacia la cabina de seguridad";
  textos[15]= "mike rapidamente destapa y entra al conduto de ventilacion";
  textos[16]= "Mike decide esconderse debajo del escritorio";
  textos[17]= "final malo: Freddy entra a la sala de seguridad y mata a Mike";
  textos[18]= "Mike se encuetra con dos salidas lados opuestas";
  textos[19]= "final bueno: Mike sale de la pizzería";
  textos[20]= "Mike se encuentra con el comedor";
  textos[21]= "Mike se dirige a la cocina en busca de algún arma";
  textos[22]= "Mike encuentra un encendedor";
  textos[23]= "el humo aullenta a los animatronicos y sale por la ventana";
  textos[24]= "final bueno: Mike sale con quemadura de primer grado y denuncia a William Afton por daño y prejuicio";
  textos[25]= "final malo: Bonny entra en la cocina y mata a Mike";
  textos[26]= "se escuchan ruido afuera";
}


function draw() {
  //aca se escribe lo que estara en cada escena, ubicacion del boton(tener cuidado porque podria afectar la funcionalidad del mismo), ubicacion de texto y el fondo
  //pantalla 0 inicio
  if (pantalla == 0) {
    //background(0);
    image(fondos[1], 0, 0, width, height);
    botoncircular("Comienzo", 150, 300, 120);
    botoncircular("Créditos", 450, 300, 120);
  }
  //pantalla 1 contratan a mike y escucha ruidos
  else if (pantalla == 1) {
    background(280);
    //   image(fondos[1], 0, 0, width, height);
    mostrarTexto(textos[2], 30);
    botoncircular("camara", 150, 300, 120);
    botoncircular("pasillo", 450, 300, 120);
  }
  //pantalla 3 credito
  else if (pantalla == 3) {
    background(243);

    // image(fondos[19], 0, 0, width, height);
    botoncircular("Inicio", 450, 300, 120);
  }
  //pantalla 4 mike decide mirar las camaras
  else if (pantalla == 4) {
    background(280);
    mostrarTexto(textos[13], 30);
    botoncircular("seguir", 450, 300, 120);
  }
  //pantalla 5 mike decide salir al pasillo
  else if (pantalla == 5) {
    background(280);
    mostrarTexto(textos[3], 30);
    botoncircular("seguir", 150, 300, 120);
  }
  //pantalla 6 mike escucha un ruido fuerte a la cercania
  else if (pantalla == 6) {
    background(80);
    mostrarTexto(textos[5], 30);
    botoncircular("volver", 150, 300, 120);
    botoncircular("seguir", 450, 300, 120);
  }
  //pantalla 7 mike descubre 2 puertas
  else if (pantalla == 7) {
    background(120);
    mostrarTexto(textos[7], 30);
    botoncircular("seguir", 450, 300, 120);
  } else if (pantalla == 8) {
    background(100);
    mostrarTexto(textos[8], 30);
    botoncircular("seguir", 450, 300, 120);
  }
  //pantalla 7 mike entra a la puerta derecha
  else if (pantalla == 9) {
    background(220);
    mostrarTexto(textos[10], 30);
    botoncircular("derecha", 150, 300, 120);
    botoncircular("izquierda", 450, 300, 120);
  } else if (pantalla == 10) {
    background(90);
    mostrarTexto(textos[11], 30);
    botoncircular("Inicio", 450, 300, 120);
  } else if (pantalla == 11) {
    background(120);
    mostrarTexto(textos[12], 30);
    botoncircular("Inicio", 450, 300, 120);
  }
  /////////////////////////////////////////////////////////////
  else if (pantalla == 12) {
    background(30);
    mostrarTexto(textos[14], 30);
    botoncircular("cerrar la puerta", 150, 300, 120);
    botoncircular("esconderse", 450, 300, 120);
  } else if (pantalla == 13) {
    background(30);
    mostrarTexto(textos[15], 30);

    botoncircular("siguiente", 450, 300, 120);
  } else if (pantalla == 16) {
    background(30);
    mostrarTexto(textos[18], 30);
    botoncircular("izquierda", 150, 300, 120);
    botoncircular("derecha", 450, 300, 120);
  } else if (pantalla == 17) {
    background(30);
    mostrarTexto(textos[20], 30);

    botoncircular("siguiente", 450, 300, 120);
  } else if (pantalla == 19) {
    background(30);
    mostrarTexto(textos[21], 30);

    botoncircular("siguiente", 450, 300, 120);
  } else if (pantalla == 20) {
    background(30);
    mostrarTexto(textos[22], 30);

    botoncircular("siguiente", 450, 300, 120);
  } else if (pantalla == 21) {
    background(30);
    mostrarTexto(textos[26], 30);
    botoncircular("empezar un incendio", 150, 300, 120);
    botoncircular("buscar otra salida", 450, 300, 120);
  } else if (pantalla == 22) {
    background(30);
    mostrarTexto(textos[25], 30);

    botoncircular("inicio", 450, 300, 120);
  } else if (pantalla == 23) {
    background(30);
    mostrarTexto(textos[23], 30);

    botoncircular("siguiente", 450, 300, 120);
  } else if (pantalla == 24) {
    background(30);
    mostrarTexto(textos[24], 30);

    botoncircular("inicio", 450, 300, 120);
  } else if (pantalla == 18) {
    background(30);
    mostrarTexto(textos[19], 30);

    botoncircular("inicio", 450, 300, 120);
  }
  /////////////////////////////////////////////////////////////
  else if (pantalla == 14) {
    background(30);
    mostrarTexto(textos[16], 30);
    botoncircular("siguiente", 450, 300, 120);
  } else if (pantalla == 15) {
    background(30);
    mostrarTexto(textos[17], 30);
    botoncircular("inicio", 450, 300, 120);
  }
}
function mostrarTexto(texto, tamano) {
  textSize(tamano);
  textAlign(CENTER);
  text(texto, 0, 100, width, height);
}
function botoncircular(label, x, y, diameter) {
  fill(255);
  ellipse(x, y, diameter, diameter);
  fill(0);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}
function mousePressed() {
  if (pantalla == 0) {
    if (superficie(mouseX, mouseY, 150, 300, 120)) {
      pantalla = 1;
    } else if (superficie(mouseX, mouseY, 450, 300, 120)) {
      pantalla = 3;
    }
  } else if ( pantalla == 3 ) {
    if ( superficie ( mouseX, mouseY, 450, 300, 120)) {
      pantalla=0;
    }
  } else if (pantalla == 1) {
    if (superficie(mouseX, mouseY, 150, 300, 120)) {
      pantalla = 4;
    } else if (superficie(mouseX, mouseY, 450, 300, 120)) {
      pantalla = 5;
    }
  } else if (pantalla == 5) {
    if (superficie(mouseX, mouseY, 150, 300, 120)) {
      pantalla = 6;
    }
  } else if (pantalla == 6) {
    if (superficie(mouseX, mouseY, 150, 300, 120)) {
      pantalla = 7;
    } else if (superficie(mouseX, mouseY, 450, 300, 120)) {
      pantalla = 8;
    }
  } else if (pantalla == 8) {
    if (superficie(mouseX, mouseY, 450, 300, 120)) {
      pantalla = 9;
    }
  } else if (pantalla == 9) {
    if (superficie(mouseX, mouseY, 150, 300, 120)) {
      pantalla = 10;
    } else if (superficie(mouseX, mouseY, 450, 300, 120)) {
      pantalla = 11;
    }
  } else if (pantalla == 10) {
    if (superficie(mouseX, mouseY, 450, 300, 120)) {
      pantalla = 0;
    }
  } else if (pantalla == 11) {
    if (superficie(mouseX, mouseY, 450, 300, 120)) {
      pantalla = 0;
    }
  } else if (pantalla == 4) {
    if (superficie(mouseX, mouseY, 450, 300, 120)) {
      pantalla = 12;
    }
  } else if (pantalla == 12) {
    if (superficie(mouseX, mouseY, 150, 300, 120)) {
      pantalla = 13;
    } else if (superficie(mouseX, mouseY, 450, 300, 120)) {
      pantalla = 14;
    }
  } else if (pantalla == 14) {
    if (superficie(mouseX, mouseY, 450, 300, 120)) {
      pantalla = 15;
    }
  } else if (pantalla == 15) {
    if (superficie(mouseX, mouseY, 450, 300, 120)) {
      pantalla = 0;
    }
  } else if (pantalla == 7) {
    if (superficie(mouseX, mouseY, 450, 300, 120)) {
      pantalla = 13;
    }
  } else if (pantalla == 13) {
    if (superficie(mouseX, mouseY, 450, 300, 120)) {
      pantalla = 16;
    }
  } else if (pantalla == 16) {
    if (superficie(mouseX, mouseY, 150, 300, 120)) {
      pantalla = 17;
    } else if (superficie(mouseX, mouseY, 450, 300, 120)) {
      pantalla = 18;
    }
  } else if (pantalla == 18) {
    if (superficie(mouseX, mouseY, 450, 300, 120)) {
      pantalla = 0;
    }
  } else if (pantalla == 17) {
    if (superficie(mouseX, mouseY, 450, 300, 120)) {
      pantalla = 19;
    }
  } else if (pantalla == 19) {
    if (superficie(mouseX, mouseY, 450, 300, 120)) {
      pantalla = 20;
    }
  } else if (pantalla == 20) {
    if (superficie(mouseX, mouseY, 450, 300, 120)) {
      pantalla = 21;
    }
  } else if (pantalla == 21) {
    if (superficie(mouseX, mouseY, 150, 300, 120)) {
      pantalla = 23;
    } else if (superficie(mouseX, mouseY, 450, 300, 120)) {
      pantalla = 22;
    }
  } else if (pantalla == 22) {
    if (superficie(mouseX, mouseY, 450, 300, 120)) {
      pantalla = 0;
    }
  } else if (pantalla == 23) {
    if (superficie(mouseX, mouseY, 450, 300, 120)) {
      pantalla = 24;
    }
  } else if (pantalla == 24) {
    if (superficie(mouseX, mouseY, 450, 300, 120)) {
      pantalla = 0;
    }
  }
}
