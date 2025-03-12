//alert("This is working");
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];


function nextSequence(){
   var randomNumber=Math.floor(Math.random()*4);
   var randomChosenColour = buttonColours[randomNumber];
   gamePattern.push(randomChosenColour);
   $("#"+randomChosenColour).fadeOut("fast");
   $("#"+randomChosenColour).fadeIn("fast");
   playSound(randomChosenColour);
}


function playSound(color){
   switch(color) {
  case "red":
    var color1 = new Audio("./sounds/red.mp3");
    color1.play();    
    break;
  case "blue":
    var color2 = new Audio("./sounds/blue.mp3");
    color2.play();    
    break;
  case "green":
    var color3 = new Audio("./sounds/green.mp3");
    color3.play();    
    break;
  case "yellow":
    var color4 = new Audio("./sounds/yellow.mp3");
    color4.play();    
    break;
  default:
    console.log(keyvalue);
}};
