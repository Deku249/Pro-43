function setup() 
{
  createCanvas(400,400);
}

function draw() 
{
  background(55,55,55); 

  hr = hour();
  min = minute();
  sec = second();
  
  angleMode(DEGREES);

  secAngle = map(sec,0,60,0,360)
  minAngle = map(min,0,60,0,360)
  hrAngle = map(hr,0,60,0,360)

  push();
  rotate(secAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(200,200,300,200)
  pop();

  push();
  rotate(minAngle)
  stroke(0,255,0)
  strokeWeight(7)
  line(200,200,320,200)
  pop();

  push();
  rotate(hrAngle)
  stroke(0,0,255)
  strokeWeight(7)
  line(200,200,290,200)
  pop();

  drawSprites();
}