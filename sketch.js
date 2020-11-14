var bullet;
var wall;
var damage;
var speed;
var weight;
var gameState;
var thickness;

function setup() {
  createCanvas(800,400);

bullet = createSprite(100,200,30,10);
//bullet.velocityX = 2;

wall = createSprite(700,200,30,100);
wall.shapeColor = color(80,80,80)

gameState = "stand";

speed = random(223,321);
//speed = 223;
weight = random(30,52);
//weight = 30; 

 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(0,0,0);  

if(keyDown("space")){
  
  thickness = random(22,83)
  //thickness = 100

  wall.width = thickness
  
gameState = "run";

}

if(gameState === "run"){

damage = 0.5 * weight * speed * speed / wall.width * wall.width * wall.width;
 bullet.velocityX = speed/10;

if ( bullet.width / 2 + wall.width / 2 > bullet.x - wall.x
&& bullet.width / 2 + wall.width / 2 > wall.x - bullet.x){

 bullet.velocityX = 0;

 // damage = 6

if(damage<10){
 wall.shapeColor = color(0,255,0);

}

if(damage>10){
 wall.shapeColor = color(255,0,0);

} 
}

}

  drawSprites();
}