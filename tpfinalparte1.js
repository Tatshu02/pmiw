//definitivo
//https://youtu.be/x7xkcwliD1g?si=KG4W3qThiOoP-x88
let pantalla = 1;
let textos = [];
let fondos = [];
let sonido;
function preload() {
  sonido = loadSound('libraries/miSonido.mp3');
  for (let i = 1; i <= 23; i++) {
    let extension = (i === 1) ? 'jpg' : 'jpeg';
    fondos[i] = loadImage(`libraries/pantalla${i}.${extension}`);
  }
 

}

function setup() {
  createCanvas(640, 480);
  textos = loadStrings("libraries/textos.txt");
  console.log( textos );
  
}

function draw() {
  background(25);  
  transicion();  
}

function transicion() {
  if (pantalla === 1) {
    mostrarpantalla(1, textos);
    botonRectangular("Inicio", 80, 400, 200, 60);  
    botonRectangular("Crédito", 350, 400, 200, 60);
  }
  else if (pantalla === 3) { 
    mostrarpantalla(3, textos);  //credito
    botonRectangular("inicio", 350, 400, 200, 60);
  }
    else if (pantalla === 2) { //escucha ruido
    mostrarpantalla(2, textos);
    botonRectangular("camara", 80, 400, 200, 60);  //camara
    botonRectangular("pasillo", 350, 400, 200, 60);//pasillo
  }
    else if (pantalla === 4) {//camara se ve un animatronico
    mostrarpantalla(4, textos);
    botonRectangular("seguir", 350, 400, 200, 60);
  }
  else if (pantalla === 5) {//pasillo
    mostrarpantalla(5, textos);
    botonRectangular("seguir", 350, 400, 200, 60);//siguiente
  }
   else if (pantalla === 6) {//se escucha ruido
    mostrarpantalla(6, textos);
         botonRectangular("volver", 80, 400, 200, 60);//volver  
    botonRectangular("seguir", 350, 400, 200, 60);//seguir
  }
   else if (pantalla === 7) {//vuelve a la cabina de seguridad
    mostrarpantalla(7, textos); 
    botonRectangular("seguir", 350, 400, 200, 60);
  }
   else if (pantalla === 8) {//decide seguir mike se encuentra con dos puertas
    mostrarpantalla(8, textos);
    botonRectangular("seguir", 350, 400, 200, 60); //seguir
  }
     else if (pantalla === 9) {//rapido se escucha ruido elige alguna
    mostrarpantalla(9, textos);
         botonRectangular("izquierda", 80, 400, 200, 60);  //izquierda 
    botonRectangular("derecha", 350, 400, 200, 60);// derecha
  }
   else if (pantalla === 10) { //izquierda final bueno
    mostrarpantalla(10, textos);
    botonRectangular("volver", 350, 400, 200, 60);//inicio
  }
    else if (pantalla === 11) {//derecha final malo
    mostrarpantalla(11, textos);
    botonRectangular("volver", 350, 400, 200, 60);
  }
    else if (pantalla === 12) {// el animatronico esta corriendo hacia la cabina 
    mostrarpantalla(12, textos);
         botonRectangular("cerrar la puerta", 80, 400, 200, 60);  //cerra la puerta
    botonRectangular("esconderse", 350, 400, 200, 60);//esconderse
  }
  else if (pantalla === 13) {//decide cerrar la puerta
    mostrarpantalla(13, textos);
    botonRectangular("seguir", 350, 400, 200, 60);//siguiente
  }
   else if (pantalla === 14) {//se esconde debajo de la mesa
    mostrarpantalla(14, textos);
    botonRectangular("seguir", 350, 400, 200, 60); //siguiente
  }
   else if (pantalla === 15) {//freddy entra y se come a mie
    mostrarpantalla(15, textos); 
    botonRectangular("volver", 350, 400, 200, 60);//inicio
  }
   else if (pantalla === 16) { //entra al aire 
    mostrarpantalla(16, "");  
   botonRectangular("izquierda", 80, 400, 200, 60); //izquierda
    botonRectangular("derecha", 350, 400, 200, 60); //derecha
  }
     else if (pantalla === 17) {//elige la izquierda
    mostrarpantalla(17, textos);
    botonRectangular("volver", 350, 400, 200, 60); //inicio
  }
  else if (pantalla === 18) {//decide la derecha y sale al comedor
    mostrarpantalla(18, textos);
    botonRectangular("seguir", 350, 400, 200, 60);// seguir
  }
   else if (pantalla === 19) {//decide la izquierda  y sale en el comedor
    mostrarpantalla(19, textos);
    botonRectangular("seguir", 350, 400, 200, 60);//siguiente
  }
   else if (pantalla === 20) {//va al la cocina en busca de una arma
    mostrarpantalla(20, textos);
     botonRectangular("otra salida", 80, 400, 200, 60);//buscar otra salida 
    botonRectangular("prender fuego", 350, 400, 200, 60);//prender fuego
  }
   else if (pantalla === 21) { //mike encuntra un arma prender fuego?
    mostrarpantalla(21, textos);
    botonRectangular("seguir", 350, 400, 200, 60);//mike decide buscar otra salida
  }
     else if (pantalla === 22) {//opcion buscar otra salida foxxi se come a mike
    mostrarpantalla(22, textos);
    botonRectangular("seguir", 350, 400, 200, 60);//inicio
  }
   else if (pantalla === 23) {//mike prende fuego la pizzeria
    mostrarpantalla(23, textos); 
    botonRectangular("volver", 350, 400, 200, 60);//isguiente
  }
  
}

function mostrarpantalla(pantalla, texto) {
  image(fondos[pantalla], 0, 0, width, height);  
  textAlign(CENTER);
  textSize(20);
 fill (250); 
 
    text(textos[pantalla - 1], 0, 100, width, height);
}



function mousePressed() {
 
  if (pantalla === 1) {
    if (superficie(mouseX, mouseY, 80, 400, 200, 60)) {
      pantalla = 2;
      sonido.play();
    } else if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 3;
    }
  } else if ( pantalla === 3 ) {
    if ( superficie ( mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla=1;
    }
  } else if (pantalla === 2) {
    if (superficie(mouseX, mouseY, 80, 400, 200, 60)) {
      pantalla = 4;
    } else if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 5;
    }
  } else if (pantalla === 5) {
    if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 6;
    }
  } else if (pantalla === 6) {
    if (superficie(mouseX, mouseY, 80, 400, 200, 60)) {
      pantalla = 7;
    } else if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 8;
    }
  } else if (pantalla === 8) {
    if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 9;
    }
  } else if (pantalla === 9) {
    if (superficie(mouseX, mouseY, 80, 400, 200, 60)) {
      pantalla = 10;
    } else if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 11;
    }
  } else if (pantalla === 10) {
    if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 1;
    }
  } else if (pantalla === 11) {
    if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 1;
    }
  } else if (pantalla === 4) {
    if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 12;
    }
  } else if (pantalla === 12) {
    if (superficie(mouseX, mouseY, 80, 400, 200, 60)) {
      pantalla = 13;
    } else if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 14;
    }
  } else if (pantalla === 14) {
    if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 15;
    }
  } else if (pantalla === 15) {
    if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 1;
    }
  } else if (pantalla === 7) {
    if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 13;
    }
  } else if (pantalla === 13) {
    if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 16;
    }
  } else if (pantalla === 16) {
    if (superficie(mouseX, mouseY, 80, 400, 200, 60)) {
      pantalla = 17;
    } else if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 18;
    }
  
  } else if (pantalla === 18) {
    if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 19;
    }
  } else if (pantalla === 17) {
    if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 1;
    }
  
  } else if (pantalla === 19) {
    if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 20;
    }
  } else if (pantalla === 20) {
    if (superficie(mouseX, mouseY, 80, 400, 200, 60)) {
      pantalla = 21;
    }
    else if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 22;
    }
  } else if (pantalla === 21) {
     if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 1;
    }
  } else if (pantalla === 22) {
    if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 23;
    }
  } else if (pantalla === 23) {
    if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 1;
    }
  } 


 
}
