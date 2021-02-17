var side1,side2,side3;
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	side1=createSprite(390,655,120,10);
	side1.shapeColor=("red");
	
	side2=createSprite(335,625,10,90);
	side2.shapeColor=("red");

	side3=createSprite(450,625,10,90);
	side3.shapeColor=("red");

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
    
     side1 = Bodies.rectangle(width/2, 250, width, 10 , {isStatic:true});
	World.add(world,side1);
	
	side2 = Bodies.rectangle(width/2, 320, width, 10 , {isStatic:true})
	World.add(world,side2);

	side3 = Bodies.rectangle(width/2, 100, width, 10 , {isStatic:true})
	World.add(world,side3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    	Matter.Body.setStatic(packageBody, false);
  }
}
