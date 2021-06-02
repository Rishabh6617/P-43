var player,playerImg;
var zombieImg,enemyGroup;
var bullet,bulletImg,bulletGroup;
function preload(){
  playerImg=loadImage("Rishabh-removebg-preview.png");
  zombieImg=loadImage("Zombie-removebg-preview.png");
  bulletImg=loadImage("bullet-gun-bullet-pointed-images-3.png");
}
function setup(){
  createCanvas(windowWidth,windowHeight);
  player=createSprite(200,500,50,50);
  player.addImage(playerImg);
  player.scale=0.3;
}
function draw(){
  background(255);
  if(keyDown(UP_ARROW)){
    player.y=player.y-10;
  }
  if(keyDown(DOWN_ARROW)){
    player.y=player.y+10;
  }
  if(keyDown("SPACE")){
    bullet=createSprite(windowWidth-1150,player.y-30,20,20);
    bullet.addImage(bulletImg);
    bullet.scale=0.1;
    bullet.velocityX=20;
  }
    villain();
  drawSprites();
}
function villain(){
  if(frameCount%200===0){
     enemy = createSprite(random(500,1100),random(100,500),40,40);
     enemy.addImage(zombieImg)
     enemy.velocityX=-3;
     enemy.scale=0.3;
  }
}