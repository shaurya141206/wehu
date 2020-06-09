var i = (-10)
class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
    gameState = data.val();
    })
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    car1 = createSprite(100,200);
    car1.addImage("car1",car1_img);
    car2 = createSprite(300,200);
    car2.addImage("car2",car2_img);
    car3 = createSprite(500,200);
    car3.addImage("car3",car3_img);
    car4 = createSprite(700,200);
    car4.addImage("car4",car4_img);
    cars = [car1, car2, car3, car4];

  }

  play(){
    form.hide();
    Player.getPlayerInfo();
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(track1,0,-350,displayWidth*5,displayHeight);
      //index of the array
      var index = 0;
      //x and y position of the cars
      var x ;
      var y = -450 ;
      for(var plr in allPlayers){
      index = index + 1 ;
      y = y + 190;
      //use data form the database to display the cars in y direction
      x = displayWidth - allPlayers[plr].distance;
      cars[index-1].x = x;
      cars[index-1].y = y;
      if (index === player.index){
          cars[index - 1].shapeColor = "red";
          camera.position.x = cars[index-1].x;
          camera.position.y = displayHeight/30
      }
      //textSize(15);
      //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    // for moving foward
    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance -=200
      player.update();
    }
    
    // game stoping code
    if(player.distance===-5370 && player.distance===-5371 && player.distance===-5372 ){
      gameState = 0;
    }

    drawSprites();
  }

  //game end tell

  end(){
    console.log("game ended");
  }

}
