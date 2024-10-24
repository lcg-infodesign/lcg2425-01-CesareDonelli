// Vera Molnar - 25 Carrés
let squareSize; // variabile dimensione del quadrato
let margin = 25; // bordo bianco attorno alla pagina

function setup() {
  createCanvas(windowWidth, windowHeight); // adattamento alla grandezza della finestra
  noLoop(); // disegna una volta sola
  calculateSquareSize(); // calcola dimensione quadrati
}

function draw() {
  background(255); // sfondo bianco

  // calcolo del numero di colonne e righe tenendo conto del bordo
  let cols = floor((width - 2 * margin) / squareSize);
  let rows = floor((height - 2 * margin) / squareSize);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      // genera uno spostamento casuale per ogni quadrato
      let xOffset = random(-squareSize / 4, squareSize / 4); // Spostamento casuale X
      let yOffset = random(-squareSize / 4, squareSize / 4); // Spostamento casuale Y

      // posizione X e Y con spostamento, aggiungendo il bordo (margin)
      let x = i * squareSize + margin + xOffset;
      let y = j * squareSize + margin + yOffset;

      // disegno il quadrato con trasparenza
      fill(0, 0, 0, 235); // Nero con trasparenza (alpha = 150)
      noStroke();
      rect(x, y, squareSize, squareSize); // disegno quadrato
    }
  }
}

function calculateSquareSize() {
  // calcola la dimensione del quadrato in modo che riempia uniformemente la pagina, considerando il margine
  squareSize = min((windowWidth - 2 * margin) / 10, (windowHeight - 2 * margin) / 10);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // ridimensiona la canvas quando cambia la finestra
  calculateSquareSize(); // ricalcola la dimensione del quadrato
  redraw(); // ridisegna i quadrati con nuove dimensioni
}

function mousePressed() {
  redraw(); // ridisegna quando si clicca con il mouse
}
