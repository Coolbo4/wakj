var score =0;
var star1Img,star2Img,star3Img,star4Img,star5Img,rocket1Img;

function preload(){
    star1Img = loadImage("star 1.png");
    star2Img = loadImage("star 2.png");
    star3Img = loadImage("star 3.png");
    star4Img = loadImage("star 4.png");
    star5Img = loadImage("star 5.png");
    rocket1Img = loadImage("rocket 1.png")
}
function setup(){
    createCanvas(800, 800);
}
function draw() {
    background();
}
drawSprites();