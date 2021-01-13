class blocks{
    constructor(x,y,color){
        this.body = Bodies.rectangle(x,y,30,50);
        this.height = 50;
        this.width = 30;
        this.color = color;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(this.color);
        stroke("white");
        strokeWeight(2);
        rect(pos.x, pos.y, this.width, this.height);
    }
}