
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof , rope1,rope2,rope3,rope4,rope5;
var bob1, bob2, bob3, bob4, bob5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(350,50,500,60);
	bob1 = new Bob(200,200,50);
	bob2 = new Bob(250,200,50);
	bob3 = new Bob(300,200,50);
	bob4 = new Bob(350,200,50);
	bob5 = new Bob(400,200,50);
	rope1 = new Rope(bob1.body , roof.body , 200,50);
	rope2 = new Rope(bob2.body , roof.body , 250,50);
	rope3 = new Rope(bob3.body , roof.body , 300,50);
	rope4 = new Rope(bob4.body , roof.body , 350,50);
	rope5 = new Rope(bob5.body , roof.body , 400,50);
	

	Engine.run(engine);
  
}


function draw() {
  
  background("white");
  
 roof.display();
 
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 rope1.display(); 
 rope2.display(); 
 rope3.display(); 
 rope4.display(); 
 rope5.display(); 
}



