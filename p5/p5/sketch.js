
// for red, green, and blue color values
let r, g, b;
let r1,g1,b1;

function setup() {
  createCanvas(1450,900);
  // Pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);

  r1= random(255);
  g1 = random(255);
  b1 = random(255);
}

function draw() {
  background(127);
  // Draw a circle
  strokeWeight(2);
  noStroke();
  fill(r, g, b, 255);
  ellipse(360, 200, 200, 200);
}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 360, 200);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);

    r1 = random(255);
    g1 = random(255);
    b1 = random(255);
  }
}
