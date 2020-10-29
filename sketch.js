var movingRect;
var rect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 30, 80);
  movingRect.shapeColor = "yellow";
  rect = createSprite(200,100,80,30);
  rect.shapeColor = "red";

  movingRect.debug = true;
  rect.debug = true;
}

function draw() {
  background("green");

movingRect.x = mouseX;
movingRect.y = mouseY;
isTouching();


  drawSprites();
}
function isTouching(){
  if(movingRect.x-rect.x < (movingRect.width + rect.width)/2  &&  -movingRect.x+rect.x < (movingRect.width + rect.width)/2
  && movingRect.y-rect.y < (movingRect.height + rect.height)/2  &&  -movingRect.y+rect.y < (movingRect.height + rect.height)/2
){
 movingRect.shapeColor = "blue";
 rect.shapeColor = "blue";
}
else{
 movingRect.shapeColor = "yellow";
 rect.shapeColor = "red";
}
}