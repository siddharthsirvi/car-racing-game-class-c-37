class Form {
  constructor() {
    this.input=createInput("name");
    this.button=createButton("play")
    this.greeting=createElement("h2")
  }
  hide(){
this.input.hide();
this.button.hide();
this.greeting.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
  
    
    this.input.position(130, 160);
    this.button.position(250, 200);

    
    this. button.mousePressed(()=>{
      this. input.hide();
      this.button.hide();
     
     this. greeting.position(130, 160)
       player.name=this.input.value();
       player.index=playerCount;
      playerCount+=1;
      player.update();
      player.updateCount(playerCount);
     this. greeting.html("hello"+player.name);
    
    })  
   
    

  }
}
