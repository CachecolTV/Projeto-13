var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);


  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;

  if (frameCount % 80 == 0) {
      createApples();
  }

  if (frameCount % 80 == 0) {
      createOranges();
  }

  if (frameCount % 80 == 0) {
      createRed();
  }



  drawSprites();
  
}

function createApples(){
 var apple = createSprite(random(50,350),40,10,10);
 apple.addImage(appleImg);
 apple.scale=0.07;
 apple.velocityY=3;
 apple.lifetime=150;

}

function createOranges(){
  var orange = createSprite(random(50,350),40,10,10);
  orange.addImage(orangeImg);
  orange.scale=0.07;
  orange.velocityY=3;
  orange.lifetime=150;
 
 }

 function createRed(){
  var red = createSprite(random(50,350),40,10,10);
  red.addImage(redImg);
  red.scale=0.07;
  red.velocityY=3;
  red.lifetime=150;
 
 }