var roof,rope1,ballObject1,ballObject2,ballObject3,ballObject4,ballObject5,ballDiameter;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(350,100,300,30);
	World.add(world, roof);

	ballObject1 = new Balls(250,300);
	ballObject2 = new Balls(300,300);
	ballObject3 = new Balls(350,300);
	ballObject4 = new Balls(400,300);
	ballObject5 = new Balls(450,300);
	
	rope1 = new Rope(ballObject1.body,roof.body,-100,0);
	World.add(world, rope1);

	rope2 = new Rope(ballObject2.body,roof.body,-50,0);
	World.add(world, rope2);

	rope3 = new Rope(ballObject3.body,roof.body,0,0);
	World.add(world, rope3);

	rope4 = new Rope(ballObject4.body,roof.body,+50,0);
	World.add(world, rope4);

	rope5 = new Rope(ballObject5.body,roof.body,+100,0);
	World.add(world, rope5);


	Engine.run(engine);
  
}


function draw() {

  background("white");
  Engine.update(engine);

 
  roof.display();
 
  
  ballObject1.display();
  ballObject2.display();
  ballObject3.display();
  ballObject4.display();
  ballObject5.display();
 
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  textSize(20);
  fill("black");
  text("Press Space",290,70);
 
}
function keyPressed(){
if(keyCode===32){
Matter.Body.applyForce(ballObject1.body,ballObject1.body.position,{x:-730,y:0});
}

}
