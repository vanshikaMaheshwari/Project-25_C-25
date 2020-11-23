class Paper{
    constructor(x,y,radius){
        var options = {
            restitution : 0.3,
            friction: 0,
            density : 1.2
        }
        this.body = Bodies.circle(x, y, (radius-20)/2, options);
        this.radius = radius;
        this.image = loadImage("PaperImg.png");
        World.add(world, this.body);
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);
        pop();
    }
}
