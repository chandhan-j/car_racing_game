var car;
var enemy;
var line;
var score = 0;
var gameState;

function setup() {
  createCanvas(600,550);

  line = createSprite(300,275,10,800);
  line.shapeColor = "yellow"

  car = createSprite(450,500,50,50);
  car.shapeColor = "cyan";

  enemy = createSprite(150,-20,50,50);
  enemy.x = random(0,600)
  enemy.velocityY += 5;
  enemy.shapeColor = "red"

}

function draw() {
  background(0);  

  console.log(frameCount)

  if(enemy.y > 550){
    enemy.x = random(0,600)
    enemy.y = -20
  }

  if(keyDown("RIGHT_ARROW") && gameState !== "end"){
    console.log("right");
    car.x += 5;
  }

  if(keyDown("LEFT_ARROW") && gameState !== "end"){
    console.log("left");
    car.x += -5;
  }

  if(gameState !== "end"){
    score += +1;
  }

 if(car.isTouching(enemy)){
    textSize(50);
    fill("red");
    text("Game Over",250,300);
    enemy.velocityY = 0;
    score += +0;
    gameState = "end";
  }


  drawSprites();
  textSize(20);
  text("score: " + score,10,20)

  
}


  
