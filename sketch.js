// box
var box 

// cores
var amarelo, azul, vermelho, verde

function setup() {
  createCanvas(400,400);
  
  box = createSprite(200,200,30,30);

  amarelo = createSprite(50, 300, 30, 30)
  amarelo.shapeColor = "yellow"

  azul = createSprite(150, 300, 30, 30)
  azul.shapeColor = "blue"

  vermelho = createSprite(250, 300, 30, 30)
  vermelho.shapeColor = "red"

  verde = createSprite(350, 300, 30, 30)
  verde.shapeColor = "green"

}

function draw() 
{
  background(51);
  text("Encoste nas caixas mexendo com as setinhas",70 , 100);
  fill("rgb(64, 34, 97)")
  cores();
  drawSprites();
}

function cores(){

  if (keyIsDown(LEFT_ARROW)) 
  {
    box.x = box.x - 5
  }
 
  if (keyIsDown(UP_ARROW)) 
  {
    box.y = box.y - 5
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.y = box.y + 5
  }

  if(keyIsDown(RIGHT_ARROW))
  {
    box.x = box.x + 5
  }

  if(box.isTouching(azul))
  {
     background("blue") 
  }

  if(box.isTouching(amarelo))
  {
     background("yellow") 
  }

  if(box.isTouching(verde))
  {
     background("green") 
  }

  if(box.isTouching(vermelho))
  {
     background("red") 
  }

}


