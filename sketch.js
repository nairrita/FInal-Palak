var bg, bg_img, turtle,turtle_img;
var bag_img,bagGroup,bag;
var poster1_img;
var poster2_img;
var poster3_img;
var cocacola_img,cocacolaGroup,cocacola;
var score=0;
var play,play_img;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var die,die_img;


function preload(){
  bg_img = loadImage("images/background.jpg");
  turtle_img = loadAnimation("images/t1.png","images/sprite_t50.png");
  bag_img = loadImage("images/plastic_bag.png");
  poster1_img = loadImage("images/poster1.jpeg");
  poster2_img = loadImage("images/poster2.jpeg");
  poster3_img = loadImage("images/poster3.jpg");
  cocacola_img = loadImage("images/coca cola.png");
  play_img = loadImage("images/Play_button.jpg");
  //die_img = loadImage("images/die10.png")
 
}

function setup(){
  var canvas = createCanvas(displayWidth,displayHeight)
  
  bg =  createSprite(600,500,1200,1000);
  bg.addImage("img",bg_img);
  bg.x = bg.width/2;

  turtle = createSprite(200,400,50,50);
  turtle.addAnimation("img",turtle_img);
  //turtle.addImage("img",die_img)
  turtle.setCollider("circle",0,0,5)
  turtle.scale = 0.5;
  bg.scale = 1.0;
  bag_img.scale = 0.5;
  play = createSprite(1000,800,50,50);
  play.addImage("img",play_img);
  play.scale=0.5;
  bagGroup =  new Group();
  cocacolaGroup = new Group();
  textSize(20);
textFont("Georgia");
textStyle(BOLD);
fill("black");
  
  }

function draw(){

  background("white")
//here I gave the intro message display before the game starts
  if(World.frameCount<200){
    
    text("Welcome to Turtle Saver Game!", 200,200);
    text("control Turtle with your arrow keys",200,300);
    text("help the turtle from plastic trash ", 200,400);
    text("This game is to make the humanity aware that how plastic pollution in Ocean/SEA  is causing 1000 turtles to die each year !",50,500);
    
    
    
     } 
    
     // here the game starts

  if(gameState===PLAY && World.frameCount>200){
  textSize(20);
  fill("Red");
  bg.velocityX=-5;

if(keyDown(UP_ARROW)){
  move(0,-5);
 
}

if(keyDown(DOWN_ARROW)){
  move(0,5)

}

if(keyDown(LEFT_ARROW)){
  move(-5,0)
  
}

if(keyDown(RIGHT_ARROW)){
  move(5,0)
  
}
  if(bg.x<100){
    bg.x = bg.width/2;
  }
score=Math.round(World.frameCount/10)

spawnbag();
spawnMessage1();
spawnMessage2();
spawnMessage3();
spawncocacola();

// student tried to create the collision algorithm but I guess baggroup is going wrong 


if(turtle.y - bagGroup.yEACH<turtle.height/2+bagGroup.height/2
  && bagGroup.yEach - turtle.y< turtle.height/2+ bagGroup.height/2){
  gameState = END;

  }
else if (gameState===END){
bagGroup.velocityYEach(0)
score = 0;
//turtle.changeImage("img",die_img)
}

  drawSprites();
  text("SCORE-"+score,50,50);
  }
}

function move(x,y){
  turtle.x = turtle.x+x;
  turtle.y = turtle.y+y;
}

function spawnbag(){
  if(World.frameCount%100===0){
    var rand =  Math.round(random(200,800))
  var bag = createSprite(rand,0,20,20);
  bag.addImage("img",bag_img);
  bag.velocityY = 5;
  bag.scale = 0.25;
  bag.setCollider("circle",0,0,5)
  bagGroup.add(bag);
 
  }
  
}
  


function spawnMessage1(){
  if(World.frameCount%500===0){
  var message1 = createSprite(displayWidth,100,50,50);
  message1.addImage("img",poster1_img);
  message1.velocityX = -1;
  message1.scale = 0.5;
  message1.lifetime = 400;
  
  }
}
function spawnMessage2(){
  if(World.frameCount%500===0){
  var message2 = createSprite(displayWidth,200,50,50);
  message2.addImage("img",poster2_img);
  message2.velocityX = -1;
  message2.scale = 0.5;
  message2.lifetime = 400;
  
  }
}
function spawnMessage3(){
  if(World.frameCount%500===0){
  var message3 = createSprite(displayWidth,350,50,50);
  message3.addImage("img",poster3_img);
  message3.velocityX = -1;
  message3.scale = 0.3;
  message3.lifetime = 400;
  
  }
}

function spawncocacola(){
  if(World.frameCount%100===0){
    var rand =  Math.round(random(600,1000))
  var cocacola = createSprite(0,rand,20,20);
  cocacola.addImage("img",cocacola_img);
  cocacola.velocityX= 5;
  cocacola.scale = 0.05;
  cocacolaGroup.add(cocacola);
  
  }
}
