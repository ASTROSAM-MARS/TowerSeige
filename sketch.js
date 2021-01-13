const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon;
var ground1, ground2, ground3;
var sling1;
var bock1, block2, block3, block4, block5;
var block6, block7, block8, block9;
var block10, block11, block12;
var block13, block14;
var block15;

function setup(){
    createCanvas(700,650);
    engine = Engine.create();
    world = engine.world;

    polygon = new stone();
    ground1 = new ground(450,650,900,20, rgb(102, 0, 0));
    ground2 = new ground(400,550,240, 5, rgb(153, 0 ,51));
    sling1 = new sling(polygon.body, {x : 100,y : 400});
    block1 = new blocks(470,520,rgb(128, 255, 191));
    block2 = new blocks(435, 520, rgb(255, 77, 77));
    block3 = new blocks(400,520,rgb(128, 255, 191));
    block4 = new blocks(365,520, rgb(255, 77, 77));
    block5 = new blocks(330, 520, rgb(128, 255, 191));
    block6 = new blocks(455, 465,rgb(255, 119, 51));
    block7 = new blocks(420, 465, rgb(128, 255, 0));
    block8 = new blocks(385,465, rgb(255, 119, 51));
    block9 = new blocks(350, 465, rgb(128, 255, 0));
    block10 = new blocks(435, 410, rgb(128, 255, 191));
    block11 = new blocks(400,410, rgb(255, 77, 77));
    block12 = new blocks(365, 410, rgb(128, 255, 191));
    block13 = new blocks(415, 355, rgb(128, 255, 0));
    block14 = new blocks(380, 355, rgb(255, 119, 51));
    block15 = new blocks(395,300,rgb(255, 77, 77));
   


    Engine.run(engine);
}

function draw(){
    background(0);
    Engine.update(engine);
    polygon.display();
    ground1.display();
    ground2.display();
    sling1.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x : mouseX, y : mouseY});
}

function mouseReleased(){
    sling1.fly();
}