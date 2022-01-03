var ship ,shipanimation;
var sea ,seaImage

function preload(){
 shipanimation = loadAnimation("ship-1.png " ,"ship-2.png " ,"ship-3.png " ,"ship-4.png");

seaImage = loadImage("sea.png");
}

function setup(){
 createCanvas(400,400);

 sea = createSprite(200,150,400,150);
 sea.addImage(seaImage);
 sea.scale = 0.5;

 ship = createSprite(200,200,50,50);
 ship.addAnimation("barco" ,shipanimation);
 ship.scale = 0.4;
}

function draw() {
  background("blue");
    drawSprites();
}
