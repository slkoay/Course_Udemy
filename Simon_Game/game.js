//alert("This is working");
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern =[];
var started = false;
var level = 0;

function nextSequence(){
  level++;
   $("#level-title").text("Level " + level);
   var randomNumber=Math.floor(Math.random()*4);
   var randomChosenColour = buttonColours[randomNumber];
   gamePattern.push(randomChosenColour);
   $("#"+randomChosenColour).fadeOut("fast");
   $("#"+randomChosenColour).fadeIn("fast");
   playSound(randomChosenColour);
}

$(".btn").click(function(){
  userChosenColour = $(this).attr("id");
  console.log(userChosenColour);
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(level);
});


$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

function checkAnswer(currentLevel){
  if (gamePattern[currentLevel-1]===userClickedPattern){
    console.log("correct");
    console.log("userClickedPattern " + userClickedPattern);
    console.log("gamePattern " + gamePattern);
    if(userClickedPattern.length===level){
      userClickedPattern =[];
      nextSequence();
    }
  }else{
    console.log("correct");
  }
  
  
}

function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
   audio.play();
}


function animatePress(currentColour){
   $("."+currentColour).addClass("pressed");
   setInterval(function(){$("."+currentColour).removeClass("pressed");}, 100);
}
