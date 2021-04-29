var car,wall,thinkness;

var speed,weigth;



function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weigth=random(30,52);
  thinkness=random(22,83);
  car = createSprite(50,200,50,5);
  car.velocityX = speed;
  car.shapeColor=color("white");

  wall = createSprite(1200,200,thinkness,height/2);
  wall.shapeColor=color(255);
}

function draw() {
  background(0); 
if (car.collide(wall)) {
   car.velocityX=0;
   damage=0.5 * weigth * speed* speed/(thinkness *thinkness *thinkness);

   if (damage>10) {
      wall.shapeColor=("green");
   }

   if (damage<10) {
      wall.shapeColor=("red");
   }
}
  drawSprites();
}