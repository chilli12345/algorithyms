var movingRect;
var fixedRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(600,200,80,100);
  fixedRect.shapeColor="green";
  movingRect=createSprite(600, 100, 50, 50);
  movingRect.shapeColor="blue";
  movingRect.velocityY=2;
}

function draw() {
  background(255,255,255);  

  
  
  if(fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&
    movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
    ){
    movingRect.velocityX=movingRect.velocityX*(-1);
  }
  else{
    movingRect.shapeColor="blue";
  }
  if(fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2&&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2){
      movingRect.velocityY=movingRect.velocityY*(-1); 
    }
  
  drawSprites();
}