function setup() {
  createCanvas(930,650);
  background ("rgb(149,240,221)");
}


function draw() {
  strokeWeight(4);
  fill("yellow");
  
  if(mouseIsPressed) {
    circle (mouseX, mouseY, 20, 35);
  }
}

  
  
