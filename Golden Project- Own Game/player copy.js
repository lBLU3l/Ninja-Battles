class Player2 {
    constructor(x,y,width,height){
        this.image = loadImage("white.png")
        this.image2 = loadImage("whiteLeft.png")
        var options = {
            friction: 0,
            density: 0.5,
            frictionStatic: 0,
            frictionAir: 0.01,
            mass: 1322.4489795918369
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        console.log(this.body);
    }
    display(){
        
        var pos =this.body.position;
    //var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    //rotate(angle);
    imageMode(CENTER);
    noStroke();
    fill("white");
    //image(this.image,0,0,this.width,this.height)
    if (keyIsDown (65)){
        image(this.image2,0,0,this.width,this.height);
    }
    else {
        image(this.image,0,0,this.width,this.height);
    }

    if (keyIsDown (69)){
        image(this.image2,0,0,this.width,this.height);
    }

    if (keyIsDown (69)|| keyIsDown(65)){
        whiteLeft = 1
    }
    else {
        whiteLeft = 2
    }

    whiteStar = createSprite(pos.x,pos.y, this.width/3, this.width/3);
    whiteStar.shapeColor = "white";
    whiteStar.visible = false;

    whiteX = pos.x;
    whiteY = pos.y;

    if ((pos.x + this.width) < 0 
    || (pos.y + this.height) < 0
    || (pos.x > window.innerWidth || pos.y > window.innerHeight)){
        gameState = 1;
    }
    pop();
    }
}