// Función para crear botones rectangulares
function botonRectangular(texto, x, y, ancho, alto) {
  rect(x, y, ancho, alto);
  textAlign(CENTER, CENTER);
  text(texto, x + ancho / 2, y + alto / 2);
}

// Función para verificar si el mouse está sobre un botón
function superficie(mx, my, x, y, ancho, alto) {
  return mx > x && mx < x + ancho && my > y && my < y + alto;
}
