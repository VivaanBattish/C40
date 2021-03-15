class Player{
    constructor(){
       this.index = null
       this.distance = 0
       this.name = null 
    }
    update(){
       var playerIndex = database.ref("players/player"+this.index);
       playerIndex.set({name: this.name, distance: this.distance});
    }
    updateCount(playerCount){
        var playerCIndex = database.ref("/");
       playerCIndex.update({playerCount: playerCount});
    }
    getCount(){
        var playerCountref = database.ref("playerCount");
      playerCountref.on("value",function(data){
          playerCount = data.val();
      })
  }
  static getplayerinfo(){
      var playerinforef = database.ref("players");
      playerinforef.on("value",(data)=>{
          allPlayers = data.val();
      })
  }
}