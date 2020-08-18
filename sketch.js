var moving, fixed;

function setup() {
  createCanvas(1000,600);
  moving = createSprite(400, 200, 50, 80);
  fixed = createSprite(600, 200, 80, 50);

  moving.debug = true;
  fixed.debug = true;

  moving.velocityX = 5;
  fixed.velocityX = -5;
}

function draw() {
  background(0); 
  
  //moving.x = mouseX;
  //moving.y = mouseY;

  //ALGORITHM FOR DETECTING COLLISION
  if(fixed.x - moving.x < moving.width/2 + fixed.width/2
    && moving.x - fixed.x < moving.width/2 + fixed.width/2
    && fixed.y - moving.y < moving.height/2 + fixed.height/2
    && moving.y - fixed.y < moving.height/2 + fixed.height/2){
      moving.shapeColor = "red";
      fixed.shapeColor = "red";
  }
  else {
      moving.shapeColor = "green";
      fixed.shapeColor = "green";
  }

  //ALGORITHM FOR BOUNCING OFF THE OBJECTS
  if(fixed.x - moving.x < moving.width/2 + fixed.width/2
    && moving.x - fixed.x < moving.width/2 + fixed.width/2) {
      moving.velocityX = moving.velocityX*(-1);
      fixed.velocityX = fixed.velocityX*(-1)
    }

  if(fixed.y - moving.y < moving.height/2 + fixed.height/2
    && moving.y - fixed.y < moving.height/2 + fixed.height/2) {
      moving.velocityY = moving.velocityY*(-1);
      fixed.velocityY = fixed.velocityY*(-1)
    }

  drawSprites();
}

/*
ALGORITHMS
1. detecting collision between 2 objects
2. bouncing off two objects
*/