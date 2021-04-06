
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var roof;
var bob1, bob2,bob3,bob4,bob5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,90,600,50);
	
	bob1 = new Bob (200,500,50)
	bob2 = new Bob (300,500,50)
	bob3 = new Bob (400,500,50)
	bob4 = new Bob (500,500,50)
	bob5 = new Bob (600,500,50)

	rope1 = new Rope (bob1.body, {x:200,y:90})
	rope2 = new Rope (bob2.body, {x:300,y:90})
	rope3 = new Rope (bob3.body, {x:400,y:90})
	rope4 = new Rope (bob4.body, {x:500,y:90})
	rope5 = new Rope (bob5.body, {x:600,y:90})

	//Create the Bodies Here.

	
	Engine.run(engine);
	console.log(bob5.body.position.x,bob5.body.position.y)
  
}


function draw() {
  rectMode(CENTER);
  background("lightGrey");
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  
  drawSprites();
}

function keyPressed(){

	if (keyCode === UP_ARROW) 
	{ 
		Matter.Body.applyForce(bob5.body, bob5.body.position, {x:500,y:50})
}
}



