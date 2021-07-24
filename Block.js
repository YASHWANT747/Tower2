class Block{
  constructor(x, y, width, height) {
         var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.image = loadImage("block.png");
      this.visiblity = 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
     

     
      World.add(world, this.body);
    }

    display(){
      var angle = this.body.angle;
      var pos= this.body.position;
      //console.log(this.body.speed)
     if(this.body.speed < 3 ){
       push()
        imageMode(CENTER);
        translate (this.body.position.x , this.body.position.y);
        rotate (angle)
        //image(this.image , 0, 0 ,pos.x,pos.y,this.width, this.height);
        image(this.image ,0,0,this.width, this.height);
        pop()
   
        }
    else{
      World.remove(world ,this.body)
      push ()
    this.visiblity = this.visiblity - 5;
     tint(255,this.visiblity);
    image(this.image, this.body.position.x, this.body.position.y, 0, 0);
    //image(this.image, this.body.position.x, this.body.position.y, 0,0);
     pop ()

    }
  }
}