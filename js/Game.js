class Game {
  constructor(){}
  
  getState(){
   var gameStateref=database .ref("gameState")
   gameStateref.on("value",function(data){
     gameState=data.val();
   })
   
  }

  update(State){
    database.ref("/").update({
      gameState:State
    });
  }

async  start(){
    if(gameState===0){
player=new Player()
var playerCountref=await database.ref("playerCount").once("value");
if(playerCountref.exists()){
playerCount=playerCountref.val();
player.getCount();
}
form=new Form()
form.display();

    }
  }
  play(){
form.hide();
Player.Playerinfo();
if(allplayers!==undefined){
var position=120;
for(var plr in allplayers ){
  if(plr==="player"+player.index)
fill("red")

else fill("black")
position += 20;
text(allplayers[plr].name+":"+allplayers[plr].distance ,120,position)
}

}
if(keyIsDown(UP_ARROW)  &&  player.index!==null){
player.distance+=50;
player.update();

}
  }
}
