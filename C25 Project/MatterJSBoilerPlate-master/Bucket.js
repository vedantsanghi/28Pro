class Dustbin {
    constructor() {
      var options = {
          restitution: 0.3,
          friction: 0.5,
          density: 1.2,
          isStatic: true
      }
      this.body = Bodies.rectangle(940,720,100,160, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("dustbingreen.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(4)
      stroke("green")
      fill(255);
      image(this.image,0, 0, 120, 120);
      pop();
    }
  }