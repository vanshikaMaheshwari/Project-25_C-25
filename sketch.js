const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
  DustbinImage = loadImage("DustbinImg.png");
}

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	PAPER = new Paper(100,250,70,70);
	//fill(220, 45, 225);
	//stroke(220, 45, 225);
	GROUND = new Ground(400,550,790,10);
	WALL_LEFT = new Ground(453,440,15,200);
	WALL_RIGHT = new Ground(647,440,15,200);
  WALL_BOTTOM = new Ground(550,537,190,15);
	Engine.run(engine);
  
}


function draw() {
  background(249, 231, 30);
  
  Engine.update(engine);
  fill(232, 80, 236);
  stroke(232, 80, 236);
  GROUND.display();
  fill(80, 225, 238);
  stroke(80, 225, 238);
  WALL_LEFT.display();
  WALL_RIGHT.display();
  WALL_BOTTOM.display();
  imageMode(CENTER);
  image(DustbinImage,551,430,200,213);
  PAPER.display();
  fill(225, 27, 126);
  stroke(225, 27, 126);
  textSize(80);
  text("CRUMPLED BALLS",40,100);
  textSize(30);
  text("Press Right Arrow to move the",70,150);
  text("CRUSHED PAPER",490,150);
  text("and throw in the DUSTBIN",210,210);
}


function keyPressed() {
	if (keyCode === RIGHT_ARROW) {
	  Body.applyForce(PAPER.body,PAPER.body.position,{x:100,y:-105});  
	}
}
