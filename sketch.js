var balloon;
var backG;
var database;
var position;
function preload(){
  bla = loadAnimation("Images/Hot Air Ballon-02.png", "Images/Hot Air Ballon-03.png", "Images/Hot Air Ballon-04.png");
  bg = loadImage("Images/Hot Air Ballon-01.png");
}

function setup() {
  database = firebase.database();
  var balloonPosition = database.ref("balloon/height");
      balloonPosition.on("value", readPosition, showError);
  createCanvas(1430,690);
  
   
  balloon = createSprite(500, 500, 20, 20);
  balloon.addAnimation("moving",bla);


  backG = createSprite(700, 200, 10, 10);
  backG.addImage(bg);
  backG.scale=0.6; 



 
  
}
function draw() {
  textSize(24);
  fill("blue");
  text("**Use arrow keys to move Hot Air Balloon!", 10, 40);
  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x-1;
}
else if(keyDown(RIGHT_ARROW)){
  balloon.x = balloon.x+1;
}
else if(keyDown(UP_ARROW)){
  balloon.y = balloon.y-1;
}
else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y+1;
}
if(keyDown("UP_ARROW")){
  updateHeight(0, -10)
  balloon.scale = balloon.scale -0.01;
}

drawSprites();
}

function read(data){
position = data.val();
balloon.x = position.x;
balloon.y = position.y;
}
function showError(){
console.log("error");
}
