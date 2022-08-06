class Rope{
    constructor(body_A, body_B ,x,y)
    {
        var options = {
            bodyA : body_A,
            bodyB : body_B,
            stiffness : 0.3,
            length : 200,
            pointB:{x:x ,y:y}
    
        }
        this.offsetX = x;
        this.offsetY = y;
    
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    display()
    {
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        
        line(pointA.x, pointA.y , this.offsetX, this.offsetY);
    }
}