const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var boyLeft, boyRight, boyStanding
var blackC, blueC, brownC, greenC, purpleCv2, purpleC, rainbowC, redC, whiteC, yellowC;
var m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15, m16, m17, m18, m19, m20, m21;

var engine, world;

function preload() {
    blackC = loadImage("crystals/black_crystals.jpg");
    blueC = loadImage("crystals/blue_crystals.jpg");
    brownC = loadImage("crystals/brown_crystals.jpg");
    greenC = loadImage("crystals/green_crystal.jpg");
    purpleCv2 = loadImage("crystals/purple_crystals_v2.jpg");
    purpleC = loadImage("crystals/purple_crystals.jpg");
    rainbowC = loadImage("crystals/rainbow_crystals.jpg");
    redC = loadImage("crystals/red_crystals.jpg");
    whiteC = loadImage("crystals/white_crystals.jpg");
    yellowC = loadImage("crystals/yellow_crystals.jpg");

    boyLeft = loadImage("boy animations/left_side.jpeg");
    boyRight = loadImage("boy animations/right_side.jpeg");
    boyStanding = loadImage("boy animations/standing.jpeg");
}

function setup() {
    createCanvas(800, 800);
    engine = Engine.create();
    world = engine.world;
    m1 = new Tile(10, 400, 20, 800);
    m2 = new Tile(400, 10, 800, 20);
    m3 = new Tile(790, 400, 20, 800);
    m4 = new Tile(400, 790, 800, 20);
    m5 = new Tile(60, 50, 20, 100);
    m6 = new Tile(125, 150, 20, 120);
    m7 = new Tile(95, 200, 80, 20);
    m8 = new Tile(170, 150, 20, 120);
    m9 = new Tile(180, 200, 40, 20);
    m10 = new Tile(105, 250, 60, 20);
    m11 = new Tile(125, 260, 20, 40);
    m12 = new Tile(190, 250, 40, 20);
    m13 = new Tile(170, 260, 20, 40);
    m14 = new Tile(75, 320, 40, 20);
    m15 = new Tile(125, 360, 20, 40);
    m16 = new Tile(105, 385, 60, 20);
    m17 = new Tile(175, 370, 20, 40);
    m18 = new Tile(185, 385, 40, 20);
    m19 = new Tile(100, 450, 80, 20);
    m20 = new Tile(130, 490, 20, 100);
    m21 = new Tile(180, 490, 20, 100);
    m22 = new Tile(190, 450, 40, 20);
    m23 = new Tile(80, 740, 20, 80);
    m24 = new Tile(250, 70, 20, 100);
    m25 = new Tile(290, 45, 60, 20);
    m26 = new Tile(290, 115, 20, 120);
    m27 = new Tile(370, 165, 100, 20);
    m28 = new Tile(450, 115, 20, 120);
    m29 = new Tile(435, 45, 50, 20);
    m30 = new Tile(495, 80, 20, 120);
    m31 = new Tile(300, 250, 80, 20);
    m32 = new Tile(250, 300, 20, 120);
    m33 = new Tile(300, 350, 80, 20);
    m34 = new Tile(330, 300, 20, 40);
    m35 = new Tile(450, 250, 80, 20);
    m36 = new Tile(500, 300, 20, 120);
    m37 = new Tile(450, 350, 80, 20);
    m38 = new Tile(420, 300, 20, 40);
    m39 = new Tile(250, 720, 20, 120);
    m40 = new Tile(290, 700, 20, 100);
    m41 = new Tile(340, 650, 120, 20);
    m42 = new Tile(300, 750, 40, 20);
    m43 = new Tile(430, 690, 20, 100);
    m44 = new Tile(420, 750, 40, 20);
    m45 = new Tile(470, 720, 20, 120);
    m46 = new Tile(560, 140, 20, 120);
    m47 = new Tile(540, 190, 20, 20);
    m48 = new Tile(630, 180, 20, 120);
    m49 = new Tile(650, 230, 60, 20);
    m50 = new Tile(700, 70, 20, 100);
    m51 = new Tile(560, 310, 40, 20);
    m52 = new Tile(570, 320, 20, 40);
    m53 = new Tile(640, 320, 20, 40);
    m54 = new Tile(660, 310, 60,20);
    m55 = new Tile(710, 370, 40,20);
    m56 = new Tile(570, 420, 20,40);
    m57 = new Tile(560, 430, 40, 20);
    m58 = new Tile(640, 420, 20, 40);
    m59 = new Tile(660, 430, 60, 20);
    m60 = new Tile(570, 580, 20, 120);
    m61 = new Tile(560, 530, 40, 20);
    m62 = new Tile(640, 580, 20, 120);
    m63 = new Tile(670, 530, 80, 20);
    m64 = new Tile(700, 740, 20, 80);
    




}
function draw() {
    background("green");
    Engine.update(engine);
    drawSprites();

    m1.display();
    m2.display();
    m3.display();
    m4.display();
    m5.display();
    m6.display();
    m7.display();
    m8.display();
    m9.display();
    m9.display();
    m10.display();
    m11.display();
    m12.display();
    m13.display();
    m14.display();
    m15.display();
    m16.display();
    m17.display();
    m18.display();
    m19.display();
    m20.display();
    m21.display();
    m22.display();
    m23.display();
    m24.display();
    m25.display();
    m26.display();
    m27.display();
    m28.display();
    m29.display();
    m30.display();
    m31.display();
    m32.display();
    m33.display();
    m34.display();
    m35.display();
    m36.display();
    m37.display();
    m38.display();
    m39.display();
    m40.display();
    m41.display();
    m42.display();
    m43.display();
    m44.display();
    m45.display();
    m46.display();
    m47.display();
    m48.display();
    m49.display();
    m50.display();
    m51.display();
    m52.display();
    m53.display();
    m54.display();
    m55.display();
    m56.display();
    m57.display();
    m58.display();
    m59.display();
    m60.display();
    m61.display();
    m62.display();
    m63.display();
    m64.display();


}


