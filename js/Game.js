class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState = data.val();
            console.log(gameState);
        });
        console.log(gameState);
    }
    updateState(state){
        var gameStateRef = database.ref("/").update({gameState : state})
    }
    async start(){
        if(gameState === 0){ 
           // console.log("Started");
            player= new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();

            }
            
            form = new Form();
            form.display();
            
        }
        car1 =  createSprite(100,200);
        car1.addImage("car1",c1Image);
        car2 =  createSprite(300,200);
        car2.addImage("car2",c2Image);
        car3 =  createSprite(500,200);
        car3.addImage("car3",c3Image);
        car4 =  createSprite(700,200);
        car4.addImage("car4",c4Image);

        cars = [car1,car2,car3,car4];
        
        
    }
    play(){
        form.hide();
        textSize(30);
        text("Game Start",120,100);
        Player.getPlayerInfo();

        if(allPlayers!== undefined){
            background("#c68767")
            image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);

            var index =  0;
            var x = 175;
            var y;

            for(var plr in allPlayers){
                
                x = x+210;
                y = displayHeight - allPlayers[plr].distance;

                cars[index].x = x;
                cars[index].y = y;

                console.log(player.index);
                console.log(index+1);

                if(index + 1 == player.index){
                    console.log("this car");
                    cars[index].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index].y;
                }
            
                index = index+1;
            }
            
        }
       
        if(keyDown(UP_ARROW)&& player.index!= null){
            player.distance += 50;
            player.update();
        }

        if(player.distance > 4300){
            gameState = 2;
        }
        drawSprites();
        
    }

    end(){
        console.log("GAME ENDS!!!!");
    }

}