function setup() {
  createCanvas(800,800);
  a=createSprite(400, 100, 50, 50);
  b=createSprite(400, 400, 100, 50);
  a.velocityY=5
  b.velocityY=-5
  a.debug=true
  b.debug=true

}

function draw() {
  background(255,255,255);  
  if(b.x-a.x<a.width/2+b.width/2&&a.x-b.x<a.width/2+b.width/2){
 a.velocityX=a.velocityX*(-1)
  b.velocityX=b.velocityX*(-1)
  }
 if(b.y-a.y<a.height/2+b.height/2&&a.y-b.y<a.height/2+b.height/2){
  a.velocityY=a.velocityY*(-1)
  b.velocityY=b.velocityY*(-1)
 }
  drawSprites();
}