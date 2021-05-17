class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null; 
    }

    getCount(){
        var playerCountRef = database.ref("/playerCount");
        playerCountRef.on("value",function(data){
            playerCount = data.val();
        });
    }

    updateCount(count){
        var playerCountRef = database.ref("/");
        playerCountRef.update({
            playerCount : count
        });
    }

    update(){
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            name  : this.name,
            distance : this.distance
        });
    }

    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        //console.log(allPlayers);
        playerInfoRef.on("value",(data)=>{
            allPlayers = data.val();
            //console.log(allPlayers)
        })
    }
}