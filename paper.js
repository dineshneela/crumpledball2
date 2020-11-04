class paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            fiction:0.5,
            density:1.2
        }
        this.body=Matter.Bodies.circle(x, y, radius, options)
        this.radius=radius
        this.image=loadImage("paper.png");
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
    //push();
       
        ellipseMode(CENTER)
        strokeWeight(4)
        stroke("red")
        fill("green")
        image(this.image,pos.x,pos.y,this.radius,this.radius)
        //pop();
    }
}