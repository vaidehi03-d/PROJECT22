//creating constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1, bob2, bob3, bob4, bob5, rope1, rope2, rope3, rope4, rope5, roof
var world;
function setup() {
//creating canvas
	createCanvas(800, 600);
  //giving psition to rect
	rectMode(CENTER);
//creating engine
	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
//creating roof
	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

    var bob_options={
      isStatic:false,
      restitution:1,
      friction:0,
      density:0.8	
    }

//creating bodies

  bob1=Bodies.circle(320,380,20,bob_options);
  World.add(world,bob1);

  bob2= Bodies.circle(360,380,20,bob_options);
  World.add(world,bob2);

  bob3=Bodies.circle(400,380,20,bob_options);
  World.add(world,bob3);

  bob4=Bodies.circle(440,380,20,bob_options);
  World.add(world,bob4);

  bob5=Bodies.circle(480,380,20,bob_options);
  World.add(world,bob5);

  rope1=new rope(bob1,roof,-80, 0)
	rope2=new rope(bob2,roof,-40, 0)
	rope3=new rope(bob3,roof,0, 0)
	rope4=new rope(bob4,roof,40, 0)
	rope5=new rope(bob5,roof,80, 0)
	Engine.run(engine);
	
}

function draw() {
  //giving position to rect
  rectMode(CENTER);
  //giving background
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  ellipse(bob1.position.x,bob1.position.y,40,40);
  ellipse(bob2.position.x,bob2.position.y,40,40);
  ellipse(bob3.position.x,bob3.position.y,40,40);
  ellipse(bob4.position.x,bob4.position.y,40,40);
  ellipse(bob5.position.x,bob5.position.y,40,40);
}

//Write keyPressed function 
function keyPressed(){
if(keyCode === UP_ARROW){
//giving force to bob
Matter.Body.applyForce(bob1,bob1.position,{x:-50,y:-45});
}
}
