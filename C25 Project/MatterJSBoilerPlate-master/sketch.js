var db,dbimg
var engine, world;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1270, 800);
	
	engine = Engine.create();
	world = engine.world;
  
  var lastmouseX = null
  var lastmouseY = null
  
	Paper = new Ball()
	db = new Dustbin()
	ground = new ground1(635,790,1270,20)
  slingShot = new launcher(Paper.body, { x: 210, y: 200 });
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
  Paper.display()
  db.display()

  drawSprites();
 
}


function mouseDragged() {
 Matter.Body.setPosition(Paper.body, {x:mouseX, y:mouseY })
}

function mouseReleased() {
slingShot.fly();
}


