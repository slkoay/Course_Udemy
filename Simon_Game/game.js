//alert("This is working");
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern =[];
var game_status=[];
var level = 0;

function nextSequence(){
   var randomNumber=Math.floor(Math.random()*4);
   var randomChosenColour = buttonColours[randomNumber];
   gamePattern.push(randomChosenColour);
   $("#"+randomChosenColour).fadeOut("fast");
   $("#"+randomChosenColour).fadeIn("fast");
   playSound(randomChosenColour);
   level+=1;
   $("h1").text("Level "+level);
}

$(".btn").click(function(){
  userChosenColour = $(this).attr("id");
  console.log(userChosenColour);
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
});


$(document).keypress(function(event){
   if (game_status.length === 0){
      nextSequence();
      game_status.push(event.key);
      console.log(event.key);
   }
   
});



function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
   audio.play();
}


function animatePress(currentColour){
   $("."+currentColour).addClass("pressed");
   setInterval(function(){$("."+currentColour).removeClass("pressed");}, 100);
}
