var database;
var gameState=0,player,form,game;
var playerCount;
var allPlayers;

var car1,car2,car3,car4,cars;
var c1Image,c2Image,c3Image,c4Image,track;

function preload(){
    c1Image = loadImage("../images/car1.png");
    c2Image = loadImage("../images/car2.png");
    c3Image = loadImage("../images/car3.png");
    c4Image = loadImage("../images/car4.png");
    track = loadImage("../images/track.jpg");
}

function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    
    database= firebase.database();

    game =  new Game();
    game.getState();
    game.start();
   
}

function draw(){
    if(playerCount === 4){
        game.updateState(1);
    }

    if(gameState === 1){
        clear();
        console.log("Inside Play");
        game.play();
    }

    if(gameState === 2){
        game.end();
    }
}
