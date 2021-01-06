const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var obst1, world,engine;
var obst2, obst3, obst4, obst5, testPlayer, block1, block2, block3, block4, block5, plyr, testPlayer2, roof, support1, support2, support3, support4, support5, support6;
var bounce1, black1, black2, white1, white2, backImg, whiteStar, blackStar, white, obstImg, obst2Img, whiteLeft, blackLeft, gameState, endScreen;
var whiteX, whiteY, blackX, blackY;

function preload(){
    white1=loadImage("white1.png")
    backImg = loadImage("back.png");
    obstImg = loadImage("obst1.png")
    obst2Img = loadImage("obst2.png")
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    obst1 = new Block(width/2,height/2, width/2,width/76);
    obst2 = new Block(width/4,height/1.25, width/4,width/76)
    obst3 = new Block1(width/4,height/3, width/4,width/76)
    obst4 = new Block(width/1.3,height/1.5, width/4,width/76)
    obst5 = new Block(width/1.3,height/5, width/4,width/76)

    support1 = createSprite(width/2,height/2,obst1.width,obst1.height)
    support2 = createSprite(width/4,height/1.25,obst2.width,obst2.height)
    support3 = createSprite(width/4,height/3,obst3.width,obst3.height)
    support4 = createSprite(width/1.3,height/1.5,obst4.width,obst4.height)
    support5 = createSprite(width/1.3,height/5,obst5.width,obst5.height)

    bounce1 = createSprite(support3.x-support3.width/2,height/3,1,width/76);

    support1.shapeColor = "black";
    support2.shapeColor = "black"
    support3.shapeColor = "black"
    support4.shapeColor = "black"
    support5.shapeColor = "black"

    roof = new Block(width/2,height/1000,width,1)

    testPlayer = new Player(width/1.3, height/8, width/28, width/28)

    testPlayer2 = new Player2(width/4, height/8, width/28, width/28)

    //white = createSprite(testPlayer.x,testPlayer.y,width/28,width/28)
    //white.addImage(white1);
    support1.addImage(obst2Img);
    support2.addImage(obstImg);
    support3.addImage(obstImg);
    support4.addImage(obstImg);
    support5.addImage(obstImg);

    endScreen = createSprite (windowWidth/2, windowHeight/2, windowWidth, windowHeight)
    endScreen.visible = false;
    endScreen.shapeColor = "black";

    gameState = 0;
}

function draw(){
    background(backImg);
    Engine.update(engine);
    obst1.display();
    obst2.display();
    obst3.display();
    obst4.display();
    obst5.display();
    roof.display();
    testPlayer.display();
    testPlayer2.display();

    //Matter.Body.setMass(testplayer.body,1322.4489795918369);

   //testPlayer.velocityX = 0;
   //testPlayer.velocityY = 0;

   if (keyIsDown (LEFT_ARROW)){
    Matter.Body.applyForce(testPlayer.body,testPlayer.body.position,{x:-width/760,y:0});
    //testplayer.velocityX -= 5;
}
if (keyIsDown (RIGHT_ARROW)){
    Matter.Body.applyForce(testPlayer.body,testPlayer.body.position,{x:width/760,y:0});
    //testplayer.velocityX -= 5;
}

if (keyIsDown (65)){
    Matter.Body.applyForce(testPlayer2.body,testPlayer2.body.position,{x:-width/760,y:0});
    //testplayer.velocityX -= 5;
}
if (keyIsDown (68)){
    Matter.Body.applyForce(testPlayer2.body,testPlayer2.body.position,{x:width/760,y:0});
    //testplayer.velocityX -= 5;
}

obst3.velocityX+=0.5;

if (gameState === 1){
    endScreen.visible = true;
    console.log("Player 2 (Black) Wins")
}

if (gameState === 2){
    endScreen.visible = true;
    console.log("Player 1 (White) Wins")
    endScreen.shapeColor = "white";
}

drawSprites();
}

function keyPressed() {
    if (keyCode === 188){
        Matter.Body.applyForce(testPlayer.body,testPlayer.body.position,{x:-width/28,y:0});
    }
    if (keyCode === DOWN_ARROW){
        Matter.Body.applyForce(testPlayer.body,testPlayer.body.position,{x:0,y:width/49.9});;
    }
    if (keyCode === UP_ARROW){
        Matter.Body.applyForce(testPlayer.body,testPlayer.body.position,{x:0,y:-width/49.9});
    }
    if (keyCode === 83){
        Matter.Body.applyForce(testPlayer2.body,testPlayer2.body.position,{x:0,y:width/49.9});
    }
    if (keyCode === 87){
        Matter.Body.applyForce(testPlayer2.body,testPlayer2.body.position,{x:0,y:-width/49.9});
    }
    if (keyCode === 190){
        Matter.Body.applyForce(testPlayer.body,testPlayer.body.position,{x:+width/28,y:0});
    }
    if (keyCode === 69){
        Matter.Body.applyForce(testPlayer2.body,testPlayer2.body.position,{x:-width/28,y:0});
    }
    if (keyCode === 82){
        Matter.Body.applyForce(testPlayer2.body,testPlayer2.body.position,{x:+width/28,y:0});
    }
    if (keyCode === 70 && whiteLeft === 1){
        whiteStar.visible = true;
        whiteStar.velocityX = -25;
    }
    if (keyCode === 70 && whiteLeft === 2){
        whiteStar.visible = true;
        whiteStar.velocityX = 25;
    }
    if (keyCode === 191 && blackLeft === 1){
        blackStar.visible = true;
        blackStar.velocityX = -25;
    }
    if (keyCode === 191 && blackLeft === 2){
        blackStar.visible = true;
        blackStar.velocityX = 25;
    }
}