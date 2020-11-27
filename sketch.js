
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup

var score =0;
var st =0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315,20,20);
monkey.addAnimation("monkey_running",monkey_running);
  monkey.scale=0.1;
  obstacleGroup = createGroup();
  FoodGroup = createGroup();
  
   
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x = ground.width /2;
  console.log(ground.x);
}


function draw() {
background ("skyblue");
  
   text("Survival time "+ st, 200,100);
    text("Score "+ score, 100,100); 
    st = st + Math.round(getFrameRate()/60);
 //jump when the space button is pressed
if (keyDown("space")) {
  monkey.velocityY = -10;
}

monkey.velocityY = monkey.velocityY + 0.8
 
  if (ground.x < 0) {
  ground.x = ground.width / 2;
}
  
monkey .collide(ground);
  if(FoodGroup.isTouching(monkey)){
     score=score+2;
    FoodGroup.destroyEach();
    switch(score){
      case 10: monkey.scale=0.12;
        
              break;
       case 20: monkey.scale=0.14;
        
              break;
              
        case 30: monkey.scale=0.16;
        
              break;
              
         case 40: monkey.scale=0.18;
        
              break;
              
        case 50: monkey.scale=0.20;
        
              break;
              default: break;

    }
     }
  
    if(obstacleGroup.isTouching(monkey)){
    monkey.scale=0.02;  
      
    }
  bananas();
  stone();
  drawSprites();
  
}


function bananas (){
 if (frameCount % 80 === 0){
   var banana  = createSprite(200,200,10,40);
 banana.addImage(bananaImage);
   banana.scale=0.1;
   banana.velocityX=-3;
   banana.lifetime=50;
     FoodGroup.add(banana );
 
 }}


function stone (){
 if (frameCount % 300 === 0){
   var  obstacle  = createSprite(200,330,10,40);
 obstacle .addImage(obstacleImage);
    obstacle.scale=0.1;
   obstacle.velocityX=-3;
   obstacle.lifetime=50;
   obstacleGroup.add( obstacle );
 
 }}

