//copia
 let pantalla = 0; 
let textos = [];
let fondos = [];


// Cargar las imágenes y otros recursos
function preload() {
  for (let i = 1; i <= 17; i++) {
    let extension = (i === 1) ? 'jpg' : 'jpeg'; 
    fondos[i] = loadImage(`libraries/pantalla${i}.${extension}`);
  }
}
// Configurar el canvas y las pantallas
function setup() {
  createCanvas(640, 480);
    // Configurar los textos
    
  textos[1] = "pantalla 1.";
  textos[2] = "Se escuchan ruidos fuera de la sala de seguridad.";
  textos[3] = "Mike sale al pasillo a revisar.";
  textos[4] = "Mike descubre que en el pasillo hay un animatrónico.";
  textos[5] = "Mike descubre que en el pasillo hay un animatrónico.";
  textos[6]= "Mike se encuentra con dos puertas de lados opuestos";
  textos[7]= "Mike queda a salvo por un tiempo";
  textos[8]= "Mike se encuentra con dos puertas de lados opuestos";
  textos[10]= "Se escuchan ruidos más fuertes. Rápido, entra en alguna";
  textos[11]= "Final bueno: Mike sale de la pizzería";
  textos[12]= "Final malo: Chica se encuentra dentro de la derecha y mata a Mike";
  textos[13]= "Mike ve un animatrónico mirando a la cámara con ojos rojos";
  textos[14]= "El animatrónico está corriendo hacia la cabina de seguridad";
  textos[15]= "Mike rápidamente destapa y entra al conducto de ventilación";
  textos[16]= "Mike decide esconderse debajo del escritorio";
  textos[17]= "Final malo: Freddy entra a la sala de seguridad y mata a Mike";
  textos[18]= "Mike se encuentra con dos salidas de lados opuestos";
  textos[19]= "Final bueno: Mike sale de la pizzería";
  textos[20]= "Mike se encuentra con el comedor";
  textos[21]= "Mike se dirige a la cocina en busca de algún arma";
  textos[22]= "Mike encuentra un encendedor";
  textos[23]= "El humo ahuyenta a los animatrónicos y sale por la ventana";
  textos[24]= "Final bueno: Mike sale con quemaduras leves y denuncia a William Afton por daños";
  textos[25]= "Final malo: Bonny entra en la cocina y mata a Mike";
  textos[26]= "Se escuchan ruidos afuera";
}
/*for (let i = 0; i <= textosCargados.length; i++) {
    textos[i] = textosCargados[i + 1]; // Los índices de textos[] empiezan en 1, pero textosCargados[] en 0
  }*/

function draw() {
  mostrarPantalla(pantalla); // Mostrar la pantalla actual
}

// Función para mostrar la pantalla actual
function mostrarPantalla(pantalla) {
  
 //pantalla 0 inicio
  if (pantalla == 0) {
    //background(0);
    image(fondos[1], 0, 0, width, height);
     botonRectangular("Comienzo", 150, 400, 200, 60);
     botonRectangular("creditos", 450, 400, 200, 60);
  }
  //pantalla 1 contratan a mike y escucha ruidos
  else if (pantalla == 1) {
   image(fondos[2], 0, 0, width, height);
    //   image(fondos[1], 0, 0, width, height);
    mostrarTexto(textos[2], 30);
     botonRectangular("camara", 150, 400, 200, 60);
   botonRectangular("pasillo", 450, 400, 200, 60);
  }
  //pantalla 3 credito
  else if (pantalla == 3) {
    background(243);

    // image(fondos[19], 0, 0, width, height);
   botonRectangular("inicio", 450, 400, 200, 60);
  }
  //pantalla 4 mike decide mirar las camaras
  else if (pantalla == 4) {
     image(fondos[3], 0, 0, width, height);
    mostrarTexto(textos[13], 30);
    botonRectangular("seguir", 450, 400, 200, 60);
  }
  //pantalla 5 mike decide salir al pasillo
  else if (pantalla == 5) {
     image(fondos[4], 0, 0, width, height);
    mostrarTexto(textos[3], 30);
     botonRectangular("seguir", 450, 400, 200, 60);
  }
  //pantalla 6 mike escucha un ruido fuerte a la cercania
  else if (pantalla == 6) {
  image(fondos[4], 0, 0, width, height);
    mostrarTexto(textos[5], 30);
     botonRectangular("volver", 150, 400, 200, 60);
    botonRectangular("seguir", 450, 400, 200, 60);
  }
  //pantalla 7 mike descubre 2 puertas
  else if (pantalla == 7) {
   image(fondos[5], 0, 0, width, height);
    mostrarTexto(textos[7], 30);
    botonRectangular("seguir", 450, 400, 200, 60);
  } else if (pantalla == 8) {
   image(fondos[7], 0, 0, width, height);
    mostrarTexto(textos[8], 30);
    botonRectangular("seguir", 450, 400, 200, 60);
  }
  //pantalla 7 mike entra a la puerta derecha
  else if (pantalla == 9) {
   image(fondos[7], 0, 0, width, height);
    mostrarTexto(textos[10], 30);
   botonRectangular("izquierda", 150, 400, 200, 60);
    botonRectangular("derecha", 450, 400, 200, 60);
  } else if (pantalla == 10) {
    image(fondos[8], 0, 0, width, height);
    mostrarTexto(textos[11], 30);
    botonRectangular("inicio", 450, 400, 200, 60);
  } else if (pantalla == 11) {
      image(fondos[8], 0, 0, width, height);
    mostrarTexto(textos[12], 30);
    botonRectangular("inicio", 450, 400, 200, 60);
  }
  /////////////////////////////////////////////////////////////
  else if (pantalla == 12) {
  image(fondos[3], 0, 0, width, height);
    mostrarTexto(textos[14], 30);
 botonRectangular("cerrar la puerta", 150, 400, 200, 60);
    botonRectangular("esconderse", 450, 400, 200, 60);
  } else if (pantalla == 13) {
      image(fondos[10], 0, 0, width, height);
    mostrarTexto(textos[15], 30);

     botonRectangular("seguir", 450, 400, 200, 60);
  } else if (pantalla == 16) {
      image(fondos[11], 0, 0, width, height);
    mostrarTexto(textos[18], 30);
    botonRectangular("izquierda", 150, 400, 200, 60);
    botonRectangular("derecha", 450, 400, 200, 60);
  } else if (pantalla == 17) {
   image(fondos[12], 0, 0, width, height);
    mostrarTexto(textos[20], 30);

    botonRectangular("seguir", 450, 400, 200, 60);
  } else if (pantalla == 19) {
  image(fondos[13], 0, 0, width, height);
    mostrarTexto(textos[21], 30);

    botonRectangular("seguir", 450, 400, 200, 60);
  } else if (pantalla == 20) {
      image(fondos[14], 0, 0, width, height);
    mostrarTexto(textos[22], 30);

     botonRectangular("seguir", 450, 400, 200, 60);
  } else if (pantalla == 21) {
     image(fondos[14], 0, 0, width, height);
    mostrarTexto(textos[26], 30);
     botonRectangular("empezar un incendio", 150, 400, 200, 60);
     botonRectangular("buscar otra salida", 450, 400, 200, 60);
  } else if (pantalla == 22) {
     image(fondos[15], 0, 0, width, height);
    mostrarTexto(textos[25], 30);

    botonRectangular("inicio", 450, 400, 200, 60);
  } else if (pantalla == 23) {
     image(fondos[16], 0, 0, width, height);
    mostrarTexto(textos[23], 30);

     botonRectangular("seguir", 450, 400, 200, 60);
  } else if (pantalla == 24) {
    image(fondos[17], 0, 0, width, height);
    mostrarTexto(textos[24], 30);

    botonRectangular("inicio", 450, 400, 200, 60);
  } else if (pantalla == 18) {
    image(fondos[9], 0, 0, width, height);
    mostrarTexto(textos[19], 30);

     botonRectangular("inicio", 450, 400, 200, 60);
  }
  /////////////////////////////////////////////////////////////
  else if (pantalla == 14) {
      image(fondos[5], 0, 0, width, height);
    mostrarTexto(textos[16], 30);
     botonRectangular("seguir", 450, 400, 200, 60);
  } else if (pantalla == 15) {
     image(fondos[6], 0, 0, width, height);
    mostrarTexto(textos[17], 30);
    botonRectangular("inicio", 450, 400, 200, 60);
  }
}

function mostrarTexto(texto, tamano) {
  textSize(tamano);
  textAlign(CENTER);
  text(texto, 0, 100, width, height);
}

// Función para crear botones rectangulares




// Función para manejar eventos de clic del mouse
function mousePressed() {
  if (pantalla == 0) {
    if (superficie(mouseX, mouseY, 150, 400, 200, 60)) {
      pantalla = 1;
    } else if (superficie(mouseX, mouseY, 450, 400, 200, 60)) {
      pantalla = 3;
    }
  } else if ( pantalla == 3 ) {
    if ( superficie ( mouseX, mouseY, 450, 400, 200, 60)) {
      pantalla=0;
    }
  } else if (pantalla == 1) {
    if (superficie(mouseX, mouseY, 150, 400, 200, 60)) {
      pantalla = 4;
    } else if (superficie(mouseX, mouseY, 450, 400, 200, 60)) {
      pantalla = 5;
    }
  } else if (pantalla == 5) {
    if (superficie(mouseX, mouseY, 450, 400, 200, 60)) {
      pantalla = 6;
    }
  } else if (pantalla == 6) {
    if (superficie(mouseX, mouseY, 150, 400, 200, 60)) {
      pantalla = 7;
    } else if (superficie(mouseX, mouseY, 450, 400, 200, 60)) {
      pantalla = 8;
    }
  } else if (pantalla == 8) {
    if (superficie(mouseX, mouseY, 450, 400, 200, 60)) {
      pantalla = 9;
    }
  } else if (pantalla == 9) {
    if (superficie(mouseX, mouseY, 150, 400, 200, 60)) {
      pantalla = 10;
    } else if (superficie(mouseX, mouseY, 450, 400, 200, 60)) {
      pantalla = 11;
    }
  } else if (pantalla == 10) {
    if (superficie(mouseX, mouseY, 450, 400, 200, 60)) {
      pantalla = 0;
    }
  } else if (pantalla == 11) {
    if (superficie(mouseX, mouseY, 450, 400, 200, 60)) {
      pantalla = 0;
    }
  } else if (pantalla == 4) {
    if (superficie(mouseX, mouseY, 450, 400, 200, 60)) {
      pantalla = 12;
    }
  } else if (pantalla == 12) {
    if (superficie(mouseX, mouseY, 150, 400, 200, 60)) {
      pantalla = 13;
    } else if (superficie(mouseX, mouseY, 450, 400, 200, 60)) {
      pantalla = 14;
    }
  } else if (pantalla == 14) {
    if (superficie(mouseX, mouseY, 450, 400, 200, 60)) {
      pantalla = 15;
    }
  } else if (pantalla == 15) {
    if (superficie(mouseX, mouseY, 450, 400, 200, 60)) {
      pantalla = 0;
    }
  } else if (pantalla == 7) {
    if (superficie(mouseX, mouseY, 450, 400, 200, 60)) {
      pantalla = 13;
    }
  } else if (pantalla == 13) {
    if (superficie(mouseX, mouseY, 450, 400, 200, 60)) {
      pantalla = 16;
    }
  } else if (pantalla == 16) {
    if (superficie(mouseX, mouseY, 150, 400, 200, 60)) {
      pantalla = 17;
    } else if (superficie(mouseX, mouseY, 450, 400, 200, 60)) {
      pantalla = 18;
    }
  } else if (pantalla == 18) {
    if (superficie(mouseX, mouseY, 450, 400, 200, 60)) {
      pantalla = 0;
    }
  } else if (pantalla == 17) {
    if (superficie(mouseX, mouseY, 450, 400, 200, 60)) {
      pantalla = 19;
    }
  } else if (pantalla == 19) {
    if (superficie(mouseX, mouseY, 450, 400, 200, 60)) {
      pantalla = 20;
    }
  } else if (pantalla == 20) {
    if (superficie(mouseX, mouseY, 450, 400, 200, 60)) {
      pantalla = 21;
    }
  } else if (pantalla == 21) {
    if (superficie(mouseX, mouseY, 150, 400, 200, 60)) {
      pantalla = 23;
    } else if (superficie(mouseX, mouseY, 450, 400, 200, 60)) {
      pantalla = 22;
    }
  } else if (pantalla == 22) {
    if (superficie(mouseX, mouseY, 450, 400, 200, 60)) {
      pantalla = 0;
    }
  } else if (pantalla == 23) {
    if (superficie(mouseX, mouseY, 450, 400, 200, 60)) {
      pantalla = 24;
    }
  } else if (pantalla == 24) {
    if (superficie(mouseX, mouseY, 450, 400, 200, 60)) {
      pantalla = 0;
    }
  }
}
