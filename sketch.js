var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var distance2 = 0;
var height = 0;
var hurdl
var database;
var index
var form, player, game;
var y1
var cars, car1, car2, car3, car4;
var track, car1_img, car2_img, car3_img, car4_img, ground_img,hurcle_img;

function preload(){
  track1 = loadImage("./images/track1.png");
  car1_img = loadImage("./images/runner.png");
  car2_img = loadImage("./images/runner.png");
  car3_img = loadImage("./images/runner.png");
  car4_img = loadImage("./images/runner.png");
  ground_img = loadImage("./images/ground.png");
  hurcle_img = loadImage("./images/Untitled.png");
  
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
   hurdl = new hurdles() 
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  hurdl.display(); 

}
