class Ball {
    constructor() {
      var options = {
          restitution: 0.3,
          friction: 0.5,
          density: 1.2,
          isStatic: false
      }
      this.body = Bodies.circle(200, 200, 40, options);
      this.diameter = 40;
      this.image = loadImage("paper.png")
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
      image(this.image,0, 0, 50);
      pop();
    }
  }