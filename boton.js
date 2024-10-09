function Botoncircular(label, x, y, diam) {
  push();
  translate(x, y);
  fill('#894444'); // Cambié el color a formato hexadecimal
  noStroke();
  ellipse(0, 0, diam, diam);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(20);
  text(label, 0, 0);
  pop();
}

function superficie(x, y, xSup, ySup, rSup) {
  let distancia = dist(x, y, xSup, ySup);
  return distancia < rSup; // Devuelve true o false directamente
}
