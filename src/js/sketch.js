var number = 5000;                              // number of shapes to draw
var size = 50;                                 // size of each shape
var stepSize = 1;                               // size of each step
var opacity = 25;                               // color opacity [0-255]
var animate = true;                            // control animation [true or false]
var time = 0;
var spiralcolors = [[], [], []];

function setup() {
  createCanvas(750, 750);                       // create a 750 x 750 canvas
  noStroke();                                   // disables drawing an outline
  for (i = 0; i < number; i++) {
      spiralcolors[0].push(random(0, 255));
      spiralcolors[1].push(random(0, 255));
      spiralcolors[2].push(random(0, 255));
  }

  console.log(spiralcolors);
}

function draw() {
  background(0);                                // draw black background
                       // set color to white
  translate(mouseX, mouseY)              // move center to middle of canvas
  if (animate) number = frameCount;             // controls animation

  var goldenAngle = PI * (3.0 - sqrt(5));       // https://en.wikipedia.org/wiki/Golden_angle
  rectMode(CENTER);
  rotate(time);
  for (var i = 0; i < number; i++) {
    fill(spiralcolors[0][i], spiralcolors[1][i], spiralcolors[2][i], opacity);      
    translate(0, i * stepSize);                 // take step forward
    rotate(goldenAngle);                        // rotate by the golden angle

    /////////////////////
    // Draw the shape! //
    /////////////////////
    triangle(-size, 0, 0, size, size, 0);       // draw a triangle
    //ellipse(0, 0, size);						// draw an ellipse (circle)
    //rect(0, 0, size, size); 					// draw a rectangle
  }
  time += 0.001;                                
}

function mousePressed() {
    alert();
}