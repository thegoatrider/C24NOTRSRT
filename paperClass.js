class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
    this.Body = bodies.ellipse(x,y,w,[h]);
    this.radius = radius;
    World.add(world, this.body);
        }

} 