
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//function preload()
//{
	
//}

function setup() {
	createCanvas(1600/2, 700);
    //console.log("test")

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper();
	ground = new Ground(400,height,800,20);
	log1 = new logDust(700,630,20,100);
	log2 = new logDust(500,630,20,100);
	log3 = new logDust(600,680,220,20);

	//Engine.run(engine);
  
}


function draw() {
	
	Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  
  ball.display();
 ground.display();
 log1.display();
 log2.display();
 log3.display();
 
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		console.log("hi");
		Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:-50})
	   
	 }
   }


