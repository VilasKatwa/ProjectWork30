class BottomBox extends Box{
    constructor(x, y, width, height) {
        super(x,y,width,height);
        this.image = loadImage("C.png");
        this.Visibility = 255;
      }

      display() {
        
        if (this.body.speed < 3){
          super.display();
        } else {
          
          push();
          this.Visibility=this.Visibility - 20;
          tint(255,this.Visibility);
          image(this.image, this.body.position.x, this.body.position.y, this.width,this.height);
          pop();
          World.remove(world, this.body);
        }
      }
}