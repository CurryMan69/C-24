const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var ground1;

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,300,70,70);
    box2 = new Box(600,300,70,70);
    box4 = new Box(600,100,70,70);
    box3 = new Box(800,100,70,70);
    box5 = new Box(700,25,70,70);
    pig1 = new Pig(700,300);
    pig2 = new Pig(700,100);
    log1 = new Log(700,200,275,PI/2)
    log2 = new Log(700,50,275,PI/2);
    log3 = new Log(650,20,125,PI/5);
    log4 = new Log(750,20,125,-PI/4);
    bird1 = new Bird(200,200);
    ground1 = new ground(500,400,1000,80);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
}