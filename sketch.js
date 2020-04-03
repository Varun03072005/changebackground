
var r = 0;
var g = 50;
var b=255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);
}


function draw(){

  // change the value of Red based on the mouse movement about the X axis
  r = mouseX;
  r = map(r,0,1200,0,255);
  
  // change the value of Green based on the mouse movement about the X axis
  g = mouseX;
  g = map(g,0,1200,0,255);
   
  // change the value of Blue based on the mouse movement about the X axis
  b = mouseX;
  b = map(b,0,1200,0,255);

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.
  background(r,g,b);

  // Create an ellipse that will move around with you mouse about the X axis.ellipse(x,y,xradius,yradius)
  // Remember to fill the canvas with white paint before creating the ellipse.fill("white")
  fill("white");
  ellipse(mouseX,mouseY,30,30);
}