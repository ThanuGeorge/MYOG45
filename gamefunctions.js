// choose the first player
function chooseplayer(){

    var rand = Math.round(random(1,2));
    if (rand === 1){
      currplayer = player1;
      currtext = "Computer";
    } else {
      currplayer = player2;
      currtext = "You";
    }
  }
 

  function clickables(){
    box11 = createSprite(100,100,90,90);
    box11.shapeColor = "white";
    box11.visible = false;
    box12 = createSprite(100,200,90,90);
    box12.shapeColor = "white";
    box12.visible = false;
    box13 = createSprite(100,300,90,90);
    box13.shapeColor = "white";
    box13.visible = false;
    box21 = createSprite(200,100,90,90);
    box21.shapeColor = "white";
    box21.visible = false;
    box22 = createSprite(200,200,90,90);
    box22.shapeColor = "white";
    box22.visible = false;
    box23 = createSprite(200,300,90,90);
    box23.shapeColor = "white";
    box23.visible = false;
    box31 = createSprite(300,100,90,90);
    box31.shapeColor = "white";
    box31.visible = false;
    box32 = createSprite(300,200,90,90);
    box32.shapeColor = "white";
    box32.visible = false;
    box33 = createSprite(300,300,90,90);
    box33.shapeColor = "white";
    box33.visible = false;
  }