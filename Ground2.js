class Ground2{
    
    constructor(x,y,scale){
this.body=createSprite(x,y,width,height);
this.body.addImage(groundImg2);
this.body.scale=scale;

    }

display(){
    player.collide(this.body);

    if(keyIsDown(UP_ARROW) && player.isTouching(this.body)){
        player.velocityY=-40;
        
         }

}

}