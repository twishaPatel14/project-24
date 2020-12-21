
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,dustbinobj,paperobject,groundobject
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	

  dustbinObj=new dustbin(1200,650);
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);
  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  rectMode(CENTER);
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
    drawSprites();
 
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyforce(paper.body,paper.body.position,{x:85,y:-85});
	}
}


