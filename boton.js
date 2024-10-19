function botonRectangular(texto, x, y, ancho, alto) {
  // Verificar si el mouse está sobre el botón
  if (superficie(mouseX, mouseY, x, y, ancho, alto)) {
    fill(173, 216, 230); // Color celeste cuando el mouse está sobre el botón
  } else {
    fill(255); // Color blanco por defecto
  }

  // Dibujar el botón
  rect(x, y, ancho, alto);
  
  // Cambiar el color del texto
  if (superficie(mouseX, mouseY, x, y, ancho, alto)) {
    fill( 0); // Texto en negro
  } else {
    fill(0); // Texto en negro siempre
  }
  
  // Dibujar el texto centrado
  textAlign(CENTER, CENTER);
  text(texto, x + ancho / 2, y + alto / 2);
}
function superficie(mx, my, x, y, ancho, alto) {
  return mx > x && mx < x + ancho && my > y && my < y + alto;
}
