var canvas;
var music;
var box1;
var box2;
var box3;
var box4;
var box5;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
box1 = createSprite(0, 580, 360, 30);
box1.shapeColor = "red";

box2 = createSprite(295, 580, 200, 30);
box2.shapeColor = "blue";

box3 = createSprite(515, 580, 200, 30);
box3.shapeColor = "orange";

box4 = createSprite(740, 580, 220, 30);
box4.shapeColor = "yellow";

box5 = createSprite(random(20, 750), 100, 40, 40);
box5.shapeColor = "white";
box5.velocityX = 4;
box5.velocityY = 9;


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges = createEdgeSprites();
    box5.bounceOff(edges);

    if(box1.isTouching(box5) && box5.bounceOff(box1)){
    box5.shapeColor = "green";
    }
    
    if(box2.isTouching(box5)){ 
        box5.shapeColor = "pink";
        box5.velocityX = 0;
        box5.velocityY = 0;
        music.stop();
        }

        if(box3.isTouching(box5) && box5.bounceOff(box3)){
            box5.shapeColor = "purple";
            }

            if(box4.isTouching(box5) && box5.bounceOff(box4)){
                box5.shapeColor = "brown";
                }

    
    //create edgeSprite
drawSprites();


    //add condition to check if box touching surface and make it box
}
