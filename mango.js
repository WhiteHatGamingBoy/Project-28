class Mango{
    constructor(x, y, diameter) {
        var options = {
            'isStatic':true,
            'friction':1,
            'density':0.2
        }

        this.body = Bodies.circle(x, y, diameter ,options);
        this.diameter = diameter
        this.image = loadImage("images/mango.png");
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push()
        translate(pos.x,pos.y)
        fill("white")
        ellipseMode(RADIUS)
        //ellipse(0, 0, this.diameter,this.diameter);
        imageMode(CENTER);
        image(this.image, 0, 0, this.diameter*2,this.diameter*2);
        
        pop()
}
}