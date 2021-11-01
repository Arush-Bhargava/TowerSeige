const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var stand, stand1;
var box1, box2, box3, box4, box5;
var box6, box7, box8, box9;
var box10, box11, box12;
var box13, box14;
var box15;

var bux1, bux2, bux3, bux4, bux5;
var bux6, bux7, bux8;
var bux9;

var polygone;

var sling;

function setup() {
  createCanvas(1200, 600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width / 2, 590, width, 20);
  stand = new Ground(475, 400, 280, 10);
  stand1 = new Ground(890, 300, 220, 10);

  box1 = new Box(380, 394, 40, 40);
  box2 = new Box(425, 394, 40, 40);
  box3 = new Box(470, 394, 40, 40);
  box4 = new Box(515, 394, 40, 40);
  box5 = new Box(560, 394, 40, 40);

  box6 = new Box(402.5, 364, 40, 40);
  box7 = new Box(447.5, 364, 40, 40);
  box8 = new Box(492.5, 364, 40, 40);
  box9 = new Box(537.5, 364, 40, 40);

  box10 = new Box(425, 334, 40, 40);
  box11 = new Box(470, 334, 40, 40);
  box12 = new Box(515, 334, 40, 40);

  box13 = new Box(447.5, 304, 40, 40);
  box14 = new Box(492.5, 304, 40, 40);

  box15 = new Box(470, 274, 40, 40);

  bux1 = new Box(820, 294, 30, 40);
  bux2 = new Box(855, 294, 30, 40);
  bux3 = new Box(890, 294, 30, 40);
  bux4 = new Box(925, 294, 30, 40);
  bux5 = new Box(960, 294, 30, 40);

  bux6 = new Box(855, 264, 30, 40);
  bux7 = new Box(890, 264, 30, 40);
  bux8 = new Box(925, 264, 30, 40);

  bux9 = new Box(890, 234, 30, 40);

  polygone = new Polygon(200, 200, 50, 50);

  sling = new slingShot(polygone.body, { x: 200, y: 200 });
}

function draw() {
  Engine.update(engine);

  background("lightblue");
  drawSprites();

  ground.display();
  stand.display();
  stand1.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  box6.display();
  box7.display();
  box8.display();
  box9.display();

  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();

  box15.display();

  bux1.display();
  bux2.display();
  bux3.display();
  bux4.display();
  bux5.display();

  bux6.display();
  bux7.display();
  bux8.display();

  bux9.display();

  polygone.display();
  sling.display();
}

function mouseDragged() {
  Matter.Body.setPosition(polygone.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
    polygone.trajactory = []
      sling.attach(polygone.body);
  }
}