//alert("This is working");
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];


function nextSequence(){
   var randomNumber=Math.floor(Math.random()*4);
   var randomChosenColour = buttonColours[randomNumber];
   gamePattern.push(randomChosenColour);
   $("#"+randomChosenColour).fadeOut("fast");
   $("#"+randomChosenColour).fadeIn("fast");
   var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
   audio.play();
}


