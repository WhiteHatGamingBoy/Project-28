
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	boyimage=loadImage("images/boy.png")
	treeimage=loadImage("images/tree.png")
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground= new Ground(650,600,1300,20)
    mango1= new Mango(900,290,30)
    mango2= new Mango(980,290,20)
    mango3= new Mango(1200,290,22)
    mango4= new Mango(1100,220,40)
    mango5= new Mango(950,210,30)
    stoneobject= new Stone(200,360,30)
    launcher= new Launcher(stoneobject.body,{x:235,y:410})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(boyimage,200,360,200,300)
  image(treeimage,800,130,500,500)
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stoneobject.display();
  launcher.display();
  detectcollision(stoneobject,mango1)
  detectcollision(stoneobject,mango2)
  detectcollision(stoneobject,mango3)
  detectcollision(stoneobject,mango4)
  detectcollision(stoneobject,mango5)
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stoneobject.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  launcher.fly();
}
function detectcollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position 
  stoneBodyPosition=lstone.body.position 
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  console.log(distance); 
  if(distance<=lmango.diameter+lstone.diameter) { 
      
      Matter.Body.setStatic(lmango.body,false); 
 } 
}
