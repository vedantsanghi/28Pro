class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.bodyA = bodyA
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly(){
        mouseX = lastmouseX
        mouseY = lastmouseY
       }
    display(){
       if(this.sling.bodyA){
        var BodyA = this.sling.bodyA.position;
        var pointB = this.pointB 
        strokeWeight(4);
        line(BodyA.x, BodyA.y, pointB.x, pointB.y);
       }
    }
}